'use client'

import Link from 'next/link'
import Navbar from './Navbar'

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-yellow-700">
          La Palma de Oro
        </Link>
        <Navbar />
      </div>
    </header>
  )
}