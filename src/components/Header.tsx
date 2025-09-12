'use client'

import Link from 'next/link'
import Image from 'next/image'
import Navbar from './Navbar'

export default function Header() {
  return (
    <header className="bg-amber-50 shadow-md sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-3"> {/* Aumentado space-x para más separación */}
          <Image
            src="/logo.png"
            alt="La Palma de Oro Logo"
            width={64} // Aumentado de 50 a 64 para mayor visibilidad
            height={64} // Aumentado de 50 a 64
            className="rounded-full flex-shrink-0" // Asegura que la imagen no se encoja
          />
          <span className="text-3xl font-bold text-amber-950"> {/* Texto un poco más grande para que coincida con el logo */}
            La Palma de Oro
          </span>
        </Link>
        <Navbar />
      </div>
    </header>
  )
}