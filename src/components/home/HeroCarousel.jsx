import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { heroSlides } from '../../data/services'

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }, [])

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [nextSlide])

  return (
    <section className="relative h-[85vh] min-h-[500px] max-h-[700px] overflow-hidden">
      {/* Slides */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/25 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative z-10 h-full container-custom flex items-center">
            <div className="max-w-xl pt-16">
              <h1 
                className={`font-display text-3xl sm:text-4xl md:text-5xl text-white mb-4 leading-tight
                            transition-all duration-700 ${
                              index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                            }`}
              >
                {slide.title}
              </h1>

              <p 
                className={`text-white/80 mb-6 max-w-md
                            transition-all duration-700 delay-100 ${
                              index === currentSlide ? 'opacity-100' : 'opacity-0'
                            }`}
              >
                {slide.subtitle}
              </p>

              <div 
                className={`flex flex-wrap gap-3 transition-all duration-700 delay-200 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <Link to={slide.link} className="btn-primary">
                  {slide.cta}
                </Link>
                <a
                  href="https://api.whatsapp.com/message/LTCMUGTXAYKSO1?autoload=1&app_absent=0&utm_source=ig"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full border border-white/40 text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-gray-900 transition-all flex items-center justify-center"
                >
                  Reservar
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
        <div className="flex items-center gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide
                  ? 'w-6 h-2 bg-white'
                  : 'w-2 h-2 bg-white/40'
              }`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default HeroCarousel
