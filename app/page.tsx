import Hero from '@/components/Hero'
import Link from 'next/link';
import Image from 'next/image';
// Elimina la importación de FeaturedProducts
// import FeaturedProducts from '@/components/FeaturedProducts';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 md:p-24">
      {/* Sección Hero */}
      <section className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center text-center">
        <Image
          src="/images/hero-bg.jpg"
          alt="Fondo de Sombreros"
          fill
          style={{ objectFit: 'cover' }}
          className="z-0"
        />
        <div className="relative z-10 text-white bg-black bg-opacity-50 p-8 rounded-lg max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">La Palma de Oro</h1>
          <p className="text-lg md:text-xl mb-8">
            Elegancia y tradición en cada sombrero. Descubre nuestra colección artesanal.
          </p>
          <Link href="/productos" className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-6 rounded-full text-lg transition-colors duration-300">
            Ver Productos
          </Link>
        </div>
      </section>

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