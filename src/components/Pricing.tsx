import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CheckCircle, Star, Zap, Shield } from 'lucide-react'
import { openAffiliateLink } from '../config/affiliate'

gsap.registerPlugin(ScrollTrigger)

const Pricing = () => {
  const { t, i18n } = useTranslation()
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo('.pricing-title', 
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.pricing-title',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      )

      // Subtitle animation
      gsap.fromTo('.pricing-subtitle', 
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.pricing-subtitle',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      )

      // Pricing cards animation
      gsap.fromTo('.pricing-card', 
        { y: 80, opacity: 0, scale: 0.9 },
        { 
          y: 0, 
          opacity: 1, 
          scale: 1,
          duration: 1,
          ease: 'back.out(1.7)',
          stagger: 0.2,
          scrollTrigger: {
            trigger: '.pricing-grid',
            start: 'top 70%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      )

      // Popular card special animation
      gsap.to('.popular-badge', {
        scale: 1.1,
        duration: 2,
        ease: 'power2.inOut',
        yoyo: true,
        repeat: -1
      })

      // Hover animations
      const pricingCards = document.querySelectorAll('.pricing-card')
      pricingCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            scale: 1.05,
            y: -10,
            duration: 0.3,
            ease: 'power2.out'
          })
        })

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            scale: 1,
            y: 0,
            duration: 0.3,
            ease: 'power2.out'
          })
        })
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const plans = t('pricing.plans', { returnObjects: true }) as Array<{
    name: string
    price: string
    originalPrice: string
    description: string
    features: string[]
    cta: string
    popular?: boolean
  }>


  return (
    <section ref={sectionRef} id="pricing" className="section-padding bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="pricing-title text-4xl md:text-5xl font-bold text-white mb-6">
            {t('pricing.title')}
          </h2>
          <p className="pricing-subtitle text-xl text-gray-300 max-w-2xl mx-auto">
            {t('pricing.subtitle')}
          </p>
        </div>

        <div className="pricing-grid grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`pricing-card relative glass-effect p-8 rounded-3xl border transition-all duration-300 ${
                plan.popular 
                  ? 'border-accent-500/50 bg-gradient-to-b from-accent-950/20 to-gray-950/50' 
                  : 'border-white/10 hover:border-primary-500/30'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="popular-badge absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-accent-500 to-accent-600 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center space-x-2">
                    <Star className="w-4 h-4 fill-current" />
                    <span>{t('pricing.mostPopular')}</span>
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                
                {/* Pricing */}
                <div className="mb-6">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <span className="text-4xl md:text-5xl font-bold text-white">
                      {t('pricing.currency')}{plan.price}
                    </span>
                    <span className="text-gray-400">{t('pricing.period')}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-lg text-gray-500 line-through">
                      {t('pricing.currency')}{plan.originalPrice}
                    </span>
                    <span className="bg-accent-500 text-white px-2 py-1 rounded text-sm font-bold">
                      {t('pricing.save', { amount: Math.round(((parseFloat(plan.originalPrice) - parseFloat(plan.price)) / parseFloat(plan.originalPrice)) * 100) })}
                    </span>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="mb-8">
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-accent-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <button
                onClick={() => openAffiliateLink()}
                className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white shadow-lg shadow-accent-500/50 hover:shadow-xl hover:shadow-accent-500/60'
                    : 'btn-primary'
                } hover:scale-105 active:scale-95`}
              >
                <div className="flex items-center justify-center space-x-2">
                  {plan.popular && <Zap className="w-5 h-5" />}
                  <span>{plan.cta}</span>
                </div>
              </button>

              {/* Glow effect for popular plan */}
              {plan.popular && (
                <div className="absolute inset-0 rounded-3xl bg-accent-500/10 opacity-50 pointer-events-none"></div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom guarantee */}
        <div className="text-center mt-16">
          <div className="glass-effect p-6 rounded-2xl border border-primary-500/20 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-4">
              {i18n.language === 'es' ? 'Garantía Sin Riesgo' : 'Risk-Free Guarantee'}
            </h3>
            <p className="text-gray-300 mb-4">
              {i18n.language === 'es' 
                ? 'Prueba SiteGround sin riesgo por 30 días. Si no estás completamente satisfecho, te devolvemos tu dinero, sin preguntas.'
                : "Try SiteGround risk-free for 30 days. If you're not completely satisfied, we'll refund your money, no questions asked."
              }
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-400 mb-4">
              <span>{i18n.language === 'es' ? '✓ Devolución de 30 Días' : '✓ 30-Day Money-Back'}</span>
              <span>{i18n.language === 'es' ? '✓ Sin Tarifas de Configuración' : '✓ No Setup Fees'}</span>
              <span>{i18n.language === 'es' ? '✓ Cancela en Cualquier Momento' : '✓ Cancel Anytime'}</span>
            </div>
            
            {/* Compliance badges sutiles */}
            <div className="flex items-center justify-center space-x-3 pt-4 border-t border-gray-600/30">
              {getComplianceBadges(i18n.language).map((badge, index) => (
                <div key={index} className="flex items-center space-x-1 text-xs text-gray-400">
                  <Shield className="w-3 h-3 text-green-400" />
                  <span>{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Función para obtener badges de compliance sutiles basado en mercado detectado
const getComplianceBadges = (language: string): string[] => {
  // Intentar obtener el mercado actual del sistema internacional
  let currentMarket = 'us';
  try {
    const globalWindow = window as any;
    if (globalWindow.hostingInternationalMarkets && globalWindow.hostingInternationalMarkets.currentMarket) {
      currentMarket = globalWindow.hostingInternationalMarkets.currentMarket;
    }
  } catch (error) {
    // Fallback basado en idioma
  }

  const complianceByMarket: Record<string, string[]> = {
    'us': ['SOC2', 'HIPAA', 'PCI-DSS'],
    'de': ['GDPR', 'BSI', 'ISO27001'],
    'gb': ['UK-GDPR', 'FCA', 'PCI-DSS'],
    'ca': ['PIPEDA', 'SOC2', 'ISO27001'],
    'au': ['Privacy Act', 'ACSC', 'ISO27001'],
    'es': ['RGPD', 'LOPD', 'ENS'],
    'mx': ['LFPDPPP', 'NOM-151', 'ISO27001'],
    'cl': ['Ley Protección Datos', 'ISO27001', 'SOC2'],
    'ar': ['Ley Protección Datos', 'ISO27001', 'Habeas Data'],
    'co': ['Ley Protección Datos', 'ISO27001', 'Habeas Data'],
    'br': ['LGPD', 'Marco Civil', 'ISO27001']
  };

  // Fallback por idioma si no se detecta mercado específico
  const complianceByLanguage: Record<string, string[]> = {
    'es': ['RGPD', 'LOPD', 'ENS'],
    'en': ['SOC2', 'HIPAA', 'PCI-DSS'],
    'de': ['GDPR', 'BSI', 'ISO27001'],
    'pt': ['LGPD', 'Marco Civil', 'ISO27001'],
    'fr': ['RGPD', 'CNIL', 'ISO27001'],
    'it': ['GDPR', 'AGID', 'ISO27001']
  };
  
  return complianceByMarket[currentMarket] || complianceByLanguage[language] || complianceByLanguage['en'];
};

export default Pricing
