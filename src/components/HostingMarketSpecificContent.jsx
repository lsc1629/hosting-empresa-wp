// 🌍 COMPONENTE: Contenido Específico por Mercado para Hosting Empresarial
// Renderiza contenido localizado basado en el mercado detectado

import React, { useState, useEffect } from 'react';
import { internationalMarkets } from '../utils/hostingInternationalMarkets.js';

const HostingMarketSpecificContent = ({ contentType = 'hero', className = '' }) => {
  const [currentMarket, setCurrentMarket] = useState(null);
  const [marketData, setMarketData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initializeMarket = async () => {
      try {
        // Detectar mercado si no está inicializado
        if (!internationalMarkets.currentMarket) {
          await internationalMarkets.detectUserMarket();
        }
        
        const market = internationalMarkets.currentMarket;
        const data = internationalMarkets.getCurrentMarketData();
        
        setCurrentMarket(market);
        setMarketData(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error initializing market:', error);
        setIsLoading(false);
      }
    };

    initializeMarket();

    // Listener para cambios de mercado
    const handleMarketChange = (event) => {
      const newMarket = event.detail.market;
      const newData = internationalMarkets.marketData[newMarket];
      setCurrentMarket(newMarket);
      setMarketData(newData);
    };

    window.addEventListener('marketChanged', handleMarketChange);
    return () => window.removeEventListener('marketChanged', handleMarketChange);
  }, []);

  if (isLoading || !marketData) {
    return (
      <div className={`animate-pulse ${className}`}>
        <div className="h-8 bg-gray-200 rounded mb-4"></div>
        <div className="h-4 bg-gray-200 rounded mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
      </div>
    );
  }

  // 🎯 Renderizar contenido específico por tipo
  const renderContent = () => {
    switch (contentType) {
      case 'hero':
        return <HeroContent marketData={marketData} currentMarket={currentMarket} />;
      case 'testimonial':
        return <TestimonialContent marketData={marketData} currentMarket={currentMarket} />;
      case 'caseStudy':
        return <CaseStudyContent marketData={marketData} currentMarket={currentMarket} />;
      case 'pricing':
        return <PricingContent marketData={marketData} currentMarket={currentMarket} />;
      case 'compliance':
        return <ComplianceContent marketData={marketData} currentMarket={currentMarket} />;
      case 'features':
        return <FeaturesContent marketData={marketData} currentMarket={currentMarket} />;
      default:
        return <HeroContent marketData={marketData} currentMarket={currentMarket} />;
    }
  };

  return (
    <div className={`market-specific-content market-${currentMarket} ${className}`}>
      {renderContent()}
    </div>
  );
};

// 🦸‍♂️ Componente Hero específico por mercado (sutil y no invasivo)
const HeroContent = ({ marketData, currentMarket }) => {
  return (
    <div className="hero-content text-center max-w-4xl mx-auto">
      {/* Market-specific badges - más sutiles */}
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {marketData.compliance.slice(0, 3).map((badge, index) => (
          <span 
            key={index}
            className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium border border-blue-200"
          >
            ✓ {badge} Compliant
          </span>
        ))}
      </div>

      {/* Subtitle específico por mercado */}
      <p className="text-lg text-gray-600 mb-4 font-medium">
        {marketData.content.heroSubtitle}
      </p>

      {/* Market indicator discreto */}
      <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
        <span className="text-base">{getMarketFlag(currentMarket)}</span>
        <span>Optimizado para {marketData.name}</span>
      </div>
    </div>
  );
};

// 💬 Componente Testimonial específico por mercado
const TestimonialContent = ({ marketData, currentMarket }) => {
  const testimonials = getMarketTestimonials(currentMarket);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const testimonial = testimonials[currentTestimonial];

  return (
    <div className="testimonial-content bg-white rounded-lg shadow-lg p-8">
      <div className="flex items-center mb-6">
        <img 
          src={testimonial.avatar} 
          alt={testimonial.name}
          className="w-16 h-16 rounded-full mr-4"
        />
        <div>
          <h4 className="font-bold text-lg">{testimonial.name}</h4>
          <p className="text-gray-600">{testimonial.title}</p>
          <p className="text-sm text-gray-500">{testimonial.company}</p>
        </div>
      </div>
      
      <blockquote className="text-lg italic text-gray-700 mb-4">
        "{testimonial.quote}"
      </blockquote>
      
      <div className="flex items-center justify-between">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
            </svg>
          ))}
        </div>
        <span className="text-sm text-gray-500">
          {testimonial.date}
        </span>
      </div>
    </div>
  );
};

// 📊 Componente Case Study específico por mercado
const CaseStudyContent = ({ marketData, currentMarket }) => {
  const caseStudy = getMarketCaseStudy(currentMarket);

  return (
    <div className="case-study-content bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8">
      <div className="flex items-center mb-6">
        <img 
          src={caseStudy.logo} 
          alt={caseStudy.company}
          className="h-12 mr-4"
        />
        <div>
          <h3 className="text-2xl font-bold text-gray-900">{caseStudy.title}</h3>
          <p className="text-gray-600">{caseStudy.company} • {caseStudy.industry}</p>
        </div>
      </div>

      <p className="text-lg text-gray-700 mb-6">{caseStudy.description}</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {caseStudy.metrics.map((metric, index) => (
          <div key={index} className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">
              {metric.value}
            </div>
            <div className="text-sm text-gray-600">
              {metric.label}
            </div>
          </div>
        ))}
      </div>

      <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
        Leer Caso Completo
      </button>
    </div>
  );
};

// 💰 Componente Pricing específico por mercado
const PricingContent = ({ marketData, currentMarket }) => {
  const [convertedPrices, setConvertedPrices] = useState({});

  useEffect(() => {
    const convertPrices = async () => {
      const basePrices = { startup: 2.99, growbig: 4.99, gogeek: 7.99 };
      const converted = {};

      for (const [plan, price] of Object.entries(basePrices)) {
        if (marketData.currency !== 'USD') {
          const convertedPrice = await internationalMarkets.convertCurrency(
            price, 'USD', marketData.currency
          );
          converted[plan] = convertedPrice;
        } else {
          converted[plan] = price.toFixed(2);
        }
      }

      setConvertedPrices(converted);
    };

    convertPrices();
  }, [marketData.currency]);

  const getCurrencySymbol = (currency) => {
    const symbols = {
      'USD': '$', 'EUR': '€', 'GBP': '£', 'CAD': 'C$', 
      'AUD': 'A$', 'MXN': '$', 'BRL': 'R$'
    };
    return symbols[currency] || currency;
  };

  return (
    <div className="pricing-content">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Precios en {marketData.currency}
        </h2>
        <p className="text-gray-600">
          Precios optimizados para {marketData.name}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Object.entries(convertedPrices).map(([plan, price]) => (
          <div key={plan} className="pricing-card bg-white rounded-lg shadow-lg p-6 border-2 border-gray-200 hover:border-blue-500 transition-colors">
            <div className="text-center">
              <h3 className="text-xl font-bold capitalize mb-2">{plan}</h3>
              <div className="text-4xl font-bold text-blue-600 mb-4">
                {getCurrencySymbol(marketData.currency)}{price}
                <span className="text-lg text-gray-500">/mes</span>
              </div>
              <button 
                onClick={() => {
                  const link = internationalMarkets.generateAffiliateLink(plan, currentMarket);
                  window.open(link, '_blank', 'noopener,noreferrer');
                }}
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Comenzar Ahora
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ⚖️ Componente Compliance específico por mercado
const ComplianceContent = ({ marketData, currentMarket }) => {
  return (
    <div className="compliance-content bg-green-50 rounded-lg p-6">
      <h3 className="text-xl font-bold text-green-800 mb-4">
        Cumplimiento Normativo en {marketData.name}
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {marketData.compliance.map((standard, index) => (
          <div key={index} className="flex items-center bg-white rounded-lg p-4 shadow-sm">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
            </div>
            <div>
              <div className="font-semibold text-gray-900">{standard}</div>
              <div className="text-sm text-gray-600">Certificado y Compliant</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// 🚀 Componente Features específico por mercado
const FeaturesContent = ({ marketData, currentMarket }) => {
  const features = getMarketFeatures(currentMarket);

  return (
    <div className="features-content">
      <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        Características Optimizadas para {marketData.name}
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="feature-card bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">{feature.icon}</span>
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h4>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// 🎨 Utilidades de estilo por mercado
const getMarketButtonStyle = (market) => {
  const styles = {
    'us': 'bg-blue-600 hover:bg-blue-700 text-white',
    'de': 'bg-red-600 hover:bg-red-700 text-white',
    'gb': 'bg-blue-800 hover:bg-blue-900 text-white',
    'ca': 'bg-red-500 hover:bg-red-600 text-white',
    'au': 'bg-green-600 hover:bg-green-700 text-white',
    'es': 'bg-yellow-500 hover:bg-yellow-600 text-black',
    'mx': 'bg-green-600 hover:bg-green-700 text-white',
    'br': 'bg-green-500 hover:bg-green-600 text-white'
  };
  return styles[market] || styles['us'];
};

// 🏳️ Banderas por mercado
const getMarketFlag = (market) => {
  const flags = {
    'us': '🇺🇸',
    'de': '🇩🇪', 
    'gb': '🇬🇧',
    'ca': '🇨🇦',
    'au': '🇦🇺',
    'es': '🇪🇸',
    'mx': '🇲🇽',
    'br': '🇧🇷'
  };
  return flags[market] || '🌍';
};

// 📝 Textos CTA por mercado
const getMarketCTAText = (market) => {
  const texts = {
    'us': 'Start Your Enterprise Journey',
    'de': 'Jetzt Starten',
    'gb': 'Get Started Today',
    'ca': 'Start Your Business',
    'au': 'Get Started Mate',
    'es': 'Comenzar Ahora',
    'mx': '¡Empezar Ya!',
    'br': 'Começar Agora'
  };
  return texts[market] || texts['us'];
};

// 💬 Testimonials por mercado
const getMarketTestimonials = (market) => {
  const testimonials = {
    'us': [
      {
        name: 'Sarah Johnson',
        title: 'CTO',
        company: 'TechStart Inc.',
        quote: 'SiteGround helped us scale from 10K to 1M users seamlessly',
        avatar: '/images/testimonials/sarah-us.jpg',
        date: '2024-12-15'
      }
    ],
    'es': [
      {
        name: 'Carlos Rodríguez',
        title: 'Director IT',
        company: 'Innovación Digital SL',
        quote: 'El mejor hosting empresarial que hemos usado en España',
        avatar: '/images/testimonials/carlos-es.jpg',
        date: '2024-12-10'
      }
    ]
    // Agregar más testimonials por mercado
  };
  
  return testimonials[market] || testimonials['us'];
};

// 📊 Case studies por mercado
const getMarketCaseStudy = (market) => {
  const caseStudies = {
    'us': {
      title: 'How TechCorp Scaled to 10M Users',
      company: 'TechCorp',
      industry: 'SaaS',
      description: 'Learn how TechCorp used SiteGround enterprise hosting to handle massive growth.',
      logo: '/images/case-studies/techcorp-logo.png',
      metrics: [
        { value: '300%', label: 'Performance Increase' },
        { value: '99.99%', label: 'Uptime Achieved' },
        { value: '50%', label: 'Cost Reduction' }
      ]
    },
    'es': {
      title: 'Cómo Inditex Optimizó su Infraestructura',
      company: 'Inditex',
      industry: 'E-commerce',
      description: 'Descubre cómo Inditex mejoró su rendimiento web con hosting empresarial.',
      logo: '/images/case-studies/inditex-logo.png',
      metrics: [
        { value: '250%', label: 'Mejora de Velocidad' },
        { value: '99.98%', label: 'Disponibilidad' },
        { value: '40%', label: 'Reducción de Costos' }
      ]
    }
    // Agregar más case studies por mercado
  };
  
  return caseStudies[market] || caseStudies['us'];
};

// 🚀 Features por mercado
const getMarketFeatures = (market) => {
  const features = {
    'us': [
      { icon: '🚀', title: 'Enterprise Performance', description: 'Lightning-fast speeds for business growth' },
      { icon: '🔒', title: 'Advanced Security', description: 'SOC2 and HIPAA compliant hosting' },
      { icon: '📞', title: '24/7 Expert Support', description: 'US-based support team available always' }
    ],
    'es': [
      { icon: '🚀', title: 'Rendimiento Empresarial', description: 'Velocidad ultrarrápida para tu negocio' },
      { icon: '🔒', title: 'Seguridad Avanzada', description: 'Hosting compatible con RGPD y ENS' },
      { icon: '📞', title: 'Soporte 24/7', description: 'Equipo de soporte en español siempre disponible' }
    ]
    // Agregar más features por mercado
  };
  
  return features[market] || features['us'];
};

export default HostingMarketSpecificContent;
