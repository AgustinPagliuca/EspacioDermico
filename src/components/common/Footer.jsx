import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Instagram } from 'lucide-react'
import { contactInfo, services } from '../../data/services'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary-800 text-white/80">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <p className="font-display text-xl text-white">Espacio Dérmico</p>
              <p className="text-xs text-white/60 italic">Estética & Bienestar</p>
            </Link>
            <p className="text-sm text-white/60 mb-4">
              Tu espacio de cuidado personal.
            </p>
            <a
              href={contactInfo.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm hover:text-white transition-colors"
            >
              <Instagram className="w-4 h-4" />
              @elycosmiatra
            </a>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-medium mb-4">Enlaces</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Inicio</Link></li>
              <li><Link to="/servicios" className="hover:text-white transition-colors">Servicios</Link></li>
              <li><Link to="/sobre-mi" className="hover:text-white transition-colors">Sobre Mí</Link></li>
              <li><Link to="/contacto" className="hover:text-white transition-colors">Contacto</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-medium mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm">
              {services.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link 
                    to={`/servicios/${service.id}`}
                    className="hover:text-white transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-medium mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>{contactInfo.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href={`tel:${contactInfo.phone}`} className="hover:text-white transition-colors">
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-white transition-colors">
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="container-custom py-4">
          <p className="text-center text-xs text-white/50">
            © {currentYear} Agustin Pagliuca Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
