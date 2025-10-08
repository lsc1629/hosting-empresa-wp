import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CheckCircle, ArrowRight, Zap, Shield, Clock, Users, Globe, Cpu } from 'lucide-react'
import { openAffiliateLink } from '../config/affiliate'

gsap.registerPlugin(ScrollTrigger)

const WordPressHostingPage = () => {
  const { t, i18n } = useTranslation()
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo('.wp-hero', 
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1,
          ease: 'power3.out'
        }
      )

      // Features animation
      gsap.fromTo('.wp-feature', 
        { y: 80, opacity: 0, scale: 0.9 },
        { 
          y: 0, 
          opacity: 1, 
          scale: 1,
          duration: 1,
          ease: 'back.out(1.7)',
          stagger: 0.2,
          scrollTrigger: {
            trigger: '.wp-features',
            start: 'top 70%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const seoData = {
    title: i18n.language === 'es' 
      ? 'Hosting WordPress SiteGround - Optimizado para WordPress 2024'
      : 'WordPress Hosting SiteGround - Optimized for WordPress 2024',
    description: i18n.language === 'es'
      ? 'Hosting WordPress especializado con instalación automática, actualizaciones automáticas, cache avanzado y soporte 24/7. Perfecto para blogs y sitios WordPress.'
      : 'Specialized WordPress hosting with automatic installation, auto-updates, advanced caching, and 24/7 support. Perfect for WordPress blogs and websites.',
    keywords: i18n.language === 'es'
      ? 'hosting wordpress, wordpress hosting, hosting especializado wordpress, hosting optimizado wordpress, siteground wordpress'
      : 'wordpress hosting, specialized wordpress hosting, optimized wordpress hosting, siteground wordpress, wordpress web hosting'
  }

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: i18n.language === 'es' ? 'Instalación en 1 Clic' : '1-Click Installation',
      description: i18n.language === 'es' 
        ? 'Instala WordPress automáticamente en segundos con nuestro instalador optimizado.'
        : 'Install WordPress automatically in seconds with our optimized installer.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: i18n.language === 'es' ? 'Actualizaciones Automáticas' : 'Auto Updates',
      description: i18n.language === 'es'
        ? 'WordPress siempre actualizado automáticamente para máxima seguridad.'
        : 'WordPress always automatically updated for maximum security.'
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: i18n.language === 'es' ? 'Cache Avanzado' : 'Advanced Caching',
      description: i18n.language === 'es'
        ? 'Sistema de cache especializado que acelera tu WordPress hasta 5x.'
        : 'Specialized caching system that speeds up your WordPress up to 5x.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: i18n.language === 'es' ? 'Soporte WordPress' : 'WordPress Support',
      description: i18n.language === 'es'
        ? 'Expertos en WordPress disponibles 24/7 para ayudarte.'
        : 'WordPress experts available 24/7 to help you.'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: i18n.language === 'es' ? 'CDN Gratuito' : 'Free CDN',
      description: i18n.language === 'es'
        ? 'Red de distribución global incluida para máxima velocidad.'
        : 'Global distribution network included for maximum speed.'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: i18n.language === 'es' ? 'Backups Diarios' : 'Daily Backups',
      description: i18n.language === 'es'
        ? 'Copias de seguridad automáticas diarias de tu sitio WordPress.'
        : 'Automatic daily backups of your WordPress site.'
    }
  ]

  return (
    <div ref={sectionRef} className="min-h-screen bg-gray-950 text-gray-100">
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <link rel="canonical" href={`https://yourdomain.com/${i18n.language}/wordpress-hosting`} />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content={`https://yourdomain.com/${i18n.language}/wordpress-hosting`} />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "WordPress Hosting SiteGround",
            "description": seoData.description,
            "brand": {
              "@type": "Brand",
              "name": "SiteGround"
            },
            "offers": {
              "@type": "Offer",
              "price": "2.99",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock"
            }
          })}
        </script>
      </Helmet>

      {/* Breadcrumbs */}
      <div className="container-custom pt-24 pb-8">
        <nav className="flex text-sm text-gray-400">
          <Link to="/" className="hover:text-primary-400 transition-colors">
            {i18n.language === 'es' ? 'Inicio' : 'Home'}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-200">
            {i18n.language === 'es' ? 'Hosting WordPress' : 'WordPress Hosting'}
          </span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="wp-hero section-padding bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
            {i18n.language === 'es' 
              ? 'Hosting WordPress 3x Más Rápido'
              : 'WordPress Hosting 3x Faster'
            }
          </h1>
          <div className="flex items-center justify-center space-x-2 mb-6">
            <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
            <span className="text-xl md:text-2xl font-semibold text-blue-400">
              {i18n.language === 'es' ? 'Optimizado por Expertos WP' : 'Optimized by WP Experts'}
            </span>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            {i18n.language === 'es'
              ? 'Tu WordPress carga en <2 segundos vs 8 segundos promedio. Infraestructura especializada que acelera tu sitio y aumenta conversiones.'
              : 'Your WordPress loads in <2 seconds vs 8 seconds average. Specialized infrastructure that speeds up your site and increases conversions.'
            }
          </p>

          {/* Social Proof for WordPress */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-400 mb-8">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              <span>{i18n.language === 'es' ? 'Únete a 50,000+ sitios WordPress' : 'Join 50,000+ WordPress sites'}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
              <span>{i18n.language === 'es' ? 'Instalación en 60 segundos' : '60-second installation'}</span>
            </div>
          </div>

          {/* Progressive CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button
              onClick={() => openAffiliateLink()}
              className="btn-primary text-xl px-8 py-4 relative overflow-hidden group"
            >
              <span className="relative z-10">
                {i18n.language === 'es' ? 'Probar Gratis 30 Días' : 'Try Free 30 Days'}
              </span>
              <ArrowRight className="w-6 h-6 ml-2 relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </button>
            <button
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary text-xl px-8 py-4 border-2 border-gray-600 hover:border-primary-400 transition-all duration-300"
            >
              {i18n.language === 'es' ? 'Ver Características' : 'View Features'}
            </button>
          </div>

          <p className="text-gray-400">
            {i18n.language === 'es' 
              ? 'Desde $2.99/mes - Sin compromiso, cancela cuando quieras'
              : 'From $2.99/month - No commitment, cancel anytime'
            }
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="wp-features section-padding">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            {i18n.language === 'es' 
              ? 'Características Especializadas para WordPress'
              : 'Specialized WordPress Features'
            }
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="wp-feature glass-effect p-8 rounded-2xl border border-primary-500/20 hover:border-primary-500/40 transition-all duration-300">
                <div className="w-16 h-16 bg-primary-500/20 rounded-2xl flex items-center justify-center mb-6 text-primary-400">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                {i18n.language === 'es'
                  ? '¿Por qué elegir nuestro Hosting WordPress?'
                  : 'Why choose our WordPress Hosting?'
                }
              </h2>
              <div className="space-y-6">
                {[
                  i18n.language === 'es' ? 'Instalación automática de WordPress en 1 clic' : 'Automatic 1-click WordPress installation',
                  i18n.language === 'es' ? 'Actualizaciones automáticas de seguridad' : 'Automatic security updates',
                  i18n.language === 'es' ? 'Cache especializado para WordPress' : 'Specialized WordPress caching',
                  i18n.language === 'es' ? 'Soporte técnico experto en WordPress' : 'Expert WordPress technical support',
                  i18n.language === 'es' ? 'Optimización automática de base de datos' : 'Automatic database optimization',
                  i18n.language === 'es' ? 'CDN gratuito para máxima velocidad' : 'Free CDN for maximum speed'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-accent-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass-effect p-8 rounded-2xl border border-accent-500/20">
              <h3 className="text-2xl font-bold mb-6 text-center">
                {i18n.language === 'es' ? 'Plan Recomendado' : 'Recommended Plan'}
              </h3>
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-white mb-2">$6.99/mes</div>
                <div className="text-gray-400 line-through">$14.99/mes</div>
                <div className="text-accent-400 font-bold">
                  {i18n.language === 'es' ? 'Ahorra 53%' : 'Save 53%'}
                </div>
              </div>
              <button
                onClick={() => openAffiliateLink()}
                className="w-full btn-primary py-4"
              >
                {i18n.language === 'es' ? 'Comenzar Ahora' : 'Get Started'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-900 to-accent-900">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {i18n.language === 'es'
              ? '¿Listo para potenciar tu WordPress?'
              : 'Ready to power up your WordPress?'
            }
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            {i18n.language === 'es'
              ? 'Únete a miles de usuarios que confían en nuestro hosting especializado para WordPress.'
              : 'Join thousands of users who trust our specialized WordPress hosting.'
            }
          </p>
          <button
            onClick={() => openAffiliateLink()}
            className="btn-primary text-xl px-8 py-4"
          >
            {i18n.language === 'es' ? 'Comenzar Gratis' : 'Start Free'}
            <ArrowRight className="w-6 h-6 ml-2" />
          </button>
        </div>
      </section>
    </div>
  )
}

export default WordPressHostingPage
