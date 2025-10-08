import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CheckCircle, ArrowRight, Building, Users, Shield, Zap, HeadphonesIcon, Award } from 'lucide-react'
import { openAffiliateLink } from '../config/affiliate'

gsap.registerPlugin(ScrollTrigger)

const BusinessHostingPage = () => {
  const { i18n } = useTranslation()
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo('.business-hero', 
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1,
          ease: 'power3.out'
        }
      )

      // Features animation
      gsap.fromTo('.business-feature', 
        { y: 80, opacity: 0, scale: 0.9 },
        { 
          y: 0, 
          opacity: 1, 
          scale: 1,
          duration: 1,
          ease: 'back.out(1.7)',
          stagger: 0.2,
          scrollTrigger: {
            trigger: '.business-features',
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
      ? 'Hosting para Empresas SiteGround - Soluciones Corporativas 2024'
      : 'Business Hosting SiteGround - Corporate Solutions 2024',
    description: i18n.language === 'es'
      ? 'Hosting empresarial con máximo rendimiento, seguridad avanzada, soporte prioritario y SLA garantizado. Ideal para empresas y corporaciones.'
      : 'Business hosting with maximum performance, advanced security, priority support, and guaranteed SLA. Ideal for enterprises and corporations.',
    keywords: i18n.language === 'es'
      ? 'hosting empresarial, hosting corporativo, hosting para empresas, hosting profesional, siteground business'
      : 'business hosting, corporate hosting, enterprise hosting, professional hosting, siteground business'
  }

  const features = [
    {
      icon: <Building className="w-8 h-8" />,
      title: i18n.language === 'es' ? 'Soluciones Corporativas' : 'Corporate Solutions',
      description: i18n.language === 'es' 
        ? 'Hosting diseñado específicamente para necesidades empresariales.'
        : 'Hosting designed specifically for business needs.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: i18n.language === 'es' ? 'Soporte Prioritario' : 'Priority Support',
      description: i18n.language === 'es'
        ? 'Atención prioritaria 24/7 con expertos dedicados.'
        : '24/7 priority support with dedicated experts.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: i18n.language === 'es' ? 'Seguridad Avanzada' : 'Advanced Security',
      description: i18n.language === 'es'
        ? 'Protección empresarial con firewall y monitoreo 24/7.'
        : 'Enterprise protection with firewall and 24/7 monitoring.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: i18n.language === 'es' ? 'Máximo Rendimiento' : 'Maximum Performance',
      description: i18n.language === 'es'
        ? 'Recursos dedicados para aplicaciones críticas.'
        : 'Dedicated resources for mission-critical applications.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: i18n.language === 'es' ? 'SLA Garantizado' : 'Guaranteed SLA',
      description: i18n.language === 'es'
        ? '99.99% uptime garantizado con compensación.'
        : '99.99% guaranteed uptime with compensation.'
    },
    {
      icon: <HeadphonesIcon className="w-8 h-8" />,
      title: i18n.language === 'es' ? 'Gestor Dedicado' : 'Dedicated Manager',
      description: i18n.language === 'es'
        ? 'Gestor de cuenta personal para tu empresa.'
        : 'Personal account manager for your business.'
    }
  ]

  return (
    <div ref={sectionRef} className="min-h-screen bg-gray-950 text-gray-100">
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <link rel="canonical" href={`https://yourdomain.com/${i18n.language}/business-hosting`} />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content={`https://yourdomain.com/${i18n.language}/business-hosting`} />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Business Hosting SiteGround",
            "description": seoData.description,
            "brand": {
              "@type": "Brand",
              "name": "SiteGround"
            },
            "offers": {
              "@type": "Offer",
              "price": "14.99",
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
            {i18n.language === 'es' ? 'Hosting Empresarial' : 'Business Hosting'}
          </span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="business-hero section-padding bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
            {i18n.language === 'es' 
              ? 'Infraestructura que Impulsa el Crecimiento Empresarial'
              : 'Infrastructure that Drives Enterprise Growth'
            }
          </h1>
          <div className="flex items-center justify-center space-x-2 mb-6">
            <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
            <span className="text-xl md:text-2xl font-semibold text-purple-400">
              {i18n.language === 'es' ? 'Escalabilidad Ilimitada' : 'Unlimited Scalability'}
            </span>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            {i18n.language === 'es'
              ? 'Soluciones empresariales que reducen costos 60% y mejoran performance 300%. Arquitectura cloud que escala con tu negocio sin límites.'
              : 'Enterprise solutions that reduce costs 60% and improve performance 300%. Cloud architecture that scales with your business without limits.'
            }
          </p>

          {/* Enterprise Social Proof */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-400 mb-8">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
              <span>{i18n.language === 'es' ? 'Confianza de Fortune 500' : 'Trusted by Fortune 500'}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              <span>{i18n.language === 'es' ? 'SLA 99.99% garantizado' : '99.99% SLA guaranteed'}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
              <span>{i18n.language === 'es' ? 'Soporte dedicado 24/7' : 'Dedicated 24/7 support'}</span>
            </div>
          </div>

          {/* Enterprise CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button
              onClick={() => window.open('/support', '_blank')}
              className="btn-primary text-xl px-8 py-4 relative overflow-hidden group"
            >
              <span className="relative z-10">
                {i18n.language === 'es' ? 'Agenda Consulta Gratuita' : 'Schedule Free Consultation'}
              </span>
              <ArrowRight className="w-6 h-6 ml-2 relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </button>
            <button
              onClick={() => openAffiliateLink()}
              className="btn-secondary text-xl px-8 py-4 border-2 border-gray-600 hover:border-purple-400 transition-all duration-300"
            >
              {i18n.language === 'es' ? 'Ver Planes Enterprise' : 'View Enterprise Plans'}
            </button>
          </div>
          <p className="text-gray-400">
            {i18n.language === 'es' 
              ? 'Planes desde $14.99/mes - SLA 99.99% garantizado'
              : 'Plans from $14.99/month - 99.99% SLA guaranteed'
            }
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="business-features section-padding">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            {i18n.language === 'es' 
              ? 'Características Empresariales'
              : 'Enterprise Features'
            }
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="business-feature glass-effect p-8 rounded-2xl border border-primary-500/20 hover:border-primary-500/40 transition-all duration-300">
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

      {/* Comparison Table */}
      <section className="section-padding bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            {i18n.language === 'es'
              ? 'Planes Empresariales'
              : 'Business Plans'
            }
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* StartUp Plan */}
            <div className="glass-effect p-8 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-bold mb-4">StartUp</h3>
              <div className="text-3xl font-bold mb-6">$2.99/mes</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary-400" />
                  <span>{i18n.language === 'es' ? '1 Sitio Web' : '1 Website'}</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary-400" />
                  <span>{i18n.language === 'es' ? '10 GB SSD' : '10 GB SSD'}</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary-400" />
                  <span>{i18n.language === 'es' ? 'SSL Gratuito' : 'Free SSL'}</span>
                </li>
              </ul>
              <button
                onClick={() => openAffiliateLink()}
                className="w-full btn-secondary py-3"
              >
                {i18n.language === 'es' ? 'Elegir Plan' : 'Choose Plan'}
              </button>
            </div>

            {/* GrowBig Plan - Popular */}
            <div className="glass-effect p-8 rounded-2xl border border-accent-500/50 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-accent-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                  {i18n.language === 'es' ? 'Más Popular' : 'Most Popular'}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">GrowBig</h3>
              <div className="text-3xl font-bold mb-6">$6.99/mes</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-accent-400" />
                  <span>{i18n.language === 'es' ? 'Sitios Ilimitados' : 'Unlimited Websites'}</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-accent-400" />
                  <span>{i18n.language === 'es' ? '20 GB SSD' : '20 GB SSD'}</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-accent-400" />
                  <span>{i18n.language === 'es' ? 'Cache Premium' : 'Premium Caching'}</span>
                </li>
              </ul>
              <button
                onClick={() => openAffiliateLink()}
                className="w-full btn-primary py-3"
              >
                {i18n.language === 'es' ? 'Elegir Plan' : 'Choose Plan'}
              </button>
            </div>

            {/* GoGeek Plan */}
            <div className="glass-effect p-8 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-bold mb-4">GoGeek</h3>
              <div className="text-3xl font-bold mb-6">$14.99/mes</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary-400" />
                  <span>{i18n.language === 'es' ? 'Recursos Premium' : 'Premium Resources'}</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary-400" />
                  <span>{i18n.language === 'es' ? '40 GB SSD' : '40 GB SSD'}</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary-400" />
                  <span>{i18n.language === 'es' ? 'Soporte Prioritario' : 'Priority Support'}</span>
                </li>
              </ul>
              <button
                onClick={() => openAffiliateLink()}
                className="w-full btn-secondary py-3"
              >
                {i18n.language === 'es' ? 'Elegir Plan' : 'Choose Plan'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                {i18n.language === 'es'
                  ? '¿Por qué elegir nuestro Hosting Empresarial?'
                  : 'Why choose our Business Hosting?'
                }
              </h2>
              <div className="space-y-6">
                {[
                  i18n.language === 'es' ? 'SLA del 99.99% con compensación garantizada' : '99.99% SLA with guaranteed compensation',
                  i18n.language === 'es' ? 'Soporte prioritario 24/7 con expertos dedicados' : '24/7 priority support with dedicated experts',
                  i18n.language === 'es' ? 'Seguridad empresarial con firewall avanzado' : 'Enterprise security with advanced firewall',
                  i18n.language === 'es' ? 'Recursos dedicados para máximo rendimiento' : 'Dedicated resources for maximum performance',
                  i18n.language === 'es' ? 'Gestor de cuenta personal asignado' : 'Assigned personal account manager',
                  i18n.language === 'es' ? 'Backups automáticos cada 4 horas' : 'Automatic backups every 4 hours'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass-effect p-8 rounded-2xl border border-primary-500/20">
              <h3 className="text-2xl font-bold mb-6 text-center">
                {i18n.language === 'es' ? 'Consulta Gratuita' : 'Free Consultation'}
              </h3>
              <p className="text-gray-300 mb-6 text-center">
                {i18n.language === 'es'
                  ? 'Habla con nuestros expertos para encontrar la solución perfecta para tu empresa.'
                  : 'Talk to our experts to find the perfect solution for your business.'
                }
              </p>
              <button
                onClick={() => openAffiliateLink()}
                className="w-full btn-primary py-4"
              >
                {i18n.language === 'es' ? 'Solicitar Consulta' : 'Request Consultation'}
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
              ? '¿Listo para llevar tu empresa al siguiente nivel?'
              : 'Ready to take your business to the next level?'
            }
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            {i18n.language === 'es'
              ? 'Únete a miles de empresas que confían en nuestras soluciones de hosting empresarial.'
              : 'Join thousands of businesses that trust our enterprise hosting solutions.'
            }
          </p>
          <button
            onClick={() => openAffiliateLink()}
            className="btn-primary text-xl px-8 py-4"
          >
            {i18n.language === 'es' ? 'Empezar Ahora' : 'Get Started'}
            <ArrowRight className="w-6 h-6 ml-2" />
          </button>
        </div>
      </section>
    </div>
  )
}

export default BusinessHostingPage
