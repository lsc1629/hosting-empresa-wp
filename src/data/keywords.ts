// SEO Keywords by language and market
// Based on hosting search volume and competition analysis

export const KEYWORDS_BY_LANGUAGE = {
  en: {
    primary: [
      'web hosting',
      'best web hosting',
      'cheap web hosting',
      'wordpress hosting',
      'siteground hosting',
      'reliable hosting',
      'fast hosting',
      'secure hosting'
    ],
    secondary: [
      'hosting provider',
      'website hosting',
      'domain hosting',
      'cloud hosting',
      'shared hosting',
      'managed hosting',
      'hosting services',
      'web host'
    ],
    longtail: [
      'best web hosting for small business',
      'fastest wordpress hosting 2024',
      'cheap reliable web hosting',
      'siteground vs other hosting',
      'web hosting with free ssl',
      'hosting with 99.9% uptime',
      'best hosting for ecommerce',
      'wordpress hosting comparison'
    ],
    local: {
      'US': ['web hosting usa', 'american web hosting', 'us hosting provider'],
      'UK': ['web hosting uk', 'british web hosting', 'uk hosting provider'],
      'CA': ['web hosting canada', 'canadian web hosting', 'hosting provider canada'],
      'AU': ['web hosting australia', 'aussie web hosting', 'australian hosting']
    }
  },
  es: {
    primary: [
      'hosting web',
      'mejor hosting',
      'hosting barato',
      'hosting wordpress',
      'hosting siteground',
      'hosting confiable',
      'hosting rápido',
      'hosting seguro'
    ],
    secondary: [
      'proveedor hosting',
      'alojamiento web',
      'hosting dominio',
      'hosting en la nube',
      'hosting compartido',
      'hosting administrado',
      'servicios hosting',
      'host web'
    ],
    longtail: [
      'mejor hosting para pequeñas empresas',
      'hosting wordpress más rápido 2024',
      'hosting barato y confiable',
      'siteground vs otros hosting',
      'hosting web con ssl gratis',
      'hosting con 99.9% uptime',
      'mejor hosting para ecommerce',
      'comparación hosting wordpress'
    ],
    local: {
      'ES': ['hosting españa', 'hosting español', 'alojamiento web españa'],
      'MX': ['hosting méxico', 'hosting mexicano', 'alojamiento web méxico'],
      'AR': ['hosting argentina', 'hosting argentino', 'alojamiento web argentina'],
      'CO': ['hosting colombia', 'hosting colombiano', 'alojamiento web colombia']
    }
  },
  pt: {
    primary: [
      'hospedagem web',
      'melhor hospedagem',
      'hospedagem barata',
      'hospedagem wordpress',
      'hospedagem siteground',
      'hospedagem confiável',
      'hospedagem rápida',
      'hospedagem segura'
    ],
    secondary: [
      'provedor hospedagem',
      'alojamento web',
      'hospedagem domínio',
      'hospedagem nuvem',
      'hospedagem compartilhada',
      'hospedagem gerenciada',
      'serviços hospedagem',
      'host web'
    ],
    longtail: [
      'melhor hospedagem para pequenas empresas',
      'hospedagem wordpress mais rápida 2024',
      'hospedagem barata e confiável',
      'siteground vs outras hospedagens',
      'hospedagem web com ssl grátis',
      'hospedagem com 99.9% uptime',
      'melhor hospedagem para ecommerce',
      'comparação hospedagem wordpress'
    ],
    local: {
      'BR': ['hospedagem brasil', 'hospedagem brasileira', 'alojamento web brasil'],
      'PT': ['hospedagem portugal', 'hospedagem portuguesa', 'alojamento web portugal']
    }
  },
  de: {
    primary: [
      'webhosting',
      'bestes webhosting',
      'günstiges webhosting',
      'wordpress hosting',
      'siteground hosting',
      'zuverlässiges hosting',
      'schnelles hosting',
      'sicheres hosting'
    ],
    secondary: [
      'hosting anbieter',
      'website hosting',
      'domain hosting',
      'cloud hosting',
      'shared hosting',
      'managed hosting',
      'hosting dienste',
      'web host'
    ],
    longtail: [
      'bestes webhosting für kleine unternehmen',
      'schnellstes wordpress hosting 2024',
      'günstiges zuverlässiges webhosting',
      'siteground vs andere hosting',
      'webhosting mit kostenlosem ssl',
      'hosting mit 99.9% verfügbarkeit',
      'bestes hosting für ecommerce',
      'wordpress hosting vergleich'
    ],
    local: {
      'DE': ['webhosting deutschland', 'deutsches webhosting', 'hosting anbieter deutschland'],
      'AT': ['webhosting österreich', 'österreichisches webhosting', 'hosting anbieter österreich'],
      'CH': ['webhosting schweiz', 'schweizer webhosting', 'hosting anbieter schweiz']
    }
  }
} as const

// Get keywords for current language and region
export const getKeywordsForLanguage = (language: string, region?: string): string[] => {
  const langData = KEYWORDS_BY_LANGUAGE[language as keyof typeof KEYWORDS_BY_LANGUAGE]
  if (!langData) return [...KEYWORDS_BY_LANGUAGE.en.primary, ...KEYWORDS_BY_LANGUAGE.en.secondary, ...KEYWORDS_BY_LANGUAGE.en.longtail]

  const keywords: string[] = [
    ...langData.primary,
    ...langData.secondary,
    ...langData.longtail
  ]

  if (region && langData.local) {
    const localData = langData.local as unknown as Record<string, readonly string[]>
    const localKeywords = localData[region]
    if (localKeywords && Array.isArray(localKeywords)) {
      keywords.push(...localKeywords)
    }
  }

  return keywords
}

// Generate meta keywords string
export const generateMetaKeywords = (language: string, region?: string) => {
  const keywords = getKeywordsForLanguage(language, region)
  return keywords.slice(0, 15).join(', ') // Limit to 15 keywords for meta tag
}
