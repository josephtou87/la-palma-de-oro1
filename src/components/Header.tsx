'use client'

import Link from 'next/link'
import Image from 'next/image'
import Navbar from './Navbar'
import ThemeToggle from './ThemeToggle'
import { motion } from 'framer-motion'

export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-900 shadow-md p-4 flex items-center justify-between">
      <div className="flex items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="La Palma de Oro Logo"
            width={80}
            height={80}
            className="mr-4"
          />
          <div>
            <motion.h1
              className="text-3xl md:text-4xl font-extrabold text-amber-950 dark:text-amber-50 leading-tight"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
              }}
            >
              La Palma de Oro
            </motion.h1>
            <motion.p
              className="text-gray-700 dark:text-gray-300 text-sm md:text-base mt-1"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: -10 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.2 } },
              }}
            >
              Elegancia y tradición en cada sombrero. Descubre nuestra colección artesanal.
            </motion.p>
          </div>
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <Navbar />
        <ThemeToggle />
      </div>
    </header>
  )
}