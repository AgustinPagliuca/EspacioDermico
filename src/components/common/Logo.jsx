/**
 * Logo de Espacio Dérmico
 * Usa la imagen del logo diseñado
 */

const Logo = ({ size = 48, showText = false, className = '' }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img 
        src="/logoRedondo.png" 
        alt="Espacio Dérmico" 
        style={{ height: size }}
        className="object-contain"
      />
    </div>
  )
}

// Versión solo del ícono (silueta) sin texto
export const LogoIcon = ({ size = 48, className = '' }) => {
  return (
    <img 
      src="/logoRedondo.png" 
      alt="Espacio Dérmico" 
      style={{ height: size }}
      className={`object-contain ${className}`}
    />
  )
}

export default Logo
