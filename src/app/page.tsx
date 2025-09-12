import Hero from '@/components/Hero'
import FeaturedProducts from '@/components/FeaturedProducts'
import FloatingContactButtons from '@/components/FloatingContactButtons'
import WelcomeBanner from '@/components/WelcomeBanner'
import ImageCarousel from '@/components/ImageCarousel' // Importa el nuevo componente

export default function Home() {
  return (
    <>
      <WelcomeBanner />
      <Hero />
      <ImageCarousel /> {/* Añade el carrusel aquí */}
      <FeaturedProducts />
      <FloatingContactButtons />
    </>
  )
}