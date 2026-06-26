import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Bell, Mail } from 'lucide-react'

const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.notifiqr'

const scrollToSection = (id) => {
  setTimeout(() => {
    const el = document.getElementById(id)
    if (el) {
      const navbarHeight = 80
      const top = el.getBoundingClientRect().top + window.scrollY - navbarHeight
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }, 80)
}

const Footer = () => {
  const year = new Date().getFullYear()
  const location = useLocation()
  const navigate = useNavigate()

  const handleSectionClick = (id) => {
    if (location.pathname === '/') {
      scrollToSection(id)
    } else {
      navigate('/')
      sessionStorage.setItem('scrollTo', id)
    }
  }

  return (
    <footer className="footer">
      <div className="footer-top glass-divider" />

      <div className="container">
        <div className="footer-inner">
          {/* Brand */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <div className="footer-logo-icon">
                <Bell size={16} strokeWidth={2.5} />
              </div>
              <span className="footer-logo-text">Notifiqr</span>
            </Link>
            <p className="footer-tagline">
              Your notifications, intelligently organized. Only what matters.
            </p>
            {/* Social */}
            <div className="footer-socials">
              <a
                href="https://twitter.com/notifiqrapp"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social"
                aria-label="Twitter"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://instagram.com/notifiqr"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social"
                aria-label="Instagram"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                </svg>
              </a>
              <a
                href="mailto:notifiqr.app@gmail.com"
                className="footer-social"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Product links */}
          <div className="footer-col">
            <div className="footer-col-title">Product</div>
            <ul className="footer-links">
              <li><button onClick={() => handleSectionClick('features')} className="footer-link">Features</button></li>
              <li><button onClick={() => handleSectionClick('screenshots')} className="footer-link">Screenshots</button></li>
              <li><button onClick={() => handleSectionClick('pricing')} className="footer-link">Pricing</button></li>
              <li><button onClick={() => handleSectionClick('how-it-works')} className="footer-link">How It Works</button></li>
              <li>
                <a
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  Download App ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="footer-col">
            <div className="footer-col-title">Support</div>
            <ul className="footer-links">
              <li><button onClick={() => handleSectionClick('faq')} className="footer-link">FAQ</button></li>
              <li><button onClick={() => handleSectionClick('contact')} className="footer-link">Contact Us</button></li>
              <li>
                <a
                  href="mailto:notifiqr.app@gmail.com?subject=Bug Report — Notifiqr"
                  className="footer-link"
                >
                  Report a Bug
                </a>
              </li>
              <li>
                <a href="mailto:notifiqr.app@gmail.com" className="footer-link">
                  notifiqr.app@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="footer-col">
            <div className="footer-col-title">Legal</div>
            <ul className="footer-links">
              <li><Link to="/privacy" className="footer-link">Privacy Policy</Link></li>
              <li><Link to="/terms" className="footer-link">Terms of Service</Link></li>
              <li><Link to="/refund" className="footer-link">Refund Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <div className="glass-divider" style={{ marginBottom: '24px' }} />
          <div className="footer-bottom-inner">
            <p className="footer-copyright">
              © {year} Notifiqr. All rights reserved.
            </p>
            <p className="footer-made">
              Made with ❤️ in India · Privacy-first Android app
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .footer {
          padding: 80px 0 0;
          position: relative;
        }
        .footer-top {
          margin-bottom: 0;
        }
        .footer-inner {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 48px;
          padding: 60px 0 48px;
        }
        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .footer-logo {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          width: fit-content;
        }
        .footer-logo-icon {
          width: 32px;
          height: 32px;
          border-radius: 9px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }
        .footer-logo-text {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: 1.1rem;
          color: white;
          letter-spacing: -0.03em;
        }
        .footer-tagline {
          font-size: 0.85rem;
          color: rgba(255,255,255,0.35);
          line-height: 1.6;
          margin: 0;
          max-width: 240px;
        }
        .footer-socials {
          display: flex;
          gap: 10px;
        }
        .footer-social {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.5);
          transition: all 0.2s ease;
          text-decoration: none;
        }
        .footer-social:hover {
          background: rgba(255,255,255,0.1);
          color: white;
          border-color: rgba(255,255,255,0.2);
          transform: translateY(-2px);
        }

        .footer-col { display: flex; flex-direction: column; gap: 16px; }
        .footer-col-title {
          font-size: 0.75rem;
          font-weight: 700;
          color: rgba(255,255,255,0.4);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }
        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .footer-link {
          font-size: 0.875rem;
          color: rgba(255,255,255,0.45);
          text-decoration: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          text-align: left;
          font-family: inherit;
          transition: color 0.2s ease;
        }
        .footer-link:hover { color: rgba(255,255,255,0.85); }

        .footer-bottom { padding-bottom: 36px; }
        .footer-bottom-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
        }
        .footer-copyright {
          font-size: 0.8rem;
          color: rgba(255,255,255,0.25);
          margin: 0;
        }
        .footer-made {
          font-size: 0.8rem;
          color: rgba(255,255,255,0.2);
          margin: 0;
        }

        @media (max-width: 900px) {
          .footer-inner {
            grid-template-columns: 1fr 1fr;
            gap: 36px;
          }
          .footer-brand { grid-column: 1 / -1; }
        }
        @media (max-width: 580px) {
          .footer-inner { grid-template-columns: 1fr; }
        }
      `}</style>
    </footer>
  )
}

export default Footer
