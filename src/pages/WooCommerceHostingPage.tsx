import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CheckCircle, ArrowRight, ShoppingCart, CreditCard, Shield, Zap, Globe, BarChart } from 'lucide-react'
import { openAffiliateLink } from '../config/affiliate'

gsap.registerPlugin(ScrollTrigger)

const WooCommerceHostingPage = () => {
  const { i18n } = useTranslation()
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo('.woo-hero', 
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1,
          ease: 'power3.out'
        }
      )

      // Features animation
      gsap.fromTo('.woo-feature', 
        { y: 80, opacity: 0, scale: 0.9 },
        { 
          y: 0, 
          opacity: 1, 
          scale: 1,
          duration: 1,
          ease: 'back.out(1.7)',
          stagger: 0.2,
          scrollTrigger: {
            trigger: '.woo-features',
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
      ? 'Hosting WooCommerce SiteGround - Tienda Online Optimizada 2024'
      : 'WooCommerce Hosting SiteGround - Optimized Online Store 2024',
    description: i18n.language === 'es'
      ? 'Hosting especializado para WooCommerce con SSL gratis, pagos seguros, cache optimizado y soporte 24/7. Perfecto para tiendas online y ecommerce.'
      : 'Specialized WooCommerce hosting with free SSL, secure payments, optimized caching, and 24/7 support. Perfect for online stores and ecommerce.',
    keywords: i18n.language === 'es'
      ? 'hosting woocommerce, hosting tienda online, hosting ecommerce, woocommerce hosting, hosting para tiendas'
      : 'woocommerce hosting, online store hosting, ecommerce hosting, woocommerce web hosting, store hosting'
  }

  const features = [
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: i18n.language === 'es' ? 'WooCommerce Preinstalado' : 'WooCommerce Pre-installed',
      description: i18n.language === 'es' 
        ? 'WooCommerce configurado y optimizado desde el primer día.'
        : 'WooCommerce configured and optimized from day one.'
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: i18n.language === 'es' ? 'Pagos Seguros' : 'Secure Payments',
      description: i18n.language === 'es'
        ? 'SSL gratuito y certificaciones PCI para transacciones seguras.'
        : 'Free SSL and PCI certifications for secure transactions.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: i18n.language === 'es' ? 'Cache Optimizado' : 'Optimized Caching',
      description: i18n.language === 'es'
        ? 'Sistema de cache especializado para tiendas WooCommerce.'
        : 'Specialized caching system for WooCommerce stores.'
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: i18n.language === 'es' ? 'Analytics Incluido' : 'Analytics Included',
      description: i18n.language === 'es'
        ? 'Herramientas de análisis para optimizar tus ventas.'
        : 'Analytics tools to optimize your sales.'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: i18n.language === 'es' ? 'CDN Global' : 'Global CDN',
      description: i18n.language === 'es'
        ? 'Red de distribución mundial para clientes globales.'
        : 'Global distribution network for worldwide customers.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: i18n.language === 'es' ? 'Backups Automáticos' : 'Automatic Backups',
      description: i18n.language === 'es'
        ? 'Copias de seguridad automáticas de tu tienda online.'
        : 'Automatic backups of your online store.'
    }
  ]

  return (
    <div ref={sectionRef} className="min-h-screen bg-gray-950 text-gray-100">
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <link rel="canonical" href={`https://yourdomain.com/${i18n.language}/woocommerce-hosting`} />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content={`https://yourdomain.com/${i18n.language}/woocommerce-hosting`} />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "WooCommerce Hosting SiteGround",
            "description": seoData.description,
            "brand": {
              "@type": "Brand",
              "name": "SiteGround"
            },
            "offers": {
              "@type": "Offer",
              "price": "6.99",
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
            {i18n.language === 'es' ? 'Hosting WooCommerce' : 'WooCommerce Hosting'}
          </span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="woo-hero section-padding bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
            {i18n.language === 'es' 
              ? 'Hosting WooCommerce que Aumenta tus Ventas 40%'
              : 'WooCommerce Hosting that Increases Sales 40%'
            }
          </h1>
          <div className="flex items-center justify-center space-x-2 mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
            <span className="text-xl md:text-2xl font-semibold text-green-400">
              {i18n.language === 'es' ? 'Garantía 99.99% Uptime' : '99.99% Uptime Guarantee'}
            </span>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            {i18n.language === 'es'
              ? 'Infraestructura especializada para ecommerce que acelera tu tienda, reduce abandonos de carrito y maximiza conversiones. Pagos seguros garantizados.'
              : 'Specialized ecommerce infrastructure that speeds up your store, reduces cart abandonment and maximizes conversions. Secure payments guaranteed.'
            }
          </p>

          {/* ROI-focused Social Proof */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-400 mb-8">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span>{i18n.language === 'es' ? 'Tiempo de carga <1.5s = +40% ventas' : 'Load time <1.5s = +40% sales'}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
              <span>{i18n.language === 'es' ? 'SSL gratis + PCI compliance' : 'Free SSL + PCI compliance'}</span>
            </div>
          </div>

          {/* Progressive CTAs for Ecommerce */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button
              onClick={() => openAffiliateLink()}
              className="btn-primary text-xl px-8 py-4 relative overflow-hidden group"
            >
              <span className="relative z-10">
                {i18n.language === 'es' ? 'Crear Tienda Ahora' : 'Create Store Now'}
              </span>
              <ArrowRight className="w-6 h-6 ml-2 relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </button>
            <button
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary text-xl px-8 py-4 border-2 border-gray-600 hover:border-green-400 transition-all duration-300"
            >
              {i18n.language === 'es' ? 'Calcular ROI' : 'Calculate ROI'}
            </button>
          </div>

          <p className="text-gray-400">
            {i18n.language === 'es' 
              ? 'Desde $6.99/mes - Migración gratuita + Setup completo'
              : 'From $6.99/month - Free migration + Complete setup'
            }
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="woo-features section-padding">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            {i18n.language === 'es' 
              ? 'Todo lo que necesitas para tu tienda online'
              : 'Everything you need for your online store'
            }
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="woo-feature glass-effect p-8 rounded-2xl border border-accent-500/20 hover:border-accent-500/40 transition-all duration-300">
                <div className="w-16 h-16 bg-accent-500/20 rounded-2xl flex items-center justify-center mb-6 text-accent-400">
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
                  ? 'Ventajas del Hosting WooCommerce'
                  : 'WooCommerce Hosting Advantages'
                }
              </h2>
              <div className="space-y-6">
                {[
                  i18n.language === 'es' ? 'WooCommerce preinstalado y configurado' : 'WooCommerce pre-installed and configured',
                  i18n.language === 'es' ? 'SSL gratuito para transacciones seguras' : 'Free SSL for secure transactions',
                  i18n.language === 'es' ? 'Cache optimizado para tiendas online' : 'Optimized caching for online stores',
                  i18n.language === 'es' ? 'Soporte especializado en ecommerce' : 'Specialized ecommerce support',
                  i18n.language === 'es' ? 'Integración con pasarelas de pago' : 'Payment gateway integration',
                  i18n.language === 'es' ? 'Herramientas de marketing incluidas' : 'Marketing tools included'
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
                {i18n.language === 'es' ? 'Plan Ecommerce' : 'Ecommerce Plan'}
              </h3>
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-white mb-2">$14.99/mes</div>
                <div className="text-gray-400 line-through">$29.99/mes</div>
                <div className="text-accent-400 font-bold">
                  {i18n.language === 'es' ? 'Ahorra 50%' : 'Save 50%'}
                </div>
              </div>
              <div className="space-y-3 mb-6 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-accent-400" />
                  <span>{i18n.language === 'es' ? 'WooCommerce Premium' : 'WooCommerce Premium'}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-accent-400" />
                  <span>{i18n.language === 'es' ? 'SSL Gratuito' : 'Free SSL'}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-accent-400" />
                  <span>{i18n.language === 'es' ? 'CDN Global' : 'Global CDN'}</span>
                </div>
              </div>
              <button
                onClick={() => openAffiliateLink()}
                className="w-full btn-primary py-4"
              >
                {i18n.language === 'es' ? 'Crear Tienda' : 'Create Store'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16">
            {i18n.language === 'es'
              ? 'Tiendas exitosas confían en nosotros'
              : 'Successful stores trust us'
            }
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                metric: '99.9%',
                label: i18n.language === 'es' ? 'Uptime garantizado' : 'Guaranteed uptime'
              },
              {
                metric: '3x',
                label: i18n.language === 'es' ? 'Más rápido' : 'Faster loading'
              },
              {
                metric: '24/7',
                label: i18n.language === 'es' ? 'Soporte experto' : 'Expert support'
              }
            ].map((stat, index) => (
              <div key={index} className="glass-effect p-8 rounded-2xl border border-primary-500/20">
                <div className="text-4xl font-bold text-accent-400 mb-2">{stat.metric}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-accent-900 to-primary-900">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {i18n.language === 'es'
              ? '¿Listo para lanzar tu tienda online?'
              : 'Ready to launch your online store?'
            }
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            {i18n.language === 'es'
              ? 'Únete a miles de emprendedores que han creado tiendas exitosas con nuestro hosting WooCommerce.'
              : 'Join thousands of entrepreneurs who have created successful stores with our WooCommerce hosting.'
            }
          </p>
          <button
            onClick={() => openAffiliateLink()}
            className="btn-primary text-xl px-8 py-4"
          >
            {i18n.language === 'es' ? 'Empezar Ahora' : 'Start Now'}
            <ArrowRight className="w-6 h-6 ml-2" />
          </button>
        </div>
      </section>
    </div>
  )
}

export default WooCommerceHostingPage
