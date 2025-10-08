import { useEffect, useRef } from 'react'
import { trackScrollDepth } from '../utils/analytics'

export const useScrollTracking = () => {
  const trackedPercentages = useRef<Set<number>>(new Set())

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercentage = Math.round((scrollTop / documentHeight) * 100)

      // Track at 25%, 50%, 75%, and 100% milestones
      const milestones = [25, 50, 75, 100]
      
      milestones.forEach(milestone => {
        if (scrollPercentage >= milestone && !trackedPercentages.current.has(milestone)) {
          trackedPercentages.current.add(milestone)
          trackScrollDepth(milestone)
        }
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
}

export default useScrollTracking
