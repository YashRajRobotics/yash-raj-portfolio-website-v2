import { useState, useEffect } from 'react'

interface Section {
  id: string
  label: string
}

const SECTIONS: Section[] = [
  { id: 'home', label: 'Intro' },
  { id: 'about', label: 'About Me' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

function SectionNav() {
  const [currentSection, setCurrentSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = SECTIONS.map((section) => {
        const element = document.getElementById(section.id)
        if (!element) return null

        const rect = element.getBoundingClientRect()
        return {
          id: section.id,
          distance: Math.abs(rect.top),
        }
      }).filter(Boolean) as Array<{ id: string; distance: number }>

      if (sections.length > 0) {
        const closest = sections.reduce((prev, current) =>
          current.distance < prev.distance ? current : prev
        )
        setCurrentSection(closest.id)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSectionClick = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setCurrentSection(sectionId)
    }
  }

  return (
    <nav
      className="section-nav"
      role="navigation"
      aria-label="Section navigation"
    >
      <ul className="section-nav-list">
        {SECTIONS.map((section) => (
          <li key={section.id} className="section-nav-item">
            <button
              className={`section-nav-line ${
                currentSection === section.id ? 'active' : ''
              }`}
              onClick={() => handleSectionClick(section.id)}
              aria-current={currentSection === section.id ? 'page' : undefined}
              aria-label={`Go to ${section.label}`}
            >
              <span className="section-label">{section.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default SectionNav
