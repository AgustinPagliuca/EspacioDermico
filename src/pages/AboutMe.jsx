import { Link, useLocation } from 'react-router-dom'
import { ArrowRight, Award, Heart, Star, Users } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

// Components
import SectionHeader from '../components/common/SectionHeader'
import ConsultaBanner from '../components/home/ConsultaBanner'

// Data
import { aboutInfo, contactInfo } from '../data/services'
import { images } from '../utils/images'

// Hook
import { useInView } from '../hooks/useScroll'

// Animated wrapper
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

const AboutMe = () => {
  const location = useLocation()
  const SITE_URL = 'https://espaciodermico.com.ar'
  const canonicalUrl = `${SITE_URL}${location.pathname || '/sobre-mi'}`

  const stats = [
    { icon: Users, value: '+1500', label: 'Clientes satisfechos' },
    { icon: Star, value: '+15', label: 'Años de experiencia' },
    { icon: Award, value: '8', label: 'Servicios especializados' },
    { icon: Heart, value: '100%', label: 'Dedicación' },
  ]

  return (
    <div className="pt-24">
      <Helmet>
        <title>Sobre Espacio Dérmico | Estética y bienestar</title>
        <meta
          name="description"
          content="Conocé Espacio Dérmico: experiencia en cosmiatría, HIFU y cuidados de la piel en Santos Lugares."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="Sobre Espacio Dérmico" />
        <meta property="og:description" content="Profesionales en estética y bienestar en Santos Lugares." />
        <meta property="og:url" content={canonicalUrl} />
        <meta name="twitter:title" content="Sobre Espacio Dérmico" />
        <meta name="twitter:description" content="Trayectoria en cosmiatría y tratamientos faciales y corporales." />
      </Helmet>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2" />
        
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content */}
            <AnimatedSection>
              <span className="badge mb-4">Sobre Mí</span>
              <h1 className="font-display text-display-md md:text-display-lg text-gray-900 mb-6">
                Bienvenidos a{' '}
                <span className="text-gradient">Espacio Dérmico</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {aboutInfo.description}
              </p>
            </AnimatedSection>

            {/* Image */}
            <AnimatedSection delay={200}>
              <div className="relative">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden">
                  <img
                    src={images['espacioDermico.jpeg']}
                    alt="Espacio Dérmico"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary-100 rounded-2xl -z-10" />
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary-200 rounded-full -z-10" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary-50 flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-primary-500" />
                  </div>
                  <p className="font-display text-3xl md:text-4xl font-semibold text-gray-900 mb-1">
                    {stat.value}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {stat.label}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionHeader
            title="Nuestros Valores"
            subtitle="Los pilares que guían cada tratamiento y atención que brindamos"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {aboutInfo.values.map((value, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="card h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl font-display font-semibold text-primary-500">
                        {index + 1}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-gray-900 mb-2">
                        {value.title}
                      </h3>
                      <p className="text-gray-600">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Image Grid */}
            <AnimatedSection>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80"
                      alt="Tratamiento facial"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square rounded-2xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80"
                      alt="Relajación"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="aspect-square rounded-2xl overflow-hidden">
                    <img
                      src={images['depilacion.jpeg']}
                      alt="Espacio de trabajo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80"
                      alt="Manicuría"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Content */}
            <AnimatedSection delay={200}>
              <div className="lg:py-8">
                <span className="badge mb-4">Nuestra Misión</span>
                <h2 className="section-title">
                  Cuidar tu bienestar es nuestra prioridad
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
                  <p>
                    En Espacio Dérmico creemos que cada persona merece un momento para 
                    cuidarse y sentirse bien. Por eso, cada tratamiento está diseñado 
                    pensando en tus necesidades específicas.
                  </p>
                  <p>
                    Nuestro compromiso es brindarte no solo resultados visibles, sino 
                    también una experiencia de relajación y bienestar en cada visita. 
                    Utilizamos productos de alta calidad y técnicas actualizadas para 
                    ofrecerte lo mejor.
                  </p>
                  <p>
                    Te invitamos a conocer nuestro espacio y descubrir cómo podemos 
                    ayudarte a lucir y sentirte increíble.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/servicios" className="btn-primary">
                    Ver servicios
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link to="/contacto" className="btn-secondary">
                    Contactar
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Location Preview */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="bg-white rounded-3xl overflow-hidden shadow-soft">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Map placeholder */}
              <div className="aspect-video lg:aspect-auto bg-gray-200 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.253899844138!2d-58.54686922330102!3d-34.59774065718429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb7e2c02cb66b%3A0xa2cac9855ccd3656!2sEspacio%20D%C3%A9rmico!5e0!3m2!1ses-419!2sar!4v1765327952138!5m2!1ses-419!2sar"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '300px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de Espacio Dérmico"
                  className="absolute inset-0"
                />
              </div>

              {/* Info */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h3 className="font-display text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                  Visitanos
                </h3>
                <p className="text-gray-600 mb-6">
                  Te esperamos en nuestro espacio, donde encontrarás un ambiente 
                  cálido y profesional para tu cuidado personal.
                </p>
                
                <div className="space-y-3 text-gray-600">
                  <p className="flex items-center gap-3">
                    <span className="text-primary-500">📍</span>
                    {contactInfo.address}
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="text-primary-500">📞</span>
                    {contactInfo.phone} / {contactInfo.landline}
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="text-primary-500">🕐</span>
                    {contactInfo.hours.weekdays}
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="text-primary-500">🕐</span>
                    {contactInfo.hours.saturday}
                  </p>
                </div>

                <div className="mt-8">
                  <a
                    href={contactInfo.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    Reservar turno
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consulta Banner */}
      <ConsultaBanner />
    </div>
  )
}

export default AboutMe
