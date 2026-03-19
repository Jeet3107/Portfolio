const skillGroups = [
  { cat: 'Frontend', color: '#c8f53f', tags: ['HTML5', 'CSS3', 'JavaScript ES6+', 'React.js', 'Tailwind CSS', 'Responsive Design'] },
  { cat: 'Backend', color: '#4af0b0', tags: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth', 'bcryptjs', 'Python'] },
  { cat: 'Databases', color: '#c8f53f', tags: ['MongoDB', 'MongoDB Atlas', 'Mongoose', 'MySQL', 'PostgreSQL'] },
  { cat: 'Tools & Platforms', color: '#4af0b0', tags: ['Git', 'GitHub', 'VS Code', 'Postman', 'npm', 'Linux CLI', 'Chrome DevTools'] },
]

export default function Skills({ dark }) {
  const bg = dark ? 'bg-[#0f0f12]' : 'bg-slate-50'
  const cardBg = dark ? 'bg-[#111116] hover:bg-[#18181f]' : 'bg-white hover:bg-slate-50 border border-slate-100'
  const gridLine = dark ? 'bg-[#1c1c24]' : 'bg-slate-200'

  return (
    <section id="skills" className={`px-8 md:px-20 py-24 border-t ${dark ? 'border-[#1c1c24]' : 'border-slate-200'} ${bg}`}>
      <div className="section-label">Technical Skills</div>
      <h2 className={`reveal font-display font-extrabold text-3xl md:text-5xl tracking-tight mb-10 ${dark ? 'text-slate-100' : 'text-slate-900'}`}>
        What I work with.
      </h2>
      <div className={`reveal grid sm:grid-cols-2 lg:grid-cols-4 gap-px ${gridLine}`}>
        {skillGroups.map((g, i) => (
          <div
            key={g.cat}
            className={`${cardBg} p-7 transition-all duration-200`}
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            <div className="text-[0.62rem] tracking-[0.2em] uppercase mb-4" style={{ color: g.color }}>
              {g.cat}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {g.tags.map((t) => (
                <span key={t} className="tech-tag">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
