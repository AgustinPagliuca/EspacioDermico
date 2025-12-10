import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react'
import { useScroll } from '../../hooks/useScroll'

// Constantes
const SCROLL_THRESHOLD = 50
const NAV_LINKS = [
  { name: 'Inicio', path: '/' },
  { name: 'Servicios', path: '/servicios', hasDropdown: true },
  { name: 'Sobre Mí', path: '/sobre-mi' },
  { name: 'Contacto', path: '/contacto' },
]

const SERVICES_DROPDOWN = [
  { name: 'Ver todos', path: '/servicios' },
  { name: 'Cosmiatría', path: '/servicios/cosmiatria' },
  { name: 'HIFU', path: '/servicios/hifu' },
  { name: 'Masajes', path: '/servicios/masajes' },
]

const WHATSAPP_LINK = 'https://api.whatsapp.com/message/LTCMUGTXAYKSO1?autoload=1&app_absent=0&utm_source=ig'
const HOME_PATH = '/'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const { scrolled } = useScroll(SCROLL_THRESHOLD)
  const location = useLocation()

  const isHomePage = location.pathname === HOME_PATH

  // Cerrar menú al cambiar de ruta
  useEffect(() => {
    setIsMenuOpen(false)
    setIsServicesOpen(false)
  }, [location])

  // Prevenir scroll cuando el menú móvil está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.width = '100%'
    } else {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
    }
    return () => {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
    }
  }, [isMenuOpen])

  // Determinar estilos de la navbar según la página
  const getHeaderClasses = () => {
    if (isHomePage) {
      return scrolled ? 'py-2 bg-white shadow-md' : 'py-4 bg-transparent'
    }
    return 'py-2 bg-white shadow-md'
  }

  // Determinar color del texto según contexto
  const getTextColorClass = () => {
    return isHomePage && !scrolled ? 'text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]' : 'text-gray-700'
  }

  const getBrandTextColorClass = () => {
    return isHomePage && !scrolled ? 'text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]' : 'text-gray-800'
  }

  // Ir a inicio y scroll al top
  const goToHomeAndScroll = () => {
    if (isHomePage) {
      // Si ya estamos en inicio, solo scroll
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      // Con HashRouter, cambiamos el hash para navegar a la ruta raíz
      window.location.hash = '#/'
    }
  }

  // Solo scroll al top (para el botón de flecha)
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${getHeaderClasses()}`}>
      <nav className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo and Brand - Navigate to home and scroll top */}
          <button 
            onClick={goToHomeAndScroll}
            className="flex items-center gap-3 transition-all duration-500 hover:opacity-80 cursor-pointer border-0 bg-transparent p-0"
          >
            <img 
              src={`${import.meta.env.BASE_URL}logoSolo.png`} 
              alt="Espacio Dérmico - Estética & Bienestar" 
              className={`transition-all duration-500 ${
                scrolled || !isHomePage ? 'h-12' : 'h-14 sm:h-16'
              }`}
            />
            <div className={`hidden sm:block transition-all duration-500 ${getBrandTextColorClass()}`}>
              <p className="text-xs tracking-widest font-light leading-none">
                ESPACIO DÉRMICO
              </p>
              <p className="text-[9px] tracking-widest font-light mt-0.5 opacity-70">
                ESTÉTICA & BIENESTAR
              </p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <div key={link.path} className="relative group">
                {link.hasDropdown ? (
                  <button
                    className={`nav-link flex items-center gap-1 transition-all ${getTextColorClass()}`}
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    {link.name}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                      isServicesOpen ? 'rotate-180' : ''
                    }`} />
                  </button>
                ) : (
                  <NavLink
                    to={link.path}
                    className={({ isActive }) => 
                      `nav-link transition-all ${getTextColorClass()} ${isActive ? 'active' : ''}`
                    }
                  >
                    {link.name}
                  </NavLink>
                )}

                {/* Dropdown para Servicios */}
                {link.hasDropdown && (
                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-300 ${
                      isServicesOpen 
                        ? 'opacity-100 visible translate-y-0' 
                        : 'opacity-0 invisible -translate-y-2'
                    }`}
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <div className="bg-white rounded-2xl shadow-soft-lg p-4 min-w-[200px]">
                      <div className="space-y-1">
                        {SERVICES_DROPDOWN.map((service) => (
                          <Link
                            key={service.path}
                            to={service.path}
                            className="block px-4 py-2 rounded-xl text-gray-700 hover:bg-primary-50 hover:text-primary-500 transition-colors"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn-primary text-sm ${isHomePage && !scrolled ? 'bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white hover:text-primary-600' : ''}`}
            >
              Reservar Turno
            </a>
            
            {/* Scroll to Top Button - Subtle */}
            {scrolled && (
              <button
                onClick={scrollToTop}
                className="p-2 rounded-lg hover:bg-primary-50 transition-colors text-gray-400 hover:text-primary-500"
                aria-label="Volver al inicio"
                title="Volver al inicio"
              >
                <ChevronUp className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-xl transition-colors z-[60] ${
              scrolled ? 'hover:bg-primary-50' : 'hover:bg-white/20'
            }`}
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className={`w-6 h-6 ${scrolled ? 'text-gray-700' : 'text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]'}`} />
            )}
          </button>
        </div>
      </nav>
    </header>

      {/* Mobile Menu - FUERA del header para evitar problemas de z-index */}
      <div
        className={`lg:hidden fixed inset-0 z-[55] transition-all duration-500 ${
          isMenuOpen 
            ? 'opacity-100 visible' 
            : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        {/* Overlay */}
        <div 
          className="absolute inset-0 bg-black/30 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />
        
        {/* Menu Panel */}
        <div 
          className={`absolute top-0 right-0 h-full w-[80%] max-w-sm bg-white shadow-2xl transition-transform duration-500 ease-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Close button inside panel */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-4 right-4 p-2 rounded-xl hover:bg-gray-100 transition-colors"
            aria-label="Cerrar menú"
          >
            <X className="w-6 h-6 text-gray-700" />
          </button>

          <div className="p-6 pt-16 h-full overflow-y-auto">
            {/* Logo in mobile menu */}
            <div className="flex items-center justify-center mb-8 pb-6 border-b border-primary-200">
              <img 
                src={`${import.meta.env.BASE_URL}logoRedondo.png`} 
                alt="Espacio Dérmico" 
                className="h-20"
              />
            </div>

            {/* Mobile Nav Links */}
            <nav className="space-y-2">
              {NAV_LINKS.map((link, index) => (
                <div key={link.path} style={{ animationDelay: `${index * 100}ms` }}>
                  {link.hasDropdown ? (
                    <NavLink
                      to="/servicios"
                      className={({ isActive }) =>
                        `block px-4 py-3 rounded-xl text-lg font-medium transition-colors ${
                          isActive 
                            ? 'bg-primary-50 text-primary-500' 
                            : 'text-gray-700 hover:bg-gray-50'
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  ) : (
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `block px-4 py-3 rounded-xl text-lg font-medium transition-colors ${
                          isActive 
                            ? 'bg-primary-50 text-primary-500' 
                            : 'text-gray-700 hover:bg-gray-50'
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile CTA */}
            <div className="mt-8 pt-8 border-t border-gray-100">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full justify-center"
              >
                Reservar Turno
              </a>
            </div>

            {/* Contact Info Mobile */}
            <div className="mt-8 space-y-3 text-sm text-gray-600">
              <p className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-primary-50 flex items-center justify-center">
                  📍
                </span>
                Dr. Carbone 3748, Santos Lugares
              </p>
              <p className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-primary-50 flex items-center justify-center">
                  📞
                </span>
                15-6507-2537
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
