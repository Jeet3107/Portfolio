import { useState, useEffect } from 'react'
import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

function useReveal() {
  useEffect(() => {
    const observe = () => {
      const els = document.querySelectorAll('.reveal')
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add('visible')
              obs.unobserve(e.target)
            }
          })
        },
        { threshold: 0.08 }
      )
      els.forEach((el) => obs.observe(el))
      return obs
    }

    const obs = observe()
    return () => obs.disconnect()
  })
}

export default function App() {
  const [dark, setDark] = useState(true)
  useReveal()

  const toggleDark = () => setDark((d) => !d)

  return (
    <div
      className={dark ? 'bg-[#09090b] text-slate-100' : 'bg-white text-slate-900'}
      style={{ minHeight: '100vh', transition: 'background 0.35s ease, color 0.35s ease' }}
    >
      <Cursor />
      <Navbar dark={dark} toggleDark={toggleDark} />

      <main>
        <Hero dark={dark} />
        <About dark={dark} />
        <Skills dark={dark} />
        <Projects dark={dark} />
        <Education dark={dark} />
        <Contact dark={dark} />
      </main>

      <Footer dark={dark} />
    </div>
  )
}
