import { motion } from 'framer-motion'
import { Check, Zap, Crown, InfinityIcon } from 'lucide-react'
import GlassCard from './GlassCard'

const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.notifiqr'

const plans = [
  {
    id: 'monthly',
    name: 'Monthly',
    icon: Zap,
    price: '₹69',
    period: '/month',
    tagline: 'Try it out risk-free',
    badge: null,
    features: [
      'AI-powered notification filter',
      'Smart Folders (all categories)',
      'Update Me daily summary',
      'Action item extraction',
      'Privacy Health Score',
      'Home Screen Widget',
      'AES-256 encrypted database',
    ],
    cta: 'Get Started',
    highlight: false,
  },
  {
    id: 'yearly',
    name: 'Yearly',
    icon: Crown,
    price: '₹969',
    period: '/year',
    subPrice: '₹80.75/mo',
    saving: 'Save ₹1,659',
    tagline: 'Best value for power users',
    badge: '🔥 Most Popular',
    features: [
      'Everything in Monthly',
      'Unlimited Smart Folders',
      'Advanced AI sorting',
      'Seasonal themes (4/year)',
      'Priority customer support',
      'Early feature access',
      'Weekly privacy report',
    ],
    cta: 'Get Started',
    highlight: true,
  },
  {
    id: 'lifetime',
    name: 'Lifetime',
    icon: InfinityIcon,
    price: '₹9,669',
    period: 'one-time',
    tagline: 'Pay once, own forever',
    badge: null,
    features: [
      'Everything in Yearly',
      'Lifetime updates included',
      'Founding member status',
      'Exclusive lifetime badge',
      'All future features free',
      'Priority beta access',
      'Direct founder support',
    ],
    cta: 'Get Lifetime',
    highlight: false,
  },
]

const PlanCard = ({ plan, index }) => {
  const Icon = plan.icon
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="pricing-card-wrap"
    >
      <GlassCard
        tilt={!plan.highlight}
        className={`pricing-card ${plan.highlight ? 'pricing-card-highlight' : ''}`}
      >
        {/* Badge */}
        {plan.badge && (
          <div className="pricing-badge">{plan.badge}</div>
        )}

        {/* Top gradient for highlight */}
        {plan.highlight && <div className="pricing-highlight-glow" />}

        <div className="pricing-card-content">
          {/* Header */}
          <div className="pricing-header">
            <div className="pricing-icon">
              <Icon size={20} strokeWidth={1.5} />
            </div>
            <div>
              <div className="pricing-plan-name">{plan.name}</div>
              <div className="pricing-tagline">{plan.tagline}</div>
            </div>
          </div>

          {/* Price */}
          <div className="pricing-price-block">
            <div className="pricing-price">
              {plan.price}
              <span className="pricing-period">{plan.period}</span>
            </div>
            {plan.subPrice && (
              <div className="pricing-sub-price">{plan.subPrice}</div>
            )}
            {plan.saving && (
              <div className="pricing-saving">{plan.saving}</div>
            )}
          </div>

          {/* Divider */}
          <div className="glass-divider" />

          {/* Features */}
          <ul className="pricing-features">
            {plan.features.map((f) => (
              <li key={f} className="pricing-feature">
                <div className="pricing-check">
                  <Check size={12} strokeWidth={3} />
                </div>
                <span>{f}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn pricing-btn ${plan.highlight ? 'btn-primary' : 'btn-ghost'}`}
          >
            {plan.cta}
            {plan.highlight && ' ✨'}
          </a>
        </div>
      </GlassCard>
    </motion.div>
  )
}

const Pricing = () => {
  return (
    <section className="pricing-section section" id="pricing">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">💳 Simple Pricing</div>
          <h2>Start free, upgrade anytime</h2>
          <p>All plans include a 7-day free trial. No credit card required to download.</p>
        </motion.div>

        <div className="pricing-grid">
          {plans.map((plan, i) => (
            <PlanCard key={plan.id} plan={plan} index={i} />
          ))}
        </div>

        {/* Free tier note */}
        <motion.div
          className="pricing-free-note glass-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <span>🆓</span>
          <p>
            <strong>Free tier available!</strong> Core filtering, basic folders, 30-notification history, and 5 monitored apps —
            completely free, forever. No account required.
          </p>
        </motion.div>
      </div>

      <style>{`
        .pricing-section { position: relative; }

        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          align-items: start;
          margin-bottom: 28px;
        }

        .pricing-card-wrap { display: flex; }

        .pricing-card {
          width: 100%;
          padding: 0;
          transition: transform 0.15s ease-out, box-shadow 0.4s ease, border-color 0.4s ease;
        }

        .pricing-card-highlight {
          border-color: rgba(255,255,255,0.25) !important;
          box-shadow:
            0 0 0 1px rgba(255,255,255,0.15),
            0 32px 64px rgba(0,0,0,0.6),
            0 0 60px rgba(255,255,255,0.06),
            inset 0 1px 0 rgba(255,255,255,0.2) !important;
          transform: scale(1.04);
        }
        .pricing-card-highlight:hover {
          transform: scale(1.04) translateY(-4px) !important;
        }

        .pricing-highlight-glow {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 160px;
          background: radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.08), transparent 70%);
          pointer-events: none;
        }

        .pricing-badge {
          position: absolute;
          top: -14px;
          left: 50%;
          transform: translateX(-50%);
          padding: 5px 16px;
          background: white;
          color: black;
          border-radius: 100px;
          font-size: 0.75rem;
          font-weight: 700;
          white-space: nowrap;
          letter-spacing: 0.02em;
          box-shadow: 0 4px 20px rgba(0,0,0,0.3);
          z-index: 10;
        }

        .pricing-card-content {
          padding: 32px 28px;
          display: flex;
          flex-direction: column;
          gap: 24px;
          position: relative;
          z-index: 1;
        }

        .pricing-header {
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .pricing-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.8);
          flex-shrink: 0;
        }
        .pricing-plan-name {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.1rem;
          font-weight: 700;
          color: white;
          letter-spacing: -0.02em;
        }
        .pricing-tagline {
          font-size: 0.75rem;
          color: rgba(255,255,255,0.4);
          margin-top: 2px;
        }

        .pricing-price-block {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .pricing-price {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 2.4rem;
          font-weight: 800;
          color: white;
          letter-spacing: -0.04em;
          display: flex;
          align-items: baseline;
          gap: 4px;
        }
        .pricing-period {
          font-size: 0.9rem;
          font-weight: 500;
          color: rgba(255,255,255,0.4);
          letter-spacing: 0;
        }
        .pricing-sub-price {
          font-size: 0.8rem;
          color: rgba(255,255,255,0.35);
        }
        .pricing-saving {
          display: inline-flex;
          padding: 3px 10px;
          background: rgba(74,222,128,0.12);
          border: 1px solid rgba(74,222,128,0.2);
          border-radius: 6px;
          font-size: 0.75rem;
          font-weight: 700;
          color: #4ade80;
          width: fit-content;
        }

        .pricing-features {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .pricing-feature {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.875rem;
          color: rgba(255,255,255,0.65);
          line-height: 1.4;
        }
        .pricing-check {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.7);
          flex-shrink: 0;
          margin-top: 1px;
        }

        .pricing-btn {
          width: 100%;
          padding: 14px;
          font-size: 0.95rem;
          border-radius: 14px;
        }

        .pricing-free-note {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px 20px;
          font-size: 0.875rem;
        }
        .pricing-free-note span { font-size: 1.4rem; }
        .pricing-free-note p { margin: 0; color: rgba(255,255,255,0.55); }
        .pricing-free-note strong { color: rgba(255,255,255,0.85); }

        @media (max-width: 900px) {
          .pricing-grid { grid-template-columns: 1fr; max-width: 440px; margin: 0 auto 28px; }
          .pricing-card-highlight { transform: scale(1); }
          .pricing-card-highlight:hover { transform: translateY(-4px) !important; }
        }
      `}</style>
    </section>
  )
}

export default Pricing
