import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollToPlugin)

const NAV_OFFSET = 80 // your fixed navbar height

export function scrollToSection(selector) {
  const target = document.querySelector(selector)
  if (!target) return

  gsap.to(window, {
    duration: 1.1,
    ease: 'power2.inOut',
    scrollTo: {
      y: target,
      offsetY: NAV_OFFSET,
      autoKill: true, // lets user interrupt by scrolling manually
    },
  })
}