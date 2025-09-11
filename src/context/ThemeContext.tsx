'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

// Define el tipo para el contexto del tema
interface ThemeContextType {
  theme: string
  toggleTheme: () => void
}

// Crea el contexto con un valor por defecto (que será sobrescrito por el Provider)
const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

// Define las props para el ThemeProvider
interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // Inicializa el estado del tema. Intenta obtenerlo de localStorage, si no, usa 'light'.
  const [theme, setTheme] = useState<string>(() => {
    if (typeof window !== 'undefined') { // Asegura que localStorage solo se acceda en el cliente
      return localStorage.getItem('theme') || 'light'
    }
    return 'light'
  })

  // Efecto para aplicar la clase 'dark' al <html> y guardar el tema en localStorage
  useEffect(() => {
    const root = window.document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', theme)
    }
  }, [theme])

  // Función para alternar el tema
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  // Provee el contexto a los componentes hijos
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

// Hook personalizado para usar el contexto del tema
export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme debe usarse dentro de un ThemeProvider')
  }
  return context
}