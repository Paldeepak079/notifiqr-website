import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.notifiqr'

// QR code SVG placeholder (a clean placeholder QR-style pattern)
const QRCode = () => (
  <div className="qr-code-wrap">
    <svg viewBox="0 0 200 200" className="qr-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer frame */}
      <rect width="200" height="200" rx="12" fill="black" />

      {/* Corner squares */}
      <g fill="white">
        {/* Top-left */}
        <rect x="16" y="16" width="52" height="52" rx="8" />
        <rect x="22" y="22" width="40" height="40" rx="5" fill="black" />
        <rect x="30" y="30" width="24" height="24" rx="3" />

        {/* Top-right */}
        <rect x="132" y="16" width="52" height="52" rx="8" />
        <rect x="138" y="22" width="40" height="40" rx="5" fill="black" />
        <rect x="146" y="30" width="24" height="24" rx="3" />

        {/* Bottom-left */}
        <rect x="16" y="132" width="52" height="52" rx="8" />
        <rect x="22" y="138" width="40" height="40" rx="5" fill="black" />
        <rect x="30" y="146" width="24" height="24" rx="3" />
      </g>

      {/* Data pattern - simplified */}
      <g fill="rgba(255,255,255,0.9)">
        <rect x="84" y="16" width="8" height="8" rx="2" />
        <rect x="96" y="16" width="8" height="8" rx="2" />
        <rect x="108" y="16" width="8" height="8" rx="2" />
        <rect x="84" y="28" width="8" height="8" rx="2" />
        <rect x="108" y="28" width="8" height="8" rx="2" />
        <rect x="84" y="40" width="20" height="8" rx="2" />
        <rect x="84" y="52" width="8" height="8" rx="2" />
        <rect x="96" y="52" width="20" height="8" rx="2" />

        <rect x="16" y="84" width="8" height="8" rx="2" />
        <rect x="28" y="84" width="8" height="8" rx="2" />
        <rect x="16" y="96" width="20" height="8" rx="2" />
        <rect x="16" y="108" width="8" height="8" rx="2" />
        <rect x="28" y="108" width="8" height="8" rx="2" />
        <rect x="40" y="84" width="8" height="8" rx="2" />
        <rect x="40" y="96" width="8" height="8" rx="2" />
        <rect x="40" y="108" width="8" height="8" rx="2" />

        {/* Center area */}
        <rect x="84" y="84" width="32" height="8" rx="2" />
        <rect x="84" y="96" width="8" height="8" rx="2" />
        <rect x="108" y="96" width="8" height="8" rx="2" />
        <rect x="84" y="108" width="32" height="8" rx="2" />
        <rect x="96" y="120" width="8" height="8" rx="2" />
        <rect x="108" y="108" width="8" height="20" rx="2" />
        <rect x="120" y="84" width="8" height="32" rx="2" />
        <rect x="132" y="84" width="8" height="8" rx="2" />
        <rect x="144" y="84" width="8" height="8" rx="2" />
        <rect x="156" y="84" width="8" height="8" rx="2" />
        <rect x="132" y="96" width="32" height="8" rx="2" />
        <rect x="132" y="108" width="8" height="8" rx="2" />
        <rect x="148" y="108" width="16" height="8" rx="2" />

        <rect x="16" y="132" width="52" height="8" rx="2" opacity="0" />
        <rect x="84" y="132" width="8" height="8" rx="2" />
        <rect x="96" y="132" width="20" height="8" rx="2" />
        <rect x="84" y="144" width="20" height="8" rx="2" />
        <rect x="108" y="144" width="8" height="8" rx="2" />
        <rect x="84" y="156" width="8" height="8" rx="2" />
        <rect x="96" y="156" width="8" height="8" rx="2" />
        <rect x="108" y="156" width="8" height="8" rx="2" />
        <rect x="120" y="132" width="8" height="8" rx="2" />
        <rect x="132" y="132" width="32" height="8" rx="2" />
        <rect x="144" y="144" width="20" height="8" rx="2" />
        <rect x="120" y="144" width="8" height="20" rx="2" />
        <rect x="132" y="156" width="32" height="8" rx="2" />
        <rect x="156" y="144" width="8" height="20" rx="2" />
      </g>

      {/* Center logo */}
      <rect x="86" y="86" width="28" height="28" rx="6" fill="white" />
      <text x="100" y="105" textAnchor="middle" fill="black" fontSize="14" fontWeight="bold" fontFamily="Space Grotesk">N</text>
    </svg>

    <p className="qr-label">Scan to download</p>
  </div>
)

const DownloadCTA = () => {
  return (
    <section className="download-section section" id="download">
      {/* Background */}
      <div className="download-bg-orb download-bg-orb-1" />
      <div className="download-bg-orb download-bg-orb-2" />

      <div className="container">
        <motion.div
          className="download-card glass-card"
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Top gradient accent */}
          <div className="download-top-gradient" />

          <div className="download-inner">
            {/* Left content */}
            <div className="download-text">
              <div className="section-label" style={{ marginBottom: '24px' }}>📥 Download Now</div>
              <h2 className="download-title">
                Ready to take back<br />control of your day?
              </h2>
              <p className="download-desc">
                Join 10,000+ users who've already silenced the noise.
                Free to download. Premium plans starting at ₹69/month.
              </p>

              {/* Rating bar */}
              <div className="download-rating">
                <div className="download-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="white" color="white" />
                  ))}
                </div>
                <span>4.9 rating · 10,000+ downloads</span>
              </div>

              {/* Play Store Button */}
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="download-play-btn"
              >
                <svg viewBox="0 0 24 24" className="download-play-icon" fill="currentColor">
                  <path d="M3.18 23.76c.33.18.7.24 1.06.18l13.12-11.94-2.82-2.82-11.36 14.58zm17.46-13.7l-2.88-1.64-3.18 2.88 3.18 2.88 2.88-1.64c.82-.47.82-1.61 0-2.08zM4.24.06C3.88 0 3.51.06 3.18.24L14.54 11.6 17.36 8.78 4.24.06zM3.18.24C2.46.65 2 1.42 2 2.3v19.4c0 .88.46 1.65 1.18 2.06L14.54 12.4 3.18.24z" />
                </svg>
                <div className="download-play-text">
                  <span className="download-play-label">Download Free on</span>
                  <span className="download-play-store">Google Play</span>
                </div>
              </a>

              {/* Mini badges */}
              <div className="download-badges">
                {['Android 12+', 'No account needed', 'Free tier forever'].map((b) => (
                  <span key={b} className="download-badge glass-badge">{b}</span>
                ))}
              </div>
            </div>

            {/* Right: QR + visual */}
            <div className="download-right">
              <QRCode />
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .download-section { position: relative; overflow: hidden; }

        .download-bg-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          pointer-events: none;
        }
        .download-bg-orb-1 {
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(255,255,255,0.05), transparent);
          top: -100px; right: -100px;
          animation: orb-float-1 14s ease-in-out infinite;
        }
        .download-bg-orb-2 {
          width: 400px; height: 400px;
          background: radial-gradient(circle, rgba(200,200,255,0.04), transparent);
          bottom: -100px; left: -100px;
          animation: orb-float-2 18s ease-in-out infinite;
        }

        .download-card {
          border-color: rgba(255,255,255,0.15) !important;
          position: relative;
          overflow: hidden;
        }

        .download-top-gradient {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 300px;
          background: radial-gradient(ellipse at 30% 0%, rgba(255,255,255,0.06), transparent 70%);
          pointer-events: none;
        }

        .download-inner {
          padding: 60px;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 80px;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        .download-text {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .download-title {
          font-size: clamp(2rem, 4vw, 2.8rem);
          font-weight: 800;
          color: white;
          letter-spacing: -0.04em;
          line-height: 1.1;
          margin: 0;
        }

        .download-desc {
          font-size: 1rem;
          color: rgba(255,255,255,0.5);
          line-height: 1.65;
          margin: 0;
          max-width: 440px;
        }

        .download-rating {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.85rem;
          color: rgba(255,255,255,0.45);
        }
        .download-stars { display: flex; gap: 2px; }

        .download-play-btn {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          padding: 16px 28px;
          background: white;
          color: black;
          border-radius: 16px;
          text-decoration: none;
          width: fit-content;
          transition: all 0.3s ease;
          box-shadow: 0 0 40px rgba(255,255,255,0.15), 0 8px 32px rgba(0,0,0,0.3);
        }
        .download-play-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 0 60px rgba(255,255,255,0.25), 0 16px 48px rgba(0,0,0,0.4);
        }
        .download-play-icon { width: 28px; height: 28px; flex-shrink: 0; }
        .download-play-text { display: flex; flex-direction: column; }
        .download-play-label { font-size: 0.65rem; font-weight: 500; text-transform: uppercase; letter-spacing: 0.06em; opacity: 0.7; }
        .download-play-store { font-size: 1.1rem; font-weight: 700; font-family: 'Space Grotesk', sans-serif; letter-spacing: -0.02em; }

        .download-badges {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }
        .download-badge {
          font-size: 0.75rem;
        }

        /* QR */
        .download-right {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .qr-code-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }

        .qr-svg {
          width: 160px;
          height: 160px;
          border-radius: 16px;
          border: 1px solid rgba(255,255,255,0.15);
          box-shadow: 0 0 40px rgba(255,255,255,0.06), 0 20px 60px rgba(0,0,0,0.5);
        }

        .qr-label {
          font-size: 0.75rem;
          color: rgba(255,255,255,0.3);
          text-align: center;
          margin: 0;
        }

        @media (max-width: 768px) {
          .download-inner {
            grid-template-columns: 1fr;
            padding: 40px 28px;
            gap: 40px;
          }
          .download-right { order: -1; }
          .qr-svg { width: 120px; height: 120px; }
        }
      `}</style>
    </section>
  )
}

export default DownloadCTA
