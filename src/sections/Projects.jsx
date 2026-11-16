import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'

function Projects() {
  return (
    <section id="projects" className="px-5 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-5 border-t border-border pt-8 md:flex-row md:items-end">
          <div>
            <p data-gsap="heading" className="text-xs font-semibold uppercase tracking-[.2em] text-accent">05 / Selected work</p>
            <h2 data-gsap="reveal" className="mt-4 text-3xl font-semibold tracking-[-.04em] text-foreground md:text-4xl">Projects &amp; contributions</h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-muted">A selection of systems and quality assurance work across business applications and operational workflows.</p>
        </div>
        <div data-gsap="cards" className="mt-10 grid gap-5 lg:grid-cols-2">
          {projects.map((project, index) => (
            <div key={project.title} data-gsap="card" className="h-full">
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
