import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import { gsap } from 'gsap'
import { openAffiliateLink } from '../config/affiliate'
import { getLocalizedRoute } from '../config/routes'

const Navbar = () => {
  const { t, i18n } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Animate navbar on mount
    gsap.fromTo('.navbar', 
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    )
  }, [])



  return (
    <nav className={`navbar fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'glass-effect shadow-2xl' : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">HE</span>
            </div>
            <span className="text-xl font-bold gradient-text">Hosting Empresas</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors duration-200">
                <span>{i18n.language === 'es' ? 'Servicios' : 'Services'}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-gray-900/95 backdrop-blur-md border border-gray-700/50 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-2">
                  <Link
                    to={getLocalizedRoute('wordpress', i18n.language)}
                    className="block px-4 py-3 text-sm text-gray-300 hover:bg-white/10 hover:text-white rounded-md transition-colors"
                  >
                    <div className="font-medium">
                      {i18n.language === 'es' ? 'Hosting WordPress' : 'WordPress Hosting'}
                    </div>
                    <div className="text-xs text-gray-400">
                      {i18n.language === 'es' ? 'Optimizado para WordPress' : 'Optimized for WordPress'}
                    </div>
                  </Link>
                  <Link
                    to={getLocalizedRoute('woocommerce', i18n.language)}
                    className="block px-4 py-3 text-sm text-gray-300 hover:bg-white/10 hover:text-white rounded-md transition-colors"
                  >
                    <div className="font-medium">
                      {i18n.language === 'es' ? 'Hosting WooCommerce' : 'WooCommerce Hosting'}
                    </div>
                    <div className="text-xs text-gray-400">
                      {i18n.language === 'es' ? 'Para tiendas online' : 'For online stores'}
                    </div>
                  </Link>
                  <Link
                    to={getLocalizedRoute('business', i18n.language)}
                    className="block px-4 py-3 text-sm text-gray-300 hover:bg-white/10 hover:text-white rounded-md transition-colors"
                  >
                    <div className="font-medium">
                      {i18n.language === 'es' ? 'Hosting Empresarial' : 'Business Hosting'}
                    </div>
                    <div className="text-xs text-gray-400">
                      {i18n.language === 'es' ? 'Soluciones corporativas' : 'Corporate solutions'}
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <Link
              to={getLocalizedRoute('compare', i18n.language)}
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              {i18n.language === 'es' ? 'Comparar' : 'Compare'}
            </Link>

            {/* Pricing - página independiente */}
            <Link
              to={getLocalizedRoute('pricing', i18n.language)}
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              {t('nav.pricing')}
            </Link>

            {/* Support - página independiente */}
            <Link
              to={getLocalizedRoute('support', i18n.language)}
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              {t('nav.support')}
            </Link>


            <button
              onClick={() => openAffiliateLink()}
              className="btn-primary"
            >
              {t('nav.cta')}
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-white transition-colors duration-200"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 bg-gray-900/95 backdrop-blur-md border border-gray-700/50 rounded-lg">
            <div className="flex flex-col space-y-4 p-4">
              {/* Services Section */}
              <div className="border-b border-gray-700 pb-4">
                <p className="text-sm text-gray-400 mb-3">
                  {i18n.language === 'es' ? 'Servicios' : 'Services'}
                </p>
                <div className="space-y-2">
                  <Link
                    to={getLocalizedRoute('wordpress', i18n.language)}
                    onClick={() => setIsOpen(false)}
                    className="block text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {i18n.language === 'es' ? 'Hosting WordPress' : 'WordPress Hosting'}
                  </Link>
                  <Link
                    to={getLocalizedRoute('woocommerce', i18n.language)}
                    onClick={() => setIsOpen(false)}
                    className="block text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {i18n.language === 'es' ? 'Hosting WooCommerce' : 'WooCommerce Hosting'}
                  </Link>
                  <Link
                    to={getLocalizedRoute('business', i18n.language)}
                    onClick={() => setIsOpen(false)}
                    className="block text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {i18n.language === 'es' ? 'Hosting Empresarial' : 'Business Hosting'}
                  </Link>
                  <Link
                    to={getLocalizedRoute('compare', i18n.language)}
                    onClick={() => setIsOpen(false)}
                    className="block text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {i18n.language === 'es' ? 'Comparar Hosting' : 'Compare Hosting'}
                  </Link>
                </div>
              </div>

              {/* Navigation sections - páginas independientes */}
              <Link
                to={getLocalizedRoute('pricing', i18n.language)}
                onClick={() => setIsOpen(false)}
                className="text-left text-gray-300 hover:text-white transition-colors duration-200"
              >
                {t('nav.pricing')}
              </Link>
              <Link
                to={getLocalizedRoute('support', i18n.language)}
                onClick={() => setIsOpen(false)}
                className="text-left text-gray-300 hover:text-white transition-colors duration-200"
              >
                {t('nav.support')}
              </Link>
              
              
              <button
                onClick={() => {
                  openAffiliateLink()
                  setIsOpen(false)
                }}
                className="btn-primary w-full mt-4"
              >
                {t('nav.cta')}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
