import { useState, useEffect } from 'react'
import { quotes } from '../../data/services'
import { useInView } from '../../hooks/useScroll'

const QuoteSection = () => {
  const [currentQuote, setCurrentQuote] = useState(0)
  const { ref, isVisible } = useInView()

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section 
      ref={ref}
      className={`py-16 md:py-20 bg-primary-50 transition-all duration-700 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          <div className="relative min-h-[100px] flex items-center justify-center">
            {quotes.map((quote, index) => (
              <blockquote
                key={index}
                className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 ${
                  index === currentQuote ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <p className="text-xl md:text-2xl italic text-primary-700 font-display mb-4">
                  "{quote.text}"
                </p>
                <cite className="text-primary-500 text-sm not-italic">
                  — {quote.author}
                </cite>
              </blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default QuoteSection
