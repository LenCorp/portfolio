import { skills } from '../data/skills'

function Skills() {
  return (
    <section id="skills" className="px-5 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-6xl border-t border-border pt-8">
        <div className="grid gap-8 md:grid-cols-[.65fr_1.35fr] md:gap-20">
          <div>
            <p data-gsap="heading" className="text-xs font-semibold uppercase tracking-[.2em] text-accent">03 / Capabilities</p>
            <h2 data-gsap="reveal" className="mt-4 text-3xl font-semibold tracking-[-.04em] text-foreground md:text-4xl">Tools &amp; skills</h2>
            <p className="mt-4 max-w-xs text-sm leading-7 text-muted">Methods and tools I use to analyze requirements, validate behavior, and support software delivery.</p>
          </div>
          <div data-gsap="cards" className="divide-y divide-[var(--clr-border)]">
            {skills.map((skill, index) => (
              <div key={skill.category} data-gsap="card" className="grid gap-4 py-6 first:pt-0 sm:grid-cols-[190px_1fr]">
                <div className="flex items-start gap-3">
                  <span className="pt-1 text-[10px] font-semibold tracking-widest text-accent">0{index + 1}</span>
                  <h3 className="font-semibold text-foreground">{skill.category}</h3>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {skill.items.filter(Boolean).map((item) => (
                    <li key={item} className="rounded-full border border-emerald-900/10 bg-white/60 px-3 py-2 text-xs text-muted shadow-[0_2px_8px_rgba(35,61,49,.03)]">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
