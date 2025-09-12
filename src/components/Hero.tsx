'use client' // ¡Añade esta línea!

import Link from 'next/link' // Asegúrate de que Link esté importado
// import Image from 'next/image' // Remove this line
// import { motion } from 'framer-motion' // Remove this line

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-white p-8">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          La Palma de Oro <br /> Tradición y Calidad en cada Sombrero {/* Texto principal */}
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Descubre la elegancia y el arte de nuestros sombreros artesanales.
        </p>
        <Link href="/productos" className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300">
          Ver Catálogo {/* Botón que lleva a /productos */}
        </Link>
      </div>
    </section>
  )
}