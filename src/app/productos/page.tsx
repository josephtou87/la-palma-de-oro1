'use client' // ¡Añade esta línea!

import { useState } from 'react'
import ProductGrid from '@/components/ProductGrid'
import ProductFilters from '@/components/ProductFilters'
import { products } from '@/lib/data'
import { Product } from '@/types/product' // Importa el tipo Product

export default function ProductosPage() {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products)

  const handleFilterChange = (filters: { categories: string[]; maxPrice: number }) => {
    let newFilteredProducts = products

    // Filtrar por categoría
    if (filters.categories.length > 0) {
      newFilteredProducts = newFilteredProducts.filter(product => 
        filters.categories.includes(product.category)
      )
    }

    // Filtrar por precio máximo
    newFilteredProducts = newFilteredProducts.filter(product => 
      product.price <= filters.maxPrice
    )

    setFilteredProducts(newFilteredProducts)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Nuestros Sombreros</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-64">
          <ProductFilters onFilterChange={handleFilterChange} />
        </aside>
        <main className="flex-1">
          <ProductGrid products={filteredProducts} />
        </main>
      </div>
    </div>
  )
}