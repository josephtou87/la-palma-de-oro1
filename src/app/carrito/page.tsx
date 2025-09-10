'use client' // ¡Añade esta línea!

import { useCart } from '@/context/CartContext'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import CheckoutForm from '@/components/CheckoutForm'

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalItems, totalPrice } = useCart()
  const [showCheckoutModal, setShowCheckoutModal] = useState(false)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Tu Carrito de Compras</h1>

      {items.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg shadow-md">
          <p className="text-xl text-gray-600 mb-6">Tu carrito está vacío.</p>
          <Link href="/productos" className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-md text-lg transition-colors">
            Explorar Productos
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
            {items.map(item => (
              <div key={item.product.id} className="flex items-center border-b border-gray-200 py-4 last:border-b-0">
                <div className="relative w-24 h-24 mr-4 flex-shrink-0">
                  <Image
                    src={item.product.image}
                    alt={item.product.name}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <div className="flex-grow">
                  <h2 className="text-xl font-semibold">{item.product.name}</h2>
                  <p className="text-gray-600">${item.product.price.toFixed(2)}</p>
                  <div className="flex items-center mt-2">
                    <label htmlFor={`quantity-${item.product.id}`} className="mr-2">Cantidad:</label>
                    <input
                      type="number"
                      id={`quantity-${item.product.id}`}
                      min="1"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.product.id, parseInt(e.target.value))}
                      className="w-16 p-1 border border-gray-300 rounded-md text-center"
                    />
                    <button
                      onClick={() => removeItem(item.product.id)}
                      className="ml-4 text-red-600 hover:text-red-800 transition-colors"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold">${(item.product.price * item.quantity).toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-1 bg-white p-6 rounded-lg shadow-md h-fit">
            <h2 className="text-2xl font-bold mb-4">Resumen del Pedido</h2>
            <div className="flex justify-between text-lg mb-2">
              <span>Total de artículos:</span>
              <span>{totalItems}</span>
            </div>
            <div className="flex justify-between text-xl font-bold mb-6">
              <span>Total:</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <button
              onClick={() => setShowCheckoutModal(true)}
              className="w-full bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-md text-lg transition-colors"
            >
              Proceder al Pago
            </button>
          </div>
        </div>
      )}

      {showCheckoutModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <CheckoutForm onClose={() => setShowCheckoutModal(false)} />
        </div>
      )}
    </div>
  )
}