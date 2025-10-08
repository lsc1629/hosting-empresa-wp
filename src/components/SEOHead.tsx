import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { SEO_CONFIG } from '../i18n/config'

interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string
  canonical?: string
  noindex?: boolean
}

const SEOHead = ({ 
  title, 
  description, 
  keywords, 
  canonical, 
  noindex = false 
}: SEOHeadProps) => {
  const { i18n } = useTranslation()
  const currentLang = i18n.language as keyof typeof SEO_CONFIG
  const seoData = SEO_CONFIG[currentLang] || SEO_CONFIG.en

  const finalTitle = title || seoData.title
  const finalDescription = description || seoData.description
  const finalKeywords = keywords || seoData.keywords
  const finalCanonical = canonical || seoData.canonical

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords} />
      <link rel="canonical" href={finalCanonical} />
      
      {/* Language and Region */}
      <html lang={seoData.lang} />
      <meta name="geo.region" content={seoData.region} />
      <meta name="geo.placename" content={seoData.region} />
      
      {/* Robots */}
      <meta 
        name="robots" 
        content={noindex ? 'noindex, nofollow' : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'} 
      />
      <meta name="googlebot" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      <meta name="bingbot" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={finalCanonical} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:locale" content={seoData.lang} />
      <meta property="og:site_name" content="SiteGround Hosting Promotion" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={finalCanonical} />
      <meta property="twitter:title" content={finalTitle} />
      <meta property="twitter:description" content={finalDescription} />
      
      {/* Additional SEO */}
      <meta name="author" content="SiteGround Hosting Promotion" />
      <meta name="publisher" content="SiteGround Hosting Promotion" />
      <meta name="copyright" content="© 2024 SiteGround Hosting Promotion" />
      
      {/* Mobile Optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Performance Hints */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://www.siteground.com" />
      
      {/* PWA */}
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#0ea5e9" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Language Alternatives */}
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
  )
}

export default SEOHead
