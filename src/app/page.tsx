import Hero from '@/components/Hero'
import FeaturedProducts from '@/components/FeaturedProducts'
import FloatingContactButtons from '@/components/FloatingContactButtons' // Importa el nuevo componente

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <FloatingContactButtons /> {/* Añade el componente aquí */}
    </>
  )
}