'use client' // ¡Añade esta línea!

import { products } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'
import { useCart } from '@/context/CartContext'

export default function FeaturedProducts() {
  const featuredProducts = products.filter(product => product.featured)
  const { addItem } = useCart()

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-amber-950">Productos Destacados</h2> {/* Título marrón oscuro */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden"> {/* Puedes mantener bg-white o cambiar a bg-amber-50 */}
              <Link href={`/productos/${product.id}`}>
                <div className="relative h-64">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </Link>
              <div className="p-4">
                <Link href={`/productos/${product.id}`}>
                  <h3 className="text-xl font-semibold mb-2 text-amber-950">{product.name}</h3> {/* Título de producto marrón oscuro */}
                </Link>
                <p className="text-stone-700 mb-4">{product.description}</p> {/* Texto de descripción marrón */}
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-yellow-700">${product.price}</span> {/* Precio dorado */}
                  <button
                    onClick={() => addItem(product, 1)}
                    className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-md transition-colors" // Botón dorado
                  >
                    Agregar al Carrito
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}