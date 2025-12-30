import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Phone } from 'lucide-react'

// Components
import HeroCarousel from '../components/home/HeroCarousel'
import QuoteSection from '../components/home/QuoteSection'
import ConsultaBanner from '../components/home/ConsultaBanner'
import SectionHeader from '../components/common/SectionHeader'
import ServiceCard from '../components/services/ServiceCard'

// Data
import { services, contactInfo, aboutInfo } from '../data/services'

// Hook
import { useInView } from '../hooks/useScroll'
import { images } from '../utils/images'
import { useLocation } from 'react-router-dom'

// Animated wrapper component
const AnimatedSection = ({ children, className = '', delay = 0 }) => {
  const { ref, isVisible } = useInView()
  
  return (
    <div 
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

const Home = () => {
  const location = useLocation()
  const SITE_URL = 'https://espaciodermico.com.ar'
  const canonicalUrl = `${SITE_URL}${location.pathname || '/'}`

  return (
    <div className="overflow-hidden">
      <Helmet>
        <title>Espacio Dérmico | Estética, cosmiatría y HIFU en Santos Lugares</title>
        <meta
          name="description"
          content="Tratamientos faciales, HIFU, masajes, depilación y cuidado integral en Santos Lugares. Profesionales en estética y bienestar."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="Espacio Dérmico | Estética y bienestar" />
        <meta property="og:description" content="Centro de estética y cosmiatría en Santos Lugares con tratamientos faciales y corporales." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="twitter:title" content="Espacio Dérmico | Estética y bienestar" />
        <meta property="twitter:description" content="Tratamientos faciales, corporales, manicuría y pedicuría en Santos Lugares." />
      </Helmet>
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionHeader
            title="Nuestros Servicios"
            subtitle="Tratamientos profesionales para tu cuidado personal"
          />

          {/* Services Grid - Simplificado */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 6).map((service, index) => (
              <AnimatedSection key={service.id} delay={index * 100}>
                <ServiceCard service={service} />
              </AnimatedSection>
            ))}
          </div>

          {/* View All Button */}
          <AnimatedSection className="text-center mt-12">
            <Link to="/servicios" className="btn-secondary">
              Ver todos los servicios
              <ArrowRight className="w-5 h-5" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Quote Section */}
      <QuoteSection />

      {/* Consulta Banner */}
      <ConsultaBanner />

      {/* About Preview Section - Simplificado */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <AnimatedSection>
              <div className="relative">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                  <img
                    src={images['espacioDermico.jpeg']}
                    alt="Espacio Dérmico"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </AnimatedSection>

            {/* Content */}
            <AnimatedSection delay={200}>
              <div>
                <h2 className="section-title">
                  Tu espacio de bienestar
                </h2>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  {aboutInfo.description}
                </p>
                <Link to="/sobre-mi" className="btn-primary">
                  Conocer más
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact Preview - Simplificado */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="section-title">Visitanos</h2>
            <p className="text-gray-600 mb-8">
              {contactInfo.address}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contacto" className="btn-primary">
                Ver contacto
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href={`tel:${contactInfo.phone}`}
                className="btn-secondary"
              >
                <Phone className="w-5 h-5" />
                Llamar
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
