import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { detectCurrentRoute, getAlternateRoutes } from '../config/routes'

interface SEOHreflangProps {
  baseUrl?: string
}

const SEOHreflang: React.FC<SEOHreflangProps> = ({ baseUrl = 'https://yourdomain.com' }) => {
  const location = useLocation()
  
  useEffect(() => {
    // Detectar ruta actual y generar hreflang tags
    const currentRoute = detectCurrentRoute(location.pathname)
    
    if (currentRoute) {
      const alternateRoutes = getAlternateRoutes(currentRoute.key, baseUrl)
      
      // Limpiar hreflang tags existentes
      const existingHreflangTags = document.querySelectorAll('link[hreflang]')
      existingHreflangTags.forEach(tag => tag.remove())
      
      // Agregar nuevos hreflang tags
      alternateRoutes.forEach(({ lang, url }) => {
        const link = document.createElement('link')
        link.rel = 'alternate'
        link.hreflang = lang
        link.href = url
        document.head.appendChild(link)
      })
      
      // Agregar x-default
      const defaultLink = document.createElement('link')
      defaultLink.rel = 'alternate'
      defaultLink.hreflang = 'x-default'
      defaultLink.href = alternateRoutes.find(route => route.lang === 'en')?.url || `${baseUrl}/`
      document.head.appendChild(defaultLink)
    }
  }, [location.pathname, baseUrl])

  // Detectar ruta actual para generar canonical
  const currentRoute = detectCurrentRoute(location.pathname)
  const canonicalUrl = currentRoute ? 
    `${baseUrl}${location.pathname}` : 
    `${baseUrl}/`

  return (
    <Helmet>
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  )
}

export default SEOHreflang
