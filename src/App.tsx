import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import WordPressHostingPage from './pages/WordPressHostingPage'
import WooCommerceHostingPage from './pages/WooCommerceHostingPage'
import BusinessHostingPage from './pages/BusinessHostingPage'
import CompareHostingPage from './pages/CompareHostingPage'
import PricingPage from './pages/PricingPage'
import SupportPage from './pages/SupportPage'
import { ROUTE_SLUGS } from './config/routes'

function App() {
  // Generar rutas dinámicamente para todos los idiomas
  const generateRoutes = () => {
    const routes = []
    
    // Rutas principales (inglés por defecto)
    routes.push(<Route key="home" path="/" element={<HomePage />} />)
    routes.push(<Route key="wp-en" path="/wordpress-hosting" element={<WordPressHostingPage />} />)
    routes.push(<Route key="woo-en" path="/woocommerce-hosting" element={<WooCommerceHostingPage />} />)
    routes.push(<Route key="biz-en" path="/business-hosting" element={<BusinessHostingPage />} />)
    routes.push(<Route key="compare-en" path="/compare-hosting" element={<CompareHostingPage />} />)
    routes.push(<Route key="pricing-en" path="/pricing" element={<PricingPage />} />)
    routes.push(<Route key="support-en" path="/support" element={<SupportPage />} />)
    
    // Rutas localizadas para cada idioma
    Object.entries(ROUTE_SLUGS).forEach(([routeKey, slugs]) => {
      Object.entries(slugs).forEach(([lang, path]) => {
        if (lang !== 'en' && path !== '/') { // Evitar duplicar la ruta principal
          const key = `${routeKey}-${lang}`
          switch (routeKey) {
            case 'wordpress':
              routes.push(<Route key={key} path={path} element={<WordPressHostingPage />} />)
              break
            case 'woocommerce':
              routes.push(<Route key={key} path={path} element={<WooCommerceHostingPage />} />)
              break
            case 'business':
              routes.push(<Route key={key} path={path} element={<BusinessHostingPage />} />)
              break
            case 'compare':
              routes.push(<Route key={key} path={path} element={<CompareHostingPage />} />)
              break
            case 'pricing':
              routes.push(<Route key={key} path={path} element={<PricingPage />} />)
              break
            case 'support':
              routes.push(<Route key={key} path={path} element={<SupportPage />} />)
              break
          }
        }
      })
    })
    
    return routes
  }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 overflow-x-hidden">
      <Navbar />
      <Routes>
        {generateRoutes()}
      </Routes>
      <Footer />
    </div>
  )
}

export default App
