import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { 
  ZapOff, 
  ServerCrash, 
  ShieldAlert, 
  MessageSquareX, 
  DollarSign, 
  Settings 
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const Problems = () => {
  const { t } = useTranslation()
  const sectionRef = useRef<HTMLDivElement>(null)

  const iconMap = {
    'zap-off': ZapOff,
    'server-crash': ServerCrash,
    'shield-alert': ShieldAlert,
    'message-square-x': MessageSquareX,
    'dollar-sign': DollarSign,
    'settings': Settings
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo('.problems-title', 
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.problems-title',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      )

      // Subtitle animation
      gsap.fromTo('.problems-subtitle', 
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.problems-subtitle',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      )

      // Problem cards staggered animation
      gsap.fromTo('.problem-card', 
        { y: 60, opacity: 0, scale: 0.9 },
        { 
          y: 0, 
          opacity: 1, 
          scale: 1,
          duration: 0.8,
          ease: 'back.out(1.7)',
          stagger: 0.2,
          scrollTrigger: {
            trigger: '.problems-grid',
            start: 'top 70%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      )

      // Hover animations for cards
      const cards = document.querySelectorAll('.problem-card')
      cards.forEach(card => {
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

  const problems = t('problems.list', { returnObjects: true }) as Array<{
    title: string
    description: string
    icon: keyof typeof iconMap
  }>

  return (
    <section ref={sectionRef} id="problems" className="section-padding bg-gray-900/50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="problems-title text-4xl md:text-5xl lg:text-6xl font-bold text-danger-400 mb-6">
            {t('problems.title')}
          </h2>
          <p className="problems-subtitle text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            {t('problems.subtitle')}
          </p>
        </div>

        <div className="problems-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => {
            const IconComponent = iconMap[problem.icon]
            
            return (
              <div
                key={index}
                className="problem-card glass-effect p-8 rounded-2xl border border-danger-500/20 hover:border-danger-500/40 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-danger-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-danger-500/30 transition-colors duration-300">
                  <IconComponent className="w-8 h-8 text-danger-400" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-danger-300 transition-colors duration-300">
                  {problem.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {problem.description}
                </p>

                {/* Subtle glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-danger-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA hint */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-400 mb-6">
            {t('problems.bottomHint')}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-danger-500 to-accent-500 mx-auto rounded-full"></div>
        </div>
      </div>
    </section>
  )
}

export default Problems
