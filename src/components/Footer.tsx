import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
  // Placeholder exchange rates (replace with API if needed)
  const usdToMxn = 17.2; // Example value

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-8 px-4 mt-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-lg font-bold mb-2">¡Venta de sombreros a todo México y extranjero!</h2>
          <p className="mb-2">FÁBRICA MAYOREO Y MENUDEO</p>
          <p className="mb-2">La Palma de Oro</p>
          <p>Artesanía y tradición en cada sombrero desde 1985</p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Enlaces Rápidos</h3>
          <ul className="space-y-1">
            <li><Link href="/productos/">Productos</Link></li>
            <li><Link href="/sobre-nosotros" className="hover:text-amber-700">Sobre Nosotros</Link></li>
            <li><Link href="/contacto" className="hover:text-amber-700">Contacto</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Síguenos</h3>
          <div className="flex space-x-3 mb-2">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook className="text-xl hover:text-blue-600" /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram className="text-xl hover:text-pink-500" /></a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"><FaTiktok className="text-xl hover:text-black" /></a>
          </div>
          <div className="flex items-center space-x-2">
            <FaWhatsapp className="text-green-500" />
            <span>+52 756 122 3464</span>
          </div>
          <div className="flex items-center space-x-2 mt-1">
            <FaEnvelope />
            <span>contacto@lapalmadeoro.com</span>
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Tipo de Cambio</h3>
          <p>USD/MXN: <span className="font-bold">${usdToMxn}</span></p>
          {/* Puedes agregar aquí lógica para obtener el valor en tiempo real */}
        </div>
      </div>
      <div className="text-center text-xs mt-8">
        &copy; {new Date().getFullYear()} La Palma de Oro. Todos los derechos reservados.
      </div>
    </footer>
  );
}