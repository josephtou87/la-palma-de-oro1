'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

const WELCOME_TEXT = "Bienvenido a Sombrerería La Palma de Oro Artesanía con Estilo" // Texto sin el guion
const TYPING_SPEED_MS = 60 // Velocidad de escritura por carácter (milisegundos)
const BLINK_SPEED_MS = 500 // Velocidad de parpadeo del cursor (milisegundos)
const DISPLAY_DURATION_MS = 6000 // Duración total del banner antes de desaparecer (milisegundos)

export default function WelcomeBanner() {
  const [displayText, setDisplayText] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const [isVisible, setIsVisible] = useState(true)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    // Inicializar el objeto de audio solo una vez
    if (!audioRef.current) {
      // Asegúrate de que este archivo de sonido exista en public/sounds/typewriter.mp3
      audioRef.current = new Audio('/sounds/typewriter.mp3')
      audioRef.current.volume = 0.5; // Ajusta el volumen si es necesario
    }

    let charIndex = 0
    let typingInterval: NodeJS.Timeout
    let cursorInterval: NodeJS.Timeout
    let hideTimeout: NodeJS.Timeout

    const startTyping = () => {
      typingInterval = setInterval(() => {
        if (charIndex < WELCOME_TEXT.length) {
          setDisplayText(prev => prev + WELCOME_TEXT[charIndex])
          // Reproducir sonido de máquina de escribir por cada carácter
          if (audioRef.current) {
            audioRef.current.currentTime = 0; // Reiniciar el sonido para una reproducción rápida
            audioRef.current.play().catch(e => console.error("Error al reproducir audio:", e));
          }
          charIndex++
        } else {
          clearInterval(typingInterval)
          // Iniciar el parpadeo del cursor una vez que el texto ha terminado de escribirse
          cursorInterval = setInterval(() => {
            setShowCursor(prev => !prev)
          }, BLINK_SPEED_MS)

          // Establecer un temporizador para ocultar el banner después de la duración total
          // Se resta la duración de la animación de salida para que coincida con DISPLAY_DURATION_MS
          hideTimeout = setTimeout(() => {
            setIsVisible(false)
          }, DISPLAY_DURATION_MS - (charIndex * TYPING_SPEED_MS) - 500); // 500ms es la duración de la animación de salida
        }
      }, TYPING_SPEED_MS)
    }

    // Iniciar la escritura después de un breve retraso para permitir que el banner se deslice
    const initialDelay = 500; // Coincide con la duración de la animación de entrada del banner
    const typingStartTimeout = setTimeout(startTyping, initialDelay);

    // Función de limpieza para detener los temporizadores y el audio al desmontar el componente
    return () => {
      clearTimeout(typingStartTimeout)
      clearInterval(typingInterval)
      clearInterval(cursorInterval)
      clearTimeout(hideTimeout)
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    }
  }, []) // El array de dependencias vacío asegura que el efecto se ejecute solo una vez al montar

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: "-100%", opacity: 0 }} // Estado inicial: fuera de la pantalla y transparente
          animate={{ y: "0%", opacity: 1 }}    // Estado animado: en la pantalla y opaco
          exit={{ y: "-100%", opacity: 0 }}     // Estado de salida: vuelve a salir de la pantalla y transparente
          transition={{ duration: 0.5 }}        // Duración de la animación de entrada/salida
          className="fixed top-0 left-0 w-full bg-amber-950 text-amber-50 flex items-center justify-center p-4 z-50" // Fondo marrón oscuro, texto beige claro
        >
          <motion.span
            className="text-lg md:text-xl lg:text-2xl font-semibold text-center whitespace-pre-wrap"
            initial={{ opacity: 0 }} // Inicialmente transparente para que el texto aparezca con la animación
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.1 }} // Pequeño retraso para sincronizar con la entrada del banner
          >
            {displayText}
            {showCursor && <span className="ml-1 animate-blink">|</span>} {/* Cursor parpadeante */}
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}