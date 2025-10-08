// 🌍 SELECTOR DE MERCADO PARA HOSTING EMPRESARIAL
// Permite a los usuarios cambiar manualmente su mercado objetivo

import React, { useState, useEffect } from 'react';
import { internationalMarkets } from '../utils/hostingInternationalMarkets.js';

const MarketSelector = ({ className = '' }) => {
  const [currentMarket, setCurrentMarket] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [availableMarkets, setAvailableMarkets] = useState([]);

  useEffect(() => {
    const initializeSelector = async () => {
      try {
        // Asegurar que el sistema esté inicializado
        if (!internationalMarkets.currentMarket) {
          await internationalMarkets.detectUserMarket();
        }
        
        setCurrentMarket(internationalMarkets.currentMarket);
        setAvailableMarkets(Object.keys(internationalMarkets.marketData));
      } catch (error) {
        console.error('Error initializing market selector:', error);
      }
    };

    initializeSelector();

    // Listener para cambios de mercado
    const handleMarketChange = (event) => {
      setCurrentMarket(event.detail.market);
    };

    window.addEventListener('marketChanged', handleMarketChange);
    return () => window.removeEventListener('marketChanged', handleMarketChange);
  }, []);

  const handleMarketChange = (marketCode) => {
    const success = internationalMarkets.switchMarket(marketCode);
    if (success) {
      setCurrentMarket(marketCode);
      setIsOpen(false);
      
      // Analytics tracking
      if (typeof gtag !== 'undefined') {
        gtag('event', 'market_changed_manually', {
          'old_market': currentMarket,
          'new_market': marketCode,
          'custom_parameter_1': 'market_selector'
        });
      }
    }
  };

  const getCurrentMarketData = () => {
    if (!currentMarket) return null;
    return internationalMarkets.marketData[currentMarket];
  };

  const getMarketFlag = (marketCode) => {
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
    return flags[marketCode] || '🌍';
  };

  const getMarketName = (marketCode) => {
    const market = internationalMarkets.marketData[marketCode];
    return market ? market.name : marketCode.toUpperCase();
  };

  if (!currentMarket || availableMarkets.length === 0) {
    return null;
  }

  const currentMarketData = getCurrentMarketData();

  return (
    <div className={`market-selector relative ${className}`}>
      {/* Botón selector */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
        aria-label="Seleccionar mercado"
      >
        <span className="text-xl">{getMarketFlag(currentMarket)}</span>
        <span className="text-sm font-medium text-gray-700">
          {currentMarketData?.name || 'Seleccionar'}
        </span>
        <svg 
          className={`w-4 h-4 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
          <div className="py-2">
            <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide border-b border-gray-100">
              Seleccionar Mercado
            </div>
            
            {availableMarkets.map((marketCode) => {
              const marketData = internationalMarkets.marketData[marketCode];
              const isSelected = marketCode === currentMarket;
              
              return (
                <button
                  key={marketCode}
                  onClick={() => handleMarketChange(marketCode)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gray-50 transition-colors ${
                    isSelected ? 'bg-blue-50 text-blue-700' : 'text-gray-700'
                  }`}
                >
                  <span className="text-xl">{getMarketFlag(marketCode)}</span>
                  <div className="flex-1">
                    <div className="font-medium">{marketData.name}</div>
                    <div className="text-xs text-gray-500">
                      {marketData.currency} • {marketData.language.toUpperCase()}
                    </div>
                  </div>
                  {isSelected && (
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  )}
                </button>
              );
            })}
          </div>
          
          {/* Market info footer */}
          {currentMarketData && (
            <div className="border-t border-gray-100 px-4 py-3 bg-gray-50">
              <div className="text-xs text-gray-600">
                <div className="font-medium mb-1">Mercado Actual:</div>
                <div className="flex items-center justify-between">
                  <span>Tamaño: ${currentMarketData.marketSize}B</span>
                  <span>Crecimiento: {currentMarketData.cagr}%</span>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Overlay para cerrar dropdown */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default MarketSelector;
