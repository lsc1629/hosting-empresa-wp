// 🇪🇸 TRADUCCIONES ESPECÍFICAS PARA ESPAÑA
// Optimizado para mercado empresarial español

export const esES = {
  // 🏠 Navegación y estructura
  nav: {
    home: 'Inicio',
    wordpressHosting: 'Hosting WordPress',
    woocommerceHosting: 'Hosting WooCommerce',
    businessHosting: 'Hosting Empresarial',
    compareHosting: 'Comparar Hosting',
    blog: 'Blog',
    contact: 'Contacto',
    language: 'Idioma',
    getStarted: 'Comenzar'
  },

  // 🦸‍♂️ Hero Section
  hero: {
    title: 'Hosting Empresarial de Primera Clase para España',
    subtitle: 'Hosting potente y escalable con garantía de 99.9% uptime y cumplimiento RGPD',
    description: 'Únete a más de 2M+ empresas que confían en SiteGround para sus sitios web críticos. Desde startups hasta empresas del IBEX 35.',
    cta: 'Comenzar Ahora',
    ctaSecondary: 'Ver Planes y Precios',
    trustBadges: {
      rgpd: 'Cumple RGPD',
      lopd: 'LOPD Compliant',
      ens: 'ENS Certificado',
      uptime: '99.9% SLA Uptime'
    }
  },

  // 💼 Business Features
  businessFeatures: {
    title: 'Diseñado para Empresas Españolas',
    subtitle: 'Todo lo que tu empresa necesita para triunfar online',
    features: [
      {
        title: 'Rendimiento Empresarial',
        description: 'Velocidad ultrarrápida con Google Cloud Platform y CDN empresarial',
        icon: '🚀'
      },
      {
        title: 'Seguridad Avanzada',
        description: 'Hosting compatible con RGPD, LOPD y ENS con protección avanzada',
        icon: '🔒'
      },
      {
        title: 'Soporte 24/7 en Español',
        description: 'Equipo de soporte en español con tiempo de respuesta menor a 10 minutos',
        icon: '📞'
      },
      {
        title: 'Infraestructura Escalable',
        description: 'Recursos auto-escalables para manejar de 1K a 10M+ visitantes',
        icon: '📈'
      },
      {
        title: 'Herramientas de Desarrollo',
        description: 'Integración Git, entornos de staging y WP-CLI para equipos de desarrollo',
        icon: '⚙️'
      },
      {
        title: 'Backup y Recuperación',
        description: 'Copias de seguridad diarias automáticas con retención de 30 días',
        icon: '💾'
      }
    ]
  },

  // 💰 Pricing
  pricing: {
    title: 'Planes de Hosting Empresarial',
    subtitle: 'Elige el plan perfecto para el crecimiento de tu empresa',
    currency: 'EUR',
    currencySymbol: '€',
    period: '/mes',
    plans: {
      startup: {
        name: 'StartUp',
        price: '2.49',
        originalPrice: '12.49',
        description: 'Perfecto para pequeñas empresas y startups',
        features: [
          '10 GB Espacio Web',
          '~10,000 Visitas Mensuales',
          '1 Sitio Web',
          'Certificado SSL Gratuito',
          'Copias de Seguridad Diarias',
          'Cuentas de Email',
          'Soporte 24/7'
        ],
        cta: 'Empezar a Crecer',
        popular: false
      },
      growbig: {
        name: 'GrowBig',
        price: '4.19',
        originalPrice: '20.99',
        description: 'Ideal para empresas en crecimiento y agencias',
        features: [
          '20 GB Espacio Web',
          '~100,000 Visitas Mensuales',
          'Sitios Web Ilimitados',
          'Certificado SSL Gratuito',
          'Copias de Seguridad Diarias',
          'Entorno de Staging',
          'Caché Avanzado',
          'Soporte Prioritario'
        ],
        cta: 'Escalar Negocio',
        popular: true
      },
      gogeek: {
        name: 'GoGeek',
        price: '6.69',
        originalPrice: '33.49',
        description: 'Para sitios de alto tráfico y empresas',
        features: [
          '40 GB Espacio Web',
          '~400,000 Visitas Mensuales',
          'Sitios Web Ilimitados',
          'Certificado SSL Gratuito',
          'Copias de Seguridad Diarias',
          'Entorno de Staging',
          'Caché Avanzado',
          'Opciones White-label',
          'Soporte Prioritario'
        ],
        cta: 'Ir Empresarial',
        popular: false
      }
    },
    guarantee: 'Garantía de Devolución de 30 Días',
    note: 'Todos los planes incluyen dominio gratuito, certificado SSL y copias de seguridad diarias'
  },

  // 🏆 WordPress Specific
  wordpress: {
    title: 'Hosting WordPress para Empresas Españolas',
    subtitle: 'Optimizado para WordPress con rendimiento empresarial',
    features: [
      'WordPress Pre-instalado',
      'Actualizaciones Automáticas de WordPress',
      'WordPress Staging',
      'Acceso WP-CLI',
      'WordPress Multisite',
      'Seguridad Avanzada WordPress'
    ],
    cta: 'Lanzar Sitio WordPress'
  },

  // 🛒 WooCommerce Specific
  woocommerce: {
    title: 'Hosting WooCommerce para E-commerce Español',
    subtitle: 'Potencia tu tienda online con hosting WooCommerce optimizado',
    features: [
      'WooCommerce Pre-instalado',
      'Optimizaciones E-commerce',
      'Certificado SSL Incluido',
      'Cumplimiento PCI-DSS',
      'Recuperación de Carritos',
      'Integración Pasarelas de Pago'
    ],
    cta: 'Empezar a Vender Online'
  },

  // 💬 Testimonials
  testimonials: {
    title: 'Empresas Españolas Confían en Nosotros',
    subtitle: 'Mira lo que dicen nuestros clientes empresariales',
    items: [
      {
        name: 'Carlos Rodríguez',
        title: 'Director IT',
        company: 'Innovación Digital SL',
        location: 'Madrid, España',
        quote: 'SiteGround nos ayudó a escalar de 5K a 500K usuarios sin problemas. Su soporte en español es excepcional.',
        rating: 5,
        avatar: '/images/testimonials/carlos-rodriguez.jpg'
      },
      {
        name: 'María González',
        title: 'CTO',
        company: 'TechFlow Barcelona',
        location: 'Barcelona, España',
        quote: 'El cumplimiento RGPD y las características de seguridad nos dieron confianza para migrar nuestra plataforma.',
        rating: 5,
        avatar: '/images/testimonials/maria-gonzalez.jpg'
      },
      {
        name: 'Alejandro Martín',
        title: 'Fundador',
        company: 'E-commerce Ibérico',
        location: 'Valencia, España',
        quote: 'Nuestra tienda WooCommerce maneja el tráfico del Black Friday sin problemas. ¡Rendimiento increíble!',
        rating: 5,
        avatar: '/images/testimonials/alejandro-martin.jpg'
      }
    ]
  },

  // 📊 Case Studies
  caseStudies: {
    title: 'Casos de Éxito de Empresas Españolas',
    subtitle: 'Resultados reales de empresas reales',
    featured: {
      title: 'Cómo Inditex Optimizó su Infraestructura Digital',
      company: 'Inditex',
      industry: 'Retail & E-commerce',
      location: 'A Coruña, España',
      description: 'Descubre cómo Inditex utilizó el hosting empresarial de SiteGround para manejar millones de visitantes manteniendo 99.98% uptime.',
      metrics: [
        { value: '250%', label: 'Mejora de Rendimiento' },
        { value: '99.98%', label: 'Uptime Conseguido' },
        { value: '40%', label: 'Reducción de Costos' }
      ],
      cta: 'Leer Caso Completo'
    }
  },

  // 🔒 Security & Compliance
  security: {
    title: 'Seguridad de Nivel Empresarial',
    subtitle: 'Construido para empresas que no pueden permitirse caídas',
    features: [
      {
        title: 'Cumplimiento RGPD',
        description: 'Hosting totalmente compatible con el Reglamento General de Protección de Datos',
        icon: '🛡️'
      },
      {
        title: 'Certificación LOPD',
        description: 'Cumple con la Ley Orgánica de Protección de Datos española',
        icon: '📋'
      },
      {
        title: 'ENS Certificado',
        description: 'Esquema Nacional de Seguridad para administraciones públicas',
        icon: '🏛️'
      },
      {
        title: 'Protección DDoS Avanzada',
        description: 'Protección multicapa contra ataques cibernéticos',
        icon: '🔐'
      }
    ]
  },

  // 📞 Support
  support: {
    title: 'Soporte Experto 24/7 en Español',
    subtitle: 'Obtén ayuda cuando la necesites de expertos en WordPress',
    features: [
      'Tiempo de respuesta promedio: 10 minutos',
      'Equipo de soporte en español',
      'Expertos certificados en WordPress',
      'Soporte por teléfono, chat y tickets',
      'Monitoreo proactivo',
      'Migraciones gratuitas de sitios'
    ],
    cta: 'Contactar Soporte'
  },

  // 🚀 Performance
  performance: {
    title: 'Rendimiento Ultrarrápido',
    subtitle: 'Velocidad que convierte visitantes en clientes',
    metrics: [
      { value: '<1.5s', label: 'Tiempo de Carga Promedio' },
      { value: '99.9%', label: 'SLA de Uptime' },
      { value: '6', label: 'Centros de Datos Globales' },
      { value: '24/7', label: 'Monitoreo de Rendimiento' }
    ],
    features: [
      'Google Cloud Platform',
      'CDN Empresarial',
      'Almacenamiento SSD',
      'HTTP/2 & HTTP/3',
      'Caché Avanzado',
      'Optimización de Imágenes'
    ]
  },

  // 🌐 Global Infrastructure
  infrastructure: {
    title: 'Infraestructura Global, Enfoque Español',
    subtitle: 'Potenciado por Google Cloud con centros de datos europeos',
    locations: [
      'Bélgica (europe-west1)',
      'Londres (europe-west2)',
      'Frankfurt (europe-west3)',
      'Países Bajos (europe-west4)',
      'Zurich (europe-west6)',
      'Finlandia (europe-north1)'
    ]
  },

  // 📈 Analytics & Insights
  analytics: {
    title: 'Inteligencia de Negocio Integrada',
    subtitle: 'Toma decisiones basadas en datos con analytics integrados',
    features: [
      'Integración Google Analytics',
      'Monitoreo de Rendimiento',
      'Analytics de Visitantes',
      'Seguimiento de Conversiones',
      'Insights SEO',
      'Informes Personalizados'
    ]
  },

  // 🔄 Migration
  migration: {
    title: 'Migración Gratuita de Sitios Web',
    subtitle: 'Nosotros nos encargamos de los detalles técnicos, tú enfócate en tu negocio',
    process: [
      'Contacta con nuestro equipo de migración',
      'Analizamos tu configuración actual',
      'Migración realizada sin tiempo de inactividad',
      'Pruebas completas y optimización',
      'Puesta en marcha con confianza'
    ],
    cta: 'Iniciar Migración Gratuita'
  },

  // 📱 Mobile & Responsive
  mobile: {
    title: 'Hosting Mobile-First',
    subtitle: 'Optimizado para usuarios móviles y Google Core Web Vitals',
    features: [
      'Servidores optimizados para móvil',
      'Soporte AMP',
      'Listo para Progressive Web App',
      'Optimización Core Web Vitals',
      'Caché móvil',
      'Herramientas de diseño responsive'
    ]
  },

  // 🎯 Industries
  industries: {
    title: 'Sectores Españoles que Confían en Nosotros',
    subtitle: 'Soluciones especializadas para diferentes sectores empresariales',
    sectors: [
      {
        name: 'Sanidad',
        description: 'Hosting compatible con normativas sanitarias',
        icon: '🏥',
        features: ['LOPD Compliant', 'Datos Seguros', 'Monitoreo Compliance']
      },
      {
        name: 'Servicios Financieros',
        description: 'Hosting seguro para empresas fintech',
        icon: '🏦',
        features: ['PCI-DSS', 'Seguridad Avanzada', 'Cumplimiento Bancario']
      },
      {
        name: 'E-commerce',
        description: 'Hosting de alto rendimiento para tiendas online',
        icon: '🛒',
        features: ['WooCommerce Optimizado', 'SSL Incluido', 'Seguridad Pagos']
      },
      {
        name: 'SaaS',
        description: 'Infraestructura escalable para empresas de software',
        icon: '💻',
        features: ['Auto-escalado', 'API Ready', 'Herramientas Desarrollador']
      }
    ]
  },

  // 📞 Contact
  contact: {
    title: '¿Listo para Comenzar?',
    subtitle: 'Habla con nuestros especialistas empresariales hoy',
    phone: '+34 900 123 456',
    email: 'empresas@hostingempresa.com',
    hours: 'Disponible 24/7/365',
    cta: 'Contactar Equipo Ventas',
    form: {
      name: 'Nombre Completo',
      email: 'Email Empresarial',
      company: 'Nombre de la Empresa',
      phone: 'Número de Teléfono',
      message: 'Cuéntanos sobre tu proyecto',
      submit: 'Obtener Presupuesto Empresarial'
    }
  },

  // 🔍 SEO
  seo: {
    title: 'Hosting Optimizado para SEO',
    subtitle: 'Construido para el éxito en motores de búsqueda',
    features: [
      'Velocidades de carga rápidas',
      'Certificados SSL incluidos',
      'CDN para alcance global',
      'Optimización Core Web Vitals',
      'Soporte schema markup',
      'Integración herramientas SEO'
    ]
  },

  // 🎓 Resources
  resources: {
    title: 'Recursos Empresariales',
    subtitle: 'Todo lo que necesitas para triunfar online',
    items: [
      {
        title: 'Guía WordPress Empresarial',
        description: 'Guía completa de WordPress para empresas',
        type: 'Guía',
        cta: 'Descargar Gratis'
      },
      {
        title: 'Mejores Prácticas de Seguridad',
        description: 'Protege tu sitio web empresarial de amenazas',
        type: 'Whitepaper',
        cta: 'Obtener Whitepaper'
      },
      {
        title: 'Optimización de Rendimiento',
        description: 'Acelera tu sitio web para mejores conversiones',
        type: 'Checklist',
        cta: 'Descargar Checklist'
      }
    ]
  },

  // 🏅 Guarantees
  guarantees: {
    title: 'Nuestras Promesas para Ti',
    items: [
      {
        title: '99.9% SLA de Uptime',
        description: 'Garantizamos que tu sitio permanezca online',
        icon: '⏰'
      },
      {
        title: 'Devolución 30 Días',
        description: '¿No satisfecho? Te devolvemos tu dinero',
        icon: '💰'
      },
      {
        title: 'Migración Gratuita',
        description: 'Movemos tu sitio gratis',
        icon: '🔄'
      },
      {
        title: 'Soporte 24/7',
        description: 'Ayuda experta cuando la necesites',
        icon: '📞'
      }
    ]
  },

  // 📊 Comparison
  comparison: {
    title: '¿Por Qué Elegir SiteGround?',
    subtitle: 'Mira cómo nos comparamos con otros proveedores de hosting',
    competitors: ['GoDaddy', 'Bluehost', 'HostGator', 'WP Engine'],
    features: [
      'Google Cloud Platform',
      'Certificado SSL Gratuito',
      'Copias de Seguridad Diarias',
      'Entorno de Staging',
      'Optimización WordPress',
      'Soporte Experto 24/7',
      'Migración Gratuita',
      'Garantía Devolución Dinero'
    ]
  },

  // 🎉 Special Offers
  offers: {
    title: 'Oferta por Tiempo Limitado',
    subtitle: 'Ahorra hasta 80% en tu primer año',
    discount: 'HASTA 80% DESCUENTO',
    expires: 'La oferta expira en:',
    cta: 'Reclamar Esta Oferta',
    terms: 'Se aplican términos y condiciones. Renovación a precio regular.'
  },

  // 🔗 Footer
  footer: {
    company: {
      title: 'Empresa',
      links: ['Sobre Nosotros', 'Carreras', 'Prensa', 'Socios', 'Afiliados']
    },
    hosting: {
      title: 'Hosting',
      links: ['Hosting WordPress', 'Hosting WooCommerce', 'Hosting Empresarial', 'VPS Hosting', 'Servidores Dedicados']
    },
    support: {
      title: 'Soporte',
      links: ['Centro de Ayuda', 'Contáctanos', 'Estado del Sistema', 'Reportar Abuso', 'Términos de Servicio']
    },
    resources: {
      title: 'Recursos',
      links: ['Blog', 'Tutoriales', 'Webinars', 'Casos de Estudio', 'White Papers']
    },
    copyright: '© 2025 Hosting Empresas. Todos los derechos reservados.',
    privacy: 'Política de Privacidad',
    terms: 'Términos de Servicio'
  }
};
