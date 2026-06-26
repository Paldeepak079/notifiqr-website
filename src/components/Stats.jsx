import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import CountUp from 'react-countup'
import { useInView as useRIOView } from 'react-intersection-observer'

const stats = [
  { value: 10000, suffix: '+', label: 'Active Users', icon: '👥' },
  { value: 4.9, decimals: 1, suffix: '', label: 'Play Store Rating', icon: '⭐' },
  { value: 3200000, suffix: '+', label: 'Notifications Filtered', icon: '🔔', shortLabel: '3.2M+' },
  { value: 100, suffix: '%', label: 'On-Device Processing', icon: '🔒' },
]

const StatCard = ({ stat, index }) => {
  const { ref, inView } = useRIOView({ triggerOnce: true, threshold: 0.3 })

  return (
    <motion.div
      ref={ref}
      className="stat-card glass-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="stat-icon">{stat.icon}</div>
      <div className="stat-value">
        {stat.shortLabel ? (
          <span>{inView ? stat.shortLabel : '0'}</span>
        ) : (
          <>
            {inView && (
              <CountUp
                start={0}
                end={stat.value}
                duration={2.5}
                decimals={stat.decimals || 0}
                useEasing
                formattingFn={
                  stat.value >= 1000000
                    ? (val) => (val / 1000000).toFixed(1) + 'M'
                    : undefined
                }
              />
            )}
            {!inView && '0'}
            <span>{stat.suffix}</span>
          </>
        )}
      </div>
      <div className="stat-label">{stat.label}</div>

      {/* Animated bar */}
      <div className="stat-progress-wrap">
        <motion.div
          className="stat-progress-bar"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ delay: index * 0.1 + 0.5, duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ transformOrigin: 'left' }}
        />
      </div>
    </motion.div>
  )
}

const Stats = () => {
  return (
    <section className="stats-section">
      <div className="container">
        <motion.div
          className="stats-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">📊 Real Numbers</div>
          <h2>Trusted by thousands</h2>
        </motion.div>

        <div className="stats-grid">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        .stats-section {
          padding: 80px 0;
          position: relative;
        }
        .stats-header {
          text-align: center;
          margin-bottom: 48px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }
        .stats-header h2 {
          background: linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.6) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        .stat-card {
          padding: 32px 24px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }
        .stat-icon {
          font-size: 2rem;
          margin-bottom: 4px;
        }
        .stat-value {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 2.8rem;
          font-weight: 800;
          color: white;
          letter-spacing: -0.04em;
          line-height: 1;
          display: flex;
          align-items: baseline;
          gap: 2px;
        }
        .stat-value span { font-size: 1.8rem; opacity: 0.7; }
        .stat-label {
          font-size: 0.8rem;
          color: rgba(255,255,255,0.45);
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }
        .stat-progress-wrap {
          width: 100%;
          height: 2px;
          background: rgba(255,255,255,0.06);
          border-radius: 1px;
          overflow: hidden;
          margin-top: 8px;
        }
        .stat-progress-bar {
          height: 100%;
          background: linear-gradient(90deg, rgba(255,255,255,0.6), rgba(255,255,255,0.15));
          border-radius: 1px;
        }

        @media (max-width: 900px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 480px) {
          .stats-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}

export default Stats
