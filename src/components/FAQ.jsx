import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'Is my notification data safe? Does it go to any server?',
    a: 'Absolutely not. Notifiqr processes everything 100% on your device using your phone\'s own processor. No notification content, no app names, no metadata is ever sent to any external server. The database is encrypted with SQLCipher + AES-256-GCM encryption, and individual sensitive fields are additionally encrypted using Android KeyStore. Your data is yours, period.',
  },
  {
    q: 'What does the "Privacy-First" design actually mean?',
    a: 'It means the app was architectured from day one to never need a server. Unlike competing apps that send your notifications to their cloud for AI processing, Notifiqr runs a local on-device classifier. All filtering, ranking, and storage happen completely offline on your device, ensuring maximum privacy.',
  },
  {
    q: 'How is the AI classification different from Android\'s built-in priority?',
    a: 'Android\'s built-in priority is generic and app-based. Notifiqr analyzes the actual content of each notification using regex-based and rule-based classifiers tuned for Indian users. It understands context like "payment due", "meeting at 3PM", "your order shipped" and classifies accordingly — regardless of which app sent it. It also learns your personal patterns over time.',
  },
  {
    q: 'Will Notifiqr drain my battery?',
    a: 'No. Notifiqr uses Android\'s NotificationListenerService which is a system-level service that processes notifications passively. We\'ve heavily optimized the background processing to use minimal CPU time. In our testing, Notifiqr uses less than 0.5% daily battery. The WorkManager background tasks are batched and run during device idle times.',
  },
  {
    q: 'What\'s included in the free tier?',
    a: 'The free tier includes core notification filtering (Urgent/High/Medium/Low/Spam), basic Smart Folders, 30-notification history, and the basic Priority Dashboard. You get the full core experience at no cost. Premium adds advanced AI features, customizable themes, unlimited folders, longer history, and priority support.',
  },
  {
    q: 'Can I cancel my subscription anytime?',
    a: 'Yes! Monthly and yearly subscriptions can be cancelled anytime through Google Play. If you cancel a yearly plan within 7 days of purchase, you\'re eligible for a full refund per our Refund Policy. The Lifetime plan is a one-time purchase with no recurring charges, ever.',
  },
  {
    q: 'Does it work with all apps? What about WhatsApp?',
    a: 'Notifiqr works with every app that sends notifications on Android — including WhatsApp, Gmail, banking apps, delivery apps, and more. Because it reads from the system notification listener (not individual app APIs), it\'s universal. Note that apps using "heads-up" encrypted notifications may show limited content, which is actually a privacy feature of those apps.',
  },
  {
    q: 'What Android version is required?',
    a: 'Notifiqr requires Android 12 (API level 31) or higher. This is because we use modern security APIs including Android KeyStore, the latest WorkManager features, and Jetpack Compose for the UI. Android 12+ covers the vast majority of currently active Android devices.',
  },
  {
    q: 'What is Auto-Clean? Does it delete my notifications permanently?',
    a: 'Auto-Clean automatically removes notifications from your system notification panel 5 seconds after they arrive. Your notifications are NOT deleted — they remain safely stored inside the Notifiqr app with all their history, priority labels, and action items. Auto-Clean simply keeps your phone\'s notification panel tidy while Notifiqr maintains the full record.',
  },
  {
    q: 'Does Notifiqr have notification sounds and vibration?',
    a: 'Yes! Notifiqr plays distinct notification tones (low, medium, urgent) based on the priority level of each notification. Haptic feedback also varies by priority — urgent notifications get a strong pulse, while spam gets a subtle tap. Both sound and haptics can be toggled independently in Settings.',
  },
  {
    q: 'What is Data Retention and how does it work?',
    a: 'Data Retention lets you control how long notifications stay in Notifiqr\'s history. You can choose 1 day, 7 days, 30 days, or keep them forever (capped at 2,000 items). When retention kicks in, older notifications are automatically removed — but you never lose more than the selected window. Change it anytime in Settings.',
  },
]

const FAQItem = ({ faq, index }) => {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      className="faq-item glass-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
    >
      <button
        className="faq-question"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        id={`faq-${index}`}
      >
        <span>{faq.q}</span>
        <motion.div
          className="faq-chevron"
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            className="faq-answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="faq-answer-inner">
              <p>{faq.a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

const FAQ = () => {
  return (
    <section className="faq-section section" id="faq">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">❓ FAQ</div>
          <h2>Frequently asked questions</h2>
          <p>Everything you need to know about Notifiqr's privacy, pricing, and features.</p>
        </motion.div>

        <div className="faq-grid">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        .faq-section { position: relative; }

        .faq-grid {
          display: flex;
          flex-direction: column;
          gap: 10px;
          max-width: 760px;
          margin: 0 auto;
        }

        .faq-item {
          border-radius: 16px;
          overflow: hidden;
          transition: border-color 0.3s ease, background 0.3s ease;
        }
        .faq-item:hover {
          transform: none !important;
        }

        .faq-question {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 20px 24px;
          background: none;
          border: none;
          color: white;
          font-size: 0.95rem;
          font-weight: 600;
          font-family: 'Space Grotesk', sans-serif;
          text-align: left;
          cursor: pointer;
          letter-spacing: -0.01em;
          transition: color 0.2s ease;
          line-height: 1.4;
        }
        .faq-question:hover { color: rgba(255,255,255,0.9); }

        .faq-chevron {
          flex-shrink: 0;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.5);
          background: rgba(255,255,255,0.04);
        }

        .faq-answer {
          overflow: hidden;
        }

        .faq-answer-inner {
          padding: 0 24px 20px;
          border-top: 1px solid rgba(255,255,255,0.06);
          margin-top: 0;
          padding-top: 16px;
        }
        .faq-answer-inner p {
          font-size: 0.875rem;
          color: rgba(255,255,255,0.5);
          line-height: 1.7;
          margin: 0;
        }
      `}</style>
    </section>
  )
}

export default FAQ
