import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Zap, Shield, Clock, Star } from 'lucide-react'
import { openAffiliateLink } from '../config/affiliate'

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
  const { t, i18n } = useTranslation()
  const heroRef = useRef<HTMLDivElement>(null)
  const backgroundRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance animation
      const tl = gsap.timeline()
      
      tl.fromTo('.hero-problem', 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
      )
      .fromTo('.hero-agitation', 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
        '-=0.5'
      )
      .fromTo('.hero-solution', 
        { y: 50, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 1.2, ease: 'back.out(1.7)' },
        '-=0.3'
      )
      .fromTo('.hero-description', 
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
        '-=0.5'
      )
      .fromTo('.hero-cta', 
        { y: 30, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.7)' },
        '-=0.3'
      )
      .fromTo('.hero-trust', 
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' },
        '-=0.2'
      )
      .fromTo('.hero-features', 
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out', stagger: 0.1 },
        '-=0.4'
      )

      // Parallax background effect
      gsap.to(backgroundRef.current, {
        yPercent: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      })

      // Floating animation for elements
      gsap.to('.float-1', {
        y: -20,
        duration: 3,
        ease: 'power2.inOut',
        yoyo: true,
        repeat: -1
      })

      gsap.to('.float-2', {
        y: -15,
        duration: 4,
        ease: 'power2.inOut',
        yoyo: true,
        repeat: -1,
        delay: 1
      })

      gsap.to('.float-3', {
        y: -25,
        duration: 3.5,
        ease: 'power2.inOut',
        yoyo: true,
        repeat: -1,
        delay: 2
      })

    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div 
        ref={backgroundRef}
        className="absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black"></div>
        <div className="absolute inset-0 animated-gradient opacity-20"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary-500/20 rounded-full blur-xl float-1"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-accent-500/20 rounded-full blur-xl float-2"></div>
        <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-primary-400/20 rounded-full blur-xl float-3"></div>
        <div className="absolute bottom-20 right-1/3 w-16 h-16 bg-accent-400/20 rounded-full blur-xl float-1"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* New Results-Oriented Headline */}
          <div className="hero-solution mb-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold gradient-text mb-6 leading-tight">
              {i18n.language === 'es' 
                ? 'Hosting Empresarial que Escala con tu Negocio'
                : 'Enterprise Hosting that Scales with your Business'
              }
            </h1>
            <div className="flex items-center justify-center space-x-2 mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              <span className="text-xl md:text-2xl font-semibold text-green-400">
                {i18n.language === 'es' ? '99.9% Uptime Garantizado' : '99.9% Uptime Guaranteed'}
              </span>
            </div>
          </div>

          {/* Enhanced Description with Value Props */}
          <div className="hero-description mb-10">
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-3xl mx-auto mb-6">
              {i18n.language === 'es'
                ? 'Infraestructura de clase empresarial que crece contigo. Desde startups hasta corporaciones, potenciamos tu éxito digital.'
                : 'Enterprise-class infrastructure that grows with you. From startups to corporations, we power your digital success.'
              }
            </p>
            
            {/* Social Proof & Urgency */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></span>
                <span>{i18n.language === 'es' ? '12 empresas se unieron hoy' : '12 companies joined today'}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                <span>{i18n.language === 'es' ? '99.97% uptime este mes' : '99.97% uptime this month'}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                <span>{i18n.language === 'es' ? '+50,000 sitios activos' : '+50,000 active sites'}</span>
              </div>
            </div>
          </div>

          {/* Progressive CTAs */}
          <div className="hero-cta mb-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => openAffiliateLink()}
                className="btn-primary text-lg px-10 py-5 transform hover:scale-105 transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10">
                  {i18n.language === 'es' ? 'Contratar Ahora' : 'Get Started Now'}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </button>
              <button
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary text-lg px-10 py-5 border-2 border-gray-600 hover:border-primary-400 transition-all duration-300"
              >
                {i18n.language === 'es' ? 'Ver Precios' : 'View Pricing'}
              </button>
            </div>
            
            {/* Secondary CTA with urgency */}
            <div className="mt-6">
              <p className="text-sm text-gray-400 mb-3">
                {i18n.language === 'es' 
                  ? '¿Necesitas una solución personalizada?' 
                  : 'Need a custom solution?'
                }
              </p>
              <button
                onClick={() => window.open('/support', '_blank')}
                className="text-primary-400 hover:text-primary-300 font-medium underline underline-offset-4 hover:underline-offset-2 transition-all duration-300"
              >
                {i18n.language === 'es' ? 'Hablar con un Experto →' : 'Talk to an Expert →'}
              </button>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="hero-trust mb-16">
            <div className="flex flex-col items-center space-y-4">
              <div className="flex items-center space-x-2 text-accent-400">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
              </div>
              <p className="text-gray-300 font-medium">{t('hero.trustBadge')}</p>
              <p className="text-sm text-gray-400">{t('hero.guarantee')}</p>
            </div>
          </div>

          {/* Key Features Preview */}
          <div className="hero-features">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="glass-effect p-6 rounded-xl text-center group hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-500/30 transition-colors duration-300">
                  <Zap className="w-6 h-6 text-primary-400" />
                </div>
                <h3 className="font-semibold text-white mb-2">{i18n.language === 'es' ? 'Ultrarrápido' : 'Ultra-Fast'}</h3>
                <p className="text-sm text-gray-400">{i18n.language === 'es' ? 'Velocidad de carga 3x más rápida' : '3x faster loading speeds'}</p>
              </div>

              <div className="glass-effect p-6 rounded-xl text-center group hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-accent-500/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-accent-500/30 transition-colors duration-300">
                  <Shield className="w-6 h-6 text-accent-400" />
                </div>
                <h3 className="font-semibold text-white mb-2">{i18n.language === 'es' ? 'Seguro' : 'Secure'}</h3>
                <p className="text-sm text-gray-400">{i18n.language === 'es' ? 'Protección de grado militar' : 'Military-grade protection'}</p>
              </div>

              <div className="glass-effect p-6 rounded-xl text-center group hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-500/30 transition-colors duration-300">
                  <Clock className="w-6 h-6 text-primary-400" />
                </div>
                <h3 className="font-semibold text-white mb-2">{i18n.language === 'es' ? '99.9% Uptime' : '99.9% Uptime'}</h3>
                <p className="text-sm text-gray-400">{i18n.language === 'es' ? 'Garantía siempre online' : 'Always online guarantee'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
