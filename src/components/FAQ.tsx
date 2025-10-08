import { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ChevronDown, HelpCircle } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const FAQ = () => {
  const { t, i18n } = useTranslation()
  const sectionRef = useRef<HTMLDivElement>(null)
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo('.faq-title', 
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.faq-title',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      )

      // Subtitle animation
      gsap.fromTo('.faq-subtitle', 
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.faq-subtitle',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      )

      // FAQ items animation
      gsap.fromTo('.faq-item', 
        { y: 60, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8,
          ease: 'power2.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.faq-list',
            start: 'top 70%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      )

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const faqItems = t('faq.items', { returnObjects: true }) as Array<{
    question: string
    answer: string
  }>

  return (
    <section ref={sectionRef} id="faq" className="section-padding bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="faq-title text-4xl md:text-5xl font-bold text-white mb-6">
            {t('faq.title')}
          </h2>
          <p className="faq-subtitle text-xl text-gray-300 max-w-2xl mx-auto">
            {t('faq.subtitle')}
          </p>
        </div>

        <div className="faq-list max-w-4xl mx-auto">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="faq-item glass-effect rounded-2xl border border-white/10 mb-4 overflow-hidden transition-all duration-300 hover:border-primary-500/30"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full p-6 md:p-8 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <HelpCircle className="w-5 h-5 text-primary-400" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-white pr-4">
                    {item.question}
                  </h3>
                </div>
                <ChevronDown 
                  className={`w-6 h-6 text-gray-400 transition-transform duration-300 flex-shrink-0 ${
                    openItems.includes(index) ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openItems.includes(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 md:px-8 pb-6 md:pb-8">
                  <div className="pl-14">
                    <p className="text-gray-300 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact support */}
        <div className="text-center mt-16">
          <div className="glass-effect p-8 rounded-2xl border border-primary-500/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              {i18n.language === 'es' ? '¿Aún Tienes Preguntas?' : 'Still Have Questions?'}
            </h3>
            <p className="text-gray-300 mb-6">
              {i18n.language === 'es' 
                ? 'Nuestro equipo de soporte experto está disponible 24/7 para ayudarte con cualquier pregunta o inquietud.'
                : 'Our expert support team is available 24/7 to help you with any questions or concerns.'
              }
            </p>
            <button className="btn-secondary">
              {i18n.language === 'es' ? 'Contactar Soporte' : 'Contact Support'}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
