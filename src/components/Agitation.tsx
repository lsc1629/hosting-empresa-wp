import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TrendingDown, AlertTriangle, Clock, DollarSign } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const Agitation = () => {
  const { t, i18n } = useTranslation()
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation with shake effect
      gsap.fromTo('.agitation-title', 
        { y: 50, opacity: 0, rotationX: -15 },
        { 
          y: 0, 
          opacity: 1, 
          rotationX: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.agitation-title',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      )

      // Subtitle with urgency animation
      gsap.fromTo('.agitation-subtitle', 
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.agitation-subtitle',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      )

      // Stats counter animation
      gsap.fromTo('.stat-card', 
        { y: 80, opacity: 0, scale: 0.8 },
        { 
          y: 0, 
          opacity: 1, 
          scale: 1,
          duration: 1,
          ease: 'back.out(1.7)',
          stagger: 0.2,
          scrollTrigger: {
            trigger: '.stats-grid',
            start: 'top 70%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      )

      // Callout animation with pulse
      gsap.fromTo('.agitation-callout', 
        { y: 40, opacity: 0, scale: 0.95 },
        { 
          y: 0, 
          opacity: 1, 
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.agitation-callout',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      )

      // Pulsing effect for callout
      gsap.to('.agitation-callout', {
        scale: 1.02,
        duration: 2,
        ease: 'power2.inOut',
        yoyo: true,
        repeat: -1
      })

      // Number counting animation
      const numbers = document.querySelectorAll('.stat-number')
      numbers.forEach((number) => {
        const finalValue = number.textContent
        const isPercentage = finalValue?.includes('%')
        const isDollar = finalValue?.includes('$')
        
        let numericValue = 0
        if (isPercentage) {
          numericValue = parseInt(finalValue?.replace('%', '') || '0')
        } else if (isDollar) {
          numericValue = parseInt(finalValue?.replace(/[$,]/g, '') || '0')
        }

        if (numericValue > 0) {
          gsap.fromTo(number, 
            { textContent: 0 },
            {
              textContent: numericValue,
              duration: 2,
              ease: 'power2.out',
              snap: { textContent: 1 },
              scrollTrigger: {
                trigger: number,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
              },
              onUpdate: function() {
                const current = Math.round(this.targets()[0].textContent)
                if (isPercentage) {
                  this.targets()[0].textContent = current + '%'
                } else if (isDollar) {
                  this.targets()[0].textContent = '$' + current.toLocaleString()
                }
              }
            }
          )
        }
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const stats = t('agitation.stats', { returnObjects: true }) as Array<{
    number: string
    label: string
    impact: string
  }>

  return (
    <section ref={sectionRef} id="agitation" className="section-padding bg-gradient-to-b from-gray-900/50 to-danger-950/20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="agitation-title text-4xl md:text-5xl lg:text-6xl font-bold text-danger-400 mb-6">
            {t('agitation.title')}
          </h2>
          <p className="agitation-subtitle text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            {t('agitation.subtitle')}
          </p>
        </div>

        <div className="stats-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-card glass-effect p-8 rounded-2xl border border-danger-500/20 text-center group hover:border-danger-500/40 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-danger-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-danger-500/30 transition-colors duration-300">
                {index === 0 && <TrendingDown className="w-8 h-8 text-danger-400" />}
                {index === 1 && <DollarSign className="w-8 h-8 text-danger-400" />}
                {index === 2 && <TrendingDown className="w-8 h-8 text-danger-400" />}
                {index === 3 && <AlertTriangle className="w-8 h-8 text-danger-400" />}
              </div>
              
              <div className="stat-number text-4xl md:text-5xl font-bold text-danger-300 mb-4">
                {stat.number}
              </div>
              
              <p className="text-gray-300 font-medium mb-4 leading-relaxed">
                {stat.label}
              </p>
              
              <p className="text-sm text-danger-200 italic">
                {stat.impact}
              </p>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-danger-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Urgent Callout */}
        <div className="agitation-callout max-w-4xl mx-auto">
          <div className="glass-effect p-8 md:p-12 rounded-3xl border-2 border-danger-500/30 bg-gradient-to-r from-danger-950/30 to-gray-950/30">
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 bg-danger-500/20 rounded-full flex items-center justify-center">
                <Clock className="w-10 h-10 text-danger-400" />
              </div>
            </div>
            
            <p className="text-xl md:text-2xl text-center text-gray-200 leading-relaxed font-medium">
              {t('agitation.callout')}
            </p>

            {/* Animated warning indicators */}
            <div className="flex justify-center mt-8 space-x-4">
              <div className="w-3 h-3 bg-danger-500 rounded-full animate-pulse"></div>
              <div className="w-3 h-3 bg-danger-500 rounded-full animate-pulse animation-delay-200"></div>
              <div className="w-3 h-3 bg-danger-500 rounded-full animate-pulse animation-delay-400"></div>
            </div>
          </div>
        </div>

        {/* Transition hint */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-400 mb-6">
            {i18n.language === 'es' 
              ? 'Pero hay esperanza. Hay una solución que realmente funciona...'
              : "But there's hope. There's a solution that actually works..."
            }
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-danger-500 via-accent-500 to-primary-500 mx-auto rounded-full"></div>
        </div>
      </div>
    </section>
  )
}

export default Agitation
