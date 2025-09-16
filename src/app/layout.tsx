import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { CartProvider } from '@/context/CartContext'
import { ThemeProvider } from '@/context/ThemeContext'
import { LanguageProvider } from '@/context/LanguageContext';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'La Palma de Oro - Sombreros Artesanales',
  description: 'Los mejores sombreros de palma artesanales en México',
  icons: { // Añade esta sección para el favicon
    icon: '/logo.png', // Ruta a tu logo en la carpeta public
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} flex flex-col min-h-screen bg-gray-50`}>
        <LanguageProvider>
          <ThemeProvider>
            <CartProvider>
              <Header />
              <main className="flex-grow">
                {children}
              </main>
              <Footer />
              <Toaster position="bottom-right" />
            </CartProvider>
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}