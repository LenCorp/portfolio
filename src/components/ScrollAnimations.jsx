import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function ScrollAnimations() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    const context = gsap.context(() => {
      gsap.utils.toArray('[data-gsap="heading"], [data-gsap="reveal"]').forEach((element) => {
        gsap.fromTo(element, { autoAlpha: 0, y: 18 }, {
          autoAlpha: 1,
          y: 0,
          duration: 0.65,
          ease: 'power2.out',
          scrollTrigger: { trigger: element, start: 'top 88%', once: true },
        })
      })

      gsap.utils.toArray('[data-gsap="cards"]').forEach((container) => {
        const cards = container.querySelectorAll('[data-gsap="card"]')
        if (!cards.length) return
        gsap.fromTo(cards, { autoAlpha: 0, y: 18 }, {
          autoAlpha: 1,
          y: 0,
          duration: 0.55,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: { trigger: container, start: 'top 86%', once: true },
        })
      })
    })

    const refresh = () => ScrollTrigger.refresh()
    window.addEventListener('load', refresh)
    const fontsReady = document.fonts?.ready
    fontsReady?.then(refresh)

    return () => {
      window.removeEventListener('load', refresh)
      context.revert()
    }
  }, [])

  return null
}

export default ScrollAnimations
