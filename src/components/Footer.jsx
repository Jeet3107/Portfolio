export default function Footer({ dark }) {
  return (
    <footer className={`px-8 md:px-20 py-6 border-t ${dark ? 'border-[#1c1c24]' : 'border-slate-200'} flex flex-wrap justify-between items-center gap-4`}>
      <span className={`text-[0.68rem] tracking-wider ${dark ? 'text-slate-600' : 'text-slate-400'}`}>
        © 2026 Jeet Prajapati. All rights reserved.
      </span>
      <a
        href="#hero"
        className={`text-[0.68rem] tracking-[0.12em] uppercase transition-colors ${dark ? 'text-slate-600 hover:text-accent' : 'text-slate-400 hover:text-slate-900'}`}
      >
        Back to top ↑
      </a>
    </footer>
  )
}
