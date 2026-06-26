import { motion } from 'framer-motion'
import { Bell, Bot, BarChart2, CheckCircle2 } from 'lucide-react'

const steps = [
  {
    num: '01',
    icon: Bell,
    title: 'Grant Notification Access',
    desc: 'Allow Notifiqr to read your notifications. All processing happens on-device — nothing is uploaded anywhere.',
    detail: 'One-time setup · 30 seconds',
  },
  {
    num: '02',
    icon: Bot,
    title: 'AI Classifies Everything',
    desc: 'Our on-device AI immediately starts categorizing every notification into Urgent, High, Medium, Low, or Spam.',
    detail: 'Automatic · Instant',
  },
  {
    num: '03',
    icon: BarChart2,
    title: 'See What Matters',
    desc: 'Your dashboard shows only what needs attention. Tap "Update Me" for a smart summary of your day.',
    detail: 'Real-time · Prioritized',
  },
  {
    num: '04',
    icon: CheckCircle2,
    title: 'Act & Stay Focused',
    desc: 'Tap action items to add to calendar, mark notifications done, and let Notifiqr block the noise forever.',
    detail: 'One-tap · Effortless',
  },
]

const HowItWorks = () => {
  return (
    <section className="how-section section" id="how-it-works">
      {/* Background accent */}
      <div className="how-bg-line" />

      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">🚀 How It Works</div>
          <h2>Up and running in minutes</h2>
          <p>Four simple steps to transform your notification experience forever.</p>
        </motion.div>

        <div className="how-steps">
          {steps.map((step, i) => {
            const StepIcon = step.icon
            return (
              <motion.div
                key={step.num}
                className="how-step"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * 0.15, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <motion.div
                    className="how-connector"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 + 0.4, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                  />
                )}

                <div className="how-step-card glass-card">
                  {/* Number */}
                  <div className="how-num">{step.num}</div>

                  {/* Icon bubble */}
                  <div className="how-icon">
                    <StepIcon size={24} strokeWidth={1.5} />
                  </div>

                <h3 className="how-step-title">{step.title}</h3>
                <p className="how-step-desc">{step.desc}</p>

                <div className="how-detail">
                  <span className="how-detail-dot" />
                  {step.detail}
                </div>
              </div>
            </motion.div>
          )})}
        </div>
      </div>

      <style>{`
        .how-section { position: relative; overflow: hidden; }
        .how-bg-line {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 600px;
          height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,255,255,0.015) 0%, transparent 70%);
          pointer-events: none;
        }

        .how-steps {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          position: relative;
        }

        .how-step {
          position: relative;
        }

        .how-connector {
          position: absolute;
          top: 56px;
          right: -10px;
          width: calc(100% - 80px);
          height: 1px;
          background: linear-gradient(90deg, rgba(255,255,255,0.15), rgba(255,255,255,0.05));
          transform-origin: left;
          z-index: 2;
          pointer-events: none;
        }

        .how-step-card {
          padding: 28px 24px;
          height: 100%;
          display: flex;
          flex-direction: column;
          gap: 14px;
          position: relative;
          z-index: 1;
        }

        .how-num {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.7rem;
          font-weight: 700;
          color: rgba(255,255,255,0.2);
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .how-icon {
          font-size: 2.2rem;
          width: 56px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 16px;
        }

        .how-step-title {
          font-size: 1rem;
          font-weight: 700;
          color: white;
          letter-spacing: -0.02em;
          margin: 0;
        }

        .how-step-desc {
          font-size: 0.85rem;
          color: rgba(255,255,255,0.45);
          line-height: 1.65;
          margin: 0;
          flex: 1;
        }

        .how-detail {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.75rem;
          color: rgba(255,255,255,0.35);
          font-weight: 500;
          padding-top: 4px;
          border-top: 1px solid rgba(255,255,255,0.06);
        }
        .how-detail-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: rgba(255,255,255,0.3);
          flex-shrink: 0;
        }

        @media (max-width: 900px) {
          .how-steps { grid-template-columns: repeat(2, 1fr); }
          .how-connector { display: none; }
        }
        @media (max-width: 580px) {
          .how-steps { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}

export default HowItWorks
