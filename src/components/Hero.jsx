import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Star } from 'lucide-react'

const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.notifiqr'

const FloatingOrbs = () => (
  <div className="hero-orbs" aria-hidden="true">
    <div className="hero-orb hero-orb-1" />
    <div className="hero-orb hero-orb-2" />
    <div className="hero-orb hero-orb-3" />
    <div className="hero-orb hero-orb-4" />
    <div className="hero-orb hero-orb-5" />
  </div>
)

const PhoneMockup = () => (
  <div className="hero-phone-wrap">
    <div className="hero-phone-glow" />
    <motion.div
      className="hero-phone"
      animate={{
        y: [0, -16, 0],
        rotateY: [0, 6, -4, 0],
        rotateX: [0, 2, -2, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <div className="hero-phone-frame">
        {/* Notch */}
        <div className="hero-phone-notch" />
        {/* Status Bar */}
        <div className="hero-phone-status">
          <span>9:41</span>
          <span style={{ display:'flex', gap:'4px', alignItems:'center' }}>
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
              <rect x="0" y="2" width="2" height="8" rx="1" fill="rgba(255,255,255,0.4)" />
              <rect x="3" y="1" width="2" height="9" rx="1" fill="rgba(255,255,255,0.6)" />
              <rect x="6" y="0" width="2" height="10" rx="1" fill="rgba(255,255,255,0.8)" />
              <rect x="9" y="0" width="2" height="10" rx="1" fill="white" />
            </svg>
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
              <rect x="1" y="3" width="13" height="8" rx="2" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" />
              <rect x="14" y="5" width="2" height="4" rx="1" fill="rgba(255,255,255,0.4)" />
              <rect x="2" y="4" width="9" height="6" rx="1" fill="rgba(255,255,255,0.8)" />
            </svg>
          </span>
        </div>

        {/* App Content */}
        <div className="hero-phone-content">
          <div className="hp-header">
            <div>
              <div className="hp-greeting">Good morning 👋</div>
              <div className="hp-title">Notifications</div>
            </div>
            <div className="hp-avatar">DP</div>
          </div>

          {/* Priority Tabs */}
          <div className="hp-tabs">
            <div className="hp-tab hp-tab-active">All</div>
            <div className="hp-tab">Urgent</div>
            <div className="hp-tab">High</div>
          </div>

          {/* Notification Cards */}
          <div className="hp-notifications">
            {[
              { app: 'Gmail', icon: '✉️', title: 'Meeting at 3PM', priority: 'urgent', color: '#ff4444', label: 'URGENT', time: '2m' },
              { app: 'HDFC Bank', icon: '🏦', title: 'Payment of ₹2,450 due', priority: 'high', color: '#ff8800', label: 'HIGH', time: '15m' },
              { app: 'GitHub', icon: '💻', title: 'PR review requested', priority: 'medium', color: '#4488ff', label: 'MED', time: '1h' },
              { app: 'Swiggy', icon: '🍕', title: 'Your order is out!', priority: 'low', color: '#888', label: 'LOW', time: '2h' },
            ].map((n, i) => (
              <motion.div
                key={i}
                className="hp-notif"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                <div className="hp-notif-icon">{n.icon}</div>
                <div className="hp-notif-body">
                  <div className="hp-notif-app">{n.app}</div>
                  <div className="hp-notif-title">{n.title}</div>
                </div>
                <div className="hp-notif-meta">
                  <div className="hp-priority-badge" style={{ color: n.color, borderColor: n.color + '40' }}>
                    {n.label}
                  </div>
                  <div className="hp-notif-time">{n.time}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Update Me Bar */}
          <div className="hp-update-me">
            <span>✨</span>
            <span>Update Me Summary</span>
            <span className="hp-badge">3 urgent</span>
          </div>
        </div>

        {/* Home indicator */}
        <div className="hp-home-indicator" />
      </div>
    </motion.div>
  </div>
)

const Hero = () => {
  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero-section">
      <FloatingOrbs />

      {/* Grid overlay */}
      <div className="hero-grid" aria-hidden="true" />

      <div className="container">
        <div className="hero-inner">
          {/* Left: Text */}
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Badge */}
            <motion.div
              className="hero-badge"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <span>🤖</span>
              <span>AI-Powered Notification Intelligence</span>
              <div className="hero-badge-dot" />
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="hero-headline"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              Turn notification
              <br />
              <span className="hero-headline-accent">chaos</span> into a
              <br />
              prioritized list.
            </motion.h1>

            {/* Subtext */}
            <motion.p
              className="hero-subtext"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
            >
              AI-powered notification filter that shows what matters, hides the spam.
              100% on-device. Zero data leaves your phone.
            </motion.p>

            {/* Social Proof */}
            <motion.div
              className="hero-social-proof"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
            >
              <div className="hero-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="white" color="white" />
                ))}
              </div>
              <span className="hero-rating-text">4.9 · 10,000+ users</span>
            </motion.div>

            {/* CTAs */}
            <motion.div
              className="hero-ctas"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.6 }}
            >
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-play-btn"
              >
                <svg viewBox="0 0 24 24" className="hero-play-icon" fill="currentColor">
                  <path d="M3.18 23.76c.33.18.7.24 1.06.18l13.12-11.94-2.82-2.82-11.36 14.58zm17.46-13.7l-2.88-1.64-3.18 2.88 3.18 2.88 2.88-1.64c.82-.47.82-1.61 0-2.08zM4.24.06C3.88 0 3.51.06 3.18.24L14.54 11.6 17.36 8.78 4.24.06zM3.18.24C2.46.65 2 1.42 2 2.3v19.4c0 .88.46 1.65 1.18 2.06L14.54 12.4 3.18.24z" />
                </svg>
                <div className="hero-play-text">
                  <span className="hero-play-label">Get it on</span>
                  <span className="hero-play-store">Google Play</span>
                </div>
              </a>

              <button onClick={scrollToFeatures} className="btn btn-ghost hero-learn-btn">
                Learn More
                <ChevronDown size={16} />
              </button>
            </motion.div>

            {/* Stats Pills */}
            <motion.div
              className="hero-stats-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.6 }}
            >
              {[
                { label: '100% On-Device', icon: '🔒' },
                { label: 'AES-256 Encrypted', icon: '🛡️' },
                { label: 'No Ads Ever', icon: '✨' },
              ].map((stat) => (
                <div key={stat.label} className="hero-stat-pill">
                  <span>{stat.icon}</span>
                  <span>{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Phone Mockup */}
          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <PhoneMockup />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="hero-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={scrollToFeatures}
      >
        <div className="hero-scroll-inner">
          <ChevronDown size={18} style={{ animation: 'scrollBounce 1.5s ease-in-out infinite' }} />
        </div>
      </motion.div>

      <style>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          padding-top: 100px;
          padding-bottom: 60px;
        }

        /* GRID */
        .hero-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 100%);
          -webkit-mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 100%);
          pointer-events: none;
        }

        /* ORBS */
        .hero-orbs { position: absolute; inset: 0; pointer-events: none; overflow: hidden; }
        .hero-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.4;
        }
        .hero-orb-1 {
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(255,255,255,0.08), transparent);
          top: -100px; left: -100px;
          animation: orb-float-1 12s ease-in-out infinite;
        }
        .hero-orb-2 {
          width: 400px; height: 400px;
          background: radial-gradient(circle, rgba(200,200,255,0.06), transparent);
          bottom: 0; right: -50px;
          animation: orb-float-2 15s ease-in-out infinite;
        }
        .hero-orb-3 {
          width: 300px; height: 300px;
          background: radial-gradient(circle, rgba(255,255,255,0.05), transparent);
          top: 40%; left: 40%;
          animation: orb-float-3 10s ease-in-out infinite;
        }
        .hero-orb-4 {
          width: 200px; height: 200px;
          background: radial-gradient(circle, rgba(180,180,255,0.04), transparent);
          top: 20%; right: 25%;
          animation: orb-float-1 18s ease-in-out infinite reverse;
        }
        .hero-orb-5 {
          width: 250px; height: 250px;
          background: radial-gradient(circle, rgba(255,255,220,0.04), transparent);
          bottom: 20%; left: 20%;
          animation: orb-float-2 14s ease-in-out infinite reverse;
        }

        /* LAYOUT */
        .hero-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        /* TEXT */
        .hero-text { display: flex; flex-direction: column; gap: 0; }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 16px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 100px;
          font-size: 0.8rem;
          font-weight: 500;
          color: rgba(255,255,255,0.75);
          margin-bottom: 24px;
          width: fit-content;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }
        .hero-badge-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #4ade80;
          box-shadow: 0 0 8px #4ade80;
          margin-left: 4px;
        }

        .hero-headline {
          font-size: clamp(2.8rem, 5vw, 4.5rem);
          font-weight: 800;
          line-height: 1.08;
          letter-spacing: -0.04em;
          color: white;
          margin-bottom: 24px;
        }
        .hero-headline-accent {
          background: linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.5) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-decoration: underline;
          text-decoration-color: rgba(255,255,255,0.2);
          text-underline-offset: 4px;
        }

        .hero-subtext {
          font-size: 1.1rem;
          color: rgba(255,255,255,0.55);
          line-height: 1.65;
          margin-bottom: 20px;
          max-width: 440px;
        }

        .hero-social-proof {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 32px;
        }
        .hero-stars { display: flex; gap: 2px; }
        .hero-rating-text {
          font-size: 0.875rem;
          color: rgba(255,255,255,0.5);
          font-weight: 500;
        }

        /* CTAs */
        .hero-ctas {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 32px;
          flex-wrap: wrap;
        }

        .hero-play-btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 12px 24px;
          background: white;
          color: black;
          border-radius: 14px;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 0 40px rgba(255,255,255,0.15), 0 8px 32px rgba(0,0,0,0.3);
          position: relative;
          overflow: hidden;
        }
        .hero-play-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, transparent 0%, rgba(0,0,0,0.05) 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .hero-play-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 0 60px rgba(255,255,255,0.2), 0 16px 48px rgba(0,0,0,0.4);
        }
        .hero-play-btn:hover::before { opacity: 1; }
        .hero-play-icon { width: 24px; height: 24px; flex-shrink: 0; }
        .hero-play-text { display: flex; flex-direction: column; }
        .hero-play-label { font-size: 0.65rem; font-weight: 500; text-transform: uppercase; letter-spacing: 0.06em; opacity: 0.7; }
        .hero-play-store { font-size: 1rem; font-weight: 700; font-family: 'Space Grotesk', sans-serif; letter-spacing: -0.02em; }

        .hero-learn-btn {
          padding: 12px 22px;
          font-size: 0.9rem;
        }

        .hero-stats-row {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }
        .hero-stat-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 5px 12px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 8px;
          font-size: 0.78rem;
          color: rgba(255,255,255,0.5);
          font-weight: 500;
        }

        /* VISUAL */
        .hero-visual {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }
        .hero-phone-wrap {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .hero-phone-glow {
          position: absolute;
          width: 300px;
          height: 500px;
          border-radius: 50%;
          background: radial-gradient(ellipse, rgba(255,255,255,0.08), transparent 70%);
          filter: blur(40px);
          pointer-events: none;
        }
        .hero-phone {
          position: relative;
          z-index: 1;
          transform-style: preserve-3d;
          filter: drop-shadow(0 40px 80px rgba(0,0,0,0.8));
        }
        .hero-phone-frame {
          width: 280px;
          border-radius: 50px;
          border: 1.5px solid rgba(255,255,255,0.18);
          background: #0a0a0a;
          padding: 16px 12px 24px;
          position: relative;
          box-shadow:
            0 0 0 1px rgba(255,255,255,0.05),
            0 50px 100px rgba(0,0,0,0.9),
            inset 0 1px 0 rgba(255,255,255,0.15);
          overflow: hidden;
        }
        .hero-phone-frame::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(255,255,255,0.03) 0%, transparent 30%);
          pointer-events: none;
        }
        .hero-phone-notch {
          width: 100px;
          height: 26px;
          background: #000;
          border-radius: 0 0 20px 20px;
          margin: 0 auto 8px;
          position: relative;
          z-index: 5;
          border: 1px solid rgba(255,255,255,0.07);
          border-top: none;
        }
        .hero-phone-status {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 8px 8px;
          font-size: 0.7rem;
          font-weight: 600;
          color: white;
        }
        .hero-phone-content {
          background: #080808;
          border-radius: 16px;
          padding: 16px 12px;
          min-height: 440px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          border: 1px solid rgba(255,255,255,0.06);
          overflow: hidden;
        }
        .hp-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .hp-greeting { font-size: 0.65rem; color: rgba(255,255,255,0.4); margin-bottom: 2px; }
        .hp-title { font-size: 1rem; font-weight: 700; color: white; letter-spacing: -0.03em; }
        .hp-avatar {
          width: 32px; height: 32px;
          border-radius: 50%;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.2);
          display: flex; align-items: center; justify-content: center;
          font-size: 0.6rem; font-weight: 700; color: rgba(255,255,255,0.8);
        }

        .hp-tabs {
          display: flex;
          gap: 6px;
        }
        .hp-tab {
          padding: 4px 12px;
          border-radius: 8px;
          font-size: 0.65rem;
          font-weight: 600;
          color: rgba(255,255,255,0.4);
          background: rgba(255,255,255,0.04);
          cursor: pointer;
        }
        .hp-tab-active {
          background: rgba(255,255,255,0.12);
          color: white;
        }

        .hp-notifications {
          display: flex;
          flex-direction: column;
          gap: 6px;
          flex: 1;
        }
        .hp-notif {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 10px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 10px;
        }
        .hp-notif-icon {
          font-size: 1.1rem;
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.06);
          border-radius: 8px;
          flex-shrink: 0;
        }
        .hp-notif-body { flex: 1; min-width: 0; }
        .hp-notif-app { font-size: 0.58rem; color: rgba(255,255,255,0.35); font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; }
        .hp-notif-title { font-size: 0.7rem; color: rgba(255,255,255,0.85); font-weight: 500; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .hp-notif-meta { display: flex; flex-direction: column; align-items: flex-end; gap: 3px; }
        .hp-priority-badge {
          font-size: 0.5rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          padding: 2px 5px;
          border-radius: 4px;
          border: 1px solid;
        }
        .hp-notif-time { font-size: 0.55rem; color: rgba(255,255,255,0.3); }

        .hp-update-me {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 10px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 10px;
          font-size: 0.65rem;
          font-weight: 600;
          color: white;
        }
        .hp-badge {
          margin-left: auto;
          padding: 2px 6px;
          background: rgba(255,255,255,0.15);
          border-radius: 6px;
          font-size: 0.55rem;
        }

        .hp-home-indicator {
          width: 80px;
          height: 4px;
          background: rgba(255,255,255,0.3);
          border-radius: 2px;
          margin: 16px auto 0;
        }

        /* SCROLL */
        .hero-scroll {
          position: absolute;
          bottom: 32px;
          left: 50%;
          transform: translateX(-50%);
          cursor: pointer;
          z-index: 5;
        }
        .hero-scroll-inner {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.4);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          background: rgba(255,255,255,0.03);
          transition: all 0.2s ease;
        }
        .hero-scroll-inner:hover {
          border-color: rgba(255,255,255,0.3);
          color: rgba(255,255,255,0.8);
        }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .hero-inner {
            grid-template-columns: 1fr;
            gap: 60px;
            text-align: center;
          }
          .hero-text {
            align-items: center;
          }
          .hero-badge { margin: 0 auto 24px; }
          .hero-subtext { margin-left: auto; margin-right: auto; }
          .hero-ctas { justify-content: center; }
          .hero-social-proof { justify-content: center; }
          .hero-stats-row { justify-content: center; }
          .hero-visual { order: -1; }
          .hero-phone-frame { width: 240px; }
        }
      `}</style>
    </section>
  )
}

export default Hero
