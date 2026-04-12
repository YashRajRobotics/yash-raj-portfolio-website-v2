const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Yash Raj home">
          Yash Raj
        </a>

        <nav className="nav" aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </header>

      <main className="hero" id="home">
        <p className="eyebrow">Portfolio</p>
        <h1>Hi, I&apos;m Yash Raj</h1>
        <p className="subtitle">I build robotics and AI systems.</p>

        <div className="hero-actions">
          <a className="primary-action" href="#projects">
            View projects
          </a>
          <a className="secondary-action" href="#contact">
            Contact me
          </a>
        </div>
      </main>

      <section className="info-grid" aria-label="More information">
        <article id="about" className="info-card">
          <h2>About</h2>
          <p>
            I design practical software, hardware, and AI experiences with a
            focus on clarity and impact.
          </p>
        </article>

        <article id="projects" className="info-card">
          <h2>Projects</h2>
          <p>
            A small collection of robotics prototypes, AI tools, and
            experimental builds.
          </p>
        </article>

        <article id="contact" className="info-card">
          <h2>Contact</h2>
          <p>
            Reach out to collaborate, discuss ideas, or talk about the next
            build.
          </p>
        </article>
      </section>
    </div>
  )
}

export default App
