import { products } from '@/lib/data'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import AddToCartButton from '@/components/AddToCartButton'

interface ProductPageProps {
  params: {
    id: string
  }
}

'use client' // Añade esta línea

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find(p => p.id === params.id)
  
  if (!product) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Imagen del producto */}
        <div className="relative h-96 md:h-[500px]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover rounded-lg"
          />
        </div>
        
        {/* Información del producto */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl font-bold text-yellow-700 mb-4">${product.price}</p>
          <div className="border-t border-b py-4 my-4">
            <p className="text-gray-700">{product.description}</p>
          </div>
          
          <div className="mt-8">
            <AddToCartButton product={product} />
          </div>
          
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-2">Detalles del producto</h2>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Material: Palma natural</li>
              <li>Hecho a mano por artesanos mexicanos</li>
              <li>Envío a todo México</li>
              <li>Garantía de calidad</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

'use client' // ¡Añade esta línea!

import { useState, useEffect } from 'react'
import { products } from '@/lib/data' // Solo una importación de 'products'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { useCart } from '@/context/CartContext'
import { Product } from '@/types/product' // Importa el tipo Product

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
      // Si el producto no se encuentra, redirige a la página 404
      notFound() 
    }
  }, [id])

  if (!product) {
    // Muestra un estado de carga o simplemente null mientras se busca el producto
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