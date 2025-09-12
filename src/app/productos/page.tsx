'use client'

import { products, Product } from '@/lib/data' // Asegúrate de importar Product
import Image from 'next/image'
import Link from 'next/link'
import { useCart } from '@/context/CartContext'
import { useState, useMemo } from 'react'
import ProductQuickViewModal from '@/components/ProductQuickViewModal' // Importa el nuevo modal

export default function ProductsPage() {
  const { addItem } = useCart()
  const [selectedCategory, setSelectedCategory] = useState('Todos')
  const [isModalOpen, setIsModalOpen] = useState(false) // Estado para controlar la apertura del modal
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null) // Estado para el producto seleccionado

  // Función para abrir el modal con un producto específico
  const openQuickViewModal = (product: Product) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  // Función para cerrar el modal
  const closeQuickViewModal = () => {
    setIsModalOpen(false)
    setSelectedProduct(null)
  }

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
  }, [selectedCategory]) // 'products' removed from dependency array

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
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-[1.02] group">
            {/* Hacemos la imagen clickeable para abrir el modal */}
            <div className="relative h-64 cursor-pointer" onClick={() => openQuickViewModal(product)}>
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
              {/* Botón de Vista Rápida que aparece al pasar el ratón */}
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // Evita que el clic se propague al div padre y abra el Link
                    openQuickViewModal(product);
                  }}
                  className="bg-white text-amber-950 px-4 py-2 rounded-full font-semibold hover:bg-gray-200 transition-colors"
                >
                  Vista Rápida
                </button>
              </div>
            </div>

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

      {/* Renderiza el modal de Vista Rápida */}
      <ProductQuickViewModal
        isOpen={isModalOpen}
        onClose={closeQuickViewModal}
        product={selectedProduct}
      />
    </div>
  )
}