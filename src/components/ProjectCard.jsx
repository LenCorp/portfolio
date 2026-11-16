function ProjectCard({ project, index = 0 }) {
  const responsibilities = project.responsibilities?.filter(Boolean) ?? []
  const tools = project.tools?.filter(Boolean) ?? []

  return (
    <article className="glass-panel flex h-full flex-col rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(35,61,49,.12)] md:p-7">
      <div className="flex items-center justify-between gap-4 border-b border-border pb-5">
        <span className="text-[11px] font-semibold uppercase tracking-[.18em] text-accent">Selected work / {String(index + 1).padStart(2, '0')}</span>
        <span className="text-right text-xs text-muted">{project.role}</span>
      </div>
      <h3 className="mt-6 text-2xl font-semibold tracking-tight text-foreground">{project.title}</h3>
      <p className="mt-3 text-sm leading-7 text-muted">{project.description}</p>

      {responsibilities.length > 0 && (
        <div className="mt-7">
          <h4 className="text-[11px] font-semibold uppercase tracking-[.16em] text-foreground">Scope of contribution</h4>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {responsibilities.map((item) => (
              <li key={item} className="flex gap-2 text-sm leading-6 text-muted">
                <span aria-hidden="true" className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {tools.length > 0 && (
        <div className="mt-auto flex flex-wrap gap-2 border-t border-border pt-6 mt-7">
          {tools.map((tool) => (
            <span key={tool} className="rounded-full border border-emerald-900/10 bg-white/55 px-3 py-1.5 text-[11px] font-medium text-muted">{tool}</span>
          ))}
        </div>
      )}
    </article>
  )
}

export default ProjectCard
