import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Search } from 'lucide-react'

// Components
import SectionHeader from '../components/common/SectionHeader'
import ServiceCard from '../components/services/ServiceCard'
import ConsultaBanner from '../components/home/ConsultaBanner'

// Data
import { services } from '../data/services'

// Hook
import { useInView } from '../hooks/useScroll'
import { useLocation } from 'react-router-dom'

const Services = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const location = useLocation()
  const SITE_URL = 'https://espaciodermico.com.ar'
  const canonicalUrl = `${SITE_URL}${location.pathname || '/servicios'}`

  // Categorías únicas
  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'facial', name: 'Faciales', services: ['cosmiatria', 'hifu', 'cejas'] },
    { id: 'corporal', name: 'Corporales', services: ['depilacion', 'exfoliacion-corporal', 'masajes'] },
    { id: 'manos-pies', name: 'Manos y Pies', services: ['manicuria', 'pedicuria'] },
  ]

  // Filtrar servicios
  const filteredServices = services.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.shortDescription.toLowerCase().includes(searchTerm.toLowerCase())
    
    if (selectedCategory === 'all') return matchesSearch
    
    const category = categories.find(c => c.id === selectedCategory)
    return matchesSearch && category?.services?.includes(service.id)
  })

  return (
    <div className="pt-16">
      <Helmet>
        <title>Servicios de estética en Santos Lugares | Espacio Dérmico</title>
        <meta
          name="description"
          content="Conocé todos nuestros servicios: cosmiatría, HIFU, masajes, depilación, manicuría, pedicuría y más en Santos Lugares."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="Servicios de estética | Espacio Dérmico" />
        <meta property="og:description" content="Tratamientos faciales y corporales profesionales en Santos Lugares." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="twitter:title" content="Servicios de estética | Espacio Dérmico" />
        <meta property="twitter:description" content="Elegí entre HIFU, masajes, cosmiatría, depilación y más." />
      </Helmet>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2" />
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="badge mb-4">Nuestros Servicios</span>
            <h1 className="font-display text-display-lg md:text-display-xl text-gray-900 mb-6">
              Tratamientos para tu <span className="text-gradient">bienestar</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Descubrí nuestra amplia gama de servicios diseñados para cuidar tu piel, 
              tu cuerpo y tu bienestar integral.
            </p>

            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="search"
                id="search"
                name="search"
                placeholder="Buscar servicios..."
                autoComplete="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input-field pl-12"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-100 sticky top-16 z-30">
        <div className="container-custom">
          <div className="flex items-center justify-center gap-2 flex-wrap">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-primary-500 text-white shadow-soft'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          {filteredServices.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredServices.map((service, index) => (
                <ServiceGridItem key={service.id} service={service} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg mb-4">
                No encontramos servicios que coincidan con tu búsqueda.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('')
                  setSelectedCategory('all')
                }}
                className="btn-secondary"
              >
                Ver todos los servicios
              </button>
            </div>
          )}
        </div>
      </section>

      {/* FAQ local */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="font-display text-2xl md:text-3xl text-gray-900 mb-6">Preguntas frecuentes</h2>
          <div className="space-y-4 text-gray-700">
            <div>
              <p className="font-semibold text-gray-900">¿Dónde están ubicados?</p>
              <p>Estamos en Dr. Carbone 3748, Santos Lugares, con fácil acceso desde Tres de Febrero y Villa Devoto.</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900">¿Cómo reservo un turno?</p>
              <p>Escribinos por WhatsApp al 11-6507-2537 o desde el botón “Reservar” en cada servicio.</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900">¿Qué tratamientos ofrecen?</p>
              <p>Cosmiatría, HIFU, masajes, depilación, perfilado de cejas, exfoliación corporal, manicuría y pedicuría.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Consulta Banner */}
      <ConsultaBanner />
    </div>
  )
}

// Service Grid Item with animation
const ServiceGridItem = ({ service, index }) => {
  const { ref, isVisible } = useInView()

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${(index % 6) * 100}ms` }}
    >
      <ServiceCard service={service} />
    </div>
  )
}

export default Services
