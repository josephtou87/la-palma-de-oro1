import { products } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'
import { useCart } from '@/context/CartContext' // Necesario si quieres añadir botones de "Agregar al Carrito"
import { useState, useMemo } from 'react' // Importa useState y useMemo

export default function ProductsPage() {
  const { addItem } = useCart() // Hook para añadir al carrito
  const [selectedCategory, setSelectedCategory] = useState('Todos') // Nuevo estado para el filtro de categoría

  // Obtener todas las categorías únicas
  const categories = useMemo(() => {
    const allCategories = products.map(p => p.category).filter(Boolean) as string[]
    return ['Todos', ...new Set(allCategories)]
  }, [])

  // Filtrar productos basados en la categoría seleccionada
  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'Todos') {
      return products
    }
    return products.filter(product => product.category === selectedCategory)
  }, [selectedCategory, products])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12 text-amber-950 dark:text-amber-50">Nuestro Catálogo de Productos</h1>

      {/* Sección de Filtros */}
      <div className="mb-8 flex flex-wrap justify-center gap-4">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full text-lg font-semibold transition-colors duration-300
              ${selectedCategory === category
                ? 'bg-yellow-600 text-white shadow-md'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProducts.map((product) => ( // Usa filteredProducts
          <div key={product.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-[1.02]">
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
                <h2 className="text-xl font-semibold mb-2 text-amber-950 dark:text-amber-50">{product.name}</h2>
              </Link>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{product.description}</p>
              <p className="text-gray-500 dark:text-gray-300 text-xs mb-4">Categoría: {product.category}</p>
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