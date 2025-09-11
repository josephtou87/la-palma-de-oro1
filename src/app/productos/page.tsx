import { products } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'
import { useCart } from '@/context/CartContext' // Necesario si quieres añadir botones de "Agregar al Carrito"

export default function ProductsPage() {
  const { addItem } = useCart() // Hook para añadir al carrito

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12">Nuestro Catálogo de Productos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
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
                <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              </Link>
              <p className="text-gray-600 text-sm mb-2">{product.description}</p>
              <p className="text-gray-500 text-xs mb-4">Categoría: {product.category}</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-yellow-700">${product.price.toFixed(2)}</span>
                <button
                  onClick={() => addItem(product, 1)}
                  className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-md transition-colors"
                >
                  Agregar al Carrito
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}