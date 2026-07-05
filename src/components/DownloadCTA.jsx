import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.notifiqr'



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
          display: flex;
          justify-content: center;
          position: relative;
          z-index: 1;
        }

        .download-text {
          display: flex;
          flex-direction: column;
          gap: 20px;
          align-items: center;
          text-align: center;
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
          max-width: 500px;
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

        @media (max-width: 768px) {
          .download-inner {
            padding: 40px 28px;
          }
        }
      `}</style>
    </section>
  )
}

export default DownloadCTA
