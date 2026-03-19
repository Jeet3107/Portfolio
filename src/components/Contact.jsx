const LINKS = [
  { platform: 'Email', value: 'jeetprajapati677@gmail.com', href: 'mailto:jeetprajapati677@gmail.com' },
  { platform: 'Phone', value: '+91 84870 31704', href: 'tel:+918487031704' },
  { platform: 'GitHub', value: 'github.com/Jeet3107', href: 'https://github.com/Jeet3107' },
  { platform: 'LinkedIn', value: 'linkedin.com/in/jeet-prajapati-63a4b2273', href: 'https://linkedin.com/in/jeet-prajapati-63a4b2273' },
]

export default function Contact({ dark }) {
  const border = dark ? 'border-[#1c1c24]' : 'border-slate-200'
  const rowBg = dark
    ? 'bg-[#111116] hover:bg-[#18181f]'
    : 'bg-white hover:bg-slate-50 border-b border-slate-100'
  const heading = dark ? 'text-slate-100' : 'text-slate-900'
  const muted = dark ? 'text-slate-500' : 'text-slate-500'
  const divLine = dark ? 'bg-[#1c1c24]' : 'bg-slate-200'

  return (
    <section id="contact" className={`px-8 md:px-20 py-24 border-t ${border}`}>
      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* Left */}
        <div className="reveal">
          <div className="section-label">Contact</div>
          <h2
            className={`font-display font-extrabold tracking-tight leading-[1.0] mb-6 ${heading}`}
            style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}
          >
            Let's work<br />
            <span className="text-accent">together.</span>
          </h2>
          <p className={`text-sm leading-[1.9] ${muted} max-w-sm`}>
            Open to internship positions, junior developer roles, and freelance projects.
            Based in Ahmedabad, Gujarat — available remotely and on-site.
          </p>
        </div>

        {/* Right — links */}
        <div className={`reveal flex flex-col gap-px ${divLine}`}>
          {LINKS.map((l) => (
            <a
              key={l.platform}
              href={l.href}
              target={l.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className={`${rowBg} flex justify-between items-center px-5 py-4 transition-all duration-200 group no-underline`}
            >
              <div>
                <div className={`text-[0.65rem] tracking-[0.2em] uppercase ${muted}`}>{l.platform}</div>
                <div className={`text-sm mt-0.5 ${heading} group-hover:text-accent transition-colors`}>{l.value}</div>
              </div>
              <span className={`text-lg ${muted} group-hover:text-accent group-hover:translate-x-1 transition-all duration-200`}>→</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
