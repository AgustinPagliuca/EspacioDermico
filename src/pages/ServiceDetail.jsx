import { useParams, Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, Clock, Check, ChevronRight } from 'lucide-react'
import * as Icons from 'lucide-react'

// Components
import ConsultaBanner from '../components/home/ConsultaBanner'

// Data
import { services, contactInfo } from '../data/services'

// Hook
import { useInView } from '../hooks/useScroll'

const ServiceDetail = () => {
  const { serviceId } = useParams()
  const navigate = useNavigate()
  
  // Encontrar el servicio
  const service = services.find(s => s.id === serviceId)
  
  // Si no existe el servicio, redirigir
  if (!service) {
    return (
      <div className="pt-32 pb-20 text-center">
        <div className="container-custom">
          <h1 className="text-2xl font-display text-gray-900 mb-4">
            Servicio no encontrado
          </h1>
          <p className="text-gray-600 mb-8">
            El servicio que buscas no existe o ha sido movido.
          </p>
          <Link to="/servicios" className="btn-primary">
            Ver todos los servicios
          </Link>
        </div>
      </div>
    )
  }

  const IconComponent = Icons[service.icon] || Icons.Sparkles
  
  // Otros servicios para mostrar al final
  const otherServices = services.filter(s => s.id !== serviceId).slice(0, 3)

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] max-h-[600px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={service.heroImage || service.image}
            alt={service.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        </div>

        {/* Content */}
        <div className="absolute inset-0 flex items-end">
          <div className="container-custom pb-12 md:pb-16">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-white/70 text-sm mb-6">
              <Link to="/" className="hover:text-white transition-colors">Inicio</Link>
              <ChevronRight className="w-4 h-4" />
              <Link to="/servicios" className="hover:text-white transition-colors">Servicios</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">{service.name}</span>
            </nav>

            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <IconComponent className="w-8 h-8 text-white" />
              </div>
              <div>
                {service.badge && (
                  <span className="inline-flex items-center px-3 py-1 bg-primary-500 text-white text-xs font-medium rounded-full mb-3">
                    {service.badge}
                  </span>
                )}
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-4">
                  {service.name}
                </h1>
                <p className="text-white/80 text-lg max-w-2xl">
                  {service.shortDescription}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-24 left-4 md:left-8 flex items-center gap-2 text-white/80 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="hidden sm:inline">Volver</span>
        </button>
      </section>

      {/* Description Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="text-lg text-gray-700 leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Treatments Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="font-display text-display-sm md:text-display-md text-gray-900 mb-12">
            {service.treatments.length > 1 ? 'Tratamientos disponibles' : 'Detalle del tratamiento'}
          </h2>

          <div className="grid gap-8">
            {service.treatments.map((treatment, index) => (
              <TreatmentCard key={treatment.id} treatment={treatment} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-custom text-center">
          <h2 className="font-display text-2xl md:text-3xl text-gray-900 mb-4">
            ¿Te interesa este tratamiento?
          </h2>
          <p className="text-gray-600 mb-8 max-w-lg mx-auto">
            Reservá tu turno y consultanos cualquier duda que tengas. 
            Estaremos encantados de asesorarte.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(
                `Hola! Quisiera consultar sobre el servicio de ${service.name}.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Reservar por WhatsApp
            </a>
            <Link to="/contacto" className="btn-secondary">
              Más formas de contacto
            </Link>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="font-display text-display-sm text-gray-900 mb-8 text-center">
            Otros servicios que te pueden interesar
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherServices.map((otherService) => (
              <Link
                key={otherService.id}
                to={`/servicios/${otherService.id}`}
                className="group card flex items-center gap-4"
              >
                <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                  <img
                    src={otherService.image}
                    alt={otherService.name}
                    className="w-full h-full object-cover transition-transform group-hover:scale-110"
                  />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-gray-900 group-hover:text-primary-500 transition-colors">
                    {otherService.name}
                  </h3>
                  <p className="text-sm text-gray-500 line-clamp-1">
                    {otherService.treatments.length} tratamiento{otherService.treatments.length > 1 ? 's' : ''}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Consulta Banner */}
      <ConsultaBanner />
    </div>
  )
}

// Treatment Card Component
const TreatmentCard = ({ treatment, index }) => {
  const { ref, isVisible } = useInView()

  return (
    <div
      ref={ref}
      className={`bg-white rounded-3xl overflow-hidden shadow-soft transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
        {/* Image */}
        <div className="lg:col-span-2 aspect-video lg:aspect-auto">
          <img
            src={treatment.image}
            alt={treatment.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="lg:col-span-3 p-6 md:p-8 lg:p-10 flex flex-col justify-center">
          <h3 className="font-display text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
            {treatment.name}
          </h3>
          
          <p className="text-gray-600 mb-6 leading-relaxed">
            {treatment.description}
          </p>

          {/* Duration */}
          {treatment.duration && (
            <div className="flex items-center gap-2 text-gray-500 mb-4">
              <Clock className="w-5 h-5 text-primary-400" />
              <span>Duración: {treatment.duration}</span>
            </div>
          )}

          {/* Options */}
          {treatment.options && treatment.options.length > 0 && (
            <div className="mb-4">
              <p className="text-sm font-medium text-gray-700 mb-2">Opciones disponibles:</p>
              <div className="flex flex-wrap gap-2">
                {treatment.options.map((option, i) => (
                  <span key={i} className="badge">
                    {option}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Benefits */}
          {treatment.benefits && treatment.benefits.length > 0 && (
            <div className="mb-6">
              <p className="text-sm font-medium text-gray-700 mb-3">Beneficios:</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {treatment.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-600">
                    <Check className="w-4 h-4 text-primary-500 flex-shrink-0" />
                    <span className="text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Zones */}
          {treatment.zones && treatment.zones.length > 0 && (
            <div>
              <p className="text-sm font-medium text-gray-700 mb-2">Zonas disponibles:</p>
              <div className="flex flex-wrap gap-2">
                {treatment.zones.map((zone, i) => (
                  <span key={i} className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full">
                    {zone}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ServiceDetail
