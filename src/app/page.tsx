import Hero from '@/components/Hero'
import FeaturedProducts from '@/components/FeaturedProducts'
import FloatingContactButtons from '@/components/FloatingContactButtons'
import WelcomeBanner from '@/components/WelcomeBanner'
import ImageCarousel from '@/components/ImageCarousel'

export default function Home() {
  return (
    <>
      <WelcomeBanner />
      <ImageCarousel /> {/* El carrusel ahora aparece primero */}
      <Hero />          {/* Luego la sección Hero */}
      <FeaturedProducts />
      <FloatingContactButtons />
    </>
  )
}