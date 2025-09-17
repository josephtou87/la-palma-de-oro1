'use client';

import Image from 'next/image';
import { useState, useEffect, ReactNode } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { useLanguage } from '@/context/LanguageContext';

interface HeroProps {
  images: string[];
  children: ReactNode;
}

export default function Hero({ images, children }: HeroProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { language } = useLanguage();

  // Las traducciones para el banner principal ya no son necesarias aquí si se quita el texto
  // const t = {
  //   titulo: {
  //     es: 'La Palma de Oro',
  //     en: 'La Palma de Oro',
  //     zh: 'La Palma de Oro'
  //   },
  //   descripcion: {
  //     es: 'Elegancia y tradición en cada sombrero. Descubre nuestra colección artesanal.',
  //     en: 'Elegance and tradition in every hat. Discover our handcrafted collection.',
  //     zh: '每一顶帽子都彰显优雅与传统。探索我们的手工艺系列。'
  //   }
  // };

  useEffect(() => {
    if (images.length === 0) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  if (!images || images.length === 0) {
    return (
      <section className="relative h-screen w-full flex items-center justify-center bg-gray-200 dark:bg-gray-800">
        <div>
          {/* Se eliminan el título y la descripción */}
          {children}
        </div>
      </section>
    );
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {images.map((imageSrc, index) => (
        <Image
          key={imageSrc}
          src={imageSrc}
          alt={`Carousel image ${index + 1}`}
          fill
          priority={index === 0}
          // Añade la propiedad 'sizes' para optimizar la carga de imágenes
          sizes="100vw" // La imagen siempre ocupará el 100% del ancho del viewport
          className={`object-cover transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-gray-800 bg-opacity-50 rounded-full text-white hover:bg-opacity-75 transition-colors z-20"
        aria-label="Previous image"
      >
        <ChevronLeftIcon className="h-6 w-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-gray-800 bg-opacity-50 rounded-full text-white hover:bg-opacity-75 transition-colors z-20"
        aria-label="Next image"
      >
        <ChevronRightIcon className="h-6 w-6" />
      </button>

      <div className="absolute inset-0 flex items-center justify-center text-center z-10">
        <div>
          {/* Se eliminan el título y la descripción */}
          {children}
        </div>
      </div>
    </section>
  );
}