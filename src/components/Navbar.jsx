import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ dark, toggleDark }) {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      const sections = document.querySelectorAll('section[id]')
      let cur = ''
      sections.forEach((s) => {
        if (window.scrollY >= s.offsetTop - 180) cur = s.id
      })
      setActive(cur)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const base = dark
    ? 'fixed top-0 left-0 right-0 z-[500] flex items-center justify-between px-8 md:px-20 py-5 transition-all duration-300'
    : 'fixed top-0 left-0 right-0 z-[500] flex items-center justify-between px-8 md:px-20 py-5 transition-all duration-300'

  const scrolledStyle = scrolled
    ? dark
      ? 'bg-[#09090b]/90 backdrop-blur-xl border-b border-[#1c1c24]'
      : 'bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-sm'
    : ''

  return (
    <>
      <nav className={`${base} ${scrolledStyle}`}>
        {/* Logo */}
        <a href="#hero" className="font-display font-extrabold text-lg tracking-widest text-accent">
          JP_
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`text-[0.68rem] tracking-[0.15em] uppercase transition-colors duration-200 ${
                  active === l.href.slice(1)
                    ? 'text-accent'
                    : dark ? 'text-slate-500 hover:text-accent' : 'text-slate-400 hover:text-slate-900'
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          {/* Dark mode toggle */}
          <button
            onClick={toggleDark}
            aria-label="Toggle dark mode"
            className={`w-10 h-5 rounded-full relative transition-colors duration-300 focus:outline-none ${
              dark ? 'bg-accent' : 'bg-slate-300'
            }`}
          >
            <span
              className={`absolute top-0.5 w-4 h-4 rounded-full transition-all duration-300 ${
                dark ? 'left-5 bg-[#09090b]' : 'left-0.5 bg-white'
              }`}
            />
          </button>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span className={`block w-5 h-px transition-all duration-300 ${dark ? 'bg-slate-100' : 'bg-slate-800'} ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-px transition-all duration-300 ${dark ? 'bg-slate-100' : 'bg-slate-800'} ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-px transition-all duration-300 ${dark ? 'bg-slate-100' : 'bg-slate-800'} ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className={`fixed inset-0 z-[490] pt-20 px-8 ${dark ? 'bg-[#09090b]' : 'bg-white'}`}>
          <ul className="flex flex-col gap-6 mt-8">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className={`font-display font-bold text-3xl tracking-tight ${
                    dark ? 'text-slate-100 hover:text-accent' : 'text-slate-900 hover:text-accent'
                  } transition-colors`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}
