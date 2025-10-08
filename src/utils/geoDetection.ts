// Detección geográfica avanzada para idiomas
export interface GeoLocation {
  country: string;
  language: string;
  timezone: string;
}

// Mapeo de países a idiomas preferidos
const COUNTRY_LANGUAGE_MAP: Record<string, string> = {
  // Países de habla inglesa
  'US': 'en', 'GB': 'en', 'AU': 'en', 'NZ': 'en', 'IE': 'en', 'ZA': 'en', 'IN': 'en',
  
  // Países de habla española
  'ES': 'es', 'MX': 'es', 'AR': 'es', 'CO': 'es', 'CL': 'es', 'PE': 'es', 'VE': 'es', 
  'EC': 'es', 'GT': 'es', 'CU': 'es', 'BO': 'es', 'DO': 'es', 'HN': 'es', 'PY': 'es',
  'SV': 'es', 'NI': 'es', 'CR': 'es', 'PA': 'es', 'UY': 'es', 'PR': 'es',
  
  // Países de habla portuguesa
  'BR': 'pt', 'PT': 'pt', 'AO': 'pt', 'MZ': 'pt',
  
  // Países de habla alemana
  'DE': 'de', 'AT': 'de', 'LI': 'de',
  
  // Países de habla francesa
  'FR': 'fr', 'BE': 'fr', 'MC': 'fr', 'LU': 'fr',
  
  // Países de habla italiana
  'IT': 'it', 'SM': 'it', 'VA': 'it',
  
  // Países multiidioma (Suiza - alemán por defecto, Canadá - inglés por defecto)
  'CH': 'de', 'CA': 'en',
  
  // Países asiáticos
  'JP': 'ja', 'CN': 'zh', 'TW': 'zh', 'HK': 'zh', 'SG': 'zh', 'KR': 'en', 'TH': 'en',
  'VN': 'en', 'PH': 'en', 'MY': 'en', 'ID': 'en'
};

// Detección por timezone como fallback
const TIMEZONE_LANGUAGE_MAP: Record<string, string> = {
  'America/New_York': 'en',
  'America/Los_Angeles': 'en',
  'America/Chicago': 'en',
  'America/Denver': 'en',
  'America/Toronto': 'en',
  'America/Vancouver': 'en',
  'Europe/London': 'en',
  'Australia/Sydney': 'en',
  'Australia/Melbourne': 'en',
  
  'Europe/Madrid': 'es',
  'America/Mexico_City': 'es',
  'America/Buenos_Aires': 'es',
  'America/Bogota': 'es',
  'America/Santiago': 'es',
  'America/Lima': 'es',
  
  'America/Sao_Paulo': 'pt',
  'Europe/Lisbon': 'pt',
  
  'Europe/Berlin': 'de',
  'Europe/Vienna': 'de',
  'Europe/Zurich': 'de',
  
  'Europe/Paris': 'fr',
  'Europe/Brussels': 'fr',
  
  'Europe/Rome': 'it',
  
  'Asia/Tokyo': 'ja',
  'Asia/Shanghai': 'zh',
  'Asia/Hong_Kong': 'zh',
  'Asia/Taipei': 'zh'
};

/**
 * Detecta el país del usuario usando múltiples métodos
 */
export const detectUserCountry = async (): Promise<string | null> => {
  try {
    // Método 1: API de geolocalización gratuita
    const response = await fetch('https://ipapi.co/json/', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      }
    });
    
    if (response.ok) {
      const data = await response.json();
      return data.country_code || null;
    }
  } catch (error) {
    console.warn('Geolocation API failed:', error);
  }

  try {
    // Método 2: API alternativa
    const response = await fetch('https://api.country.is/', {
      method: 'GET'
    });
    
    if (response.ok) {
      const data = await response.json();
      return data.country || null;
    }
  } catch (error) {
    console.warn('Alternative geolocation API failed:', error);
  }

  return null;
};

/**
 * Detecta el idioma basado en múltiples factores
 */
export const detectLanguageFromGeo = async (): Promise<string> => {
  // 1. Intentar detección por país
  try {
    const country = await detectUserCountry();
    if (country && COUNTRY_LANGUAGE_MAP[country]) {
      console.log(`Language detected by country (${country}):`, COUNTRY_LANGUAGE_MAP[country]);
      return COUNTRY_LANGUAGE_MAP[country];
    }
  } catch (error) {
    console.warn('Country detection failed:', error);
  }

  // 2. Fallback a timezone
  try {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (timezone && TIMEZONE_LANGUAGE_MAP[timezone]) {
      console.log(`Language detected by timezone (${timezone}):`, TIMEZONE_LANGUAGE_MAP[timezone]);
      return TIMEZONE_LANGUAGE_MAP[timezone];
    }
  } catch (error) {
    console.warn('Timezone detection failed:', error);
  }

  // 3. Fallback a idioma del navegador
  const browserLang = navigator.language || navigator.languages?.[0] || 'en';
  const langCode = browserLang.split('-')[0];
  
  // Verificar si el idioma del navegador está soportado
  const supportedLanguages = ['en', 'es', 'pt', 'de', 'fr', 'it', 'ja', 'zh'];
  if (supportedLanguages.includes(langCode)) {
    console.log(`Language detected by browser (${browserLang}):`, langCode);
    return langCode;
  }

  // 4. Fallback final a inglés
  console.log('Using default language: en');
  return 'en';
};

/**
 * Obtiene información completa de geolocalización
 */
export const getGeoLocation = async (): Promise<GeoLocation> => {
  const language = await detectLanguageFromGeo();
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const country = await detectUserCountry() || 'US';

  return {
    country,
    language,
    timezone
  };
};

/**
 * Guarda la preferencia de idioma del usuario
 */
export const saveLanguagePreference = (language: string): void => {
  try {
    localStorage.setItem('preferred-language', language);
    localStorage.setItem('language-detection-date', new Date().toISOString());
  } catch (error) {
    console.warn('Failed to save language preference:', error);
  }
};

/**
 * Obtiene la preferencia de idioma guardada
 */
export const getSavedLanguagePreference = (): string | null => {
  try {
    const saved = localStorage.getItem('preferred-language');
    const detectionDate = localStorage.getItem('language-detection-date');
    
    // Verificar si la detección es reciente (menos de 30 días)
    if (saved && detectionDate) {
      const date = new Date(detectionDate);
      const now = new Date();
      const daysDiff = (now.getTime() - date.getTime()) / (1000 * 3600 * 24);
      
      if (daysDiff < 30) {
        return saved;
      }
    }
    
    return null;
  } catch (error) {
    console.warn('Failed to get saved language preference:', error);
    return null;
  }
};
