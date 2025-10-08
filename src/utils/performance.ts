// Performance optimization utilities

// Lazy loading for images
export const lazyLoadImage = (img: HTMLImageElement, src: string) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        img.src = src
        img.classList.remove('opacity-0')
        img.classList.add('opacity-100')
        observer.unobserve(img)
      }
    })
  })
  
  observer.observe(img)
}

// Preload critical resources
export const preloadResource = (href: string, as: string, type?: string) => {
  const link = document.createElement('link')
  link.rel = 'preload'
  link.href = href
  link.as = as
  if (type) link.type = type
  document.head.appendChild(link)
}

// Critical CSS inlining
export const inlineCriticalCSS = (css: string) => {
  const style = document.createElement('style')
  style.textContent = css
  document.head.appendChild(style)
}

// Web Vitals tracking
export const trackWebVitals = () => {
  // Web Vitals can be added later with: npm install web-vitals
  console.log('Web Vitals tracking placeholder - install web-vitals package to enable')
}

// Service Worker registration
export const registerServiceWorker = () => {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('SW registered: ', registration)
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError)
        })
    })
  }
}
