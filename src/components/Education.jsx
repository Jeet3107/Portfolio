import { useState } from 'react'

const education = [
  { degree: 'B.E. Computer Engineering', school: 'LDRP-ITR, Gandhinagar', year: '2022 – 2026', score: 'CPI: 7.0 (ongoing)', doc: null },
  { degree: 'HSC — Class XII (Science)', school: 'Gujarat Board', year: '2022', score: '57.92% · 370/650', doc: { type: 'image', src: '/marksheet_12th.jpg', label: '12th Marksheet' } },
  { degree: 'SSC — Class X', school: 'Gujarat Board', year: '2020', score: '75.5%', doc: null },
]

const certifications = [
  {
    title: 'Python for Data Science',
    issuer: 'NPTEL – IIT Madras',
    date: 'Jan–Feb 2025',
    score: '70% · Elite',
    id: 'NPTEL25CS60S434700329',
    doc: { type: 'pdf', src: '/nptel_certificate.pdf', label: 'NPTEL Certificate' },
  },
]

const EyeIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
)

const DownloadIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
  </svg>
)

const CloseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
)

function DocModal({ doc, onClose }) {
  return (
    <div
      className="fixed inset-0 bg-black/85 backdrop-blur-md z-[600] flex items-center justify-center p-4"
      onClick={onClose}
      style={{ animation: 'fadeIn 0.2s ease forwards' }}
    >
      <div
        className="relative bg-[#111116] border border-[#1c1c24] max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-[#1c1c24]">
          <span className="text-[0.7rem] tracking-[0.15em] uppercase text-slate-400">{doc.label}</span>
          <div className="flex items-center gap-3">
            <a
              href={doc.src}
              download
              className="flex items-center gap-1.5 text-[0.68rem] tracking-wider uppercase text-slate-500 hover:text-accent transition-colors"
            >
              <DownloadIcon /> Download
            </a>
            <button onClick={onClose} className="text-slate-500 hover:text-slate-200 transition-colors">
              <CloseIcon />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="overflow-auto flex-1 bg-[#0d0d10]">
          {doc.type === 'image' ? (
            <img src={doc.src} alt={doc.label} className="w-full h-auto" />
          ) : (
            <iframe
              src={doc.src}
              title={doc.label}
              className="w-full"
              style={{ height: '75vh', border: 'none' }}
            />
          )}
        </div>
      </div>
      <style>{`@keyframes fadeIn { from { opacity:0 } to { opacity:1 } }`}</style>
    </div>
  )
}

export default function Education({ dark }) {
  const [modal, setModal] = useState(null)
  const border = dark ? 'border-[#1c1c24]' : 'border-slate-200'
  const rowBg = dark ? 'bg-[#111116] hover:bg-[#18181f]' : 'bg-white hover:bg-slate-50 border-b border-slate-100'
  const heading = dark ? 'text-slate-100' : 'text-slate-900'
  const muted = dark ? 'text-slate-500' : 'text-slate-500'
  const divLine = dark ? 'bg-[#1c1c24]' : 'bg-slate-200'

  return (
    <>
      <section id="education" className={`px-8 md:px-20 py-24 border-t ${border} ${dark ? 'bg-[#0f0f12]' : 'bg-slate-50'}`}>
        {/* Education */}
        <div className="section-label">Education</div>
        <h2 className={`reveal font-display font-extrabold text-3xl md:text-5xl tracking-tight mb-8 ${heading}`}>
          Academic Background.
        </h2>
        <div className={`reveal flex flex-col gap-px ${divLine} mb-16`}>
          {education.map((e) => (
            <div
              key={e.degree}
              className={`${rowBg} flex flex-wrap items-center justify-between gap-4 px-6 py-5 transition-colors duration-200`}
            >
              <div>
                <div className={`font-display font-bold text-base ${heading}`}>{e.degree}</div>
                <div className={`text-xs mt-0.5 ${muted}`}>{e.school}</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <div className="text-[0.7rem] tracking-wider text-accent">{e.year}</div>
                  <div className={`text-xs mt-0.5 ${muted}`}>{e.score}</div>
                </div>
                {e.doc && (
                  <button
                    onClick={() => setModal(e.doc)}
                    className={`flex items-center gap-1.5 text-[0.68rem] tracking-wider uppercase transition-colors ${muted} hover:text-accent`}
                  >
                    <EyeIcon /> View
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="section-label">Certifications</div>
        <h2 className={`reveal font-display font-extrabold text-3xl md:text-4xl tracking-tight mb-8 ${heading}`}>
          Certificates.
        </h2>
        <div className={`reveal flex flex-col gap-px ${divLine}`}>
          {certifications.map((c) => (
            <div
              key={c.title}
              className={`${rowBg} flex flex-wrap items-center justify-between gap-4 px-6 py-5 transition-colors duration-200`}
            >
              <div>
                <div className={`font-display font-bold text-base ${heading}`}>{c.title}</div>
                <div className={`text-xs mt-0.5 ${muted}`}>{c.issuer} · ID: {c.id}</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <div className="text-[0.7rem] tracking-wider text-accent2">{c.date}</div>
                  <div className={`text-xs mt-0.5 ${muted}`}>{c.score}</div>
                </div>
                {c.doc && (
                  <button
                    onClick={() => setModal(c.doc)}
                    className={`flex items-center gap-1.5 text-[0.68rem] tracking-wider uppercase transition-colors ${muted} hover:text-accent`}
                  >
                    <EyeIcon /> View
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {modal && <DocModal doc={modal} onClose={() => setModal(null)} />}
    </>
  )
}
