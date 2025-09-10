import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { CartProvider } from '@/context/CartContext'
import { ThemeProvider } from '@/context/ThemeContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'La Palma de Oro - Sombreros Artesanales',
  description: 'Los mejores sombreros de palma artesanales en México',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      {/* Clases para el modo claro/oscuro en el body */}
      <body className={`${inter.className} bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50`}>
        {/* Envuelve toda la aplicación con ThemeProvider */}
        <ThemeProvider>
          {/* Envuelve la aplicación con CartProvider */}
          <CartProvider>
            <Navbar />
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
            <Toaster position="bottom-center" />
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}