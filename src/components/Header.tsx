'use client'

import Link from 'next/link'
import Image from 'next/image'
import Navbar from './Navbar'

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.png"
            alt="La Palma de Oro Logo"
            width={50} // Aumentado de 40 a 50
            height={50} // Aumentado de 40 a 50
            className="rounded-full"
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