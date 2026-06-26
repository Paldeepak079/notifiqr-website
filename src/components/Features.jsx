import { motion } from 'framer-motion'
import GlassCard from './GlassCard'
import {
  Filter, Sparkles, Lock, Folder, Bell, Calendar,
  BarChart2, Layers, Zap
} from 'lucide-react'

const features = [
  {
    icon: Filter,
    title: 'Smart Filtering',
    desc: 'AI classifier automatically sorts notifications into Urgent, High, Medium, Low, and Spam — so you see only what matters.',
    badge: 'AI-Powered',
  },
  {
    icon: Sparkles,
    title: 'Update Me Summary',
    desc: 'Get a concise daily digest of everything important. No more doom-scrolling through hundreds of pings.',
    badge: 'Productivity',
  },
  {
    icon: Lock,
    title: 'Privacy-First Design',
    desc: '100% on-device processing with AES-256-GCM encryption. Your notification content never leaves your phone.',
    badge: 'Privacy',
  },
  {
    icon: Folder,
    title: 'Smart Folders',
    desc: 'Auto-organized into Work, Finance, Shopping, Social, Health & Promos. Find any notification instantly.',
    badge: 'Organization',
  },
  {
    icon: Calendar,
    title: 'Action Extraction',
    desc: 'Automatically detects tasks and deadlines from your notifications and adds them to your calendar with one tap.',
    badge: 'Automation',
  },
  {
    icon: BarChart2,
    title: 'Privacy Health Score',
    desc: 'Weekly reports showing how many distractions you blocked, time saved, and your overall notification hygiene score.',
    badge: 'Insights',
  },
  {
    icon: Bell,
    title: 'Home Screen Widget',
    desc: 'Glance-powered widget shows today\'s urgent actions at a glance — without opening the app.',
    badge: 'Widget',
  },
  {
    icon: Layers,
    title: 'Encrypted Database',
    desc: 'SQLCipher + AES-256-GCM field-level encryption protects every single byte of your notification history.',
    badge: 'Security',
  },
  {
    icon: Zap,
    title: 'Premium Benefits',
    desc: 'Cloud sync across devices, advanced AI sorting, seasonal themes, priority support and early feature access.',
    badge: 'Premium ✨',
  },
]

const FeatureCard = ({ feature, index }) => {
  const Icon = feature.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.07, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <GlassCard tilt className="feature-card">
        <div className="feature-card-inner">
          <div className="feature-icon-wrap">
            <Icon size={22} strokeWidth={1.5} />
          </div>
          <div className="feature-badge">{feature.badge}</div>
          <h3 className="feature-title">{feature.title}</h3>
          <p className="feature-desc">{feature.desc}</p>
        </div>
      </GlassCard>
    </motion.div>
  )
}

const Features = () => {
  return (
    <section className="features-section section" id="features">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">⚡ Core Features</div>
          <h2>Everything you need to<br />reclaim your attention</h2>
          <p>Built for people who want to be in control of their digital life, not controlled by it.</p>
        </motion.div>

        <div className="features-grid">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        .features-section {
          position: relative;
        }
        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .feature-card {
          height: 100%;
          padding: 28px;
          cursor: default;
        }
        .feature-card-inner {
          display: flex;
          flex-direction: column;
          gap: 12px;
          position: relative;
          z-index: 1;
        }
        .feature-icon-wrap {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.8);
          margin-bottom: 4px;
        }
        .feature-badge {
          display: inline-flex;
          padding: 3px 10px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 100px;
          font-size: 0.7rem;
          font-weight: 600;
          color: rgba(255,255,255,0.5);
          letter-spacing: 0.05em;
          width: fit-content;
        }
        .feature-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: white;
          letter-spacing: -0.02em;
        }
        .feature-desc {
          font-size: 0.875rem;
          color: rgba(255,255,255,0.5);
          line-height: 1.65;
          margin: 0;
        }

        @media (max-width: 1024px) {
          .features-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .features-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}

export default Features
