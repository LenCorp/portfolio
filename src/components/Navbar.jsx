import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { scrollToSection } from '../utils/scrollToSection'

const menuItems = [
  { name: 'About', id: 'about' },
  { name: 'Education', id: 'education' },
  { name: 'Skills', id: 'skills' },
  { name: 'Experience', id: 'experience' },
  { name: 'Projects', id: 'projects' },
  { name: 'Contact', id: 'contact' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [active, setActive] = useState('')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const current = entries.filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (current) setActive(current.target.id)
    }, { rootMargin: '-35% 0px -55% 0px', threshold: [0, 0.15, 0.35] })

    menuItems.forEach(({ id }) => {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKeyDown = (event) => event.key === 'Escape' && setIsOpen(false)
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  const navigate = (event, id) => {
    event.preventDefault()
    setIsOpen(false)
    window.setTimeout(() => scrollToSection(`#${id}`), isOpen ? 180 : 0)
  }

  return (
    <header className={`glass-nav fixed inset-x-0 top-0 z-50 transition-shadow ${scrolled ? 'shadow-[0_8px_30px_rgba(35,61,49,.08)]' : ''}`}>
      <nav aria-label="Main navigation" className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 md:px-6">
        <a href="#top" onClick={(event) => { event.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); setIsOpen(false) }} className="text-xl font-semibold tracking-tight text-foreground">
          Nazrul<span className="text-accent">.</span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {menuItems.map((item) => (
            <a key={item.id} href={`#${item.id}`} onClick={(event) => navigate(event, item.id)}
              aria-current={active === item.id ? 'location' : undefined}
              className={`relative py-2 text-[13px] font-medium transition-colors ${active === item.id ? 'text-accent' : 'text-muted hover:text-foreground'}`}>
              {item.name}
              <span className={`absolute inset-x-0 -bottom-px h-px origin-left bg-accent transition-transform ${active === item.id ? 'scale-x-100' : 'scale-x-0'}`} />
            </a>
          ))}
        </div>

        <button type="button" onClick={() => setIsOpen((value) => !value)} aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={isOpen} aria-controls="mobile-navigation"
          className="rounded-xl border border-border bg-white/70 p-2 text-foreground shadow-sm md:hidden">
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {isOpen && (
        <div id="mobile-navigation" className="glass-panel border-t border-border px-5 py-3 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col">
            {menuItems.map((item) => (
              <a key={item.id} href={`#${item.id}`} onClick={(event) => navigate(event, item.id)}
                aria-current={active === item.id ? 'location' : undefined}
                className={`rounded-lg px-3 py-3 text-sm font-medium ${active === item.id ? 'bg-emerald-900/5 text-accent' : 'text-muted hover:bg-white/60 hover:text-foreground'}`}>
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
