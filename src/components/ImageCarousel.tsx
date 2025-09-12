'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules'
import Image from 'next/image'
import { products } from '@/lib/data' // Importa tus productos
import Link from 'next/link'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow' // Para un efecto visual más atractivo

export default function ImageCarousel() {
  // Filtra los productos que tienen una imagen y mapea sus datos relevantes para el carrusel
  const carouselImages = products.filter(p => p.image).map(p => ({
    id: p.id,
    src: p.image,
    alt: p.name,
    name: p.name,
  }))

  if (carouselImages.length === 0) {
    return null // No renderiza el carrusel si no hay imágenes
  }

  return (
    <section className="py-8 md:py-12 bg-amber-50 dark:bg-amber-950">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-amber-950 dark:text-amber-50">
          Nuestros Sombreros
        </h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
          effect="coverflow" // Efecto 3D de "tarjetas"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'} // Ajusta el número de slides visibles automáticamente
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
            delay: 3000, // Cambia de slide cada 3 segundos
            disableOnInteraction: false, // Continúa el autoplay incluso si el usuario interactúa
          }}
          loop={true} // Repite el carrusel infinitamente
          navigation={true} // Flechas de navegación
          pagination={{ clickable: true }} // Puntos de paginación
          className="mySwiper h-[300px] md:h-[400px] lg:h-[500px] w-full"
        >
          {carouselImages.map((image) => (
            <SwiperSlide key={image.id} className="flex justify-center items-center rounded-lg overflow-hidden shadow-lg">
              <Link href={`/productos/${image.id}`} className="block w-full h-full relative">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white text-center">
                  <h3 className="text-xl font-semibold">{image.name}</h3>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}