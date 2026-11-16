function About() {
  return (
    <section id="about" className="px-5 py-20 md:px-6 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 border-t border-border pt-8 md:grid-cols-[.65fr_1.35fr] md:gap-20">
        <div>
          <p data-gsap="heading" className="text-xs font-semibold uppercase tracking-[.2em] text-accent">01 / About</p>
          <p className="mt-4 max-w-xs text-sm leading-6 text-muted">A practical perspective across requirements, system behavior, and software quality.</p>
        </div>
        <div>
          <h2 data-gsap="reveal" className="text-balance max-w-3xl text-3xl font-semibold leading-tight tracking-[-.04em] text-foreground md:text-4xl">
            Bridging business requirements and software quality.
          </h2>
          <p data-gsap="reveal" className="mt-6 max-w-3xl text-base leading-8 text-muted">
            I am a System Analyst and QA Engineer focused on understanding business requirements, translating them into clear system specifications, and validating software through structured testing processes. My work connects stakeholders and developers by clarifying expected behavior, identifying gaps early, and checking that delivered features meet their intended purpose.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
