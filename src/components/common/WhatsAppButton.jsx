import { useState } from 'react'
import { MessageCircle, X } from 'lucide-react'
import { contactInfo } from '../../data/services'

const WhatsAppButton = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [showTooltip, setShowTooltip] = useState(true)

  // Ocultar tooltip después de 5 segundos
  useState(() => {
    const timer = setTimeout(() => setShowTooltip(false), 5000)
    return () => clearTimeout(timer)
  }, [])

  const whatsappLink = contactInfo.whatsapp

  const quickMessages = [
    { text: 'Reservar turno', message: 'Hola! Quisiera reservar un turno.' },
    { text: 'Consultar precios', message: 'Hola! Quisiera consultar precios de los tratamientos.' },
    { text: 'Información', message: 'Hola! Quisiera información sobre los servicios disponibles.' },
  ]

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Expanded Menu */}
      <div 
        className={`absolute bottom-full right-0 mb-4 transition-all duration-300 ${
          isExpanded 
            ? 'opacity-100 visible translate-y-0' 
            : 'opacity-0 invisible translate-y-4'
        }`}
      >
        <div className="bg-white rounded-2xl shadow-soft-lg p-4 min-w-[250px]">
          <div className="flex items-center justify-between mb-3 pb-3 border-b border-gray-100">
            <div>
              <p className="font-semibold text-gray-900">¿Cómo podemos ayudarte?</p>
              <p className="text-sm text-gray-500">Respuesta rápida</p>
            </div>
            <button
              onClick={() => setIsExpanded(false)}
              className="p-1 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5 text-gray-400" />
            </button>
          </div>
          
          <div className="space-y-2">
            {quickMessages.map((item, index) => (
              <a
                key={index}
                href={contactInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-3 rounded-xl bg-gray-50 hover:bg-primary-50 
                           text-gray-700 hover:text-primary-600 transition-colors text-sm font-medium"
              >
                {item.text}
              </a>
            ))}
          </div>

          <div className="mt-3 pt-3 border-t border-gray-100">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center text-sm text-primary-500 hover:text-primary-600 font-medium"
            >
              O escríbenos directamente →
            </a>
          </div>
        </div>

        {/* Arrow */}
        <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white rotate-45 shadow-soft"></div>
      </div>

      {/* Tooltip */}
      {showTooltip && !isExpanded && (
        <div className="absolute bottom-full right-0 mb-3 animate-fade-in">
          <div className="bg-gray-900 text-white text-sm px-4 py-2 rounded-xl whitespace-nowrap">
            ¿Necesitas ayuda? 💬
            <div className="absolute -bottom-1 right-6 w-2 h-2 bg-gray-900 rotate-45"></div>
          </div>
        </div>
      )}

      {/* Main Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="group relative w-16 h-16 bg-[#25D366] rounded-full shadow-lg 
                   flex items-center justify-center
                   transition-all duration-300 hover:scale-110 hover:shadow-xl
                   whatsapp-btn"
        aria-label="Contactar por WhatsApp"
      >
        {/* Pulse effect */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25"></span>
        
        {/* Icon */}
        <MessageCircle 
          className={`w-8 h-8 text-white transition-transform duration-300 ${
            isExpanded ? 'rotate-90 scale-0' : 'rotate-0 scale-100'
          }`} 
        />
        <X 
          className={`absolute w-7 h-7 text-white transition-transform duration-300 ${
            isExpanded ? 'rotate-0 scale-100' : '-rotate-90 scale-0'
          }`}
        />

        {/* WhatsApp Icon SVG */}
        <svg 
          className={`absolute w-8 h-8 text-white transition-all duration-300 ${
            isExpanded ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
          }`}
          viewBox="0 0 24 24" 
          fill="currentColor"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </button>
    </div>
  )
}

export default WhatsAppButton
