import { ArrowDownRight, ExternalLink } from 'lucide-react'
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { scrollToSection } from '../utils/scrollToSection'

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/nazrul-m-sobirin-a23a372a8', Icon: FaLinkedinIn },
  { label: 'GitHub', href: 'https://github.com/LenCorp', Icon: FaGithub },
  { label: 'Instagram', href: 'https://www.instagram.com/nm_lyonechka/', Icon: FaInstagram },
]

function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden px-5 pb-20 pt-32 md:px-6 md:pb-28 md:pt-40">
      <div aria-hidden="true" className="pointer-events-none absolute -right-28 top-24 -z-10 h-80 w-80 rounded-full border border-white/80 bg-white/25 blur-2xl" />
      <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-[1.25fr_.75fr] md:gap-20">
        <div data-gsap="reveal">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-900/10 bg-white/65 px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[.16em] text-accent shadow-sm backdrop-blur-lg">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" /> System Analyst &amp; QA Engineer
          </p>
          <p className="mb-3 text-sm font-medium text-muted">Hello, I’m</p>
          <h1 className="text-balance max-w-3xl text-5xl font-semibold leading-[1.04] tracking-[-.055em] text-foreground sm:text-6xl md:text-7xl">
            Nazrul M Sobirin<span className="text-accent">.</span>
          </h1>
          <h2 className="mt-7 max-w-2xl text-xl font-medium leading-snug tracking-tight text-foreground/85 md:text-2xl">
            Connecting business needs with dependable software quality.
          </h2>
          <p className="mt-5 max-w-xl text-[15px] leading-7 text-muted md:text-base">
            I work across system analysis and software quality assurance — from understanding requirements and documenting workflows to validating features through structured testing.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button type="button" onClick={() => scrollToSection('#projects')} className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_22px_rgba(40,116,93,.18)] transition hover:bg-accent-strong">
              Explore selected work <ArrowDownRight size={17} />
            </button>
            <button type="button" onClick={() => scrollToSection('#contact')} className="rounded-full border border-emerald-900/15 bg-white/55 px-5 py-3 text-sm font-semibold text-foreground transition hover:border-accent/40 hover:bg-white/85">
              Get in touch
            </button>
          </div>

          <div className="mt-9 flex items-center gap-4">
            <span className="text-[11px] font-semibold uppercase tracking-[.16em] text-muted">Find me on</span>
            <span className="h-px w-8 bg-border" />
            {socialLinks.map(({ label, href, Icon }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="text-muted transition hover:text-accent">
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>

        <div data-gsap="reveal" className="relative mx-auto w-full max-w-[350px] md:ml-auto">
          <div className="glass-panel relative rounded-[2rem] p-3">
            <div className="overflow-hidden rounded-[1.45rem] bg-[#e5ece7]">
              <img src="/profile/nazrul.jpg" alt="Portrait of Nazrul M Sobirin" className="aspect-[4/5] w-full object-cover" fetchPriority="high" />
            </div>
            <div className="flex items-center justify-between gap-3 px-2 pb-1 pt-4">
              <div>
                <p className="text-sm font-semibold text-foreground">Nazrul M Sobirin</p>
                <p className="mt-0.5 text-xs text-muted">System Analysis · Quality Assurance</p>
              </div>
              <span className="rounded-full border border-emerald-900/10 bg-white/75 p-2 text-accent"><ExternalLink size={15} /></span>
            </div>
          </div>
          <div aria-hidden="true" className="absolute -bottom-5 -left-5 -z-10 h-28 w-28 rounded-full border border-white/80 bg-emerald-100/60 blur-xl" />
        </div>
      </div>
      <div className="mx-auto mt-20 flex max-w-6xl items-center gap-4 border-t border-border pt-5 text-[10px] font-semibold uppercase tracking-[.2em] text-muted">
        <span>Based in Indonesia</span><span className="h-px flex-1 bg-border" /><span>Scroll to explore</span>
      </div>
    </section>
  )
}

export default Hero
