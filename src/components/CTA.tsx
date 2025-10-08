import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Zap, Shield, Clock, ArrowRight } from 'lucide-react'
import { openAffiliateLink } from '../config/affiliate'

gsap.registerPlugin(ScrollTrigger)

const CTA = () => {
  const { t, i18n } = useTranslation()
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Main CTA animation
      gsap.fromTo('.cta-main', 
        { y: 80, opacity: 0, scale: 0.9 },
        { 
          y: 0, 
          opacity: 1, 
          scale: 1,
          duration: 1.2,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: '.cta-main',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      )

      // Floating elements animation
      gsap.to('.cta-float-1', {
        y: -20,
        duration: 3,
        ease: 'power2.inOut',
        yoyo: true,
        repeat: -1
      })

      gsap.to('.cta-float-2', {
        y: -15,
        duration: 4,
        ease: 'power2.inOut',
        yoyo: true,
        repeat: -1,
        delay: 1
      })

      gsap.to('.cta-float-3', {
        y: -25,
        duration: 3.5,
        ease: 'power2.inOut',
        yoyo: true,
        repeat: -1,
        delay: 2
      })

      // Urgency pulse animation
      gsap.to('.urgency-badge', {
        scale: 1.05,
        duration: 1.5,
        ease: 'power2.inOut',
        yoyo: true,
        repeat: -1
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="cta" className="section-padding bg-gradient-to-b from-gray-900 to-gray-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary-500/10 rounded-full blur-3xl cta-float-1"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-accent-500/10 rounded-full blur-3xl cta-float-2"></div>
        <div className="absolute bottom-20 left-1/4 w-36 h-36 bg-primary-400/10 rounded-full blur-3xl cta-float-3"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="cta-main max-w-5xl mx-auto text-center">
          {/* Urgency Badge */}
          <div className="urgency-badge inline-flex items-center space-x-2 bg-gradient-to-r from-accent-500 to-accent-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-8">
            <Clock className="w-4 h-4" />
            <span>{t('cta.urgency')}</span>
          </div>

          {/* Main Title */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold gradient-text mb-8 leading-tight">
            {t('cta.title')}
          </h2>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            {t('cta.subtitle')}
          </p>

          {/* CTA Button */}
          <div className="mb-8">
            <button
              onClick={() => openAffiliateLink()}
              className="group bg-gradient-to-r from-primary-500 via-accent-500 to-primary-600 hover:from-primary-600 hover:via-accent-600 hover:to-primary-700 text-white font-bold text-xl px-12 py-6 rounded-2xl transition-all duration-300 shadow-2xl shadow-primary-500/50 hover:shadow-3xl hover:shadow-primary-500/70 hover:scale-105 active:scale-95"
            >
              <div className="flex items-center space-x-3">
                <span>{t('cta.button')}</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </button>
          </div>

          {/* Guarantee */}
          <p className="text-gray-400 mb-12">
            {t('cta.guarantee')}
          </p>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="glass-effect p-6 rounded-2xl border border-primary-500/20 group hover:border-primary-500/40 transition-all duration-300">
              <div className="w-16 h-16 bg-primary-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-500/30 transition-colors duration-300">
                <Zap className="w-8 h-8 text-primary-400" />
              </div>
              <h3 className="font-bold text-white mb-2">{i18n.language === 'es' ? 'Ultrarrápido' : 'Lightning Fast'}</h3>
              <p className="text-sm text-gray-400">{i18n.language === 'es' ? '3x más rápido que la competencia' : '3x faster than competitors'}</p>
            </div>

            <div className="glass-effect p-6 rounded-2xl border border-accent-500/20 group hover:border-accent-500/40 transition-all duration-300">
              <div className="w-16 h-16 bg-accent-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-accent-500/30 transition-colors duration-300">
                <Shield className="w-8 h-8 text-accent-400" />
              </div>
              <h3 className="font-bold text-white mb-2">{i18n.language === 'es' ? 'Ultra Seguro' : 'Ultra Secure'}</h3>
              <p className="text-sm text-gray-400">{i18n.language === 'es' ? 'Protección de grado militar' : 'Military-grade protection'}</p>
            </div>

            <div className="glass-effect p-6 rounded-2xl border border-primary-500/20 group hover:border-primary-500/40 transition-all duration-300">
              <div className="w-16 h-16 bg-primary-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-500/30 transition-colors duration-300">
                <Clock className="w-8 h-8 text-primary-400" />
              </div>
              <h3 className="font-bold text-white mb-2">{i18n.language === 'es' ? '99.9% Uptime' : '99.9% Uptime'}</h3>
              <p className="text-sm text-gray-400">{i18n.language === 'es' ? 'Garantía siempre online' : 'Always online guarantee'}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
