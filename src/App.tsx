import { useState, useRef, useEffect } from 'react'
import backgroundImage from '../img/image_background.jpg'
import personalImage from '../img/image_personal.jpg'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { FiMail, FiChevronDown } from 'react-icons/fi'
import SectionNav from './SectionNav'

const SECTIONS = [
  { id: 'home', label: 'Intro' },
  { id: 'about', label: 'About Me' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

type AboutCard = {
  id?: string
  title: string
  description: string
  linkText?: string
  linkHref?: string
  descriptionSuffix?: string
}

const ABOUT_CARDS: AboutCard[] = [
  {
    id: 'about-card',
    title: 'About Me',
    description:
      'I am an AI Engineer specializing in Computer Vision and NLP, building end-to-end intelligent systems from research to production.',
  },
  {
    id: 'projects',
    title: 'Work Impact',
    description:
      'I have worked for 3+ years as a Data Scientist delivering ~$30M impact through ML systems improving revenue and customer experience.',
  },
  {
    id: 'contact',
    title: 'Technical Depth',
    description:
      'I have expertise in domains like Computer Vision, NLP and Time Series, deploying end-to-end ML pipelines in production.',
  },
  {
    title: 'Origin Story',
    description:
      'I started an NGO named BLISS, providing free eye checkups to 20,000+ underprivileged students (till date). This inspired me to build accessible Computer Vision solutions for children across the world, where over 1.4 million children suffer from partial or complete blindness, and hundreds of millions still lack access to basic eye care and early diagnosis.',
  },
  {
    title: 'Beyond Academics',
    description:
      'I am part of a 1500+ member AI lab where I actively contribute to their projects, and I have delivered 2 technical seminars. I have published 2 research papers, and secured top global ranks across multiple international hackathons.',
  },
  {
    title: 'Hobbies',
    description:
      'In my free time, I express my creativity through drawing, bringing my imagination to life on the canvas. Feel free to explore my art on ',
    linkText: 'Instagram (@ nth_dimension_artist)',
    linkHref: 'https://www.instagram.com/nth_dimension_artist/',
    descriptionSuffix: '.',
  },
]

function App() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isAboutExpanded, setIsAboutExpanded] = useState(false)
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
          <div
            className="hero-rectangle"
            style={{ backgroundImage: `url(${backgroundImage})` }}
            aria-label="Background"
          />

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

        <section
          id="about"
          className="second-page-content"
          aria-label="More information"
        >
          <main className="hero">
            <p className="eyebrow">My Professional Summary</p>
            <h2>Hi, I&apos;m Yash</h2>
            <p className="subtitle">I'm a Data Scientist building AI solutions to solve real-world problems.</p>

            <div className="hero-actions">
              <a className="primary-action" href="https://www.linkedin.com/in/yash-raj-rwth/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a className="secondary-action" href="#contact">
                My Blog
              </a>
            </div>
          </main>

          <section className="info-grid" aria-label="Cards">
            {ABOUT_CARDS.slice(0, isAboutExpanded ? ABOUT_CARDS.length : 3).map(
              (card) => (
                <article
                  key={card.title}
                  id={card.id}
                  className="info-card"
                >
                  <h3>{card.title}</h3>
                  <p>
                    {card.description}
                    {card.linkText && card.linkHref && (
                      <a
                        className="inline-card-link"
                        href={card.linkHref}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {card.linkText}
                      </a>
                    )}
                    {card.descriptionSuffix}
                  </p>
                </article>
              )
            )}
          </section>

          <div className="info-grid-header">
            <button
              type="button"
              className="know-more-button"
              onClick={() => setIsAboutExpanded((prev) => !prev)}
            >
              {isAboutExpanded ? 'Show less' : 'Know more'}
            </button>
          </div>

          <div className="about-section-end-line" aria-hidden="true" />
        </section>
      </main>
    </div>
  )
}

export default App
