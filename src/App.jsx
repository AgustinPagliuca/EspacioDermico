import { Routes, Route, useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useScrollToTop } from './hooks/useScrollToTop'

// Layout components
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import WhatsAppButton from './components/common/WhatsAppButton'

// Pages
import Home from './pages/Home'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import AboutMe from './pages/AboutMe'
import Contact from './pages/Contact'
import { contactInfo } from './data/services'

const SITE_URL = 'https://espaciodermico.com.ar'

function App() {
  useScrollToTop()
  const location = useLocation()
  const canonicalUrl = `${SITE_URL}${location.pathname || '/'}`

  const localBusinessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BeautySalon',
    name: 'Espacio Dérmico',
    image: `${SITE_URL}/logoSolo.png`,
    url: SITE_URL,
    telephone: '+54 11 6507-2537',
    address: {
      '@type': 'PostalAddress',
      streetAddress: contactInfo.address,
      addressLocality: 'Santos Lugares',
      addressRegion: 'Buenos Aires',
      addressCountry: 'AR'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -34.59774065718429,
      longitude: -58.54686922330102
    },
    hasMap: 'https://maps.app.goo.gl/usRz1wWv95WpXZEG8',
    areaServed: ['Santos Lugares', 'Tres de Febrero', 'Villa Devoto', 'San Martín'],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '19:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '09:00',
        closes: '16:00'
      }
    ],
    sameAs: [
      contactInfo.social.instagram,
      contactInfo.social.facebook
    ]
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <html lang="es" />
        <title>Espacio Dérmico | Estética y Bienestar en Santos Lugares</title>
        <meta
          name="description"
          content="Centro de estética y cosmiatría en Santos Lugares. Tratamientos faciales, corporales, HIFU, masajes, manicuría y pedicuría."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:site_name" content="Espacio Dérmico" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content="Espacio Dérmico | Estética y Bienestar" />
        <meta property="og:description" content="Bienestar, cosmiatría y belleza en Santos Lugares." />
        <meta property="og:image" content={`${SITE_URL}/logoSolo.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Espacio Dérmico" />
        <meta name="twitter:description" content="Tratamientos profesionales para tu piel y bienestar." />
        <meta name="twitter:image" content={`${SITE_URL}/logoSolo.png`} />
        <script type="application/ld+json">{JSON.stringify(localBusinessJsonLd)}</script>
      </Helmet>
      <Navbar />
      
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Services />} />
          <Route path="/servicios/:serviceId" element={<ServiceDetail />} />
          <Route path="/sobre-mi" element={<AboutMe />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
      </main>
      
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
