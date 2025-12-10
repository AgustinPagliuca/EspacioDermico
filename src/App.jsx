import { Routes, Route } from 'react-router-dom'
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

function App() {
  // Scroll al top cuando cambia la ruta
  useScrollToTop()

  return (
    <div className="min-h-screen flex flex-col">
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
