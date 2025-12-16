import { useState } from 'react'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  Instagram,
  Facebook,
  MessageCircle,
  CheckCircle
} from 'lucide-react'

// Components
import SectionHeader from '../components/common/SectionHeader'

// Data
import { contactInfo } from '../data/services'

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

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Construir mensaje de WhatsApp
    const message = `Hola! Mi nombre es ${formData.name}.
    
${formData.service ? `Me interesa el servicio de: ${formData.service}` : ''}

${formData.message}

Mis datos de contacto:
📧 ${formData.email}
📞 ${formData.phone}`

    // Abrir WhatsApp con el mensaje
    window.open(
      contactInfo.whatsapp,
      '_blank'
    )

    setIsSubmitted(true)
    
    // Reset después de 3 segundos
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      })
    }, 3000)
  }

  const contactCards = [
    {
      icon: MapPin,
      title: 'Dirección',
      content: contactInfo.address,
      link: 'https://maps.app.goo.gl/usRz1wWv95WpXZEG8',
      linkText: 'Ver en Google Maps'
    },
    {
      icon: Phone,
      title: 'Teléfono',
      content: `${contactInfo.phone}`,
    },
    {
      icon: Mail,
      title: 'Email',
      content: contactInfo.email,
      link: `mailto:${contactInfo.email}`,
      linkText: 'Enviar email'
    },
    {
      icon: Clock,
      title: 'Horarios',
      content: (
        <>
          <span className="block">{contactInfo.hours.weekdays}</span>
          <span className="block">{contactInfo.hours.saturday}</span>
        </>
      )
    }
  ]

  const services = [
    'Cosmiatría',
    'HIFU',
    'Pedicuría',
    'Manicuría',
    'Depilación',
    'Perfilado y Laminado de Cejas',
    'Exfoliación Corporal',
    'Masajes',
    'Otro'
  ]

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-50 translate-x-1/3 translate-y-1/3" />
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="badge mb-4">Contacto</span>
            <h1 className="font-display text-display-lg md:text-display-xl text-gray-900 mb-6">
              ¿Cómo podemos <span className="text-gradient">ayudarte</span>?
            </h1>
            <p className="text-xl text-gray-600">
              Estamos aquí para responder tus consultas y ayudarte a reservar tu turno. 
              ¡Contáctanos por el medio que prefieras!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactCards.map((card, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="card text-center h-full">
                  <div className="w-14 h-14 rounded-2xl bg-primary-50 flex items-center justify-center mx-auto mb-4">
                    <card.icon className="w-7 h-7 text-primary-500" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-gray-900 mb-2">
                    {card.title}
                  </h3>
                  <div className="text-gray-600 text-sm mb-3">
                    {card.content}
                  </div>
                  {card.link && (
                    <a
                      href={card.link}
                      target={card.link.startsWith('http') ? '_blank' : '_self'}
                      rel="noopener noreferrer"
                      className="text-primary-500 text-sm font-medium hover:text-primary-600 transition-colors"
                    >
                      {card.linkText} →
                    </a>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Social Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <AnimatedSection className="lg:col-span-3">
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-soft">
                <h2 className="font-display text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
                  Envianos tu consulta
                </h2>
                <p className="text-gray-600 mb-8">
                  Completá el formulario y te responderemos a la brevedad por WhatsApp.
                </p>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-10 h-10 text-green-500" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-gray-900 mb-2">
                      ¡Mensaje enviado!
                    </h3>
                    <p className="text-gray-600">
                      Te contactaremos a la brevedad.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Nombre completo *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          autoComplete="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="input-field"
                          placeholder="Tu nombre"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Teléfono *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          autoComplete="tel"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="input-field"
                          placeholder="Tu teléfono"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        autoComplete="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="input-field"
                        placeholder="tu@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                        Servicio de interés
                      </label>
                      <select
                        id="service"
                        name="service"
                        autoComplete="off"
                        value={formData.service}
                        onChange={handleChange}
                        className="input-field"
                      >
                        <option value="">Seleccionar servicio</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Mensaje *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        autoComplete="off"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="input-field resize-none"
                        placeholder="¿En qué podemos ayudarte?"
                      />
                    </div>

                    <button type="submit" className="btn-primary w-full justify-center">
                      <Send className="w-5 h-5" />
                      Enviar por WhatsApp
                    </button>
                  </form>
                )}
              </div>
            </AnimatedSection>

            {/* Social & Quick Contact */}
            <AnimatedSection delay={200} className="lg:col-span-2">
              <div className="space-y-8">
                {/* WhatsApp Direct */}
                <div className="bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-3xl p-8 text-white">
                  <MessageCircle className="w-12 h-12 mb-4" />
                  <h3 className="font-display text-xl font-semibold mb-2">
                    ¿Preferís escribirnos directamente?
                  </h3>
                  <p className="text-white/80 mb-6">
                    Chateá con nosotros por WhatsApp y te respondemos al instante.
                  </p>
                  <a
                    href={contactInfo.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#25D366] font-semibold rounded-full hover:shadow-lg transition-all duration-300"
                  >
                    Abrir WhatsApp
                  </a>
                </div>

                {/* Social Media */}
                <div className="bg-white rounded-3xl p-8 shadow-soft">
                  <h3 className="font-display text-xl font-semibold text-gray-900 mb-4">
                    Seguinos en redes
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Mantenete al tanto de nuestras novedades, promociones y tips de belleza.
                  </p>
                  
                  <div className="space-y-3">
                    <a
                      href={contactInfo.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 hover:bg-primary-50 transition-colors group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center">
                        <Instagram className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 group-hover:text-primary-500 transition-colors">
                          Instagram
                        </p>
                        <p className="text-sm text-gray-500">@elycosmiatra</p>
                      </div>
                    </a>

                    <a
                      href={contactInfo.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 hover:bg-primary-50 transition-colors group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-[#1877F2] flex items-center justify-center">
                        <Facebook className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 group-hover:text-primary-500 transition-colors">
                          Facebook
                        </p>
                        <p className="text-sm text-gray-500">Espacio Dérmico</p>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="bg-primary-50 rounded-3xl p-8">
                  <h3 className="font-display text-xl font-semibold text-gray-900 mb-4">
                    Horarios de atención
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center pb-3 border-b border-primary-100">
                      <span className="text-gray-700">Martes - Viernes</span>
                      <span className="font-medium text-gray-900">9:00 - 19:00</span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-primary-100">
                      <span className="text-gray-700">Sábados</span>
                      <span className="font-medium text-gray-900">9:00 - 16:00</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Domingo - Lunes</span>
                      <span className="font-medium text-gray-500">Cerrado</span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] md:h-[450px] relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.253899844138!2d-58.54686922330102!3d-34.59774065718429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb7e2c02cb66b%3A0xa2cac9855ccd3656!2sEspacio%20D%C3%A9rmico!5e0!3m2!1ses-419!2sar!4v1765327952138!5m2!1ses-419!2sar"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación de Espacio Dérmico - Santos Lugares"
        />
        
        {/* Address overlay */}
        <div className="absolute bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-80">
          <div className="bg-white rounded-2xl p-6 shadow-soft-lg">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-primary-500" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Espacio Dérmico</h4>
                <p className="text-gray-600 text-sm">{contactInfo.address}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
