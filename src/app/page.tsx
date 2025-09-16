'use client' // ¡Añade esta línea al principio del archivo!

import Hero from '@/components/Hero'
import Link from 'next/link';
// import Image from 'next/image'; // Ya no es necesario importar Image aquí si Hero lo maneja
import { useLanguage } from '@/context/LanguageContext'; // Importa useLanguage

// Elimina la importación de FeaturedProducts
// import FeaturedProducts from '@/components/FeaturedProducts';

export default function Home() {
  const { language } = useLanguage(); // Usa el hook de idioma

  // Traducciones para el botón "Ver Productos"
  const verProductosText = language === 'es'
    ? 'Ver Productos'
    : language === 'en'
    ? 'View Products'
    : '查看产品';

  // Define las imágenes para el carrusel
  const heroImages = [
    '/images/hero-bg.jpg', // Asegúrate de que estas rutas sean correctas
    '/images/hero-bg-2.jpg', // Agrega más imágenes si tienes
    '/images/hero-bg-3.jpg',
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 md:p-24">
      {/* Sección Hero - Ahora usando el componente Hero */}
      <Hero images={heroImages}>
        <div className="relative z-10 text-white bg-black bg-opacity-50 p-8 rounded-lg max-w-2xl">
          {/* El título y la descripción ya no van aquí, se eliminaron del Hero */}
          <Link href="/productos" className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-6 rounded-full text-lg transition-colors duration-300">
            {verProductosText} {/* Usa la traducción del botón */}
          </Link>
        </div>
      </Hero>

      {/* Sección de Productos Destacados - ELIMINADA */}
      {/* <section className="w-full py-16 bg-gray-100 dark:bg-gray-800 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-amber-950 dark:text-amber-50 mb-12">Nuestros Productos Destacados</h2>
        <FeaturedProducts />
      </section> */}

      {/* Sección de Categorías (si existe) o cualquier otra sección que quieras mantener */}
      {/* ... existing code ... */}
    </main>
  );
}