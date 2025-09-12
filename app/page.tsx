import Hero from '@/components/Hero'
import FeaturedProducts from '@/components/FeaturedProducts'
import FloatingContactButtons from '@/components/FloatingContactButtons'
import WelcomeBanner from '@/components/WelcomeBanner' // Importa el nuevo componente

export default function Home() {
  return (
    <>
      <WelcomeBanner /> {/* Añade el componente aquí */}
      <Hero />
      <FeaturedProducts />
      <FloatingContactButtons />
    </>
  )
}