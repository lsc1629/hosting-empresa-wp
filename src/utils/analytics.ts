// Google Analytics 4 and conversion tracking utilities

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export const GA_TRACKING_ID = 'G-XXXXXXXXXX' // Replace with your GA4 tracking ID

// Initialize Google Analytics
export const initGA = () => {
  if (typeof window === 'undefined') return

  // Load gtag script
  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`
  document.head.appendChild(script)

  // Initialize dataLayer
  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag() {
    window.dataLayer.push(arguments)
  }
  
  window.gtag('js', new Date())
  window.gtag('config', GA_TRACKING_ID, {
    page_title: document.title,
    page_location: window.location.href,
  })
}

// Track page views
export const trackPageView = (url: string, title: string) => {
  if (typeof window === 'undefined' || !window.gtag) return

  window.gtag('config', GA_TRACKING_ID, {
    page_title: title,
    page_location: url,
  })
}

// Track affiliate link clicks
export const trackAffiliateClick = (planType: string, buttonLocation: string) => {
  if (typeof window === 'undefined' || !window.gtag) return

  window.gtag('event', 'affiliate_click', {
    event_category: 'engagement',
    event_label: planType,
    custom_parameter_1: buttonLocation,
    value: 1
  })

  // Also track as conversion for optimization
  window.gtag('event', 'conversion', {
    send_to: `${GA_TRACKING_ID}/affiliate_click`,
    event_category: 'conversion',
    event_label: planType,
    value: 1
  })
}

// Track language changes
export const trackLanguageChange = (fromLang: string, toLang: string) => {
  if (typeof window === 'undefined' || !window.gtag) return

  window.gtag('event', 'language_change', {
    event_category: 'engagement',
    event_label: `${fromLang}_to_${toLang}`,
    custom_parameter_1: fromLang,
    custom_parameter_2: toLang
  })
}

// Track scroll depth
export const trackScrollDepth = (percentage: number) => {
  if (typeof window === 'undefined' || !window.gtag) return

  window.gtag('event', 'scroll', {
    event_category: 'engagement',
    event_label: `${percentage}%`,
    value: percentage
  })
}

// Track form interactions
export const trackFormInteraction = (formType: string, action: string) => {
  if (typeof window === 'undefined' || !window.gtag) return

  window.gtag('event', 'form_interaction', {
    event_category: 'engagement',
    event_label: formType,
    custom_parameter_1: action
  })
}

// Track time on page
export const trackTimeOnPage = (seconds: number) => {
  if (typeof window === 'undefined' || !window.gtag) return

  window.gtag('event', 'time_on_page', {
    event_category: 'engagement',
    event_label: 'session_duration',
    value: seconds
  })
}
