import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-yellow-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Información de la empresa */}
          <div>
            <h3 className="text-xl font-bold mb-4">La Palma de Oro</h3>
            <p className="text-yellow-100">
              Artesanía y tradición en cada sombrero desde 1985
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/productos" className="text-yellow-100 hover:text-white">
                  Catálogo
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="text-yellow-100 hover:text-white">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-yellow-100 hover:text-white">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Redes sociales y contacto */}
          <div>
            <h3 className="text-xl font-bold mb-4">Síguenos</h3>
            <div className="space-y-2">
              <p>WhatsApp: +52 756 122 3464</p>
              <p>Email: contacto@lapalmadeoro.com</p>
              <div className="flex space-x-4 mt-4">
                <a href="https://www.facebook.com/share/19kRfRRaKM/" target="_blank" rel="noopener noreferrer" className="text-yellow-100 hover:text-white">
                  Facebook
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-yellow-100 hover:text-white">
                  Instagram
                </a>
                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-yellow-100 hover:text-white">
                  TikTok
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-yellow-700 text-center">
          <p className="text-yellow-100">
            © {new Date().getFullYear()} La Palma de Oro. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}