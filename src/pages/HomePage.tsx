import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import { SEO_CONFIG } from '../i18n/config'
import Hero from '../components/Hero'
import Problems from '../components/Problems'
import Agitation from '../components/Agitation'
import Solution from '../components/Solution'
import Features from '../components/Features'
import Pricing from '../components/Pricing'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import CTA from '../components/CTA'
import LanguageDetector from '../components/LanguageDetector'

const HomePage = () => {
  const { i18n } = useTranslation()
  const currentLang = i18n.language as keyof typeof SEO_CONFIG
  const seoData = SEO_CONFIG[currentLang] || SEO_CONFIG.en

  useEffect(() => {
    // Set document language
    document.documentElement.lang = seoData.lang
    
    // Add structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": seoData.title,
      "description": seoData.description,
      "url": seoData.canonical,
      "potentialAction": {
        "@type": "SearchAction",
        "target": `${seoData.canonical}/search?q={search_term_string}`,
        "query-input": "required name=search_term_string"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Hosting para Empresas",
        "url": seoData.canonical
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
  }, [seoData])

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <link rel="canonical" href={seoData.canonical} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={seoData.canonical} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:locale" content={seoData.lang} />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={seoData.canonical} />
        <meta property="twitter:title" content={seoData.title} />
        <meta property="twitter:description" content={seoData.description} />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        
        {/* Geo targeting */}
        <meta name="geo.region" content={seoData.region} />
        <meta name="geo.placename" content={seoData.region} />
        
        {/* Language alternatives */}
        <link rel="alternate" hrefLang="en" href="https://yourdomain.com/en" />
        <link rel="alternate" hrefLang="es" href="https://yourdomain.com/es" />
        <link rel="alternate" hrefLang="pt" href="https://yourdomain.com/pt" />
        <link rel="alternate" hrefLang="de" href="https://yourdomain.com/de" />
        <link rel="alternate" hrefLang="fr" href="https://yourdomain.com/fr" />
        <link rel="alternate" hrefLang="it" href="https://yourdomain.com/it" />
        <link rel="alternate" hrefLang="ja" href="https://yourdomain.com/ja" />
        <link rel="alternate" hrefLang="zh" href="https://yourdomain.com/zh" />
        <link rel="alternate" hrefLang="x-default" href="https://yourdomain.com/" />
      </Helmet>

      <LanguageDetector />
      
      <main>
        {/* Hero Section - limpio y sin interrupciones */}
        <Hero />

        <Problems />
        <Agitation />
        <Solution />
        <Features />
        
        {/* Pricing con información de mercado */}
        <Pricing />
        
        {/* Compliance integrado en footer de forma sutil */}

        <Testimonials />

        <FAQ />
        <CTA />
      </main>
    </>
  )
}

export default HomePage
