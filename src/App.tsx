import { useState, useRef, useEffect } from 'react'
import backgroundImage from '../img/image_background.jpg'
import personalImage from '../img/image_personal.jpg'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { FiMail, FiChevronDown } from 'react-icons/fi'
import SectionNav from './SectionNav'

const SECTIONS = [
  { id: 'home', label: 'Intro' },
  { id: 'about', label: 'About me' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

function App() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false)
      }
    }

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isDropdownOpen])

  const handleSectionClick = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsDropdownOpen(false)
    }
  }

  return (
    <div className="page-shell">
      <SectionNav />
      <header className="topbar">
        <div className="brand-dropdown" ref={dropdownRef}>
          <button
            className="brand"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            aria-label="Yash Raj - expand navigation"
            aria-expanded={isDropdownOpen}
          >
            Yash Raj
            <FiChevronDown className="brand-arrow" size={16} aria-hidden="true" />
          </button>
          {isDropdownOpen && (
            <div className="dropdown-menu" role="menu">
              {SECTIONS.map((section) => (
                <button
                  key={section.id}
                  className="dropdown-item"
                  onClick={() => handleSectionClick(section.id)}
                  role="menuitem"
                >
                  {section.label}
                </button>
              ))}
            </div>
          )}
        </div>

        <nav className="nav" aria-label="Primary">
          <a
            className="nav-icon-button"
            href="https://github.com/YashRajRobotics"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub size={22} />
          </a>
          <a
            className="nav-icon-button"
            href="https://www.linkedin.com/in/yash-raj-rwth/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={22} />
          </a>
          <a
            className="nav-icon-button"
            href="mailto:mailyashofficially@gmail.com"
            aria-label="Email"
          >
            <FiMail size={22} />
          </a>
        </nav>
      </header>

      <main className="next-page-content" id="home">
        <section className="landing-first-page" aria-label="Hero section">
          <div className="hero-rectangle">
            <img
              className="hero-background-image"
              src={backgroundImage}
              alt="Background"
            />
          </div>

          <div className="hero-bottom-line" aria-hidden="true">
            <div className="profile-circle">
              <img src={personalImage} alt="Yash Raj" />
            </div>
          </div>

          <div className="hero-lower-content">
            <div className="landing-actions">
              <a className="primary-action" href="#projects">
                View projects
              </a>
              <a className="secondary-action" href="#contact">
                Contact me
              </a>
            </div>

            <div className="identity-block">
              <h1>YASH RAJ</h1>
              <div className="college-row">
                <span>Data Scientist</span>
              </div>
            </div>
          </div>
        </section>

        <div className="section-divider" aria-hidden="true" />

        <section className="second-page-content" aria-label="More information">
          <main className="hero">
            <p className="eyebrow">Portfolio</p>
            <h2>Hi, I&apos;m Yash Raj</h2>
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

          <section className="info-grid" aria-label="Cards">
            <article id="about" className="info-card">
              <h3>About</h3>
              <p>
                I design practical software, hardware, and AI experiences with
                a focus on clarity and impact.
              </p>
            </article>

            <article id="projects" className="info-card">
              <h3>Projects</h3>
              <p>
                A small collection of robotics prototypes, AI tools, and
                experimental builds.
              </p>
            </article>

            <article id="contact" className="info-card">
              <h3>Contact</h3>
              <p>
                Reach out to collaborate, discuss ideas, or talk about the next
                build.
              </p>
            </article>
          </section>
        </section>
      </main>
    </div>
  )
}

export default App
