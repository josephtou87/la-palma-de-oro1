'use client' // This line must be the FIRST line in the file, and only appear ONCE.

import { useState, useEffect } from 'react'
import { products } from '@/lib/data' // Only one import for 'products'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { useCart } from '@/context/CartContext'
import { Product } from '@/types/product' // Import the Product type

interface ProductDetailPageProps {
  params: {
    id: string
  }
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { id } = params
  const [product, setProduct] = useState<Product | undefined>(undefined)
  const [quantity, setQuantity] = useState(1)
  const { addItem } = useCart()

  useEffect(() => {
    const foundProduct = products.find(p => p.id === id)
    if (foundProduct) {
      setProduct(foundProduct)
    } else {
      // If the product is not found, redirect to the 404 page
      notFound() 
    }
  }, [id])

  if (!product) {
    // Show a loading state or simply null while the product is being fetched
    return null 
  }

  const handleAddToCart = () => {
    addItem(product, quantity)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8 bg-white p-6 rounded-lg shadow-md">
        <div className="relative w-full md:w-1/2 h-96">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-600 text-lg mb-6">{product.description}</p>
          <p className="text-yellow-700 text-3xl font-bold mb-6">${product.price.toFixed(2)}</p>

          <div className="flex items-center mb-6">
            <label htmlFor="quantity" className="mr-4 text-lg">Cantidad:</label>
            <input
              type="number"
              id="quantity"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              className="w-20 p-2 border border-gray-300 rounded-md text-center"
            />
          </div>

          <button
            onClick={handleAddToCart}
            className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 rounded-md text-lg transition-colors"
          >
            Agregar al Carrito
          </button>
        </div>
      </div>
    </div>
  )
}