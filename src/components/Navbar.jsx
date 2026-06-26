import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Bell } from 'lucide-react'

const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.notifiqr'

const navLinks = [
  { label: 'Features', href: '/#features' },
  { label: 'Screenshots', href: '/#screenshots' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Contact', href: '/#contact' },
]

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  const handleNavClick = (href) => {
    setMenuOpen(false)
    if (href.startsWith('/#')) {
      const id = href.slice(2)
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <>
      <motion.nav
        className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="navbar-inner">
          {/* Logo */}
          <Link to="/" className="navbar-logo">
            <div className="navbar-logo-icon">
              <Bell size={18} strokeWidth={2.5} />
            </div>
            <span className="navbar-logo-text">Notifiqr</span>
          </Link>

          {/* Desktop Links */}
          <ul className="navbar-links">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="navbar-link"
                  onClick={(e) => {
                    if (link.href.startsWith('/#')) {
                      e.preventDefault()
                      handleNavClick(link.href)
                    }
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="navbar-actions">
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary navbar-cta"
            >
              Get Premium
            </a>
            <button
              className="navbar-hamburger"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <ul className="mobile-menu-links">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <a
                    href={link.href}
                    className="mobile-menu-link"
                    onClick={(e) => {
                      if (link.href.startsWith('/#')) {
                        e.preventDefault()
                        handleNavClick(link.href)
                      }
                    }}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
              >
                <a
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ width: '100%', marginTop: '12px' }}
                >
                  Get Premium ✨
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 20px 0;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .navbar-scrolled {
          padding: 12px 0;
          background: rgba(0,0,0,0.7);
          backdrop-filter: blur(40px) saturate(150%);
          -webkit-backdrop-filter: blur(40px) saturate(150%);
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        .navbar-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
        }
        .navbar-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          flex-shrink: 0;
        }
        .navbar-logo-icon {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }
        .navbar-logo-text {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: 1.2rem;
          color: white;
          letter-spacing: -0.03em;
        }
        .navbar-links {
          display: flex;
          align-items: center;
          gap: 4px;
          list-style: none;
          flex: 1;
          justify-content: center;
        }
        .navbar-link {
          padding: 8px 16px;
          border-radius: 10px;
          color: rgba(255,255,255,0.65);
          font-size: 0.9rem;
          font-weight: 500;
          transition: all 0.2s ease;
          text-decoration: none;
          cursor: pointer;
        }
        .navbar-link:hover {
          color: white;
          background: rgba(255,255,255,0.07);
        }
        .navbar-actions {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
        }
        .navbar-cta {
          padding: 10px 20px;
          font-size: 0.875rem;
        }
        .navbar-hamburger {
          display: none;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 10px;
          padding: 8px;
          color: white;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .navbar-hamburger:hover {
          background: rgba(255,255,255,0.12);
        }
        .mobile-menu {
          position: fixed;
          top: 72px;
          left: 16px;
          right: 16px;
          z-index: 999;
          background: rgba(8,8,8,0.95);
          backdrop-filter: blur(40px);
          -webkit-backdrop-filter: blur(40px);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 20px;
          padding: 20px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.6);
        }
        .mobile-menu-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .mobile-menu-link {
          display: block;
          padding: 12px 16px;
          border-radius: 12px;
          color: rgba(255,255,255,0.8);
          font-size: 1rem;
          font-weight: 500;
          transition: all 0.2s ease;
          text-decoration: none;
        }
        .mobile-menu-link:hover {
          background: rgba(255,255,255,0.07);
          color: white;
        }
        @media (max-width: 768px) {
          .navbar-links { display: none; }
          .navbar-cta { display: none; }
          .navbar-hamburger { display: flex; }
        }
      `}</style>
    </>
  )
}

export default Navbar
