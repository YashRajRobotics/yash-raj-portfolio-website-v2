import backgroundImage from '../img/image_background.jpg'
import personalImage from '../img/image_personal.jpg'
import rwthLogo from '../img/RWTH Aachen.jpg'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'

function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Yash Raj home">
          Yash Raj
        </a>

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
                <img src={rwthLogo} alt="RWTH Aachen logo" />
                <span>RWTH Aachen</span>
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
