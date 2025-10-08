import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const LanguageDetector = () => {
  const { i18n } = useTranslation()

  useEffect(() => {
    const detectLanguageFromGeo = async () => {
      try {
        // Try to get user's country from IP geolocation
        const response = await fetch('https://ipapi.co/json/')
        const data = await response.json()
        
        const countryToLang: Record<string, string> = {
          'US': 'en', 'GB': 'en', 'CA': 'en', 'AU': 'en', 'IN': 'en',
          'ES': 'es', 'MX': 'es', 'AR': 'es', 'CO': 'es', 'CL': 'es',
          'BR': 'pt', 'PT': 'pt',
          'DE': 'de', 'AT': 'de', 'CH': 'de',
          'FR': 'fr', 'BE': 'fr',
          'IT': 'it',
          'JP': 'ja',
          'CN': 'zh', 'TW': 'zh'
        }
        
        const detectedLang = countryToLang[data.country_code] || 'en'
        
        // Only change language if not already set by user
        if (!localStorage.getItem('i18nextLng')) {
          i18n.changeLanguage(detectedLang)
        }
      } catch (error) {
        console.log('Geo detection failed, using browser language')
        // Fallback to browser language detection (already handled by i18next)
      }
    }

    detectLanguageFromGeo()
  }, [i18n])

  return null // This component doesn't render anything
}

export default LanguageDetector
