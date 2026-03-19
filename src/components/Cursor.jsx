import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dot = useRef(null)
  const ring = useRef(null)
  const mouse = useRef({ x: 0, y: 0 })
  const ringPos = useRef({ x: 0, y: 0 })
  const raf = useRef(null)

  useEffect(() => {
    const onMove = (e) => { mouse.current = { x: e.clientX, y: e.clientY } }

    const onEnter = () => {
      dot.current?.classList.add('hovered')
      ring.current?.classList.add('hovered')
    }
    const onLeave = () => {
      dot.current?.classList.remove('hovered')
      ring.current?.classList.remove('hovered')
    }

    document.addEventListener('mousemove', onMove)

    const attachHover = () => {
      document.querySelectorAll('a, button, [data-hover]').forEach(el => {
        el.addEventListener('mouseenter', onEnter)
        el.addEventListener('mouseleave', onLeave)
      })
    }
    attachHover()
    const mo = new MutationObserver(attachHover)
    mo.observe(document.body, { childList: true, subtree: true })

    const animate = () => {
      if (dot.current) {
        dot.current.style.left = mouse.current.x + 'px'
        dot.current.style.top = mouse.current.y + 'px'
      }
      ringPos.current.x += (mouse.current.x - ringPos.current.x) * 0.11
      ringPos.current.y += (mouse.current.y - ringPos.current.y) * 0.11
      if (ring.current) {
        ring.current.style.left = ringPos.current.x + 'px'
        ring.current.style.top = ringPos.current.y + 'px'
      }
      raf.current = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf.current)
      mo.disconnect()
    }
  }, [])

  return (
    <>
      <div
        ref={dot}
        style={{ position: 'fixed', width: 10, height: 10, background: '#c8f53f', borderRadius: '50%',
          pointerEvents: 'none', zIndex: 9999, transform: 'translate(-50%,-50%)',
          transition: 'transform 0.12s ease' }}
        className="cursor-dot"
      />
      <div
        ref={ring}
        style={{ position: 'fixed', width: 34, height: 34, border: '1.5px solid #c8f53f',
          borderRadius: '50%', pointerEvents: 'none', zIndex: 9998,
          transform: 'translate(-50%,-50%)', opacity: 0.4,
          transition: 'all 0.28s cubic-bezier(0.16,1,0.3,1)' }}
        className="cursor-ring"
      />
    </>
  )
}
