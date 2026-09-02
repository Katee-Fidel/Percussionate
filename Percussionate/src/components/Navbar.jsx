import { useEffect, useState } from 'react'
import { artist, navLinks } from '../data/content'
import { useActiveSection } from '../hooks/useActivSection'


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const activeId = useActiveSection(['home', ...navLinks.map((l) => l.id)])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMobile = () => setMobileOpen(false)

  return (
    <>
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <a href="#home" className="nav-logo" style={
          artist.logo
          ? {backgroundImage: `url(${artist.logo})`, backgroundSize: 'cover', backgroundPosition: 'center'}
          : undefined

        }>
        </a>

        <nav className="nav-links">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`nav-link ${activeId === link.id ? 'active' : ''}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="nav-cta">
          Book Now
        </a>

        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          ☰
        </button>
      </header>

      <div className={`mobile-panel ${mobileOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <a key={link.id} href={`#${link.id}`} onClick={closeMobile}>
            {link.label}
          </a>
        ))}
        <a href="#contact" className="nav-cta" style={{ textAlign: 'center' }} onClick={closeMobile}>
          Book Now
        </a>
      </div>
    </>
  )
}
