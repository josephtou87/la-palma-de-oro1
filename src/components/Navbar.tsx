'use client' // ¡Añade esta línea!

import Link from 'next/link'
import { ShoppingCartIcon, Bars3Icon, XMarkIcon, SunIcon, MoonIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { useCart } from '@/context/CartContext'
import { useState, useRef, useEffect } from 'react'
import { useTheme } from '@/context/ThemeContext'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'
import { useRouter } from 'next/navigation'

export default function Navbar() {
  const { totalItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const [search, setSearch] = useState('');
  const [showSearchInput, setShowSearchInput] = useState(false);
  const router = useRouter();
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value as 'es' | 'en' | 'zh');
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) {
      router.push(`/search?query=${search}`);
      setSearch('');
      setShowSearchInput(false);
    }
  };

  useEffect(() => {
    if (showSearchInput && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [showSearchInput]);

  const verProductosText =
    language === 'es'
      ? 'Ver Productos'
      : language === 'en'
      ? 'View Products'
      : '查看产品';

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md dark:shadow-lg relative">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo + branding */}
          <div className="flex items-center">
            <Image
              src="/logo.png"
              alt="La Palma de Oro Logo"
              width={96}
              height={96}
              className="h-12 w-12 sm:h-16 sm:w-16 md:h-24 md:w-24 mr-1 sm:mr-2 md:mr-3"
              priority
            />
            <div className="flex flex-col justify-center">
              <span className="text-lg sm:text-xl md:text-2xl font-bold text-yellow-800 dark:text-yellow-400 leading-tight">
                La Palma de Oro
              </span>
              <span className="text-xs text-gray-600 dark:text-gray-400 leading-tight hidden sm:block">
                {language === 'es'
                  ? 'Elegancia y tradición en cada sombrero. Descubre nuestra colección artesanal.'
                  : language === 'en'
                  ? 'Elegance and tradition in every hat. Discover our artisanal collection.'
                  : '每一顶帽子都彰显优雅与传统。探索我们的手工艺系列。'}
              </span>
            </div>
          </div>

          {/* Desktop nav links */}
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

          {/* Right section: theme, lang, cart, search, menu */}
          <div className="flex items-center ml-auto space-x-1 sm:space-x-2">
            {/* Toggle theme */}
            <button
              onClick={toggleTheme}
              className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <MoonIcon className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700 dark:text-gray-300" />
              ) : (
                <SunIcon className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-500 dark:text-yellow-300" />
              )}
            </button>

            {/* Language selector */}
            <div className="flex items-center">
              <span className="font-semibold text-sm text-gray-700 dark:text-gray-300 mr-1 hidden sm:inline">
                {language === 'es' ? 'Idiomas:' : language === 'en' ? 'Languages:' : '语言:'}
              </span>
              <select
                value={language}
                onChange={handleLanguageChange}
                className="border rounded px-1 py-0.5 text-xs bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-600"
              >
                <option value="es">ES</option>
                <option value="en">EN</option>
                <option value="zh">ZH</option>
              </select>
            </div>

            {/* Cart */}
            <Link
              href="/carrito"
              className="flex items-center text-gray-700 hover:text-yellow-600 dark:text-gray-300 dark:hover:text-yellow-400"
            >
              <div className="relative">
                <ShoppingCartIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-yellow-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </div>
              <span className="ml-2 hidden md:inline">
                {language === 'es' ? 'Carrito' : language === 'en' ? 'Cart' : '购物车'}
              </span>
            </Link>

            {/* Search */}
            <div className="relative flex items-center">
              {showSearchInput && (
                <form
                  onSubmit={handleSearch}
                  className="flex items-center border rounded px-1 py-0.5 bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600"
                >
                  <input
                    ref={searchInputRef}
                    type="text"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    placeholder={
                      language === 'es'
                        ? "Buscar..."
                        : language === 'en'
                        ? "Search..."
                        : "搜索..."
                    }
                    className="bg-transparent outline-none px-1 text-sm w-20 sm:w-24 md:w-48 text-gray-900 dark:text-gray-100"
                  />
                  <button type="submit" className="text-amber-700 dark:text-amber-300 p-1">
                    <MagnifyingGlassIcon className="h-5 w-5" />
                  </button>
                </form>
              )}
              <button
                type="button"
                className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                aria-label={language === 'es' ? "Buscar" : language === 'en' ? "Search" : "搜索"}
                onClick={() => setShowSearchInput(!showSearchInput)}
              >
                <MagnifyingGlassIcon className="h-5 w-5 sm:h-6 sm:w-6 text-amber-700 dark:text-amber-300" />
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-gray-700 dark:text-gray-300"
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

        {/* Mobile nav */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t dark:border-gray-700 px-4">
            <div className="flex flex-col space-y-3">
              <Link href="/" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-yellow-600 py-1.5 w-full dark:text-gray-300 dark:hover:text-yellow-400">
                {language === 'es' ? 'Inicio' : language === 'en' ? 'Home' : '首页'}
              </Link>
              <Link href="/productos" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-yellow-600 py-1.5 w-full dark:text-gray-300 dark:hover:text-yellow-400">
                {language === 'es' ? 'Productos' : language === 'en' ? 'Products' : '产品'}
              </Link>
              <Link href="/nosotros" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-yellow-600 py-1.5 w-full dark:text-gray-300 dark:hover:text-yellow-400">
                {language === 'es' ? 'Nosotros' : language === 'en' ? 'About Us' : '关于我们'}
              </Link>
              <Link href="/contacto" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-yellow-600 py-1.5 w-full dark:text-gray-300 dark:hover:text-yellow-400">
                {language === 'es' ? 'Contacto' : language === 'en' ? 'Contact' : '联系'}
              </Link>
              <Link href="/carrito" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-yellow-600 py-1.5 w-full dark:text-gray-300 dark:hover:text-yellow-400">
                {language === 'es' ? 'Carrito' : language === 'en' ? 'Cart' : '购物车'}
              </Link>

              {/* Language selector mobile */}
              <div className="flex items-center mt-3 w-full">
                <span className="font-semibold text-sm text-gray-700 dark:text-gray-300 mr-2">
                  {language === 'es' ? 'Idiomas:' : language === 'en' ? 'Languages:' : '语言:'}
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

              {/* Search mobile */}
              <form
                onSubmit={handleSearch}
                className="flex items-center border rounded px-2 py-1 bg-gray-100 dark:bg-gray-800 mt-3 w-full border-gray-300 dark:border-gray-600"
              >
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
