import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { 
  Zap, 
  Shield, 
  Clock, 
  Headphones, 
  DollarSign, 
  Settings,
  CheckCircle,
  ArrowRight
} from 'lucide-react'
import { openAffiliateLink } from '../config/affiliate'

gsap.registerPlugin(ScrollTrigger)

const Solution = () => {
  const { t, i18n } = useTranslation()
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation with scale effect
      gsap.fromTo('.solution-title', 
        { y: 50, opacity: 0, scale: 0.9 },
        { 
          y: 0, 
          opacity: 1, 
          scale: 1,
          duration: 1.2,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: '.solution-title',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      )

      // Subtitle animation
      gsap.fromTo('.solution-subtitle', 
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.solution-subtitle',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      )

      // Intro text animation
      gsap.fromTo('.solution-intro', 
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.solution-intro',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      )

      // Feature cards animation
      gsap.fromTo('.feature-card', 
        { x: -60, opacity: 0, rotationY: -15 },
        { 
          x: 0, 
          opacity: 1, 
          rotationY: 0,
          duration: 1,
          ease: 'power3.out',
          stagger: 0.2,
          scrollTrigger: {
            trigger: '.features-list',
            start: 'top 70%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      )

      // Hover animations for feature cards
      const featureCards = document.querySelectorAll('.feature-card')
      featureCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            scale: 1.03,
            x: 10,
            duration: 0.3,
            ease: 'power2.out'
          })
        })

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            scale: 1,
            x: 0,
            duration: 0.3,
            ease: 'power2.out'
          })
        })
      })

      // CTA animation
      gsap.fromTo('.solution-cta', 
        { y: 40, opacity: 0, scale: 0.9 },
        { 
          y: 0, 
          opacity: 1, 
          scale: 1,
          duration: 1,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: '.solution-cta',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      )

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const features = t('solution.features', { returnObjects: true }) as Array<{
    title: string
    description: string
    benefit: string
  }>

  const iconMap = [Zap, Shield, Clock, Headphones, DollarSign, Settings]

  return (
    <section ref={sectionRef} id="solution" className="section-padding bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="solution-title text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-6">
            {t('solution.title')}
          </h2>
          <p className="solution-subtitle text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
            {t('solution.subtitle')}
          </p>
          <p className="solution-intro text-lg text-gray-400 max-w-4xl mx-auto">
            {t('solution.intro')}
          </p>
        </div>

        <div className="features-list space-y-8 max-w-5xl mx-auto mb-16">
          {features.map((feature, index) => {
            const IconComponent = iconMap[index] || CheckCircle
            
            return (
              <div
                key={index}
                className="feature-card glass-effect p-8 rounded-2xl border border-primary-500/20 hover:border-primary-500/40 transition-all duration-300 group"
              >
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  {/* Icon */}
                  <div className="w-20 h-20 bg-primary-500/20 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary-500/30 transition-colors duration-300">
                    <IconComponent className="w-10 h-10 text-primary-400" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary-300 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="flex items-center space-x-2 text-accent-400">
                      <CheckCircle className="w-5 h-5" />
                      <span className="font-medium">{feature.benefit}</span>
                    </div>
                  </div>

                  {/* Arrow indicator */}
                  <div className="hidden md:block">
                    <ArrowRight className="w-6 h-6 text-primary-400 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-primary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="solution-cta text-center">
          <div className="glass-effect p-8 md:p-12 rounded-3xl border-2 border-primary-500/30 bg-gradient-to-r from-primary-950/30 to-accent-950/30 max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {i18n.language === 'es' ? '¿Listo para Experimentar la Diferencia?' : 'Ready to Experience the Difference?'}
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              {i18n.language === 'es' 
                ? 'Únete a millones de sitios web exitosos que eligieron SiteGround para sus necesidades de hosting.'
                : 'Join millions of successful websites that chose SiteGround for their hosting needs.'
              }
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => openAffiliateLink()}
                className="btn-primary text-lg px-10 py-5 transform hover:scale-105 transition-all duration-300"
              >
                {i18n.language === 'es' ? 'Comenzar Tu Sitio Web Hoy' : 'Start Your Website Today'}
              </button>
              <button
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary text-lg px-10 py-5"
              >
                {i18n.language === 'es' ? 'Ver Planes de Precios' : 'View Pricing Plans'}
              </button>
            </div>

            <p className="text-sm text-gray-400 mt-6">
              {i18n.language === 'es' 
                ? 'Garantía de Devolución de 30 Días • Sin Tarifas de Configuración • Cancela en Cualquier Momento'
                : '30-Day Money-Back Guarantee • No Setup Fees • Cancel Anytime'
              }
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Solution
