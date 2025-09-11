'use client'

import Link from 'next/link'
// Si tienes iconos de React, puedes importarlos aquí, por ejemplo:
// import { FaWhatsapp, FaPhone } from 'react-icons/fa'

export default function FloatingContactButtons() {
  const whatsappNumber = '521234567890' // Reemplaza con tu número de WhatsApp (código de país + número)
  const phoneNumber = '521234567890'    // Reemplaza con tu número de teléfono (código de país + número)

  return (
    <div className="fixed bottom-6 right-6 flex flex-col space-y-4 z-50">
      {/* Botón de WhatsApp */}
      <Link
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors flex items-center justify-center text-xl"
        aria-label="Contactar por WhatsApp"
      >
        {/* Puedes usar un icono aquí si tienes react-icons instalado */}
        {/* <FaWhatsapp /> */}
        💬
      </Link>

      {/* Botón de Llamada */}
      <Link
        href={`tel:${phoneNumber}`}
        className="bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition-colors flex items-center justify-center text-xl"
        aria-label="Llamar por teléfono"
      >
        {/* Puedes usar un icono aquí si tienes react-icons instalado */}
        {/* <FaPhone /> */}
        📞
      </Link>
    </div>
  )
}