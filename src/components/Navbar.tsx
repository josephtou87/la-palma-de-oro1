'use client' // ¡Añade esta línea!

import Link from 'next/link'
import { ShoppingCartIcon, Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline'
import { useCart } from '@/context/CartContext'
import { useState } from 'react'
import { useTheme } from '@/context/ThemeContext' // Importa useTheme

export default function Navbar() {
  const { totalItems } = useCart()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme() // Usa el hook useTheme

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo y nombre */}
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold text-yellow-800">La Palma de Oro</span>
          </Link>

          {/* Enlaces de navegación - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-yellow-600">
              Inicio
            </Link>
            <Link href="/productos" className="text-gray-700 hover:text-yellow-600">
              Productos
            </Link>
            <Link href="/nosotros" className="text-gray-700 hover:text-yellow-600">
              Nosotros
            </Link>
            <Link href="/contacto" className="text-gray-700 hover:text-yellow-600">
              Contacto
            </Link>
          </div>

          {/* Carrito de compras y botón de tema */}
          <div className="flex items-center">
            {/* Botón de alternar tema */}
            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-full hover:bg-gray-100 mr-2"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <MoonIcon className="h-6 w-6 text-gray-700" />
              ) : (
                <SunIcon className="h-6 w-6 text-yellow-500" />
              )}
            </button>

            <Link 
              href="/carrito" 
              className="flex items-center text-gray-700 hover:text-yellow-600 mr-4 md:mr-0"
            >
              <div className="relative">
                <ShoppingCartIcon className="h-6 w-6" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-yellow-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </div>
              <span className="ml-2 hidden md:inline">Carrito</span>
            </Link>
            
            {/* Botón de menú móvil */}
            <button 
              className="md:hidden text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        
        {/* Menú móvil */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-yellow-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link 
                href="/productos" 
                className="text-gray-700 hover:text-yellow-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Productos
              </Link>
              <Link 
                href="/nosotros" 
                className="text-gray-700 hover:text-yellow-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Nosotros
              </Link>
              <Link 
                href="/contacto" 
                className="text-gray-700 hover:text-yellow-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}