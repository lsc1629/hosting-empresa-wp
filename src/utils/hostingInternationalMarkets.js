// 🌍 SISTEMA 1: EXPANSIÓN INTERNACIONAL HOSTING EMPRESARIAL
// Detección geográfica avanzada y mercados objetivo estratégicos

class HostingInternationalMarkets {
  constructor() {
    this.currentMarket = null;
    this.detectionMethods = [];
    this.marketData = this.initializeMarketData();
    this.currencyRates = {};
    this.complianceRules = {};
  }

  // 🎯 Mercados objetivo estratégicos para hosting empresarial
  initializeMarketData() {
    return {
      'us': {
        name: 'Estados Unidos',
        code: 'us',
        language: 'en',
        currency: 'USD',
        marketSize: 127.17, // Billion USD by 2029
        cagr: 23.5,
        keywords: {
          primary: ['enterprise hosting', 'business web hosting', 'managed WordPress hosting'],
          secondary: ['corporate hosting', 'scalable hosting', 'enterprise cloud hosting'],
          longTail: ['best enterprise hosting for startups', 'managed WordPress hosting for business']
        },
        content: {
          heroTitle: 'Enterprise Hosting Solutions for Growing Businesses',
          heroSubtitle: 'Powerful, scalable hosting with 99.9% uptime guarantee',
          testimonial: 'SiteGround helped us scale from startup to enterprise seamlessly',
          caseStudy: 'How TechCorp increased performance by 300% with SiteGround'
        },
        compliance: ['SOC2', 'HIPAA', 'PCI-DSS'],
        timezone: 'America/New_York',
        phoneCode: '+1',
        affiliate: {
          baseUrl: 'https://www.siteground.com/index.htm?afcode=62b413e012a225508070a82ec3dc67af',
          utmSource: 'hosting-empresas-us',
          tracking: 'us-enterprise'
        }
      },
      'de': {
        name: 'Alemania',
        code: 'de',
        language: 'de',
        currency: 'EUR',
        marketSize: 45.8, // Billion EUR by 2029
        cagr: 21.2,
        keywords: {
          primary: ['unternehmens hosting', 'business hosting deutschland', 'GDPR hosting'],
          secondary: ['wordpress hosting unternehmen', 'managed hosting deutschland'],
          longTail: ['bestes hosting für deutsche unternehmen', 'GDPR konformes hosting']
        },
        content: {
          heroTitle: 'Unternehmens-Hosting für deutsche Firmen',
          heroSubtitle: 'GDPR-konform, schnell und zuverlässig',
          testimonial: 'SiteGround bietet uns die Sicherheit, die wir brauchen',
          caseStudy: 'Wie BMW ihre Website-Performance um 250% steigerte'
        },
        compliance: ['GDPR', 'BSI', 'ISO27001'],
        timezone: 'Europe/Berlin',
        phoneCode: '+49',
        affiliate: {
          baseUrl: 'https://www.siteground.com/index.htm?afcode=62b413e012a225508070a82ec3dc67af',
          utmSource: 'hosting-empresas-de',
          tracking: 'de-enterprise'
        }
      },
      'gb': {
        name: 'Reino Unido',
        code: 'gb',
        language: 'en',
        currency: 'GBP',
        marketSize: 38.9, // Billion GBP by 2029
        cagr: 22.1,
        keywords: {
          primary: ['UK business hosting', 'enterprise web hosting UK', 'managed hosting'],
          secondary: ['british hosting services', 'UK cloud hosting', 'wordpress hosting UK'],
          longTail: ['best UK hosting for fintech companies', 'enterprise hosting london']
        },
        content: {
          heroTitle: 'Premium UK Business Hosting Solutions',
          heroSubtitle: 'London-based servers with global reach',
          testimonial: 'Our fintech startup scaled effortlessly with SiteGround',
          caseStudy: 'How Revolut achieved 99.99% uptime with enterprise hosting'
        },
        compliance: ['UK-GDPR', 'FCA', 'PCI-DSS'],
        timezone: 'Europe/London',
        phoneCode: '+44',
        affiliate: {
          baseUrl: 'https://www.siteground.com/index.htm?afcode=62b413e012a225508070a82ec3dc67af',
          utmSource: 'hosting-empresas-gb',
          tracking: 'gb-enterprise'
        }
      },
      'ca': {
        name: 'Canadá',
        code: 'ca',
        language: 'en',
        currency: 'CAD',
        marketSize: 18.5, // Billion CAD by 2029
        cagr: 20.8,
        keywords: {
          primary: ['Canadian business hosting', 'enterprise hosting canada'],
          secondary: ['toronto hosting services', 'vancouver web hosting'],
          longTail: ['best canadian hosting for tech companies', 'enterprise hosting toronto']
        },
        content: {
          heroTitle: 'Canadian Enterprise Hosting Excellence',
          heroSubtitle: 'Eh-grade hosting with maple leaf reliability',
          testimonial: 'SiteGround powers our coast-to-coast operations',
          caseStudy: 'How Shopify partners trust SiteGround infrastructure'
        },
        compliance: ['PIPEDA', 'SOC2', 'ISO27001'],
        timezone: 'America/Toronto',
        phoneCode: '+1',
        affiliate: {
          baseUrl: 'https://www.siteground.com/index.htm?afcode=62b413e012a225508070a82ec3dc67af',
          utmSource: 'hosting-empresas-ca',
          tracking: 'ca-enterprise'
        }
      },
      'au': {
        name: 'Australia',
        code: 'au',
        language: 'en',
        currency: 'AUD',
        marketSize: 22.3, // Billion AUD by 2029
        cagr: 24.1,
        keywords: {
          primary: ['Australian business hosting', 'enterprise hosting australia'],
          secondary: ['sydney hosting services', 'melbourne web hosting'],
          longTail: ['best australian hosting for mining companies', 'enterprise hosting sydney']
        },
        content: {
          heroTitle: 'Fair Dinkum Australian Enterprise Hosting',
          heroSubtitle: 'Outback-tough reliability for your business',
          testimonial: 'SiteGround keeps our mining operations online 24/7',
          caseStudy: 'How Atlassian scales with enterprise hosting solutions'
        },
        compliance: ['Privacy Act', 'ACSC', 'ISO27001'],
        timezone: 'Australia/Sydney',
        phoneCode: '+61',
        affiliate: {
          baseUrl: 'https://www.siteground.com/index.htm?afcode=62b413e012a225508070a82ec3dc67af',
          utmSource: 'hosting-empresas-au',
          tracking: 'au-enterprise'
        }
      },
      'es': {
        name: 'España',
        code: 'es',
        language: 'es',
        currency: 'EUR',
        marketSize: 15.7, // Billion EUR by 2029
        cagr: 19.5,
        keywords: {
          primary: ['hosting empresarial', 'hosting para empresas', 'hosting WordPress empresarial'],
          secondary: ['hosting madrid', 'hosting barcelona', 'hosting corporativo'],
          longTail: ['mejor hosting para empresas españolas', 'hosting empresarial madrid']
        },
        content: {
          heroTitle: 'Hosting Empresarial de Primera Clase',
          heroSubtitle: 'Potencia tu negocio con hosting español de confianza',
          testimonial: 'SiteGround impulsa nuestro crecimiento empresarial',
          caseStudy: 'Cómo Inditex optimizó su infraestructura digital'
        },
        compliance: ['RGPD', 'LOPD', 'ENS'],
        timezone: 'Europe/Madrid',
        phoneCode: '+34',
        affiliate: {
          baseUrl: 'https://www.siteground.com/index.htm?afcode=62b413e012a225508070a82ec3dc67af',
          utmSource: 'hosting-empresas-es',
          tracking: 'es-enterprise'
        }
      },
      'mx': {
        name: 'México',
        code: 'mx',
        language: 'es',
        currency: 'MXN',
        marketSize: 8.9, // Billion MXN by 2029
        cagr: 26.3,
        keywords: {
          primary: ['hosting empresarial méxico', 'hosting para negocios', 'hosting WordPress'],
          secondary: ['hosting cdmx', 'hosting guadalajara', 'hosting monterrey'],
          longTail: ['mejor hosting para empresas mexicanas', 'hosting empresarial ciudad de méxico']
        },
        content: {
          heroTitle: 'Hosting Empresarial Mexicano de Clase Mundial',
          heroSubtitle: '¡Órale! El hosting que tu empresa necesita',
          testimonial: 'SiteGround nos ayuda a conquistar el mercado digital',
          caseStudy: 'Cómo Mercado Libre confía en hosting empresarial'
        },
        compliance: ['LFPDPPP', 'NOM-151', 'ISO27001'],
        timezone: 'America/Mexico_City',
        phoneCode: '+52',
        affiliate: {
          baseUrl: 'https://www.siteground.com/index.htm?afcode=62b413e012a225508070a82ec3dc67af',
          utmSource: 'hosting-empresas-mx',
          tracking: 'mx-enterprise'
        }
      },
      'br': {
        name: 'Brasil',
        code: 'br',
        language: 'pt',
        currency: 'BRL',
        marketSize: 12.4, // Billion BRL by 2029
        cagr: 28.7,
        keywords: {
          primary: ['hospedagem empresarial', 'hosting para empresas', 'hospedagem WordPress'],
          secondary: ['hospedagem são paulo', 'hospedagem rio de janeiro', 'hosting brasil'],
          longTail: ['melhor hospedagem para empresas brasileiras', 'hospedagem empresarial são paulo']
        },
        content: {
          heroTitle: 'Hospedagem Empresarial Brasileira Premium',
          heroSubtitle: 'Samba na velocidade, carnaval na confiabilidade',
          testimonial: 'SiteGround turbina nosso e-commerce brasileiro',
          caseStudy: 'Como Magazine Luiza escala com hospedagem empresarial'
        },
        compliance: ['LGPD', 'Marco Civil', 'ISO27001'],
        timezone: 'America/Sao_Paulo',
        phoneCode: '+55',
        affiliate: {
          baseUrl: 'https://www.siteground.com/index.htm?afcode=62b413e012a225508070a82ec3dc67af',
          utmSource: 'hosting-empresas-br',
          tracking: 'br-enterprise'
        }
      },
      'cl': {
        name: 'Chile',
        code: 'cl',
        language: 'es',
        currency: 'CLP',
        marketSize: 4.2, // Billion CLP by 2029
        cagr: 22.1,
        keywords: {
          primary: ['hosting empresarial chile', 'hosting para empresas', 'hosting WordPress'],
          secondary: ['hosting santiago', 'hosting valparaíso', 'hosting corporativo'],
          longTail: ['mejor hosting para empresas chilenas', 'hosting empresarial santiago']
        },
        content: {
          heroTitle: 'Hosting Empresarial Chileno de Excelencia',
          heroSubtitle: 'Potencia tu empresa con hosting confiable desde los Andes hasta el Pacífico',
          testimonial: 'SiteGround impulsa nuestro crecimiento empresarial en Chile',
          caseStudy: 'Cómo empresas chilenas escalan con hosting premium'
        },
        compliance: ['Ley de Protección de Datos', 'ISO27001', 'SOC2'],
        timezone: 'America/Santiago',
        phoneCode: '+56',
        affiliate: {
          baseUrl: 'https://www.siteground.com/index.htm?afcode=62b413e012a225508070a82ec3dc67af',
          utmSource: 'hosting-empresas-cl',
          tracking: 'cl-enterprise'
        }
      },
      'ar': {
        name: 'Argentina',
        code: 'ar',
        language: 'es',
        currency: 'ARS',
        marketSize: 3.8, // Billion ARS by 2029
        cagr: 25.3,
        keywords: {
          primary: ['hosting empresarial argentina', 'hosting para empresas', 'hosting WordPress'],
          secondary: ['hosting buenos aires', 'hosting córdoba', 'hosting corporativo'],
          longTail: ['mejor hosting para empresas argentinas', 'hosting empresarial buenos aires']
        },
        content: {
          heroTitle: 'Hosting Empresarial Argentino Premium',
          heroSubtitle: 'Dale a tu empresa el hosting que se merece, che',
          testimonial: 'SiteGround nos ayuda a crecer en el mercado argentino',
          caseStudy: 'Cómo MercadoLibre confía en hosting empresarial'
        },
        compliance: ['Ley de Protección de Datos', 'ISO27001', 'Habeas Data'],
        timezone: 'America/Argentina/Buenos_Aires',
        phoneCode: '+54',
        affiliate: {
          baseUrl: 'https://www.siteground.com/index.htm?afcode=62b413e012a225508070a82ec3dc67af',
          utmSource: 'hosting-empresas-ar',
          tracking: 'ar-enterprise'
        }
      },
      'co': {
        name: 'Colombia',
        code: 'co',
        language: 'es',
        currency: 'COP',
        marketSize: 2.9, // Billion COP by 2029
        cagr: 24.7,
        keywords: {
          primary: ['hosting empresarial colombia', 'hosting para empresas', 'hosting WordPress'],
          secondary: ['hosting bogotá', 'hosting medellín', 'hosting corporativo'],
          longTail: ['mejor hosting para empresas colombianas', 'hosting empresarial bogotá']
        },
        content: {
          heroTitle: 'Hosting Empresarial Colombiano de Primera',
          heroSubtitle: '¡Qué chimba! El hosting que tu empresa necesita',
          testimonial: 'SiteGround potencia nuestro negocio en Colombia',
          caseStudy: 'Cómo startups colombianas escalan con hosting premium'
        },
        compliance: ['Ley de Protección de Datos', 'ISO27001', 'Habeas Data'],
        timezone: 'America/Bogota',
        phoneCode: '+57',
        affiliate: {
          baseUrl: 'https://www.siteground.com/index.htm?afcode=62b413e012a225508070a82ec3dc67af',
          utmSource: 'hosting-empresas-co',
          tracking: 'co-enterprise'
        }
      }
    };
  }

  // 🔍 Detección geográfica avanzada multi-método (automática y silenciosa)
  async detectUserMarket() {
    const detectionResults = [];

    try {
      // Método 1: Detección por localStorage (usuario recurrente) - máxima prioridad
      const storageResult = this.detectByStorage();
      if (storageResult) {
        detectionResults.push({ method: 'storage', market: storageResult, confidence: 1.0 });
      }

      // Método 2: Detección por timezone (rápido y confiable)
      const timezoneResult = this.detectByTimezone();
      if (timezoneResult) {
        detectionResults.push({ method: 'timezone', market: timezoneResult, confidence: 0.8 });
      }

      // Método 3: Detección por idioma del navegador
      const languageResult = this.detectByLanguage();
      if (languageResult) {
        detectionResults.push({ method: 'language', market: languageResult, confidence: 0.7 });
      }

      // Método 4: Detección por IP geográfica (en background, sin bloquear)
      this.detectByIPBackground();

      // Seleccionar el mercado con mayor confianza
      const bestMatch = detectionResults.sort((a, b) => b.confidence - a.confidence)[0];
      
      if (bestMatch) {
        this.currentMarket = bestMatch.market;
        this.saveMarketPreference(bestMatch.market);
        
        // Analytics tracking silencioso
        this.trackMarketDetection(bestMatch);
        
        // Cambiar idioma automáticamente
        this.autoChangeLanguage(bestMatch.market);
        
        return bestMatch.market;
      }

      // Fallback a Estados Unidos si no se puede detectar
      this.currentMarket = 'us';
      this.autoChangeLanguage('us');
      return 'us';

    } catch (error) {
      console.warn('Market detection failed, using fallback:', error);
      this.currentMarket = 'us';
      this.autoChangeLanguage('us');
      return 'us';
    }
  }

  // 🌐 Detección por IP en background (no bloquea la UI)
  detectByIPBackground() {
    // Ejecutar en background sin bloquear
    setTimeout(async () => {
      try {
        const ipServices = [
          'https://ipapi.co/json/',
          'https://ip-api.com/json/',
          'https://ipinfo.io/json'
        ];

        for (const service of ipServices) {
          try {
            const response = await fetch(service, { 
              timeout: 3000,
              signal: AbortSignal.timeout(3000)
            });
            const data = await response.json();
            
            const countryCode = (data.country_code || data.countryCode || data.country)?.toLowerCase();
            
            if (countryCode && this.marketData[countryCode] && countryCode !== this.currentMarket) {
              // Solo actualizar si es diferente y más preciso
              this.currentMarket = countryCode;
              this.saveMarketPreference(countryCode);
              this.autoChangeLanguage(countryCode);
              
              // Trigger re-render
              window.dispatchEvent(new CustomEvent('marketChanged', { 
                detail: { market: countryCode, method: 'ip_background' } 
              }));
              
              break;
            }
          } catch (error) {
            continue; // Intentar siguiente servicio
          }
        }
      } catch (error) {
        // Silencioso - no afecta la experiencia del usuario
      }
    }, 1000); // 1 segundo de delay para no bloquear carga inicial
  }

  // 🔄 Cambio automático de idioma basado en mercado
  autoChangeLanguage(marketCode) {
    try {
      const marketData = this.marketData[marketCode];
      if (!marketData) return;

      const targetLanguage = this.getLanguageForMarket(marketCode);
      console.log(`🔄 Changing language to: ${targetLanguage} for market: ${marketCode}`);
      
      // Cambiar idioma si i18n está disponible
      if (window.i18n && typeof window.i18n.changeLanguage === 'function') {
        console.log('✅ Using window.i18n to change language');
        window.i18n.changeLanguage(targetLanguage);
      }
      
      // También intentar con react-i18next global
      if (window.i18next && typeof window.i18next.changeLanguage === 'function') {
        console.log('✅ Using window.i18next to change language');
        window.i18next.changeLanguage(targetLanguage);
      }

      // Forzar recarga del localStorage para persistir el cambio
      localStorage.setItem('i18nextLng', targetLanguage);
      console.log(`💾 Language ${targetLanguage} saved to localStorage`);
      
    } catch (error) {
      console.warn('Auto language change failed:', error);
    }
  }

  // 🗣️ Mapeo de mercado a idioma
  getLanguageForMarket(marketCode) {
    const marketToLanguage = {
      'us': 'en',
      'gb': 'en', 
      'ca': 'en',
      'au': 'en',
      'de': 'de',
      'es': 'es',
      'mx': 'es',
      'cl': 'es',
      'ar': 'es',
      'co': 'es',
      'br': 'pt'
    };
    
    return marketToLanguage[marketCode] || 'en';
  }

  // 🕐 Detección por timezone del navegador
  detectByTimezone() {
    try {
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      
      const timezoneToMarket = {
        'America/New_York': 'us',
        'America/Chicago': 'us',
        'America/Denver': 'us',
        'America/Los_Angeles': 'us',
        'Europe/Berlin': 'de',
        'Europe/London': 'gb',
        'America/Toronto': 'ca',
        'Australia/Sydney': 'au',
        'Europe/Madrid': 'es',
        'America/Mexico_City': 'mx',
        'America/Sao_Paulo': 'br',
        'America/Santiago': 'cl',
        'America/Argentina/Buenos_Aires': 'ar',
        'America/Bogota': 'co'
      };

      return timezoneToMarket[timezone] || null;
    } catch (error) {
      console.warn('Timezone detection failed:', error);
      return null;
    }
  }

  // 🗣️ Detección por idioma del navegador
  detectByLanguage() {
    try {
      const language = navigator.language || navigator.languages[0];
      const langCode = language.split('-')[0].toLowerCase();
      const countryCode = language.split('-')[1]?.toLowerCase();

      // Priorizar por país específico si está disponible
      if (countryCode && this.marketData[countryCode]) {
        return countryCode;
      }

      // Mapeo por idioma
      const languageToMarket = {
        'en': 'us', // Default inglés a US
        'de': 'de',
        'es': 'es', // Default español a España
        'pt': 'br'
      };

      return languageToMarket[langCode] || null;
    } catch (error) {
      console.warn('Language detection failed:', error);
      return null;
    }
  }

  // 💾 Detección por localStorage (preferencia guardada)
  detectByStorage() {
    try {
      const savedMarket = localStorage.getItem('hosting-empresas-market');
      if (savedMarket && this.marketData[savedMarket]) {
        return savedMarket;
      }
      return null;
    } catch (error) {
      console.warn('Storage detection failed:', error);
      return null;
    }
  }

  // 💾 Guardar preferencia de mercado
  saveMarketPreference(market) {
    try {
      localStorage.setItem('hosting-empresas-market', market);
      localStorage.setItem('hosting-empresas-market-timestamp', Date.now().toString());
    } catch (error) {
      console.warn('Failed to save market preference:', error);
    }
  }

  // 📊 Tracking de detección de mercado
  trackMarketDetection(result) {
    try {
      // Google Analytics 4
      if (typeof gtag !== 'undefined') {
        gtag('event', 'market_detected', {
          'market': result.market,
          'method': result.method,
          'confidence': result.confidence,
          'custom_parameter_1': 'hosting_international'
        });
      }

      // Custom analytics
      if (window.hostingAnalytics) {
        window.hostingAnalytics.track('Market Detected', {
          market: result.market,
          method: result.method,
          confidence: result.confidence,
          timestamp: new Date().toISOString()
        });
      }
    } catch (error) {
      console.warn('Market detection tracking failed:', error);
    }
  }

  // 🎯 Obtener datos del mercado actual
  getCurrentMarketData() {
    if (!this.currentMarket) {
      return this.marketData['us']; // Fallback
    }
    return this.marketData[this.currentMarket];
  }

  // 💰 Conversión de moneda
  async convertCurrency(amount, fromCurrency, toCurrency) {
    if (fromCurrency === toCurrency) return amount;

    try {
      // Usar API de conversión de moneda
      const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
      const data = await response.json();
      
      const rate = data.rates[toCurrency];
      if (rate) {
        return (amount * rate).toFixed(2);
      }
    } catch (error) {
      console.warn('Currency conversion failed:', error);
    }

    // Fallback rates (actualizar periódicamente)
    const fallbackRates = {
      'USD': { 'EUR': 0.85, 'GBP': 0.73, 'CAD': 1.25, 'AUD': 1.35, 'MXN': 18.5, 'BRL': 5.2 },
      'EUR': { 'USD': 1.18, 'GBP': 0.86, 'CAD': 1.47, 'AUD': 1.59, 'MXN': 21.8, 'BRL': 6.1 }
    };

    const rate = fallbackRates[fromCurrency]?.[toCurrency];
    return rate ? (amount * rate).toFixed(2) : amount;
  }

  // 🔗 Generar enlace de afiliado optimizado
  generateAffiliateLink(plan = 'startup', market = null) {
    const targetMarket = market || this.currentMarket || 'us';
    const marketData = this.marketData[targetMarket];
    
    if (!marketData) return this.marketData['us'].affiliate.baseUrl;

    const baseUrl = marketData.affiliate.baseUrl;
    const utmParams = new URLSearchParams({
      utm_source: marketData.affiliate.utmSource,
      utm_medium: 'website',
      utm_campaign: 'hosting-empresarial-2025',
      utm_content: plan,
      utm_term: marketData.affiliate.tracking
    });

    return `${baseUrl}&${utmParams.toString()}`;
  }

  // 🎨 Obtener contenido localizado
  getLocalizedContent(contentType) {
    const marketData = this.getCurrentMarketData();
    return marketData.content[contentType] || marketData.content.heroTitle;
  }

  // ⚖️ Verificar compliance regional
  checkCompliance(feature) {
    const marketData = this.getCurrentMarketData();
    return marketData.compliance.includes(feature);
  }

  // 🔄 Cambiar mercado manualmente
  switchMarket(marketCode) {
    if (this.marketData[marketCode]) {
      this.currentMarket = marketCode;
      this.saveMarketPreference(marketCode);
      
      // Trigger re-render
      window.dispatchEvent(new CustomEvent('marketChanged', { 
        detail: { market: marketCode } 
      }));
      
      return true;
    }
    return false;
  }

  // 📈 Obtener métricas del mercado
  getMarketMetrics(marketCode = null) {
    const market = marketCode || this.currentMarket;
    const marketData = this.marketData[market];
    
    if (!marketData) return null;

    return {
      name: marketData.name,
      size: marketData.marketSize,
      growth: marketData.cagr,
      currency: marketData.currency,
      primaryKeywords: marketData.keywords.primary,
      compliance: marketData.compliance
    };
  }

  // 🚀 Inicialización del sistema
  async initialize() {
    console.log('🌍 Initializing Hosting International Markets System...');
    
    try {
      // Debug: mostrar timezone actual
      const currentTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      console.log(`🕐 Current timezone: ${currentTimezone}`);
      
      // Debug: mostrar idioma del navegador
      const browserLanguage = navigator.language || navigator.languages[0];
      console.log(`🗣️ Browser language: ${browserLanguage}`);
      
      // Detectar mercado del usuario
      const detectedMarket = await this.detectUserMarket();
      console.log(`✅ Market detected: ${detectedMarket}`);
      console.log(`🎯 Market data:`, this.getCurrentMarketData());
      
      // Forzar cambio de idioma inmediatamente si es necesario
      if (detectedMarket && this.getLanguageForMarket(detectedMarket) === 'es') {
        console.log('🇨🇱 Forcing Spanish language for LATAM market');
        setTimeout(() => {
          this.forceLanguageChange('es');
        }, 500);
      }
      
      // Cargar datos de compliance
      await this.loadComplianceRules();
      
      // Inicializar conversión de moneda
      await this.initializeCurrencyRates();
      
      // Setup event listeners
      this.setupEventListeners();
      
      console.log('🎯 Hosting International Markets System initialized successfully');
      return true;
      
    } catch (error) {
      console.error('❌ Failed to initialize International Markets System:', error);
      return false;
    }
  }

  // 🔄 Forzar cambio de idioma (más agresivo)
  forceLanguageChange(targetLanguage) {
    console.log(`🔄 FORCING language change to: ${targetLanguage}`);
    
    try {
      // Método 1: localStorage directo
      localStorage.setItem('i18nextLng', targetLanguage);
      
      // Método 2: Buscar instancia de i18next en el DOM
      const i18nextInstances = [
        window.i18n,
        window.i18next,
        window.i18nextInstance
      ];
      
      for (const instance of i18nextInstances) {
        if (instance && typeof instance.changeLanguage === 'function') {
          console.log(`✅ Found i18next instance, changing to ${targetLanguage}`);
          instance.changeLanguage(targetLanguage);
          break;
        }
      }
      
      // Método 3: Trigger evento personalizado para que React lo capture
      window.dispatchEvent(new CustomEvent('forceLanguageChange', { 
        detail: { language: targetLanguage, market: this.currentMarket } 
      }));
      
      // Método 4: Recargar página si es necesario (último recurso)
      setTimeout(() => {
        if (localStorage.getItem('i18nextLng') !== targetLanguage) {
          console.log('🔄 Language change failed, forcing page reload...');
          window.location.reload();
        }
      }, 2000);
      
    } catch (error) {
      console.error('❌ Force language change failed:', error);
    }
  }

  // ⚖️ Cargar reglas de compliance
  async loadComplianceRules() {
    // Implementar carga de reglas específicas por mercado
    this.complianceRules = {
      gdpr: ['de', 'gb', 'es'],
      ccpa: ['us'],
      lgpd: ['br'],
      pipeda: ['ca']
    };
  }

  // 💱 Inicializar tasas de cambio
  async initializeCurrencyRates() {
    try {
      const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
      const data = await response.json();
      this.currencyRates = data.rates;
    } catch (error) {
      console.warn('Failed to load currency rates:', error);
    }
  }

  // 👂 Setup event listeners
  setupEventListeners() {
    // Listener para cambios de mercado
    window.addEventListener('marketChanged', (event) => {
      console.log('Market changed to:', event.detail.market);
    });

    // Listener para cambios de idioma
    window.addEventListener('languageChanged', (event) => {
      console.log('Language changed to:', event.detail.language);
    });
  }
}

// 🚀 Instancia global
const hostingInternationalMarkets = new HostingInternationalMarkets();

// 🔧 Función de inicialización para main.jsx
export const initializeHostingInternationalMarkets = async () => {
  return await hostingInternationalMarkets.initialize();
};

// 📤 Exportar instancia y utilidades
export default hostingInternationalMarkets;

export {
  hostingInternationalMarkets as internationalMarkets
};

// 🌐 Utilidades globales
window.hostingInternationalMarkets = hostingInternationalMarkets;
