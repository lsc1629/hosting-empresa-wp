// Configuración de rutas multiidioma con slugs SEO optimizados
export const ROUTE_SLUGS = {
  // Página principal
  home: {
    en: '/',
    es: '/',
    de: '/',
    pt: '/',
    fr: '/',
    it: '/',
    ja: '/',
    zh: '/'
  },
  
  // Hosting WordPress
  wordpress: {
    en: '/wordpress-hosting',
    es: '/hosting-wordpress',
    de: '/wordpress-hosting',
    pt: '/hospedagem-wordpress',
    fr: '/hebergement-wordpress',
    it: '/hosting-wordpress',
    ja: '/wordpress-hosting',
    zh: '/wordpress-hosting'
  },
  
  // Hosting WooCommerce
  woocommerce: {
    en: '/woocommerce-hosting',
    es: '/hosting-woocommerce',
    de: '/woocommerce-hosting',
    pt: '/hospedagem-woocommerce',
    fr: '/hebergement-woocommerce',
    it: '/hosting-woocommerce',
    ja: '/woocommerce-hosting',
    zh: '/woocommerce-hosting'
  },
  
  // Hosting Empresarial
  business: {
    en: '/business-hosting',
    es: '/hosting-empresarial',
    de: '/business-hosting',
    pt: '/hospedagem-empresarial',
    fr: '/hebergement-entreprise',
    it: '/hosting-aziendale',
    ja: '/business-hosting',
    zh: '/business-hosting'
  },
  
  // Comparación
  compare: {
    en: '/compare-hosting',
    es: '/comparar-hosting',
    de: '/hosting-vergleich',
    pt: '/comparar-hospedagem',
    fr: '/comparer-hebergement',
    it: '/confronta-hosting',
    ja: '/hosting-hikaku',
    zh: '/hosting-bijiao'
  },
  
  // Precios
  pricing: {
    en: '/pricing',
    es: '/precios',
    de: '/preise',
    pt: '/precos',
    fr: '/prix',
    it: '/prezzi',
    ja: '/kakaku',
    zh: '/jiage'
  },
  
  // Soporte
  support: {
    en: '/support',
    es: '/soporte',
    de: '/support',
    pt: '/suporte',
    fr: '/support',
    it: '/supporto',
    ja: '/support',
    zh: '/support'
  },
  
  // Blog
  blog: {
    en: '/blog',
    es: '/blog',
    de: '/blog',
    pt: '/blog',
    fr: '/blog',
    it: '/blog',
    ja: '/blog',
    zh: '/blog'
  }
}

// Función para obtener la ruta localizada
export const getLocalizedRoute = (routeKey: keyof typeof ROUTE_SLUGS, language: string = 'en'): string => {
  const route = ROUTE_SLUGS[routeKey]
  if (!route) return '/'
  
  const localizedPath = route[language as keyof typeof route] || route.en
  return localizedPath
}

// Función para obtener todas las rutas alternativas (hreflang)
export const getAlternateRoutes = (routeKey: keyof typeof ROUTE_SLUGS, baseUrl: string = 'https://yourdomain.com'): Array<{lang: string, url: string}> => {
  const route = ROUTE_SLUGS[routeKey]
  if (!route) return []
  
  return Object.entries(route).map(([lang, path]) => ({
    lang,
    url: `${baseUrl}${path}`
  }))
}

// Mapeo inverso para detectar ruta actual
export const ROUTE_MAPPING: Record<string, {key: keyof typeof ROUTE_SLUGS, lang: string}> = {}

// Generar mapeo inverso
Object.entries(ROUTE_SLUGS).forEach(([key, routes]) => {
  Object.entries(routes).forEach(([lang, path]) => {
    ROUTE_MAPPING[path] = { key: key as keyof typeof ROUTE_SLUGS, lang }
  })
})

// Función para detectar ruta y idioma actual
export const detectCurrentRoute = (pathname: string): {key: keyof typeof ROUTE_SLUGS, lang: string} | null => {
  return ROUTE_MAPPING[pathname] || null
}
