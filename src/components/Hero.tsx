'use client';

import Image from 'next/image'; // Necesitamos Image para mostrar las imágenes del carrusel
import { useState, useEffect, ReactNode } from 'react'; // Necesitamos useState y useEffect para la lógica del carrusel
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'; // Iconos para la navegación del carrusel

// Define las props que el componente Hero va a aceptar
interface HeroProps {
  images: string[]; // Un array de rutas de imágenes
  children: ReactNode; // El contenido que se renderizará encima del carrusel
}

export default function Hero({ images, children }: HeroProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Efecto para cambiar la imagen automáticamente cada 5 segundos
  useEffect(() => {
    if (images.length === 0) return; // No iniciar el intervalo si no hay imágenes

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Cambia la imagen cada 5 segundos (5000 ms)

    return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta
  }, [images.length]); // Se ejecuta cada vez que cambia el número de imágenes

  // Función para ir a la imagen anterior
  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Función para ir a la imagen siguiente
  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Si no hay imágenes, podemos renderizar un fallback o simplemente el contenido
  if (!images || images.length === 0) {
    return (
      <section className="relative h-screen w-full flex items-center justify-center bg-gray-200 dark:bg-gray-800">
        {children} {/* Renderiza el contenido incluso si no hay imágenes */}
      </section>
    );
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Carrusel de imágenes de fondo */}
      {images.map((imageSrc, index) => (
        <Image
          key={imageSrc}
          src={imageSrc}
          alt={`Carousel image ${index + 1}`}
          fill
          priority={index === 0} // Prioriza la carga de la primera imagen para mejor rendimiento
          className={`object-cover transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      {/* Botones de navegación del carrusel */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white bg-opacity-30 rounded-full text-white hover:bg-opacity-50 transition-colors z-20"
        aria-label="Previous image"
      >
        <ChevronLeftIcon className="h-6 w-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white bg-opacity-30 rounded-full text-white hover:bg-opacity-50 transition-colors z-20"
        aria-label="Next image"
      >
        <ChevronRightIcon className="h-6 w-6" />
      </button>

      {/* Capa de contenido - Aquí se renderizará el 'children' pasado desde page.tsx */}
      {/* El 'children' ya tiene su propio estilo de fondo y color de texto */}
      <div className="absolute inset-0 flex items-center justify-center text-center z-10">
        {children}
      </div>
    </section>
  );
}