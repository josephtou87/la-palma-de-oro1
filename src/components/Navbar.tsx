'use client' // ¡Añade esta línea!

import Link from 'next/link'
import { ShoppingCartIcon, Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline'
import { useCart } from '@/context/CartContext'
import { useState } from 'react'
import { useTheme } from '@/context/ThemeContext' // Usa el hook useTheme
import Image from 'next/image';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { useLanguage } from '@/context/LanguageContext';

export default function Navbar() {
  const { totalItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const [search, setSearch] = useState('');

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value as 'es' | 'en' | 'zh');
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Searching for: ${search}`);
  };

  return (
    <nav className="bg-white shadow-md relative">
      {/* Language Selector floating top-right */}
      <div className="absolute top-0 right-0 mt-2 mr-4 flex items-center space-x-2 z-50">
        <span className="font-semibold text-sm text-gray-700">Idiomas:</span>
        <select
          value={language}
          onChange={handleLanguageChange}
          className="border rounded px-2 py-1 text-sm"
        >
          <option value="es">Español</option>
          <option value="en">English</option>
          <option value="zh">中文</option>
        </select>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo and text */}
          <Link href="/" className="flex items-center">
            <div className="flex items-center">
              <Image
                src="/logo.png"
                alt="La Palma de Oro Logo"
                width={48}
                height={48}
                className="h-12 w-12 mr-3"
                priority
              />
              <div className="flex flex-col justify-center">
                <span className="text-2xl font-bold text-yellow-800 leading-tight">La Palma de Oro</span>
                <span className="text-xs text-gray-600 leading-tight">
                  {language === 'es'
                    ? 'Elegancia y tradición en cada sombrero. Descubre nuestra colección artesanal.'
                    : language === 'en'
                    ? 'Elegance and tradition in every hat. Discover our handcrafted collection.'
                    : '每一顶帽子都彰显优雅与传统。探索我们的手工艺系列。'}
                </span>
              </div>
            </div>
          </Link>
          {/* Enlaces de navegación - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-yellow-600" style={{ minWidth: 90, textAlign: 'center' }}>
              {language === 'es' ? 'Inicio' : language === 'en' ? 'Home' : '首页'}
            </Link>
            <Link href="/productos" className="text-gray-700 hover:text-yellow-600" style={{ minWidth: 110, textAlign: 'center' }}>
              {language === 'es' ? 'Productos' : language === 'en' ? 'Products' : '产品'}
            </Link>
            <Link href="/nosotros" className="text-gray-700 hover:text-yellow-600" style={{ minWidth: 110, textAlign: 'center' }}>
              {language === 'es' ? 'Nosotros' : language === 'en' ? 'About Us' : '关于我们'}
            </Link>
            <Link href="/contacto" className="text-gray-700 hover:text-yellow-600" style={{ minWidth: 110, textAlign: 'center' }}>
              {language === 'es' ? 'Contacto' : language === 'en' ? 'Contact' : '联系'}
            </Link>
          </div>
          {/* Carrito de compras y buscador */}
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
              className="flex items-center text-gray-700 hover:text-yellow-600 mr-2 md:mr-0"
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
            {/* Search Bar */}
            <form onSubmit={handleSearch} className="flex items-center border rounded px-2 py-1 bg-gray-100 dark:bg-gray-800">
              <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder={
                  language === 'es'
                    ? "Buscar productos..."
                    : language === 'en'
                    ? "Search products..."
                    : "搜索产品..."
                }
                className="bg-transparent outline-none px-2 text-sm"
              />
              <button type="submit" className="text-amber-700 dark:text-amber-300">
                <MagnifyingGlassIcon className="h-5 w-5" />
              </button>
            </form>
            {/* Botón de menú móvil */}
            <button 
              className="md:hidden text-gray-700 ml-2"
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
              {/* Language Selector for mobile */}
              <select
                value={language}
                onChange={handleLanguageChange}
                className="border rounded px-2 py-1 text-sm mt-2"
              >
                <option value="es">Español</option>
                <option value="en">English</option>
                <option value="zh">中文</option>
              </select>
              {/* Search Bar for mobile */}
              <form onSubmit={handleSearch} className="flex items-center border rounded px-2 py-1 bg-gray-100 dark:bg-gray-800 mt-2">
                <input
                  type="text"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  placeholder={
                    language === 'es'
                      ? "Buscar productos..."
                      : language === 'en'
                      ? "Search products..."
                      : "搜索产品..."
                  }
                  className="bg-transparent outline-none px-2 text-sm"
                />
                <button type="submit" className="text-amber-700 dark:text-amber-300">
                  <MagnifyingGlassIcon className="h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}