'use client'; // Este componente usa hooks de React, por lo que debe ser un Client Component

import Link from 'next/link';
import Image from 'next/image';
import ThemeToggle from '@/components/ThemeToggle'; // Asegúrate de que este componente exista
import Hero from '@/components/Hero'; // Asegúrate de que este componente exista y esté actualizado

// Si tenías otras importaciones como FeaturedProducts, asegúrate de que estén eliminadas si no se usan
// import FeaturedProducts from '@/components/FeaturedProducts';

export default function Home() {
  // Aquí defines las rutas de las imágenes que quieres que aparezcan en tu carrusel.
  // Asegúrate de que estas imágenes existan en tu carpeta 'public' (por ejemplo, public/images/).
  const carouselImages = [
    '/images/hero-bg.jpg', // Tu imagen actual de fondo
    '/images/sombrero1.jpg', // Ejemplo de una imagen de producto
    '/images/hero-bg.jpg', // Puedes repetir imágenes o añadir más únicas
    '/images/sombrero7.jpg',
    '/images/sombrero8.jpg',
    // Añade más rutas de imágenes aquí según necesites
  ];

  return (
    // El elemento <main> ahora solo tiene clases para el layout general, sin padding.
    // Esto permite que el componente Hero ocupe todo el ancho y alto de la ventana.
    <main className="flex min-h-screen flex-col items-center w-full">
      {/* El componente Hero ahora maneja el carrusel de imágenes de fondo */}
      <Hero images={carouselImages}>
        {/* Ya no necesitamos este div de superposición, ya que todo su contenido se ha movido. */}
        {/* Pasamos 'null' como children para que el Hero no renderice ninguna capa de contenido. */}
        {null}
      </Hero>

      {/* Este div envuelve el resto del contenido de la página y le aplica el padding deseado. */}
      <div className="p-6 md:p-24 w-full flex flex-col items-center">
        {/* AÑADIMOS el botón "Ver Productos" aquí, debajo del carrusel */}
        <Link href="/productos" className="mt-8 bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-6 rounded-full text-lg transition-colors duration-300">
          Ver Productos
        </Link>

        {/* Ejemplo de otra sección que podrías tener */}
        {/* <section className="w-full py-16 bg-gray-100 dark:bg-gray-800 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-950 dark:text-amber-50 mb-12">Otra Sección de la Página</h2>
          <p>Contenido adicional de tu página principal.</p>
        </section> */}
      </div>
    </main>
  );
}