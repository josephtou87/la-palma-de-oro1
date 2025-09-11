'use client'

import Link from 'next/link'
import Image from 'next/image' // Importa el componente Image
import Navbar from './Navbar'

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2"> {/* Añade flexbox para alinear */}
          <Image
            src="/logo.png" // Ruta a tu logo en la carpeta public
            alt="La Palma de Oro Logo"
            width={40} // Ajusta el tamaño según necesites
            height={40} // Ajusta el tamaño según necesites
            className="rounded-full" // Si tu logo es circular
          />
          <span className="text-2xl font-bold text-yellow-700">
            La Palma de Oro
          </span>
        </Link>
        <Navbar />
      </div>
    </header>
  )
}