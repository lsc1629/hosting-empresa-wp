// 🔧 DECLARACIONES DE TIPOS PARA SISTEMA DE HOSTING EMPRESARIAL

declare module '../utils/hostingGlobalOptimizations.js' {
  export function initializeHostingGlobalOptimizations(): Promise<{
    success: boolean;
    results?: any;
    totalTime?: number;
    error?: string;
  }>;
}

declare module '../utils/hostingInternationalMarkets.js' {
  export interface MarketData {
    name: string;
    code: string;
    language: string;
    currency: string;
    marketSize: number;
    cagr: number;
    keywords: {
      primary: string[];
      secondary: string[];
      longTail: string[];
    };
    content: {
      heroTitle: string;
      heroSubtitle: string;
      testimonial: string;
      caseStudy: string;
    };
    compliance: string[];
    timezone: string;
    phoneCode: string;
    affiliate: {
      baseUrl: string;
      utmSource: string;
      tracking: string;
    };
  }

  export class HostingInternationalMarkets {
    currentMarket: string | null;
    marketData: Record<string, MarketData>;
    
    detectUserMarket(): Promise<string>;
    getCurrentMarketData(): MarketData;
    generateAffiliateLink(plan?: string, market?: string): string;
    getLocalizedContent(contentType: string): string;
    switchMarket(marketCode: string): boolean;
    initialize(): Promise<boolean>;
  }

  export const internationalMarkets: HostingInternationalMarkets;
  export function initializeHostingInternationalMarkets(): Promise<boolean>;
}

declare module '../components/HostingMarketSpecificContent' {
  import React from 'react';
  
  interface HostingMarketSpecificContentProps {
    contentType?: 'hero' | 'testimonial' | 'caseStudy' | 'pricing' | 'compliance' | 'features';
    className?: string;
  }
  
  const HostingMarketSpecificContent: React.FC<HostingMarketSpecificContentProps>;
  export default HostingMarketSpecificContent;
}

declare module './MarketSelector' {
  import React from 'react';
  
  interface MarketSelectorProps {
    className?: string;
  }
  
  const MarketSelector: React.FC<MarketSelectorProps>;
  export default MarketSelector;
}

// Extensiones globales
declare global {
  interface Window {
    hostingInternationalMarkets: any;
    hostingGlobalOptimizations: any;
    hostingAnalytics: any;
    gtag: any;
  }
}
