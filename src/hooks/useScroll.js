import { useState, useEffect } from 'react'

/**
 * Hook para detectar el scroll de la página
 * @param {number} threshold - Píxeles de scroll antes de activar
 * @returns {object} { scrolled, scrollY, scrollDirection }
 */
export function useScroll(threshold = 50) {
  const [scrolled, setScrolled] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [scrollDirection, setScrollDirection] = useState('up')
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      setScrollY(currentScrollY)
      setScrolled(currentScrollY > threshold)
      setScrollDirection(currentScrollY > lastScrollY ? 'down' : 'up')
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [threshold, lastScrollY])

  return { scrolled, scrollY, scrollDirection }
}

/**
 * Hook para animar elementos al entrar en viewport
 * @param {object} options - Opciones del IntersectionObserver
 * @returns {object} { ref, isVisible }
 */
export function useInView(options = {}) {
  const [ref, setRef] = useState(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!ref) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        observer.unobserve(ref) // Solo animar una vez
      }
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
      ...options
    })

    observer.observe(ref)

    return () => {
      if (ref) observer.unobserve(ref)
    }
  }, [ref, options])

  return { ref: setRef, isVisible }
}

export default useScroll
