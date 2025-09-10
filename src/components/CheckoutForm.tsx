'use client' // Asegúrate de que esta línea esté al principio

import { useState } from 'react'
import { useCart } from '@/context/CartContext'
import toast from 'react-hot-toast'

export default function CheckoutForm({ onClose }: { onClose: () => void }) {
  const { totalPrice, clearCart } = useCart()
  const [paymentMethod, setPaymentMethod] = useState<string | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)

  const handlePayment = async () => {
    if (!paymentMethod) {
      toast.error('Por favor selecciona un método de pago')
      return
    }

    setIsProcessing(true)

    // Simulamos el procesamiento del pago
    setTimeout(() => {
      toast.success('¡Pago procesado con éxito! Tu pedido está en camino.')
      clearCart()
      onClose()
      setIsProcessing(false)
    }, 2000)
  }

  return (
    <div className="bg-white p-8 rounded-lg max-w-md w-full">
      <h2 className="text-2xl font-bold mb-6">Finalizar Compra</h2>
      
      <div className="mb-6">
        <h3 className="font-medium mb-3">Selecciona un método de pago</h3>
        <div className="space-y-3">
          <label className="flex items-center p-3 border rounded-md cursor-pointer hover:bg-gray-50">
            <input
              type="radio"
              name="paymentMethod"
              value="card"
              checked={paymentMethod === 'card'}
              onChange={() => setPaymentMethod('card')}
              className="mr-3"
            />
            <span>Tarjeta de Crédito/Débito</span>
          </label>
          <label className="flex items-center p-3 border rounded-md cursor-pointer hover:bg-gray-50">
            <input
              type="radio"
              name="paymentMethod"
              value="paypal"
              checked={paymentMethod === 'paypal'}
              onChange={() => setPaymentMethod('paypal')}
              className="mr-3"
            />
            <span>PayPal</span>
          </label>
          <label className="flex items-center p-3 border rounded-md cursor-pointer hover:bg-gray-50">
            <input
              type="radio"
              name="paymentMethod"
              value="transfer"
              checked={paymentMethod === 'transfer'}
              onChange={() => setPaymentMethod('transfer')}
              className="mr-3"
            />
            <span>Transferencia Bancaria</span>
          </label>
        </div>
      </div>

      <div className="text-right mb-6">
        <p className="text-xl font-bold">Total a pagar: ${totalPrice.toFixed(2)}</p>
      </div>

      <div className="flex justify-end space-x-4">
        <button
          onClick={onClose}
          className="px-6 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors"
          disabled={isProcessing}
        >
          Cancelar
        </button>
        <button
          onClick={handlePayment}
          className="px-6 py-2 rounded-md bg-yellow-600 text-white hover:bg-yellow-700 transition-colors"
          disabled={isProcessing}
        >
          {isProcessing ? 'Procesando...' : 'Pagar Ahora'}
        </button>
      </div>
    </div>
  )
}