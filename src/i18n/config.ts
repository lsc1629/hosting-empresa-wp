import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { en } from './locales/en';
import { es } from './locales/es';
import { pt } from './locales/pt';
import { de } from './locales/de';
import { fr } from './locales/fr';
import { it } from './locales/it';
import { ja } from './locales/ja';
import { zh } from './locales/zh';
import { detectLanguageFromGeo, getSavedLanguagePreference, saveLanguagePreference } from '../utils/geoDetection';

// Configuración de detección de idioma basada en geolocalización avanzada
const languageDetector = new LanguageDetector();
languageDetector.addDetector({
  name: 'advancedGeoDetector',
  lookup() {
    // 1. Verificar si hay una preferencia guardada reciente
    const savedLang = getSavedLanguagePreference();
    if (savedLang) {
      console.log('Using saved language preference:', savedLang);
      return savedLang;
    }

    // 2. Iniciar detección geográfica en background
    detectLanguageFromGeo().then((detectedLang) => {
      console.log('Language detected via geo:', detectedLang);
      
      // Si el idioma detectado es diferente al actual, cambiar
      if (i18n.language !== detectedLang) {
        saveLanguagePreference(detectedLang);
        i18n.changeLanguage(detectedLang);
      }
    }).catch((error) => {
      console.warn('Advanced geo detection failed:', error);
    });

    // 3. Fallback inmediato a idioma del navegador
    const browserLang = navigator.language.split('-')[0];
    const supportedLanguages = ['en', 'es', 'pt', 'de', 'fr', 'it', 'ja', 'zh'];
    
    if (supportedLanguages.includes(browserLang)) {
      console.log('Using browser language:', browserLang);
      return browserLang;
    }
    
    // 4. Fallback final a inglés
    console.log('Using default language: en');
    return 'en';
  },
  cacheUserLanguage(lng: string) {
    // Guardar la preferencia del usuario cuando cambie manualmente
    saveLanguagePreference(lng);
  }
});

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es },
      pt: { translation: pt },
      de: { translation: de },
      fr: { translation: fr },
      it: { translation: it },
      ja: { translation: ja },
      zh: { translation: zh },
    },
    fallbackLng: 'en',
    supportedLngs: ['en', 'es', 'pt', 'de', 'fr', 'it', 'ja', 'zh'],
    detection: {
      order: ['querystring', 'localStorage', 'advancedGeoDetector', 'navigator'],
      caches: ['localStorage'],
      lookupQuerystring: 'lang',
      lookupLocalStorage: 'i18nextLng',
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

// Metadata SEO por idioma y región
export const SEO_CONFIG = {
  en: {
    title: 'SiteGround Hosting - Fast, Secure & Reliable Web Hosting 2024',
    description: 'Get premium web hosting with 99.9% uptime, free SSL, daily backups, and 24/7 support. Perfect for WordPress, WooCommerce, and all websites. Start from $2.99/month.',
    keywords: 'web hosting, siteground hosting, wordpress hosting, cheap hosting, best hosting, secure hosting, fast hosting, cloud hosting, woocommerce hosting',
    lang: 'en',
    region: 'US',
    canonical: 'https://yourdomain.com/en'
  },
  es: {
    title: 'Hosting SiteGround - Alojamiento Web Rápido, Seguro y Confiable 2024',
    description: 'Obtén hosting premium con 99.9% uptime, SSL gratis, backups diarios y soporte 24/7. Perfecto para WordPress, WooCommerce y todos los sitios web. Desde $2.99/mes.',
    keywords: 'hosting web, hosting siteground, hosting wordpress, hosting barato, mejor hosting, hosting seguro, hosting rápido, hosting en la nube, hosting woocommerce',
    lang: 'es',
    region: 'ES',
    canonical: 'https://yourdomain.com/es'
  },
  pt: {
    title: 'Hospedagem SiteGround - Hosting Rápido, Seguro e Confiável 2024',
    description: 'Obtenha hospedagem premium com 99.9% uptime, SSL grátis, backups diários e suporte 24/7. Perfeito para WordPress, WooCommerce e todos os sites. A partir de $2.99/mês.',
    keywords: 'hospedagem web, hospedagem siteground, hospedagem wordpress, hospedagem barata, melhor hospedagem, hospedagem segura, hospedagem rápida, hospedagem na nuvem',
    lang: 'pt',
    region: 'BR',
    canonical: 'https://yourdomain.com/pt'
  },
  de: {
    title: 'SiteGround Hosting - Schnelles, Sicheres & Zuverlässiges Webhosting 2024',
    description: 'Premium-Webhosting mit 99,9% Verfügbarkeit, kostenlosem SSL, täglichen Backups und 24/7-Support. Perfekt für WordPress, WooCommerce und alle Websites. Ab 2,99€/Monat.',
    keywords: 'webhosting, siteground hosting, wordpress hosting, günstiges hosting, bestes hosting, sicheres hosting, schnelles hosting, cloud hosting',
    lang: 'de',
    region: 'DE',
    canonical: 'https://yourdomain.com/de'
  },
  fr: {
    title: 'Hébergement SiteGround - Hébergement Web Rapide, Sécurisé et Fiable 2024',
    description: 'Hébergement web premium avec 99,9% uptime, SSL gratuit, sauvegardes quotidiennes et support 24/7. Parfait pour WordPress, WooCommerce et tous les sites. À partir de 2,99€/mois.',
    keywords: 'hébergement web, hébergement siteground, hébergement wordpress, hébergement pas cher, meilleur hébergement, hébergement sécurisé, hébergement rapide',
    lang: 'fr',
    region: 'FR',
    canonical: 'https://yourdomain.com/fr'
  },
  it: {
    title: 'Hosting SiteGround - Hosting Web Veloce, Sicuro e Affidabile 2024',
    description: 'Hosting web premium con 99,9% uptime, SSL gratuito, backup giornalieri e supporto 24/7. Perfetto per WordPress, WooCommerce e tutti i siti web. A partire da €2,99/mese.',
    keywords: 'hosting web, hosting siteground, hosting wordpress, hosting economico, miglior hosting, hosting sicuro, hosting veloce, cloud hosting',
    lang: 'it',
    region: 'IT',
    canonical: 'https://yourdomain.com/it'
  },
  ja: {
    title: 'SiteGround ホスティング - 高速、安全、信頼性の高いウェブホスティング 2024',
    description: '99.9%のアップタイム、無料SSL、毎日のバックアップ、24時間年中無休のサポートを備えたプレミアムホスティング。WordPress、WooCommerce、すべてのウェブサイトに最適。月額$2.99から。',
    keywords: 'ウェブホスティング, siteground ホスティング, wordpress ホスティング, 格安ホスティング, 最高のホスティング, 安全なホスティング, 高速ホスティング',
    lang: 'ja',
    region: 'JP',
    canonical: 'https://yourdomain.com/ja'
  },
  zh: {
    title: 'SiteGround 托管 - 快速、安全、可靠的网络托管 2024',
    description: '获得具有99.9%正常运行时间、免费SSL、每日备份和24/7支持的高级网络托管。非常适合WordPress、WooCommerce和所有网站。每月仅需$2.99起。',
    keywords: '网络托管, siteground托管, wordpress托管, 便宜的托管, 最佳托管, 安全托管, 快速托管, 云托管',
    lang: 'zh',
    region: 'CN',
    canonical: 'https://yourdomain.com/zh'
  }
};
