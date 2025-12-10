import { MessageCircle } from 'lucide-react'
import { contactInfo } from '../../data/services'
import { useInView } from '../../hooks/useScroll'

const ConsultaBanner = () => {
  const { ref, isVisible } = useInView()

  const whatsappLink = contactInfo.whatsapp

  return (
    <section 
      ref={ref}
      className={`py-12 transition-all duration-700 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="container-custom">
        <div className="bg-primary-600 rounded-2xl p-8 md:p-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h2 className="font-display text-xl md:text-2xl text-white mb-2">
                ¿No sabes qué tratamiento necesitas?
              </h2>
              <p className="text-white/80 text-sm">
                Te asesoramos para encontrar el tratamiento perfecto.
              </p>
            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-600 
                         font-medium rounded-full transition-all hover:shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              Consultar
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ConsultaBanner
