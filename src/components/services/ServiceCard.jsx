import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const ServiceCard = ({ service }) => {
  return (
    <Link
      to={`/servicios/${service.id}`}
      className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all h-full"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={service.image}
          alt={service.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Badge */}
        {service.badge && (
          <div className="absolute top-3 right-3">
            <span className="inline-block px-3 py-1 bg-white/90 text-primary-600 text-xs font-medium rounded-full">
              {service.badge}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-display text-lg text-gray-900 mb-2 group-hover:text-primary-500 transition-colors">
          {service.name}
        </h3>
        <p className="text-gray-500 text-sm line-clamp-2 mb-3">
          {service.shortDescription}
        </p>
        
        <div className="flex items-center gap-1 text-primary-500 text-sm">
          <span>Ver más</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  )
}

export default ServiceCard
