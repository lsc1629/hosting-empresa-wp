// Configuración de enlaces de afiliado de SiteGround
// IMPORTANTE: Reemplaza este enlace con tu enlace de afiliado real de SiteGround

export const AFFILIATE_CONFIG = {
  // Configuración base de SiteGround
  baseUrl: 'https://www.siteground.com/index.htm?afcode=62b413e012a225508070a82ec3dc67af',
  affiliateId: '62b413e012a225508070a82ec3dc67af',
  
  // Parámetros de tracking por defecto
  trackingParams: {
    utm_source: 'hosting-empresas',
    utm_medium: 'website',
    utm_campaign: 'siteground-business-hosting'
  },
  
  // Rutas específicas por plan
  plans: {
    startUp: '&plan=startup',
    growBig: '&plan=growbig', 
    goGeek: '&plan=gogeek'
  }
} as const;

/**
 * Genera el enlace de afiliado único
 * @param additionalParams - Parámetros adicionales opcionales
 * @returns URL completa con tracking
 */
export const getAffiliateLink = (
  additionalParams: Record<string, string> = {}
): string => {
  // Usar directamente el enlace base sin parámetros adicionales
  let url = AFFILIATE_CONFIG.baseUrl;
  
  // Solo agregar parámetros adicionales si se proporcionan explícitamente
  Object.entries(additionalParams).forEach(([key, value]) => {
    url += `&${key}=${encodeURIComponent(String(value))}`;
  });
  
  return url;
};

/**
 * Hook para abrir enlace de afiliado en nueva pestaña
 */
export const openAffiliateLink = (
  additionalParams: Record<string, string> = {}
): void => {
  const link = getAffiliateLink(additionalParams);
  window.open(link, '_blank', 'noopener,noreferrer');
};
