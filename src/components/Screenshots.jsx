import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

// Import the generated screenshots
import dashboardImg from '/screenshots/screenshot_dashboard.png'
import foldersImg from '/screenshots/screenshot_folders.png'
import privacyImg from '/screenshots/screenshot_privacy.png'

const slides = [
  {
    img: dashboardImg,
    title: 'Prioritized Dashboard',
    desc: 'Every notification ranked by urgency. Urgent at the top, spam auto-filtered.',
    tag: 'Dashboard',
  },
  {
    img: foldersImg,
    title: 'Smart Folders',
    desc: 'Notifications auto-sorted into Work, Finance, Social, Health and more.',
    tag: 'Folders',
  },
  {
    img: privacyImg,
    title: 'Privacy Health Score',
    desc: 'Weekly report showing exactly how much spam you blocked and time saved.',
    tag: 'Privacy',
  },
]

const PhoneFrame = ({ img, active }) => (
  <div className={`screenshot-phone-frame ${active ? 'active' : ''}`}>
    <div className="screenshot-phone-inner">
      {/* Notch */}
      <div className="ss-notch" />
      {/* Screen */}
      <div className="ss-screen">
        <img src={img} alt="App screenshot" className="ss-img" />
      </div>
      {/* Home indicator */}
      <div className="ss-home" />
    </div>
    {/* Glow */}
    {active && <div className="ss-glow" />}
  </div>
)

const Screenshots = () => {
  const [active, setActive] = useState(0)
  const intervalRef = useRef(null)

  const startAuto = () => {
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length)
    }, 4000)
  }

  useEffect(() => {
    startAuto()
    return () => clearInterval(intervalRef.current)
  }, [])

  const goTo = (i) => {
    clearInterval(intervalRef.current)
    setActive(i)
    startAuto()
  }

  const prev = () => goTo((active - 1 + slides.length) % slides.length)
  const next = () => goTo((active + 1) % slides.length)

  return (
    <section className="screenshots-section section" id="screenshots">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">📱 App Screenshots</div>
          <h2>See it in action</h2>
          <p>Clean, intuitive, and designed to help you focus on what truly matters.</p>
        </motion.div>

        <div className="screenshots-layout">
          {/* Side phones (prev / next preview) */}
          <div className="ss-side ss-side-left">
            {slides.map((slide, i) => {
              const prevIdx = (active - 1 + slides.length) % slides.length
              if (i !== prevIdx) return null
              return (
                <div key={i} className="ss-side-phone" onClick={prev} style={{ cursor: 'pointer' }}>
                  <PhoneFrame img={slide.img} active={false} />
                </div>
              )
            })}
          </div>

          {/* Main center phone */}
          <div className="ss-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 0.96, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: -20 }}
                transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <PhoneFrame img={slides[active].img} active={true} />
              </motion.div>
            </AnimatePresence>

            {/* Caption */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active + '-caption'}
                className="ss-caption glass-card"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="ss-caption-tag">{slides[active].tag}</div>
                <h3 className="ss-caption-title">{slides[active].title}</h3>
                <p className="ss-caption-desc">{slides[active].desc}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Side phones (next) */}
          <div className="ss-side ss-side-right">
            {slides.map((slide, i) => {
              const nextIdx = (active + 1) % slides.length
              if (i !== nextIdx) return null
              return (
                <div key={i} className="ss-side-phone" onClick={next} style={{ cursor: 'pointer' }}>
                  <PhoneFrame img={slide.img} active={false} />
                </div>
              )
            })}
          </div>
        </div>

        {/* Navigation */}
        <div className="ss-nav">
          <button className="ss-nav-btn" onClick={prev} aria-label="Previous">
            <ChevronLeft size={20} />
          </button>
          <div className="ss-dots">
            {slides.map((_, i) => (
              <button
                key={i}
                className={`ss-dot ${i === active ? 'ss-dot-active' : ''}`}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          <button className="ss-nav-btn" onClick={next} aria-label="Next">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <style>{`
        .screenshots-section { position: relative; }

        .screenshots-layout {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 40px;
          margin-bottom: 40px;
        }

        .ss-side {
          flex: 0 0 auto;
          opacity: 0.35;
          transform: scale(0.78);
          transition: all 0.4s ease;
        }
        .ss-side:hover { opacity: 0.5; }

        .ss-center {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 28px;
          z-index: 2;
        }

        /* Phone frame */
        .screenshot-phone-frame {
          position: relative;
          width: 230px;
          transition: all 0.4s ease;
        }
        .screenshot-phone-frame.active {
          width: 270px;
          filter: drop-shadow(0 40px 60px rgba(0,0,0,0.7));
        }

        .screenshot-phone-inner {
          background: #080808;
          border-radius: 44px;
          border: 1.5px solid rgba(255,255,255,0.15);
          padding: 14px 10px 20px;
          position: relative;
          box-shadow:
            0 0 0 1px rgba(255,255,255,0.04),
            inset 0 1px 0 rgba(255,255,255,0.12);
        }

        .ss-notch {
          width: 80px;
          height: 22px;
          background: #000;
          border-radius: 0 0 14px 14px;
          margin: 0 auto 6px;
          border: 1px solid rgba(255,255,255,0.06);
          border-top: none;
        }

        .ss-screen {
          border-radius: 20px;
          overflow: hidden;
          aspect-ratio: 9/18;
          background: #0a0a0a;
          border: 1px solid rgba(255,255,255,0.05);
        }

        .ss-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
        }

        .ss-home {
          width: 60px;
          height: 3px;
          background: rgba(255,255,255,0.25);
          border-radius: 2px;
          margin: 12px auto 0;
        }

        .ss-glow {
          position: absolute;
          inset: -20px;
          background: radial-gradient(ellipse at 50% 100%, rgba(255,255,255,0.06) 0%, transparent 70%);
          pointer-events: none;
          z-index: -1;
        }

        .ss-caption {
          width: 300px;
          padding: 20px 24px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          text-align: center;
        }
        .ss-caption-tag {
          font-size: 0.75rem;
          font-weight: 600;
          color: rgba(255,255,255,0.45);
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }
        .ss-caption-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: white;
          letter-spacing: -0.02em;
        }
        .ss-caption-desc {
          font-size: 0.875rem;
          color: rgba(255,255,255,0.45);
          line-height: 1.6;
          margin: 0;
        }

        /* Navigation */
        .ss-nav {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
        }
        .ss-nav-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.04);
          color: rgba(255,255,255,0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          backdrop-filter: blur(10px);
        }
        .ss-nav-btn:hover {
          border-color: rgba(255,255,255,0.3);
          color: white;
          background: rgba(255,255,255,0.08);
        }
        .ss-dots {
          display: flex;
          gap: 8px;
          align-items: center;
        }
        .ss-dot {
          width: 6px;
          height: 6px;
          border-radius: 3px;
          background: rgba(255,255,255,0.2);
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .ss-dot-active {
          width: 24px;
          background: rgba(255,255,255,0.8);
        }

        @media (max-width: 768px) {
          .ss-side { display: none; }
          .screenshots-layout { gap: 0; }
          .screenshot-phone-frame.active { width: 240px; }
          .ss-caption { width: 280px; }
        }
      `}</style>
    </section>
  )
}

export default Screenshots
