import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { SEO_CONFIG } from '../i18n/config'
import { MessageCircle, Phone, Mail, Clock, Users, Award, Headphones, BookOpen } from 'lucide-react'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import CTA from '../components/CTA'
import LanguageDetector from '../components/LanguageDetector'
import SEOHreflang from '../components/SEOHreflang'
// import HostingMarketSpecificContent from '../components/HostingMarketSpecificContent'

const SupportPage = () => {
  const { i18n } = useTranslation()
  const currentLang = i18n.language as keyof typeof SEO_CONFIG

  // SEO específico para página de soporte
  const supportSEO = {
    en: {
      title: '24/7 Expert Support - Enterprise Web Hosting Support | SiteGround',
      description: 'Get 24/7 expert support for your enterprise hosting. WordPress specialists, live chat, phone support, and comprehensive knowledge base. Average response time: 10 minutes.',
      keywords: 'hosting support, 24/7 support, wordpress support, technical support, hosting help, siteground support, web hosting assistance',
      canonical: 'https://yourdomain.com/support',
      lang: 'en',
      region: 'US'
    },
    es: {
      title: 'Soporte Experto 24/7 - Soporte Hosting Empresarial | SiteGround',
      description: 'Obtén soporte experto 24/7 para tu hosting empresarial. Especialistas WordPress, chat en vivo, soporte telefónico y base de conocimientos. Tiempo de respuesta: 10 minutos.',
      keywords: 'soporte hosting, soporte 24/7, soporte wordpress, soporte técnico, ayuda hosting, soporte siteground, asistencia hosting',
      canonical: 'https://yourdomain.com/es/support',
      lang: 'es',
      region: 'ES'
    },
    de: {
      title: '24/7 Experten-Support - Unternehmens-Webhosting-Support | SiteGround',
      description: 'Erhalten Sie 24/7 Experten-Support für Ihr Unternehmens-Hosting. WordPress-Spezialisten, Live-Chat, Telefon-Support und umfassende Wissensdatenbank.',
      keywords: 'hosting support, 24/7 support, wordpress support, technischer support, hosting hilfe, siteground support',
      canonical: 'https://yourdomain.com/de/support',
      lang: 'de',
      region: 'DE'
    },
    pt: {
      title: 'Suporte Especializado 24/7 - Suporte Hospedagem Empresarial | SiteGround',
      description: 'Obtenha suporte especializado 24/7 para sua hospedagem empresarial. Especialistas WordPress, chat ao vivo, suporte telefônico e base de conhecimento.',
      keywords: 'suporte hospedagem, suporte 24/7, suporte wordpress, suporte técnico, ajuda hospedagem, suporte siteground',
      canonical: 'https://yourdomain.com/pt/support',
      lang: 'pt',
      region: 'BR'
    },
    fr: {
      title: 'Support Expert 24/7 - Support Hébergement Entreprise | SiteGround',
      description: 'Obtenez un support expert 24/7 pour votre hébergement entreprise. Spécialistes WordPress, chat en direct, support téléphonique et base de connaissances.',
      keywords: 'support hébergement, support 24/7, support wordpress, support technique, aide hébergement',
      canonical: 'https://yourdomain.com/fr/support',
      lang: 'fr',
      region: 'FR'
    },
    it: {
      title: 'Supporto Esperto 24/7 - Supporto Hosting Aziendale | SiteGround',
      description: 'Ottieni supporto esperto 24/7 per il tuo hosting aziendale. Specialisti WordPress, chat dal vivo, supporto telefonico e base di conoscenza.',
      keywords: 'supporto hosting, supporto 24/7, supporto wordpress, supporto tecnico, aiuto hosting',
      canonical: 'https://yourdomain.com/it/support',
      lang: 'it',
      region: 'IT'
    },
    ja: {
      title: '24/7エキスパートサポート - エンタープライズウェブホスティングサポート | SiteGround',
      description: 'エンタープライズホスティングの24/7エキスパートサポート。WordPress専門家、ライブチャット、電話サポート、包括的なナレッジベース。',
      keywords: 'ホスティングサポート, 24/7サポート, WordPressサポート, テクニカルサポート',
      canonical: 'https://yourdomain.com/ja/support',
      lang: 'ja',
      region: 'JP'
    },
    zh: {
      title: '24/7专家支持 - 企业网络托管支持 | SiteGround',
      description: '为您的企业托管获得24/7专家支持。WordPress专家、在线聊天、电话支持和全面的知识库。',
      keywords: '托管支持, 24/7支持, WordPress支持, 技术支持, 托管帮助',
      canonical: 'https://yourdomain.com/zh/support',
      lang: 'zh',
      region: 'CN'
    }
  }

  const currentSEO = supportSEO[currentLang] || supportSEO.en

  useEffect(() => {
    // Set document language
    document.documentElement.lang = currentSEO.lang
    
    // Add structured data for support page
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": currentSEO.title,
      "description": currentSEO.description,
      "url": currentSEO.canonical,
      "mainEntity": {
        "@type": "Organization",
        "name": "SiteGround Support",
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+1-866-606-2606",
            "contactType": "customer service",
            "availableLanguage": ["English", "Spanish", "German", "Portuguese"],
            "hoursAvailable": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
              ],
              "opens": "00:00",
              "closes": "23:59"
            }
          },
          {
            "@type": "ContactPoint",
            "contactType": "technical support",
            "availableLanguage": ["English", "Spanish", "German", "Portuguese"],
            "hoursAvailable": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
              ],
              "opens": "00:00",
              "closes": "23:59"
            }
          }
        ]
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

  const supportChannels = [
    {
      icon: MessageCircle,
      title: i18n.language === 'es' ? 'Chat SiteGround 24/7' : 'SiteGround Live Chat 24/7',
      description: i18n.language === 'es' 
        ? 'Accede al chat oficial de SiteGround. Expertos certificados disponibles las 24 horas.'
        : 'Access official SiteGround live chat. Certified experts available 24/7.',
      availability: i18n.language === 'es' ? 'my.siteground.com' : 'my.siteground.com',
      link: 'https://my.siteground.com'
    },
    {
      icon: Phone,
      title: i18n.language === 'es' ? 'Teléfono SiteGround' : 'SiteGround Phone',
      description: i18n.language === 'es'
        ? 'Línea directa de SiteGround. Soporte técnico especializado en múltiples idiomas.'
        : 'Direct SiteGround hotline. Specialized technical support in multiple languages.',
      availability: i18n.language === 'es' ? '+1 (866) 606-2606' : '+1 (866) 606-2606',
      link: 'tel:+18666062606'
    },
    {
      icon: Mail,
      title: i18n.language === 'es' ? 'Tickets SiteGround' : 'SiteGround Tickets',
      description: i18n.language === 'es'
        ? 'Sistema oficial de tickets de SiteGround para consultas técnicas complejas.'
        : 'Official SiteGround ticket system for complex technical queries.',
      availability: i18n.language === 'es' ? 'Panel de cliente' : 'Client Area',
      link: 'https://my.siteground.com'
    },
    {
      icon: BookOpen,
      title: i18n.language === 'es' ? 'Tutoriales SiteGround' : 'SiteGround Tutorials',
      description: i18n.language === 'es'
        ? 'Base de conocimientos oficial con guías paso a paso y documentación técnica.'
        : 'Official knowledge base with step-by-step guides and technical documentation.',
      availability: i18n.language === 'es' ? 'kb.siteground.com' : 'kb.siteground.com',
      link: 'https://kb.siteground.com'
    }
  ]

  const supportFeatures = [
    {
      icon: Clock,
      title: i18n.language === 'es' ? 'Respuesta Rápida' : 'Fast Response',
      description: i18n.language === 'es' 
        ? 'Tiempo promedio de respuesta de 10 minutos'
        : 'Average response time of 10 minutes'
    },
    {
      icon: Users,
      title: i18n.language === 'es' ? 'Expertos Certificados' : 'Certified Experts',
      description: i18n.language === 'es'
        ? 'Especialistas certificados en WordPress y hosting'
        : 'WordPress and hosting certified specialists'
    },
    {
      icon: Award,
      title: i18n.language === 'es' ? 'Soporte Premiado' : 'Award-Winning Support',
      description: i18n.language === 'es'
        ? 'Reconocido como el mejor soporte de hosting'
        : 'Recognized as the best hosting support'
    },
    {
      icon: Headphones,
      title: i18n.language === 'es' ? 'Soporte Multiidioma' : 'Multilingual Support',
      description: i18n.language === 'es'
        ? 'Soporte en español, inglés, alemán y más'
        : 'Support in Spanish, English, German and more'
    }
  ]

  return (
    <>
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
        <link rel="alternate" hrefLang="en" href="https://yourdomain.com/support" />
        <link rel="alternate" hrefLang="es" href="https://yourdomain.com/es/support" />
        <link rel="alternate" hrefLang="pt" href="https://yourdomain.com/pt/support" />
        <link rel="alternate" hrefLang="de" href="https://yourdomain.com/de/support" />
        <link rel="alternate" hrefLang="x-default" href="https://yourdomain.com/support" />
      </Helmet>

      <SEOHreflang />
      <LanguageDetector />
      
      {/* Breadcrumbs */}
      <div className="container-custom pt-24 pb-8">
        <nav className="flex text-sm text-gray-400">
          <Link to="/" className="hover:text-primary-400 transition-colors">
            {i18n.language === 'es' ? 'Inicio' : 'Home'}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-200">
            {i18n.language === 'es' ? 'Soporte' : 'Support'}
          </span>
        </nav>
      </div>

      <main>

        {/* Hero Section */}
        <section className="support-hero section-padding bg-gradient-to-b from-gray-900 to-gray-950">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
              {i18n.language === 'es' 
                ? 'Te Avisamos de Problemas Antes que los Notes'
                : 'We Alert You to Problems Before You Notice Them'
              }
            </h1>
            <div className="flex items-center justify-center space-x-2 mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-xl md:text-2xl font-semibold text-green-400">
                {i18n.language === 'es' ? 'Monitoreo Proactivo 24/7' : 'Proactive 24/7 Monitoring'}
              </span>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              {i18n.language === 'es'
                ? 'Nuestro equipo de especialistas certificados está aquí para ayudarte en cualquier momento. Respuesta promedio en 10 minutos.'
                : 'Our team of certified specialists is here to help you anytime. Average response in 10 minutes.'
              }
            </p>
            
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                <span>{i18n.language === 'es' ? 'Soporte Multiidioma' : 'Multilingual Support'}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                <span>{i18n.language === 'es' ? 'Respuesta 10 min' : '10 min Response'}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                <span>{i18n.language === 'es' ? 'Expertos Certificados' : 'Certified Experts'}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Support Channels */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {i18n.language === 'es' 
                  ? 'Canales de Soporte Disponibles'
                  : 'Available Support Channels'
                }
              </h2>
              <p className="text-xl text-gray-300">
                {i18n.language === 'es'
                  ? 'Elige el método que mejor se adapte a tus necesidades'
                  : 'Choose the method that best fits your needs'
                }
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {supportChannels.map((channel, index) => (
                <a 
                  key={index} 
                  href={channel.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-effect rounded-xl p-6 text-center hover:bg-white/10 transition-all group cursor-pointer"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <channel.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">{channel.title}</h3>
                  <p className="text-gray-300 mb-4">{channel.description}</p>
                  <span className="text-sm text-blue-400 font-medium group-hover:text-blue-300 transition-colors">{channel.availability}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Support Features */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {i18n.language === 'es' 
                  ? '¿Por Qué Nuestro Soporte es Diferente?'
                  : 'Why Our Support is Different?'
                }
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {supportFeatures.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="glass-effect rounded-xl p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">
                  {i18n.language === 'es' 
                    ? 'Información de Contacto'
                    : 'Contact Information'
                  }
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <Phone className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">
                    {i18n.language === 'es' ? 'Teléfono' : 'Phone'}
                  </h3>
                  <p className="text-gray-300">+1 (866) 606-2606</p>
                  <p className="text-sm text-gray-400">
                    {i18n.language === 'es' ? 'Disponible 24/7' : 'Available 24/7'}
                  </p>
                </div>

                <div className="text-center">
                  <Mail className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">
                    {i18n.language === 'es' ? 'Email' : 'Email'}
                  </h3>
                  <p className="text-gray-300">support@hostingempresa.com</p>
                  <p className="text-sm text-gray-400">
                    {i18n.language === 'es' ? 'Respuesta en 10 min' : 'Response in 10 min'}
                  </p>
                </div>

                <div className="text-center">
                  <MessageCircle className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">
                    {i18n.language === 'es' ? 'Chat en Vivo' : 'Live Chat'}
                  </h3>
                  <p className="text-gray-300">
                    {i18n.language === 'es' ? 'Disponible en el sitio' : 'Available on site'}
                  </p>
                  <p className="text-sm text-gray-400">
                    {i18n.language === 'es' ? 'Respuesta inmediata' : 'Instant response'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials específicos de soporte */}
        <Testimonials />

        {/* FAQ específico para support */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {i18n.language === 'es' 
                  ? 'Preguntas Frecuentes sobre Soporte'
                  : 'Support Frequently Asked Questions'
                }
              </h2>
            </div>
            <div className="glass-effect rounded-xl p-8">
              <FAQ />
            </div>
          </div>
        </section>

        {/* CTA final */}
        <CTA />
      </main>
    </>
  )
}

export default SupportPage
