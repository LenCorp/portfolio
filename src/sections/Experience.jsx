import { experiences } from '../data/experiences'
import ExperienceCard from '../components/ExperienceCard'

function Experience() {
  return (
    <section id="experience" className="px-5 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-6xl border-t border-border pt-8">
        <div className="grid gap-5 md:grid-cols-[.65fr_1.35fr] md:gap-20">
          <div>
            <p data-gsap="heading" className="text-xs font-semibold uppercase tracking-[.2em] text-accent">04 / Career</p>
            <h2 data-gsap="reveal" className="mt-4 text-3xl font-semibold tracking-[-.04em] text-foreground md:text-4xl">Experience</h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-muted">Professional and project-based experience in system analysis and software quality assurance.</p>
        </div>
        <div data-gsap="cards" className="mt-10 space-y-5">
          {experiences.map((experience, index) => (
            <div key={`${experience.company}-${experience.role}-${experience.period}`} data-gsap="card">
              <ExperienceCard experience={experience} isLast={index === experiences.length - 1} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
