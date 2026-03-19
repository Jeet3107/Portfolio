import { useEffect, useState } from 'react'

export default function Hero({ dark }) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { const t = setTimeout(() => setMounted(true), 80); return () => clearTimeout(t) }, [])

  const lines = ['Full Stack', 'Developer', '& Builder.']
  const delays = ['0.2s', '0.38s', '0.56s']

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-8 md:px-20 pt-28 pb-16 overflow-hidden border-none"
    >
      {/* Grid bg */}
      <div className="grid-bg absolute inset-0 opacity-40 pointer-events-none" />

      {/* Status badge */}
      <div
        className={`flex items-center gap-2.5 mb-6 text-[0.7rem] tracking-[0.18em] uppercase text-accent transition-all duration-700 ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
        }`}
        style={{ transitionDelay: '0.05s' }}
      >
        <span
          className="w-1.5 h-1.5 rounded-full bg-accent"
          style={{ animation: 'pulseDot 2s infinite' }}
        />
        Available for internship &amp; junior roles
      </div>

      {/* Main heading */}
      <h1 className="font-display font-extrabold leading-[0.93] tracking-[-0.035em] mb-8"
        style={{ fontSize: 'clamp(3.2rem, 9vw, 8rem)' }}
      >
        {lines.map((line, i) => (
          <span key={i} className="hero-line">
            <span
              className={`hero-word ${mounted ? 'in' : ''} ${i === 1 ? 'text-accent' : dark ? 'text-slate-100' : 'text-slate-900'}`}
              style={{ transitionDelay: delays[i] }}
            >
              {line}
            </span>
          </span>
        ))}
      </h1>

      {/* Description */}
      <p
        className={`max-w-[480px] text-sm leading-[1.9] mb-10 transition-all duration-700 ${
          dark ? 'text-slate-500' : 'text-slate-500'
        } ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        style={{ transitionDelay: '0.72s' }}
      >
        Final-year CE student at LDRP-ITR, Gandhinagar — crafting production-grade MERN
        applications. Clean architecture, responsive UI, and real-world results.
      </p>

      {/* CTA */}
      <div
        className={`flex gap-3 flex-wrap transition-all duration-700 ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
        style={{ transitionDelay: '0.88s' }}
      >
        <a href="#projects" className="btn-primary">View Projects</a>
        <a href="#contact" className="btn-outline" style={{ color: dark ? '#e8e8ec' : '#1e1e1e' }}>
          Get in Touch
        </a>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-10 right-8 md:right-20 flex items-center gap-3 text-[0.65rem] tracking-[0.18em] uppercase text-slate-600 transition-opacity duration-700 ${
          mounted ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transitionDelay: '1.1s' }}
      >
        <div
          className="w-12 h-px"
          style={{
            background: 'linear-gradient(90deg, transparent, #c8f53f)',
            animation: 'scan 2s ease-in-out infinite',
          }}
        />
        Scroll
      </div>

      <style>{`
        @keyframes pulseDot {
          0%,100% { box-shadow: 0 0 0 0 rgba(200,245,63,0.45); }
          50% { box-shadow: 0 0 0 7px rgba(200,245,63,0); }
        }
        @keyframes scan {
          0%,100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
      `}</style>
    </section>
  )
}
