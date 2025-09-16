'use client' // ¡Añade esta línea!

import Link from 'next/link'
import { ShoppingCartIcon, Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline' // Reintroducidas SunIcon y MoonIcon
import { useCart } from '@/context/CartContext'
import { useState } from 'react'
import { useTheme } from '@/context/ThemeContext' // Reintroducida la importación de useTheme
import Image from 'next/image';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { useLanguage } from '@/context/LanguageContext';
import { useRouter } from 'next/navigation'; // Importa useRouter para la navegación
import { useRef, useEffect } from 'react'; // Importar useRef y useEffect

export default function Navbar() {
  const { totalItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme(); // Reintroducida la declaración de theme y toggleTheme
  const { language, setLanguage } = useLanguage();
  const [search, setSearch] = useState('');
  const [showSearchInput, setShowSearchInput] = useState(false); // Nuevo estado para el input de búsqueda
  const router = useRouter(); // Inicializa useRouter
  const searchInputRef = useRef<HTMLInputElement>(null); // Crear una ref para el input de búsqueda

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value as 'es' | 'en' | 'zh');
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) {
      router.push(`/search?query=${search}`); // Redirige a la página de búsqueda
      setSearch(''); // Limpia el campo de búsqueda
      setShowSearchInput(false); // Oculta el input después de buscar
    }
  };

  // Efecto para enfocar el input cuando aparece
  useEffect(() => {
    if (showSearchInput && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [showSearchInput]);

  // Language options for "Ver Productos" button
  const verProductosText = language === 'es'
    ? 'Ver Productos'
    : language === 'en'
    ? 'View Products'
    : '查看产品';

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md dark:shadow-lg relative"> {/* Ajustado para modo oscuro */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 sm:h-20"> {/* Ajustada la altura para móvil */}
          {/* Branding block: logo + text, left-aligned and vertically centered */}
          <div className="flex items-center">
            <Image
              src="/logo.png"
              alt="La Palma de Oro Logo"
              width={96}
              height={96}
              className="h-16 w-16 sm:h-24 sm:w-24 mr-2 sm:mr-3" // Logo más pequeño en móvil
              priority
            />
            <div className="flex flex-col justify-center">
              <span className="text-xl sm:text-2xl font-bold text-yellow-800 dark:text-yellow-400 leading-tight">La Palma de Oro</span> {/* Texto del logo más pequeño en móvil */}
              <span className="text-xs text-gray-600 dark:text-gray-400 leading-tight">
                {language === 'es'
                  ? 'Elegancia y tradición en cada sombrero. Descubre nuestra colección artesanal.'
                  : language === 'en'
                  ? 'Elegance and tradition in every hat. Discover our handcrafted collection.'
                  : '每一顶帽子都彰显优雅与传统。探索我们的手工艺系列。'}
              </span>
            </div>
          </div>
          {/* Enlaces de navegación - Desktop */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-700 hover:text-yellow-600 dark:text-gray-300 dark:hover:text-yellow-400">
              {language === 'es' ? 'Inicio' : language === 'en' ? 'Home' : '首页'}
            </Link>
            <Link href="/productos" className="text-gray-700 hover:text-yellow-600 dark:text-gray-300 dark:hover:text-yellow-400">
              {language === 'es' ? 'Productos' : language === 'en' ? 'Products' : '产品'}
            </Link>
            <Link href="/nosotros" className="text-gray-700 hover:text-yellow-600 dark:text-gray-300 dark:hover:text-yellow-400">
              {language === 'es' ? 'Nosotros' : language === 'en' ? 'About Us' : '关于我们'}
            </Link>
            <Link href="/contacto" className="text-gray-700 hover:text-yellow-600 dark:text-gray-300 dark:hover:text-yellow-400">
              {language === 'es' ? 'Contacto' : language === 'en' ? 'Contact' : '联系'}
            </Link>
          </div>
          {/* Cart, search icon, and language selector grouped to the right */}
          <div className="flex items-center ml-auto">
            {/* Botón de alternar tema */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 mr-1 sm:mr-2" // Margen ajustado para móvil
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <MoonIcon className="h-6 w-6 text-gray-700 dark:text-gray-300" />
              ) : (
                <SunIcon className="h-6 w-6 text-yellow-500 dark:text-yellow-300" />
              )}
            </button>

            {/* Selector de idioma */}
            <div className="flex items-center mr-2 sm:mr-4"> {/* Margen ajustado para móvil */}
              <span className="font-semibold text-sm text-gray-700 dark:text-gray-300 mr-1 sm:mr-2"> {/* Margen ajustado para móvil */}
                {language === 'es' ? 'Idiomas:' : language === 'en' ? 'Languages:' : '语言:'}
              </span>
              <select
                value={language}
                onChange={handleLanguageChange}
                className="border rounded px-1 py-0.5 text-xs sm:px-2 sm:py-1 sm:text-sm bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-600" // Tamaño y padding ajustados para móvil
              >
                <option value="es">Español</option>
                <option value="en">English</option>
                <option value="zh">中文</option>
              </select>
            </div>

            {/* Carrito */}
            <Link
              href="/carrito"
              className="flex items-center text-gray-700 hover:text-yellow-600 dark:text-gray-300 dark:hover:text-yellow-400 mr-1 sm:mr-2 md:mr-0" // Margen ajustado para móvil
            >
              <div className="relative">
                <ShoppingCartIcon className="h-6 w-6" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-yellow-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </div>
              <span className="ml-2 hidden md:inline">
                {language === 'es' ? 'Carrito' : language === 'en' ? 'Cart' : '购物车'}
              </span>
            </Link>

            {/* Barra de búsqueda */}
            <div className="relative flex items-center ml-1 sm:ml-2"> {/* Margen ajustado para móvil */}
              {showSearchInput && (
                <form onSubmit={handleSearch} className="flex items-center border rounded px-1 py-0.5 sm:px-2 sm:py-1 bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600"> {/* Padding ajustado para móvil */}
                  <input
                    ref={searchInputRef}
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
                    className="bg-transparent outline-none px-1 text-sm w-24 sm:w-32 md:w-48 text-gray-900 dark:text-gray-100" // Ancho y padding ajustados para móvil
                  />
                  <button type="submit" className="text-amber-700 dark:text-amber-300 p-1">
                    <MagnifyingGlassIcon className="h-5 w-5" />
                  </button>
                </form>
              )}
              {/* Botón para mostrar/ocultar la búsqueda */}
              <button
                type="button"
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                aria-label={language === 'es' ? "Buscar" : language === 'en' ? "Search" : "搜索"}
                onClick={() => setShowSearchInput(!showSearchInput)}
              >
                <MagnifyingGlassIcon className="h-6 w-6 text-amber-700 dark:text-amber-300" />
              </button>
            </div>

            {/* Botón de menú móvil */}
            <button
              className="md:hidden text-gray-700 dark:text-gray-300 ml-1 sm:ml-2" // Margen ajustado para móvil
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
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t dark:border-gray-700 px-4">
            <div className="flex flex-col space-y-3">
              <Link
                href="/"
                className="block text-gray-700 hover:text-yellow-600 py-1.5 w-full dark:text-gray-300 dark:hover:text-yellow-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link
                href="/productos"
                className="block text-gray-700 hover:text-yellow-600 py-1.5 w-full dark:text-gray-300 dark:hover:text-yellow-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Productos
              </Link>
              <Link
                href="/nosotros"
                className="block text-gray-700 hover:text-yellow-600 py-1.5 w-full dark:text-gray-300 dark:hover:text-yellow-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Nosotros
              </Link>
              <Link
                href="/contacto"
                className="block text-gray-700 hover:text-yellow-600 py-1.5 w-full dark:text-gray-300 dark:hover:text-yellow-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </Link>
              {/* Carrito para móvil */}
              <Link
                href="/carrito"
                className="block text-gray-700 hover:text-yellow-600 py-1.5 w-full dark:text-gray-300 dark:hover:text-yellow-400"
                onClick={() => setIsMenuOpen(false)}
              >
                {language === 'es' ? 'Carrito' : language === 'en' ? 'Cart' : '购物车'}
              </Link>
              {/* Language Selector for mobile */}
              <div className="flex items-center mt-3 w-full">
                <span className="font-semibold text-sm text-gray-700 dark:text-gray-300 mr-2">
                  {language === 'es' ? 'Idiomas:' : language === 'en'
                  ? 'Languages:' : '语言:'}
                </span>
                <select
                  value={language}
                  onChange={handleLanguageChange}
                  className="border rounded px-2 py-1 text-sm flex-grow bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-600"
                >
                  <option value="es">Español</option>
                  <option value="en">English</option>
                  <option value="zh">中文</option>
                </select>
              </div>
              {/* Search Bar for mobile */}
              <form onSubmit={handleSearch} className="flex items-center border rounded px-2 py-1 bg-gray-100 dark:bg-gray-800 mt-3 w-full border-gray-300 dark:border-gray-600">
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
                  className="bg-transparent outline-none px-2 text-sm flex-grow text-gray-900 dark:text-gray-100"
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