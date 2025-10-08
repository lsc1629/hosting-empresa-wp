import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SEO_CONFIG } from '../i18n/config'
import Pricing from '../components/Pricing'
import FAQ from '../components/FAQ'
import CTA from '../components/CTA'
import LanguageDetector from '../components/LanguageDetector'

gsap.registerPlugin(ScrollTrigger)
// import HostingMarketSpecificContent from '../components/HostingMarketSpecificContent'

const PricingPage = () => {
  const { i18n } = useTranslation()
  const currentLang = i18n.language as keyof typeof SEO_CONFIG
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo('.pricing-hero', 
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1,
          ease: 'power3.out'
        }
      )

      // Features cards animation
      gsap.fromTo('.features-card', 
        { y: 80, opacity: 0, scale: 0.9 },
        { 
          y: 0, 
          opacity: 1, 
          scale: 1,
          duration: 1,
          ease: 'back.out(1.7)',
          stagger: 0.2,
          scrollTrigger: {
            trigger: '.features-card',
            start: 'top 70%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      )

      // FAQ cards animation
      gsap.fromTo('.faq-card', 
        { y: 60, opacity: 0, scale: 0.95 },
        { 
          y: 0, 
          opacity: 1, 
          scale: 1,
          duration: 0.8,
          ease: 'back.out(1.7)',
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.faq-grid',
            start: 'top 70%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  // SEO específico para página de precios
  const pricingSEO = {
    en: {
      title: 'Hosting Plans & Pricing - Enterprise Web Hosting | SiteGround',
      description: 'Compare our enterprise hosting plans and pricing. Starting at $2.99/month with 99.9% uptime guarantee, free SSL, daily backups, and 24/7 expert support.',
      keywords: 'hosting pricing, web hosting plans, enterprise hosting cost, siteground pricing, hosting comparison, cheap hosting plans',
      canonical: 'https://yourdomain.com/pricing',
      lang: 'en',
      region: 'US'
    },
    es: {
      title: 'Planes y Precios de Hosting - Hosting Empresarial | SiteGround',
      description: 'Compara nuestros planes de hosting empresarial y precios. Desde €2.49/mes con garantía 99.9% uptime, SSL gratis, backups diarios y soporte 24/7.',
      keywords: 'precios hosting, planes hosting web, costo hosting empresarial, precios siteground, comparar hosting, planes hosting baratos',
      canonical: 'https://yourdomain.com/es/pricing',
      lang: 'es',
      region: 'ES'
    },
    de: {
      title: 'Hosting Pläne & Preise - Unternehmens-Webhosting | SiteGround',
      description: 'Vergleichen Sie unsere Unternehmens-Hosting-Pläne und Preise. Ab €2.49/Monat mit 99.9% Uptime-Garantie, kostenlosem SSL und 24/7 Support.',
      keywords: 'hosting preise, webhosting pläne, unternehmens hosting kosten, siteground preise, hosting vergleich',
      canonical: 'https://yourdomain.com/de/pricing',
      lang: 'de',
      region: 'DE'
    },
    pt: {
      title: 'Planos e Preços de Hospedagem - Hosting Empresarial | SiteGround',
      description: 'Compare nossos planos de hospedagem empresarial e preços. A partir de R$12.99/mês com garantia 99.9% uptime, SSL grátis e suporte 24/7.',
      keywords: 'preços hospedagem, planos hosting web, custo hospedagem empresarial, preços siteground, comparar hospedagem',
      canonical: 'https://yourdomain.com/pt/pricing',
      lang: 'pt',
      region: 'BR'
    },
    fr: {
      title: 'Plans et Prix d\'Hébergement - Hébergement Entreprise | SiteGround',
      description: 'Comparez nos plans d\'hébergement entreprise et prix. À partir de €2.49/mois avec garantie 99.9% uptime, SSL gratuit et support 24/7.',
      keywords: 'prix hébergement, plans hébergement web, coût hébergement entreprise, prix siteground',
      canonical: 'https://yourdomain.com/fr/pricing',
      lang: 'fr',
      region: 'FR'
    },
    it: {
      title: 'Piani e Prezzi Hosting - Hosting Aziendale | SiteGround',
      description: 'Confronta i nostri piani hosting aziendali e prezzi. A partire da €2.49/mese con garanzia 99.9% uptime, SSL gratuito e supporto 24/7.',
      keywords: 'prezzi hosting, piani hosting web, costo hosting aziendale, prezzi siteground',
      canonical: 'https://yourdomain.com/it/pricing',
      lang: 'it',
      region: 'IT'
    },
    ja: {
      title: 'ホスティングプランと料金 - エンタープライズウェブホスティング | SiteGround',
      description: 'エンタープライズホスティングプランと料金を比較。月額$2.99から、99.9%稼働保証、無料SSL、24/7サポート付き。',
      keywords: 'ホスティング料金, ウェブホスティングプラン, エンタープライズホスティング',
      canonical: 'https://yourdomain.com/ja/pricing',
      lang: 'ja',
      region: 'JP'
    },
    zh: {
      title: '主机计划和定价 - 企业网络托管 | SiteGround',
      description: '比较我们的企业主机计划和定价。从每月$2.99开始，99.9%正常运行时间保证，免费SSL，24/7支持。',
      keywords: '主机定价, 网络主机计划, 企业主机成本',
      canonical: 'https://yourdomain.com/zh/pricing',
      lang: 'zh',
      region: 'CN'
    }
  }

  const currentSEO = pricingSEO[currentLang] || pricingSEO.en

  useEffect(() => {
    // Set document language
    document.documentElement.lang = currentSEO.lang
    
    // Add structured data for pricing page
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "SiteGround Web Hosting Plans",
      "description": currentSEO.description,
      "brand": {
        "@type": "Brand",
        "name": "SiteGround"
      },
      "offers": [
        {
          "@type": "Offer",
          "name": "StartUp Plan",
          "price": "2.99",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "url": currentSEO.canonical,
          "priceValidUntil": "2025-12-31",
          "itemCondition": "https://schema.org/NewCondition"
        },
        {
          "@type": "Offer", 
          "name": "GrowBig Plan",
          "price": "4.99",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "url": currentSEO.canonical,
          "priceValidUntil": "2025-12-31",
          "itemCondition": "https://schema.org/NewCondition"
        },
        {
          "@type": "Offer",
          "name": "GoGeek Plan", 
          "price": "7.99",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "url": currentSEO.canonical,
          "priceValidUntil": "2025-12-31",
          "itemCondition": "https://schema.org/NewCondition"
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "15000",
        "bestRating": "5",
        "worstRating": "1"
      },
      "provider": {
        "@type": "Organization",
        "name": "SiteGround",
        "url": "https://www.siteground.com"
      }
    }

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(structuredData)
    document.head.appendChild(script)

    return () => {
      const existingScript = document.querySelector('script[type="application/ld+json"]')
      if (existingScript) {
        document.head.removeChild(existingScript)
      }
    }
  }, [currentLang, currentSEO])

  return (
    <div ref={sectionRef}>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>{currentSEO.title}</title>
        <meta name="title" content={currentSEO.title} />
        <meta name="description" content={currentSEO.description} />
        <meta name="keywords" content={currentSEO.keywords} />
        <link rel="canonical" href={currentSEO.canonical} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={currentSEO.canonical} />
        <meta property="og:title" content={currentSEO.title} />
        <meta property="og:description" content={currentSEO.description} />
        <meta property="og:locale" content={currentSEO.lang} />
        <meta property="og:site_name" content="Hosting Empresas" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={currentSEO.canonical} />
        <meta property="twitter:title" content={currentSEO.title} />
        <meta property="twitter:description" content={currentSEO.description} />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        
        {/* Geo targeting */}
        <meta name="geo.region" content={currentSEO.region} />
        <meta name="geo.placename" content={currentSEO.region} />
        
        {/* Language alternatives */}
        <link rel="alternate" hrefLang="en" href="https://yourdomain.com/pricing" />
        <link rel="alternate" hrefLang="es" href="https://yourdomain.com/es/pricing" />
        <link rel="alternate" hrefLang="pt" href="https://yourdomain.com/pt/pricing" />
        <link rel="alternate" hrefLang="de" href="https://yourdomain.com/de/pricing" />
        <link rel="alternate" hrefLang="x-default" href="https://yourdomain.com/pricing" />
      </Helmet>

      <LanguageDetector />
      
      {/* Breadcrumbs */}
      <div className="container-custom pt-24 pb-8">
        <nav className="flex text-sm text-gray-400">
          <Link to="/" className="hover:text-primary-400 transition-colors">
            {i18n.language === 'es' ? 'Inicio' : 'Home'}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-200">
            {i18n.language === 'es' ? 'Precios' : 'Pricing'}
          </span>
        </nav>
      </div>

      <main>

        {/* Hero Section */}
        <section className="pricing-hero section-padding bg-gradient-to-b from-gray-900 to-gray-950">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
              {i18n.language === 'es' 
                ? 'Planes y Precios de Hosting'
                : 'Hosting Plans & Pricing'
              }
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              {i18n.language === 'es'
                ? 'Encuentra el plan perfecto para tu empresa. Desde startups hasta corporaciones, tenemos la solución ideal.'
                : 'Find the perfect plan for your business. From startups to corporations, we have the ideal solution.'
              }
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                <span>{i18n.language === 'es' ? 'Garantía 30 días' : '30-day guarantee'}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                <span>{i18n.language === 'es' ? 'SSL incluido' : 'SSL included'}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                <span>{i18n.language === 'es' ? 'Soporte 24/7' : '24/7 Support'}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Component */}
        <Pricing />

        {/* Features Overview Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {i18n.language === 'es' 
                  ? '¿Por qué elegir nuestros planes?'
                  : 'Why choose our plans?'
                }
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                {i18n.language === 'es'
                  ? 'Todos nuestros planes incluyen las características esenciales para el éxito de tu proyecto'
                  : 'All our plans include essential features for your project success'
                }
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="features-card glass-effect rounded-xl p-6 text-center hover:bg-white/10 transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {i18n.language === 'es' ? 'Rendimiento Superior' : 'Superior Performance'}
                </h3>
                <p className="text-gray-300">
                  {i18n.language === 'es'
                    ? 'Servidores optimizados con SSD y CDN gratuito para máxima velocidad'
                    : 'Optimized servers with SSD and free CDN for maximum speed'
                  }
                </p>
              </div>

              <div className="features-card glass-effect rounded-xl p-6 text-center hover:bg-white/10 transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔒</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {i18n.language === 'es' ? 'Seguridad Avanzada' : 'Advanced Security'}
                </h3>
                <p className="text-gray-300">
                  {i18n.language === 'es'
                    ? 'SSL gratuito, backups diarios automáticos y protección contra malware'
                    : 'Free SSL, automatic daily backups and malware protection'
                  }
                </p>
              </div>

              <div className="features-card glass-effect rounded-xl p-6 text-center hover:bg-white/10 transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {i18n.language === 'es' ? 'Fácil de Usar' : 'Easy to Use'}
                </h3>
                <p className="text-gray-300">
                  {i18n.language === 'es'
                    ? 'Panel de control intuitivo y instalación de WordPress en 1 clic'
                    : 'Intuitive control panel and 1-click WordPress installation'
                  }
                </p>
              </div>
            </div>

            {/* CTA to Compare */}
            <div className="text-center mt-12">
              <p className="text-gray-300 mb-4">
                {i18n.language === 'es'
                  ? '¿Necesitas comparar características detalladas?'
                  : 'Need to compare detailed features?'
                }
              </p>
              <Link
                to="/compare-hosting"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold rounded-lg hover:from-primary-600 hover:to-secondary-600 transition-all"
              >
                {i18n.language === 'es' ? 'Ver Comparación Completa' : 'View Full Comparison'}
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ específico para pricing */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {i18n.language === 'es' 
                  ? 'Preguntas Frecuentes sobre Precios'
                  : 'Pricing Frequently Asked Questions'
                }
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                {i18n.language === 'es'
                  ? 'Resuelve todas tus dudas sobre nuestros planes y precios'
                  : 'Get answers to all your questions about our plans and pricing'
                }
              </p>
            </div>
            
            {/* FAQ Grid */}
            <div className="faq-grid grid md:grid-cols-2 gap-8 mb-12">
              <div className="faq-card glass-effect rounded-xl p-6 hover:bg-white/10 transition-all">
                <h3 className="text-lg font-semibold text-white mb-3">
                  {i18n.language === 'es' ? '¿Puedo cambiar de plan?' : 'Can I change plans?'}
                </h3>
                <p className="text-gray-300">
                  {i18n.language === 'es'
                    ? 'Sí, puedes actualizar o cambiar tu plan en cualquier momento desde tu panel de control. Los cambios se aplican inmediatamente.'
                    : 'Yes, you can upgrade or change your plan anytime from your control panel. Changes apply immediately.'
                  }
                </p>
              </div>
              
              <div className="faq-card glass-effect rounded-xl p-6 hover:bg-white/10 transition-all">
                <h3 className="text-lg font-semibold text-white mb-3">
                  {i18n.language === 'es' ? '¿Hay garantía de devolución?' : 'Is there a money-back guarantee?'}
                </h3>
                <p className="text-gray-300">
                  {i18n.language === 'es'
                    ? 'Ofrecemos una garantía de devolución de 30 días sin preguntas. Si no estás satisfecho, te devolvemos tu dinero.'
                    : 'We offer a 30-day money-back guarantee with no questions asked. If you\'re not satisfied, we\'ll refund your money.'
                  }
                </p>
              </div>
              
              <div className="faq-card glass-effect rounded-xl p-6 hover:bg-white/10 transition-all">
                <h3 className="text-lg font-semibold text-white mb-3">
                  {i18n.language === 'es' ? '¿Los precios incluyen impuestos?' : 'Do prices include taxes?'}
                </h3>
                <p className="text-gray-300">
                  {i18n.language === 'es'
                    ? 'Los precios mostrados no incluyen impuestos. Los impuestos aplicables se calcularán durante el proceso de pago según tu ubicación.'
                    : 'Displayed prices don\'t include taxes. Applicable taxes will be calculated during checkout based on your location.'
                  }
                </p>
              </div>
              
              <div className="faq-card glass-effect rounded-xl p-6 hover:bg-white/10 transition-all">
                <h3 className="text-lg font-semibold text-white mb-3">
                  {i18n.language === 'es' ? '¿Hay descuentos por pago anual?' : 'Are there discounts for annual payment?'}
                </h3>
                <p className="text-gray-300">
                  {i18n.language === 'es'
                    ? 'Sí, obtienes hasta 2 meses gratis al pagar anualmente. Además, el precio de renovación es más bajo que el pago mensual.'
                    : 'Yes, you get up to 2 months free when paying annually. Plus, the renewal price is lower than monthly payments.'
                  }
                </p>
              </div>
            </div>
            
            {/* FAQ Component */}
            <div className="glass-effect rounded-xl p-8">
              <FAQ />
            </div>
          </div>
        </section>

        {/* CTA final */}
        <CTA />
      </main>
    </div>
  )
}

export default PricingPage
