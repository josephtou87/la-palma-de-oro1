'use client' // Añade esta línea

import { Product } from '@/types/product'
import { useState } from 'react'
import { useCart } from '@/context/CartContext'

interface AddToCartButtonProps {
  product: Product
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const [quantity, setQuantity] = useState(1)
  const { addItem } = useCart()

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }

  const handleAddToCart = () => {
    addItem(product, quantity)
  }

  return (
    <div>
      <div className="flex items-center mb-4">
        <button 
          onClick={decreaseQuantity}
          className="bg-gray-200 px-3 py-1 rounded-l"
        >
          -
        </button>
        <span className="bg-gray-100 px-4 py-1">{quantity}</span>
        <button 
          onClick={increaseQuantity}
          className="bg-gray-200 px-3 py-1 rounded-r"
        >
          +
        </button>
      </div>
      
      <button
        onClick={handleAddToCart}
        className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-3 px-6 rounded-md transition-colors"
      >
        Agregar al Carrito
      </button>
    </div>
  )
}