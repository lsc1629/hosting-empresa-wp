import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Star, Quote } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const Testimonials = () => {
  const { t } = useTranslation()
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo('.testimonials-title', 
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.testimonials-title',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      )

      // Subtitle animation
      gsap.fromTo('.testimonials-subtitle', 
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.testimonials-subtitle',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      )

      // Testimonial cards animation
      gsap.fromTo('.testimonial-card', 
        { y: 80, opacity: 0, rotationX: -15 },
        { 
          y: 0, 
          opacity: 1, 
          rotationX: 0,
          duration: 1,
          ease: 'power3.out',
          stagger: 0.2,
          scrollTrigger: {
            trigger: '.testimonials-grid',
            start: 'top 70%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      )

      // Hover animations
      const testimonialCards = document.querySelectorAll('.testimonial-card')
      testimonialCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            scale: 1.03,
            y: -5,
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

  const testimonials = t('testimonials.items', { returnObjects: true }) as Array<{
    name: string
    role: string
    content: string
    rating: number
  }>

  return (
    <section ref={sectionRef} id="testimonials" className="section-padding bg-gray-900/50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="testimonials-title text-4xl md:text-5xl font-bold text-white mb-6">
            {t('testimonials.title')}
          </h2>
          <p className="testimonials-subtitle text-xl text-gray-300 max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="testimonials-grid grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card glass-effect p-8 rounded-3xl border border-white/10 hover:border-accent-500/30 transition-all duration-300 group relative"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-accent-500 rounded-full flex items-center justify-center">
                <Quote className="w-6 h-6 text-white" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-6 mt-4">
                {[...Array(testimonial.rating)].map((_, starIndex) => (
                  <Star key={starIndex} className="w-5 h-5 text-accent-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-300 leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="border-t border-gray-700 pt-6">
                <h4 className="font-bold text-white mb-1">{testimonial.name}</h4>
                <p className="text-sm text-gray-400">{testimonial.role}</p>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <div className="glass-effect p-8 rounded-2xl border border-primary-500/20 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-400 mb-2">2.8M+</div>
                <p className="text-gray-300">Websites Hosted</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent-400 mb-2">99.9%</div>
                <p className="text-gray-300">Uptime Guarantee</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-400 mb-2">24/7</div>
                <p className="text-gray-300">Expert Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
