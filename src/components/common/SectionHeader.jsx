import { useInView } from '../../hooks/useScroll'

const SectionHeader = ({ 
  title, 
  subtitle, 
  align = 'center',
  className = ''
}) => {
  const { ref, isVisible } = useInView()

  return (
    <div 
      ref={ref}
      className={`mb-10 ${align === 'center' ? 'text-center' : 'text-left'} ${className} 
                  transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <h2 className="font-display text-2xl md:text-3xl text-gray-900 mb-2">
        {title}
      </h2>
      {subtitle && (
        <p className={`text-gray-500 ${align === 'center' ? 'max-w-xl mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}

export default SectionHeader
