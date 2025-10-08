import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { 
  Lock, 
  Database, 
  Globe, 
  Mail, 
  Code, 
  HardDrive, 
  Move,
  CheckCircle
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const Features = () => {
  const { t, i18n } = useTranslation()
  const sectionRef = useRef<HTMLDivElement>(null)

  const iconMap = {
    'lock': Lock,
    'database': Database,
    'globe': Globe,
    'mail': Mail,
    'wordpress': Code,
    'hard-drive': HardDrive,
    'code': Code,
    'move': Move
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo('.features-title', 
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.features-title',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      )

      // Subtitle animation
      gsap.fromTo('.features-subtitle', 
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.features-subtitle',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      )

      // Feature items animation
      gsap.fromTo('.feature-item', 
        { y: 60, opacity: 0, scale: 0.8 },
        { 
          y: 0, 
          opacity: 1, 
          scale: 1,
          duration: 0.8,
          ease: 'back.out(1.7)',
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.features-grid',
            start: 'top 70%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      )

      // Hover animations
      const featureItems = document.querySelectorAll('.feature-item')
      featureItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
          gsap.to(item, {
            scale: 1.1,
            y: -10,
            duration: 0.3,
            ease: 'power2.out'
          })
        })

        item.addEventListener('mouseleave', () => {
          gsap.to(item, {
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

  const features = t('features.list', { returnObjects: true }) as Array<{
    title: string
    icon: keyof typeof iconMap
  }>

  return (
    <section ref={sectionRef} id="features" className="section-padding bg-gray-900/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="features-title text-4xl md:text-5xl font-bold text-white mb-6">
            {t('features.title')}
          </h2>
          <p className="features-subtitle text-xl text-gray-300 max-w-2xl mx-auto">
            {t('features.subtitle')}
          </p>
        </div>

        <div className="features-grid grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon] || CheckCircle
            
            return (
              <div
                key={index}
                className="feature-item glass-effect p-6 md:p-8 rounded-2xl text-center group hover:border-primary-500/40 transition-all duration-300 border border-white/10"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 bg-primary-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-500/30 transition-colors duration-300">
                  <IconComponent className="w-8 h-8 md:w-10 md:h-10 text-primary-400" />
                </div>
                
                <h3 className="text-sm md:text-base font-semibold text-white group-hover:text-primary-300 transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-primary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            )
          })}
        </div>

        {/* Additional benefits section */}
        <div className="mt-20 text-center">
          <div className="glass-effect p-8 md:p-12 rounded-3xl border border-primary-500/20 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              {i18n.language === 'es' ? 'Todo lo que Necesitas para Tener Éxito Online' : 'Everything You Need to Succeed Online'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-accent-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-white mb-1">{i18n.language === 'es' ? 'SLA de 99.9% Uptime' : '99.9% Uptime SLA'}</h4>
                  <p className="text-sm text-gray-400">{i18n.language === 'es' ? 'Confiabilidad garantizada para tu negocio' : 'Guaranteed reliability for your business'}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-accent-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-white mb-1">{i18n.language === 'es' ? 'Soporte Experto 24/7' : '24/7 Expert Support'}</h4>
                  <p className="text-sm text-gray-400">{i18n.language === 'es' ? 'Personas reales listas para ayudar en cualquier momento' : 'Real humans ready to help anytime'}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-accent-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-white mb-1">{i18n.language === 'es' ? 'Migración Gratuita del Sitio' : 'Free Site Migration'}</h4>
                  <p className="text-sm text-gray-400">{i18n.language === 'es' ? 'Moveremos tu sitio sin costo adicional' : "We'll move your site at no extra cost"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
