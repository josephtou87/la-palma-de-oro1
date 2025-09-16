'use client'

import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { language } = useLanguage();
  const usdToMxn = 17.2;

  // Traducciones
  const t = {
    venta: {
      es: '¡Venta de sombreros a todo México y extranjero!',
      en: 'Hat sales throughout Mexico and abroad!',
      zh: '帽子销售遍及墨西哥和海外！'
    },
    fabrica: {
      es: 'FÁBRICA MAYOREO Y MENUDEO',
      en: 'WHOLESALE AND RETAIL FACTORY',
      zh: '批发和零售工厂'
    },
    nombre: {
      es: 'La Palma de Oro',
      en: 'La Palma de Oro',
      zh: 'La Palma de Oro'
    },
    artesania: {
      es: 'Artesanía y tradición en cada sombrero desde 1985',
      en: 'Craftsmanship and tradition in every hat since 1985',
      zh: '自1985年以来，每一顶帽子都体现工艺与传统'
    },
    enlaces: {
      es: 'Enlaces Rápidos',
      en: 'Quick Links',
      zh: '快速链接'
    },
    productos: {
      es: 'Productos',
      en: 'Products',
      zh: '产品'
    },
    sobre: {
      es: 'Sobre Nosotros',
      en: 'About Us',
      zh: '关于我们'
    },
    contacto: {
      es: 'Contacto',
      en: 'Contact',
      zh: '联系'
    },
    siguenos: {
      es: 'Síguenos',
      en: 'Follow Us',
      zh: '关注我们'
    },
    tipoCambio: {
      es: 'Tipo de Cambio',
      en: 'Exchange Rate',
      zh: '汇率'
    },
    usdMxn: {
      es: 'USD/MXN',
      en: 'USD/MXN',
      zh: '美元/墨西哥比索'
    },
    derechos: {
      es: `© ${new Date().getFullYear()} La Palma de Oro. Todos los derechos reservados.`,
      en: `© ${new Date().getFullYear()} La Palma de Oro. All rights reserved.`,
      zh: `© ${new Date().getFullYear()} La Palma de Oro。版权所有。`
    }
  };

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-8 px-4 mt-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-lg font-bold mb-2">{t.venta[language]}</h2>
          <p className="mb-2">{t.fabrica[language]}</p>
          <p className="mb-2">{t.nombre[language]}</p>
          <p>{t.artesania[language]}</p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">{t.enlaces[language]}</h3>
          <ul className="space-y-1">
            <li><Link href="/productos/">{t.productos[language]}</Link></li>
            <li><Link href="/sobre-nosotros" className="hover:text-amber-700">{t.sobre[language]}</Link></li>
            <li><Link href="/contacto" className="hover:text-amber-700">{t.contacto[language]}</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">{t.siguenos[language]}</h3>
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
          <h3 className="font-semibold mb-2">{t.tipoCambio[language]}</h3>
          <p>{t.usdMxn[language]}: <span className="font-bold">${usdToMxn}</span></p>
        </div>
      </div>
      <div className="text-center text-xs mt-8">
        {t.derechos[language]}
      </div>
    </footer>
  );
}