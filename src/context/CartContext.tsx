'use client' // ¡Añade esta línea!

import { Product } from '@/types/product'
import { createContext, useContext, useState, ReactNode, useEffect } from 'react'
import toast from 'react-hot-toast'

interface CartItem {
  product: Product
  quantity: number
}

interface CartContextType {
  items: CartItem[]
  addItem: (product: Product, quantity: number) => void
  removeItem: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  totalItems: number
  totalPrice: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isLoaded, setIsLoaded] = useState(false)

  // Cargar carrito desde localStorage al iniciar
  useEffect(() => {
    const savedCart = localStorage.getItem('cart')
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart))
      } catch (error) {
        console.error('Error al cargar el carrito:', error)
      }
    }
    setIsLoaded(true)
  }, [])

  // Guardar carrito en localStorage cuando cambia
  useEffect(() => {
    if (isLoaded) { // Solo guardar después de que el carrito inicial se haya cargado
      localStorage.setItem('cart', JSON.stringify(items))
    }
  }, [items, isLoaded])

  const addItem = (product: Product, quantity: number) => {
    setItems(prevItems => {
      const existingItem = prevItems.find(item => item.product.id === product.id)
      
      if (existingItem) {
        return prevItems.map(item => 
          item.product.id === product.id 
            ? { ...item, quantity: item.quantity + quantity } 
            : item
        )
      } else {
        return [...prevItems, { product, quantity }]
      }
    })
    
    toast.success(`${product.name} agregado al carrito`)
  }

  const removeItem = (productId: string) => {
    setItems(prevItems => prevItems.filter(item => item.product.id !== productId))
    toast.success('Producto eliminado del carrito')
  }

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId)
      return
    }
    
    setItems(prevItems => 
      prevItems.map(item => 
        item.product.id === productId 
          ? { ...item, quantity } 
          : item
      )
    )
  }

  const clearCart = () => {
    setItems([])
    toast.success('Carrito vaciado')
  }

  const totalItems = items.reduce((total, item) => total + item.quantity, 0)
  
  const totalPrice = items.reduce(
    (total, item) => total + item.product.price * item.quantity, 
    0
  )

  return (
    <CartContext.Provider value={{
      items,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      totalItems,
      totalPrice
    }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart debe usarse dentro de un CartProvider')
  }
  return context
}