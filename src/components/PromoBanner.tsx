import { TruckIcon } from '@heroicons/react/24/outline'

export default function PromoBanner() {
  return (
    <div className="bg-yellow-100 py-3">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 text-yellow-800">
          <TruckIcon className="h-6 w-6" />
          <p className="text-sm md:text-base font-medium">
            ¡Envío gratis en compras mayores a $999! | Envíos internacionales disponibles
          </p>
        </div>
      </div>
    </div>
  )
}