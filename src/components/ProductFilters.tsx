'use client' // ¡Añade esta línea!

import { useState } from 'react'

interface ProductFiltersProps {
  onFilterChange: (filters: {
    categories: string[];
    maxPrice: number;
  }) => void;
}

export default function ProductFilters({ onFilterChange }: ProductFiltersProps) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [maxPrice, setMaxPrice] = useState<number>(2000)
  
  const categories = ['Clásicos', 'Vaqueros', 'Playa']
  
  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev => {
      const newCategories = prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
      
      onFilterChange({ categories: newCategories, maxPrice })
      return newCategories
    })
  }
  
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const price = parseInt(e.target.value)
    setMaxPrice(price)
    onFilterChange({ categories: selectedCategories, maxPrice: price })
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Filtros</h2>
      
      <div className="space-y-4">
        <div>
          <h3 className="font-medium mb-2">Categorías</h3>
          <div className="space-y-2">
            {categories.map((categoria) => (
              <label key={categoria} className="flex items-center">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(categoria)}
                  onChange={() => handleCategoryChange(categoria)}
                  className="rounded border-gray-300 text-yellow-600 focus:ring-yellow-500"
                />
                <span className="ml-2">{categoria}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-2">Precio máximo: ${maxPrice}</h3>
          <div className="space-y-2">
            <input
              type="range"
              min="0"
              max="2000"
              value={maxPrice}
              onChange={handlePriceChange}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-gray-600">
              <span>$0</span>
              <span>$2,000</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}