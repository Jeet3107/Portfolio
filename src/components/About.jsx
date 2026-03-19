const stats = [
  { num: '3+', label: 'Projects Shipped' },
  { num: '7.0', label: 'CPI / GPA' },
  { num: '11+', label: 'API Endpoints' },
  { num: '2026', label: 'Graduating' },
]

export default function About({ dark }) {
  const card = dark ? 'bg-[#111116]' : 'bg-white border border-slate-200'
  const muted = dark ? 'text-slate-500' : 'text-slate-500'
  const strong = dark ? 'text-slate-200' : 'text-slate-800'

  return (
    <section id="about" className={`px-8 md:px-20 py-24 border-t ${dark ? 'border-[#1c1c24]' : 'border-slate-200'}`}>
      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* Left */}
        <div className="reveal">
          <div className="section-label">About Me</div>
          <h2 className={`font-display font-extrabold text-3xl md:text-5xl tracking-tight leading-tight mb-8 ${dark ? 'text-slate-100' : 'text-slate-900'}`}>
            Building things<br />for the web.
          </h2>
          {[
            <>I'm <span className={strong}>Jeet Prajapati</span>, a Computer Engineering student (graduating 2026) based in Ahmedabad, Gujarat. I specialize in the <span className={strong}>MERN stack</span> and love turning ideas into polished, functional products.</>,
            <>From JWT-authenticated APIs to real-time analytics dashboards with Recharts, I focus on the entire lifecycle — clean backend, responsive UI, and deployment-ready code.</>,
            <>Currently seeking an <span className={strong}>internship or junior developer role</span> where I can contribute to real products and grow alongside experienced engineers.</>,
          ].map((text, i) => (
            <p key={i} className={`${muted} text-sm leading-[1.9] mb-5`}>{text}</p>
          ))}
        </div>

        {/* Right — stats */}
        <div className="reveal">
          <div className={`grid grid-cols-2 gap-px ${dark ? 'bg-[#1c1c24]' : 'bg-slate-200'} border ${dark ? 'border-[#1c1c24]' : 'border-slate-200'}`}>
            {stats.map((s) => (
              <div key={s.label} className={`${card} p-8 transition-colors duration-200 hover:bg-opacity-80`}>
                <div className="font-display font-extrabold text-4xl text-accent leading-none">{s.num}</div>
                <div className={`text-[0.68rem] tracking-widest uppercase mt-2 ${muted}`}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
