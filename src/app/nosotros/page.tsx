import Image from 'next/image'

export default function NosotrosPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Sobre Nosotros</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Nuestra Historia</h2>
          <p className="text-gray-700 mb-4">
            La Palma de Oro nació en 1985 en un pequeño taller familiar en Campeche, México. 
            Lo que comenzó como un oficio tradicional transmitido de generación en generación, 
            se ha convertido en una empresa dedicada a preservar y difundir el arte del tejido 
            de sombreros de palma artesanales.
          </p>
          <p className="text-gray-700">
            Cada sombrero que creamos es único, tejido a mano por artesanos locales que 
            dominan técnicas ancestrales. Nuestro compromiso es mantener viva esta tradición 
            mientras ofrecemos productos de la más alta calidad a nuestros clientes en México 
            y el mundo.
          </p>
        </div>
        <div className="relative h-80 md:h-96">
          <Image
            src="/images/historia.jpg"
            alt="Historia de La Palma de Oro"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>
      
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-center">Nuestros Valores</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-medium mb-3 text-yellow-800">Tradición</h3>
            <p className="text-gray-700">
              Preservamos las técnicas artesanales que han pasado de generación en generación, 
              honrando el legado cultural de nuestros antepasados.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-medium mb-3 text-yellow-800">Calidad</h3>
            <p className="text-gray-700">
              Seleccionamos cuidadosamente cada material y supervisamos cada etapa del proceso 
              para garantizar productos duraderos y de excelente acabado.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-medium mb-3 text-yellow-800">Sostenibilidad</h3>
            <p className="text-gray-700">
              Trabajamos con materiales naturales y procesos respetuosos con el medio ambiente, 
              apoyando a comunidades locales y prácticas sostenibles.
            </p>
          </div>
        </div>
      </div>
      
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-center">Nuestro Proceso</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="bg-yellow-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-yellow-800 font-bold text-xl">1</span>
            </div>
            <h3 className="font-medium mb-2">Selección</h3>
            <p className="text-gray-600 text-sm">Seleccionamos las mejores palmas para cada tipo de sombrero</p>
          </div>
          <div className="text-center">
            <div className="bg-yellow-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-yellow-800 font-bold text-xl">2</span>
            </div>
            <h3 className="font-medium mb-2">Preparación</h3>
            <p className="text-gray-600 text-sm">Tratamos la palma para hacerla flexible y resistente</p>
          </div>
          <div className="text-center">
            <div className="bg-yellow-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-yellow-800 font-bold text-xl">3</span>
            </div>
            <h3 className="font-medium mb-2">Tejido</h3>
            <p className="text-gray-600 text-sm">Artesanos expertos tejen cada sombrero a mano</p>
          </div>
          <div className="text-center">
            <div className="bg-yellow-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-yellow-800 font-bold text-xl">4</span>
            </div>
            <h3 className="font-medium mb-2">Acabado</h3>
            <p className="text-gray-600 text-sm">Damos los toques finales para un producto perfecto</p>
          </div>
        </div>
      </div>
      
      <div>
        <h2 className="text-2xl font-semibold mb-6 text-center">Nuestro Equipo</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="relative h-64 mb-4 rounded-lg overflow-hidden">
              <Image
                src="/images/artesano1.jpg"
                alt="Artesano"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="font-semibold">Carlos Méndez</h3>
            <p className="text-gray-600">Maestro Artesano</p>
          </div>
          <div className="text-center">
            <div className="relative h-64 mb-4 rounded-lg overflow-hidden">
              <Image
                src="/images/artesano2.jpg"
                alt="Artesana"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="font-semibold">María González</h3>
            <p className="text-gray-600">Diseñadora</p>
          </div>
          <div className="text-center">
            <div className="relative h-64 mb-4 rounded-lg overflow-hidden">
              <Image
                src="/images/artesano3.jpg"
                alt="Artesano"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="font-semibold">José Ramírez</h3>
            <p className="text-gray-600">Tejedor Experto</p>
          </div>
        </div>
      </div>
    </div>
  )
}