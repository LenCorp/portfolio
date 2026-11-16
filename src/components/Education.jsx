import {
  GraduationCap,
  School,
  Award,
  BookOpen,
  Calendar,
  MapPin,
} from 'lucide-react'

// ==================================================
// DATA PENDIDIKAN
// Ganti dengan data asli kamu
// ==================================================
const educationData = [
  {
    id: 1,
    icon: GraduationCap,
    degree: 'Bachelor of Information Systems',
    institution: 'Universitas Bhinneka Nusantara',
    location: 'Malang, Indonesia',
    period: '2021 — 2025',
    gpa: 'GPA 3.83 / 4.00',
    description:
      'Focused on software engineering, system analysis, and database design. Active member of the software engineering student community.',
    highlights: [
      'System Analysis & Design',
      'Software Quality Assurance',
      'Database Management',
    ],
    thesis:
      'Thesis: Implementation of Black-Box Testing to Improve Software Quality in Academic Information Systems',
  },
  {
    id: 2,
    icon: School,
    degree: 'Software Engineering (High School)',
    institution: 'SMK Negeri 2 Singosari',
    location: 'Kabupaten Malang, Indonesia',
    period: '2018 — 2021',
    gpa: null,
    description:
      'Developed early interest in technology and logic through computer science extracurriculars and mathematics olympiad training.',
    highlights: [
      
    ],
    thesis: null,
  },
]

// ==================================================
// SERTIFIKASI & PELATIHAN (opsional, ganti dengan milikmu)
// ==================================================
const certifications = [
  {
    name: 'Software Development - Web Developer',
    issuer: 'LSP',
    year: '2024',
  },
  {
    name: 'Certificate of Achivement : English Competency Test',
    issuer: 'Pusat Edukasi & Inovasi Digital',
    year: '2025',
  },
  {
    name: 'Ethical Hacking Essentials',
    issuer: 'EC-Council',
    year: '2025',
  },
]

function Education() {
  return (
    <section
      id="education"
      className="relative overflow-hidden px-5 py-20 md:px-6 md:py-28"
    >
      {/* Decorative background glow */}
      <div className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />

      <div className="relative mx-auto max-w-6xl border-t border-border pt-8">
        {/* ================================================== */}
        {/* SECTION HEADER */}
        {/* ================================================== */}
        <div className="mb-14 grid gap-4 text-left md:grid-cols-[.65fr_1.35fr] md:items-end md:gap-20">
          <p
            data-gsap="heading"
            className="mb-3 text-xs font-semibold uppercase tracking-[.2em] text-accent"
          >
            Education
          </p>

          <h2
            data-gsap="heading"
            className="text-3xl font-semibold tracking-[-.04em] text-foreground md:text-4xl"
          >
            Academic{' '}
            <span className="text-accent">Journey</span>
          </h2>

          <p
            data-gsap="reveal"
            className="mt-2 max-w-xl text-sm leading-7 text-muted"
          >
            The formal foundation behind my analytical thinking —
            where I built my knowledge in systems, data, and
            quality.
          </p>
        </div>

        {/* ================================================== */}
        {/* TIMELINE */}
        {/* ================================================== */}
        <div
          data-gsap="cards"
          className="relative mx-auto max-w-3xl"
        >
          {/* Garis vertikal timeline */}
          <div className="absolute left-5 top-2 bottom-2 w-px bg-border md:left-1/2" />

          <div className="flex flex-col gap-12">
            {educationData.map((edu, index) => {
              const Icon = edu.icon
              const isEven = index % 2 === 0

              return (
                <div
                  key={edu.id}
                  data-gsap="card"
                  className={`relative flex ${
                    isEven ? 'md:justify-start' : 'md:justify-end'
                  }`}
                >
                  {/* Dot di timeline */}
                  <div className="absolute left-5 top-8 z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-accent/30 glass-panel text-accent md:left-1/2">
                    <Icon size={18} />
                  </div>

                  {/* Card konten */}
                  <div
                    className={`glass-panel group ml-14 w-full rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 md:ml-0 md:w-[calc(50%-3rem)] ${
                      isEven ? 'md:mr-14' : 'md:ml-14'
                    }`}
                  >
                    {/* Periode */}
                    <div className="mb-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar size={13} className="text-accent" />
                        {edu.period}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin size={13} className="text-accent" />
                        {edu.location}
                      </span>
                    </div>

                    {/* Gelar & institusi */}
                    <h3 className="text-lg font-bold text-foreground transition-colors group-hover:text-accent">
                      {edu.degree}
                    </h3>

                    <p className="mt-1 text-sm font-medium text-accent/80">
                      {edu.institution}
                    </p>

                    {/* GPA badge */}
                    {edu.gpa && (
                      <span className="mt-3 inline-flex items-center rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                        <Award size={12} className="mr-1.5" />
                        {edu.gpa}
                      </span>
                    )}

                    {/* Deskripsi */}
                    <p className="mt-4 text-sm leading-relaxed text-muted">
                      {edu.description}
                    </p>

                    {/* Highlights / fokus studi */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {edu.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="rounded-md border border-border bg-background px-2.5 py-1 text-xs text-muted transition-colors group-hover:border-accent/20"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>

                    {/* Skripsi (jika ada) */}
                    {edu.thesis && (
                      <div className="mt-4 rounded-lg border-l-2 border-accent/40 bg-background/60 p-3">
                        <p className="text-xs leading-relaxed text-muted">
                          <BookOpen
                            size={12}
                            className="mr-1.5 inline text-accent"
                          />
                          {edu.thesis}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* ================================================== */}
        {/* SERTIFIKASI */}
        {/* ================================================== */}
        <div data-gsap="reveal" className="mt-20">
          <h3 className="mb-8 text-center text-xl font-bold text-foreground">
            Certifications &{' '}
            <span className="text-accent">Training</span>
          </h3>

          <div
            data-gsap="cards"
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {certifications.map((cert) => (
              <div
                key={cert.name}
                data-gsap="card"
                className="glass-panel group rounded-xl p-5 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg border border-accent/20 bg-accent/10 text-accent">
                  <Award size={18} />
                </div>

                <p className="text-sm font-semibold leading-snug text-foreground">
                  {cert.name}
                </p>

                <p className="mt-2 text-xs text-muted">
                  {cert.issuer} · {cert.year}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education