const PROJECTS = [
  {
    num: "01",
    title: "Inventory Management System",
    desc: "Production-grade full-stack MERN inventory platform with JWT authentication and role-based access control (Admin, Manager, Staff). Features complete product CRUD, SKU tracking, dynamic pricing, stock management, category management, and automated low-stock alerts. Analytics dashboard with real-time statistics and interactive charts (Recharts). RESTful API with 11+ endpoints.",
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Recharts",
      "React Router v6",
    ],
    github: "https://github.com/Jeet3107/Inventory-Management",
    live: null,
  },
  {
    num: "02",
    title: "Full-Stack E-Commerce App-ShopEase",
    desc: "Scalable e-commerce platform with product listings, cart management, order tracking, and a dedicated admin dashboard. JWT-based auth with role-based access control. MongoDB Atlas for cloud-hosted, high-availability data. Mobile-responsive UI built with Tailwind CSS and a consistent component library.",
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB Atlas",
      "Tailwind CSS",
      "JWT",
    ],
    github: "https://github.com/Jeet3107/E-commerce---ShopEase",
    live: null,
  },
  {
    num: "03",
    title: "Personal Portfolio Website",
    desc: "Fully responsive personal portfolio with smooth scroll animations, dark mode toggle, and live project and GitHub links. Focused on performance and accessibility, achieving a mobile-first layout compatible with all major browsers.",
    tags: ["React.js", "Tailwind CSS", "JavaScript", "Vite"],
    github: "https://github.com/Jeet3107/Portfolio",
    live: https://portfolio-theta-lake-97.vercel.app/,
  },
];

const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const ExternalIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
  </svg>
);

export default function Projects({ dark }) {
  const border = dark ? "border-[#1c1c24]" : "border-slate-200";
  const cardBg = dark
    ? "bg-[#111116] hover:bg-[#13131a]"
    : "bg-white hover:bg-slate-50 border border-slate-200";
  const muted = dark ? "text-slate-500" : "text-slate-500";
  const heading = dark ? "text-slate-100" : "text-slate-900";
  const numColor = dark ? "text-[#1c1c24]" : "text-slate-200";
  const linkColor = dark
    ? "text-slate-500 hover:text-accent"
    : "text-slate-400 hover:text-slate-900";

  return (
    <section id="projects" className={`px-8 md:px-20 py-24 border-t ${border}`}>
      <div className="section-label">Selected Work</div>
      <h2
        className={`reveal font-display font-extrabold text-3xl md:text-5xl tracking-tight mb-10 ${heading}`}
      >
        Projects.
      </h2>

      <div
        className={`reveal flex flex-col gap-px ${dark ? "bg-[#1c1c24]" : "bg-slate-200"}`}
      >
        {PROJECTS.map((p, i) => (
          <div
            key={p.num}
            className={`${cardBg} relative overflow-hidden transition-all duration-200 group`}
            style={{ transitionDelay: `${i * 50}ms` }}
          >
            {/* Left accent bar */}
            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

            <div className="p-8 md:p-10 grid md:grid-cols-[1fr_auto] gap-6 items-start">
              <div>
                <div
                  className={`font-display font-extrabold text-5xl leading-none mb-4 ${numColor}`}
                >
                  {p.num}
                </div>
                <h3
                  className={`font-display font-bold text-xl md:text-2xl tracking-tight mb-4 ${heading}`}
                >
                  {p.title}
                </h3>
                <p className={`${muted} text-sm leading-[1.85] mb-6 max-w-2xl`}>
                  {p.desc}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span key={t} className="tech-tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex md:flex-col gap-3 items-start">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 text-[0.7rem] tracking-[0.1em] uppercase transition-colors duration-200 ${linkColor}`}
                >
                  <GithubIcon /> GitHub
                </a>
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 text-[0.7rem] tracking-[0.1em] uppercase transition-colors duration-200 ${linkColor}`}
                  >
                    <ExternalIcon /> Live
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
