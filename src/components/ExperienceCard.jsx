function ExperienceCard({ experience, isLast }) {
  return (
    <article className="relative grid gap-4 md:grid-cols-[180px_1fr] md:gap-8">
      <div className="flex items-start gap-3 pt-1">
        <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full border-2 border-accent bg-[#f3f6f4]" />
        <span className="text-xs font-medium leading-6 text-muted">{experience.period}</span>
      </div>
      <div className={`glass-panel rounded-2xl p-6 md:p-7 ${isLast ? '' : 'mb-1'}`}>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h3 className="text-xl font-semibold tracking-tight text-foreground">{experience.role}</h3>
            <p className="mt-1.5 text-sm font-medium text-accent">{experience.company}</p>
          </div>
          <span className="w-fit rounded-full border border-emerald-900/10 bg-white/65 px-3 py-1.5 text-[11px] text-muted">{experience.type}</span>
        </div>
        <p className="mt-5 max-w-3xl text-sm leading-7 text-muted">{experience.description}</p>
        {experience.responsibilities?.length > 0 && (
          <ul className="mt-5 grid gap-x-8 gap-y-2 md:grid-cols-2">
            {experience.responsibilities.map((item) => (
              <li key={item} className="flex gap-2.5 text-sm leading-6 text-muted">
                <span aria-hidden="true" className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-accent" />{item}
              </li>
            ))}
          </ul>
        )}
        {experience.tools?.filter(Boolean).length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2 border-t border-border pt-5">
            {experience.tools.filter(Boolean).map((tool) => <span key={tool} className="text-[11px] text-muted">{tool}</span>)}
          </div>
        )}
      </div>
    </article>
  )
}

export default ExperienceCard
