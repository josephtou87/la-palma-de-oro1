'use client' // ¡Añade esta línea!

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <div className="relative h-[80vh] flex items-center justify-center">
      <Image
        src="/images/hero-bg.jpg"
        alt="Sombrero artesanal"
        fill
        className="object-cover brightness-50"
        priority
      />
      <div className="relative z-10 text-center text-white px-4">
        <motion.h1 
          className="text-5xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          La Palma de Oro
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Tradición y calidad en cada sombrero artesanal
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link
            href="/productos"
            className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 rounded-full text-lg transition-colors"
          >
            Ver Catálogo
          </Link>
        </motion.div>
      </div>
    </div>
  )
}