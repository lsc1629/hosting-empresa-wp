import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CheckCircle, X, ArrowRight, Star, Zap, Shield } from 'lucide-react'
import { openAffiliateLink } from '../config/affiliate'

gsap.registerPlugin(ScrollTrigger)

const CompareHostingPage = () => {
  const { i18n } = useTranslation()
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo('.compare-hero', 
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1,
          ease: 'power3.out'
        }
      )

      // Table animation
      gsap.fromTo('.compare-table', 
        { y: 80, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.compare-table',
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
      ? 'Comparar Hosting SiteGround vs Competencia - Mejor Hosting 2024'
      : 'Compare SiteGround Hosting vs Competition - Best Hosting 2024',
    description: i18n.language === 'es'
      ? 'Comparación detallada de hosting: SiteGround vs otros proveedores. Velocidad, precio, soporte y características. Encuentra el mejor hosting para tu sitio web.'
      : 'Detailed hosting comparison: SiteGround vs other providers. Speed, price, support, and features. Find the best hosting for your website.',
    keywords: i18n.language === 'es'
      ? 'comparar hosting, siteground vs hostgator, mejor hosting, comparación hosting, hosting barato vs premium'
      : 'compare hosting, siteground vs hostgator, best hosting, hosting comparison, cheap vs premium hosting'
  }

  const competitors = [
    {
      name: 'SiteGround',
      logo: '🏆',
      price: '$2.99',
      uptime: '99.9%',
      speed: '⚡⚡⚡',
      support: '24/7 Expert',
      ssl: true,
      backup: true,
      cdn: true,
      cache: true,
      staging: true,
      migration: true,
      recommended: true
    },
    {
      name: 'HostGator',
      logo: '🐊',
      price: '$3.95',
      uptime: '99.8%',
      speed: '⚡⚡',
      support: '24/7 Basic',
      ssl: true,
      backup: false,
      cdn: false,
      cache: false,
      staging: false,
      migration: true,
      recommended: false
    },
    {
      name: 'Bluehost',
      logo: '🔵',
      price: '$4.95',
      uptime: '99.7%',
      speed: '⚡',
      support: 'Business Hours',
      ssl: true,
      backup: false,
      cdn: false,
      cache: false,
      staging: false,
      migration: false,
      recommended: false
    },
    {
      name: 'GoDaddy',
      logo: '🟢',
      price: '$5.99',
      uptime: '99.6%',
      speed: '⚡',
      support: 'Email Only',
      ssl: false,
      backup: false,
      cdn: false,
      cache: false,
      staging: false,
      migration: false,
      recommended: false
    }
  ]

  const features = [
    { key: 'price', label: i18n.language === 'es' ? 'Precio/mes' : 'Price/month' },
    { key: 'uptime', label: i18n.language === 'es' ? 'Uptime' : 'Uptime' },
    { key: 'speed', label: i18n.language === 'es' ? 'Velocidad' : 'Speed' },
    { key: 'support', label: i18n.language === 'es' ? 'Soporte' : 'Support' },
    { key: 'ssl', label: i18n.language === 'es' ? 'SSL Gratuito' : 'Free SSL' },
    { key: 'backup', label: i18n.language === 'es' ? 'Backups Diarios' : 'Daily Backups' },
    { key: 'cdn', label: i18n.language === 'es' ? 'CDN Gratuito' : 'Free CDN' },
    { key: 'cache', label: i18n.language === 'es' ? 'Cache Avanzado' : 'Advanced Cache' },
    { key: 'staging', label: i18n.language === 'es' ? 'Entorno Staging' : 'Staging Environment' },
    { key: 'migration', label: i18n.language === 'es' ? 'Migración Gratuita' : 'Free Migration' }
  ]

  return (
    <div ref={sectionRef} className="min-h-screen bg-gray-950 text-gray-100">
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <link rel="canonical" href={`https://yourdomain.com/${i18n.language}/compare-hosting`} />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content={`https://yourdomain.com/${i18n.language}/compare-hosting`} />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ComparisonTable",
            "name": "Hosting Providers Comparison",
            "description": seoData.description,
            "about": [
              {
                "@type": "Product",
                "name": "SiteGround Hosting",
                "brand": "SiteGround"
              },
              {
                "@type": "Product", 
                "name": "HostGator Hosting",
                "brand": "HostGator"
              }
            ]
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
            {i18n.language === 'es' ? 'Comparar Hosting' : 'Compare Hosting'}
          </span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="compare-hero section-padding bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
            {i18n.language === 'es' 
              ? 'Comparar Proveedores de Hosting'
              : 'Compare Hosting Providers'
            }
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            {i18n.language === 'es'
              ? 'Comparación detallada de características, precios y rendimiento de los principales proveedores de hosting.'
              : 'Detailed comparison of features, prices, and performance of leading hosting providers.'
            }
          </p>
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4" />
              <span>{i18n.language === 'es' ? 'Datos verificados' : 'Verified data'}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="w-4 h-4" />
              <span>{i18n.language === 'es' ? 'Tests reales' : 'Real tests'}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="compare-table section-padding">
        <div className="container-custom">
          <div className="overflow-x-auto">
            <table className="w-full glass-effect rounded-2xl border border-white/10">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="p-6 text-left">
                    {i18n.language === 'es' ? 'Proveedor' : 'Provider'}
                  </th>
                  {competitors.map((competitor, index) => (
                    <th key={index} className="p-6 text-center relative">
                      <div className="flex flex-col items-center space-y-2">
                        <div className="text-3xl">{competitor.logo}</div>
                        <div className="font-bold">{competitor.name}</div>
                        {competitor.recommended && (
                          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                            <div className="bg-accent-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
                              <Star className="w-3 h-3 fill-current" />
                              <span>{i18n.language === 'es' ? 'Recomendado' : 'Recommended'}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {features.map((feature, featureIndex) => (
                  <tr key={featureIndex} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="p-6 font-medium">{feature.label}</td>
                    {competitors.map((competitor, compIndex) => (
                      <td key={compIndex} className="p-6 text-center">
                        {feature.key === 'price' && (
                          <div className="text-lg font-bold text-primary-400">
                            {competitor[feature.key as keyof typeof competitor]}
                          </div>
                        )}
                        {feature.key === 'uptime' && (
                          <div className="text-lg font-bold">
                            {competitor[feature.key as keyof typeof competitor]}
                          </div>
                        )}
                        {feature.key === 'speed' && (
                          <div className="text-lg">
                            {competitor[feature.key as keyof typeof competitor]}
                          </div>
                        )}
                        {feature.key === 'support' && (
                          <div className="text-sm">
                            {competitor[feature.key as keyof typeof competitor]}
                          </div>
                        )}
                        {['ssl', 'backup', 'cdn', 'cache', 'staging', 'migration'].includes(feature.key) && (
                          <div className="flex justify-center">
                            {competitor[feature.key as keyof typeof competitor] ? (
                              <CheckCircle className="w-6 h-6 text-green-400" />
                            ) : (
                              <X className="w-6 h-6 text-red-400" />
                            )}
                          </div>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr>
                  <td className="p-6 font-bold">
                    {i18n.language === 'es' ? 'Acción' : 'Action'}
                  </td>
                  {competitors.map((competitor, index) => (
                    <td key={index} className="p-6">
                      {competitor.name === 'SiteGround' ? (
                        <button
                          onClick={() => openAffiliateLink()}
                          className="w-full btn-primary py-3"
                        >
                          {i18n.language === 'es' ? 'Elegir SiteGround' : 'Choose SiteGround'}
                        </button>
                      ) : (
                        <button
                          disabled
                          className="w-full bg-gray-600 text-gray-400 py-3 rounded-lg cursor-not-allowed"
                        >
                          {i18n.language === 'es' ? 'No recomendado' : 'Not recommended'}
                        </button>
                      )}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why SiteGround Wins */}
      <section className="section-padding bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            {i18n.language === 'es'
              ? '¿Por qué SiteGround es la mejor opción?'
              : 'Why is SiteGround the best choice?'
            }
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: i18n.language === 'es' ? 'Velocidad Superior' : 'Superior Speed',
                description: i18n.language === 'es' 
                  ? '3x más rápido que la competencia con tecnología SSD y cache avanzado.'
                  : '3x faster than competitors with SSD technology and advanced caching.'
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: i18n.language === 'es' ? 'Seguridad Avanzada' : 'Advanced Security',
                description: i18n.language === 'es'
                  ? 'Protección proactiva con firewall, SSL gratuito y monitoreo 24/7.'
                  : 'Proactive protection with firewall, free SSL, and 24/7 monitoring.'
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: i18n.language === 'es' ? 'Soporte Experto' : 'Expert Support',
                description: i18n.language === 'es'
                  ? 'Soporte técnico especializado disponible 24/7 por chat, teléfono y tickets.'
                  : 'Specialized technical support available 24/7 via chat, phone, and tickets.'
              }
            ].map((advantage, index) => (
              <div key={index} className="glass-effect p-8 rounded-2xl border border-primary-500/20 text-center">
                <div className="w-16 h-16 bg-primary-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary-400">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{advantage.title}</h3>
                <p className="text-gray-300">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-900 to-accent-900">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {i18n.language === 'es'
              ? '¿Convencido? Elige el mejor hosting'
              : 'Convinced? Choose the best hosting'
            }
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            {i18n.language === 'es'
              ? 'Únete a millones de usuarios que han elegido SiteGround como su proveedor de hosting de confianza.'
              : 'Join millions of users who have chosen SiteGround as their trusted hosting provider.'
            }
          </p>
          <button
            onClick={() => openAffiliateLink()}
            className="btn-primary text-xl px-8 py-4"
          >
            {i18n.language === 'es' ? 'Comenzar con SiteGround' : 'Start with SiteGround'}
            <ArrowRight className="w-6 h-6 ml-2" />
          </button>
          <p className="text-gray-300 mt-4">
            {i18n.language === 'es' 
              ? 'Garantía de 30 días - Sin riesgo'
              : '30-day guarantee - Risk-free'
            }
          </p>
        </div>
      </section>
    </div>
  )
}

export default CompareHostingPage
