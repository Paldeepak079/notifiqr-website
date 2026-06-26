import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import GlassCard from './GlassCard'

const testimonials = [
  {
    name: 'Riya Sharma',
    handle: '@riyaonandroid',
    avatar: 'RS',
    rating: 5,
    text: "I was drowning in 300+ notifications a day from work apps, social media, and spam. Notifiqr cut that noise down to only 20 things that actually needed my attention. My stress levels have genuinely improved.",
    role: 'Product Designer, Bangalore',
  },
  {
    name: 'Aditya Nair',
    handle: '@adityacodes',
    avatar: 'AN',
    rating: 5,
    text: "The on-device processing is what sold me. I refused to give yet another app access to read my private messages in the cloud. Notifiqr does everything locally — and it's blazing fast. Best ₹969 I spent this year.",
    role: 'Software Engineer, Pune',
  },
  {
    name: 'Meera Patel',
    handle: '@meerawrites',
    avatar: 'MP',
    rating: 5,
    text: "The 'Update Me' feature is magical. Instead of checking my phone 50 times a day, I get one smart summary in the morning and one in the evening. I've saved at least 2 hours of mental energy every single day.",
    role: 'Freelance Writer, Delhi',
  },
  {
    name: 'Rahul Joshi',
    handle: '@rahul_joshi91',
    avatar: 'RJ',
    rating: 5,
    text: "Action item extraction alone is worth the price. It reads my banking alerts and automatically creates calendar reminders for bill due dates. I haven't missed a payment since installing Notifiqr three months ago.",
    role: 'Finance Analyst, Mumbai',
  },
  {
    name: 'Priya Venkat',
    handle: '@priya_tech',
    avatar: 'PV',
    rating: 5,
    text: "Finally an app that understands that not every notification is equal. The smart folders are intuitive and the privacy health score actually motivates me to keep things clean. 10/10 would recommend.",
    role: 'Startup Founder, Chennai',
  },
  {
    name: 'Karthik M',
    handle: '@karthik_dev',
    avatar: 'KM',
    rating: 5,
    text: "As a developer I'm picky about what runs on my phone. Notifiqr's code is clearly thoughtful — the AES-256 encryption, the SQLCipher database, and zero-server architecture. It's privacy done right.",
    role: 'Android Developer, Hyderabad',
  },
]

const TestimonialCard = ({ t, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-40px' }}
    transition={{ delay: index * 0.08, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
  >
    <GlassCard tilt className="testimonial-card">
      <div className="testimonial-inner">
        {/* Stars */}
        <div className="testimonial-stars">
          {[...Array(t.rating)].map((_, i) => (
            <Star key={i} size={13} fill="white" color="white" />
          ))}
        </div>

        {/* Quote */}
        <p className="testimonial-text">"{t.text}"</p>

        {/* Author */}
        <div className="testimonial-author">
          <div className="testimonial-avatar">{t.avatar}</div>
          <div>
            <div className="testimonial-name">{t.name}</div>
            <div className="testimonial-meta">
              <span className="testimonial-handle">{t.handle}</span>
              <span className="testimonial-dot">·</span>
              <span className="testimonial-role">{t.role}</span>
            </div>
          </div>
        </div>
      </div>
    </GlassCard>
  </motion.div>
)

const Testimonials = () => {
  return (
    <section className="testimonials-section section" id="testimonials">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">💬 Real Reviews</div>
          <h2>What users are saying</h2>
          <p>Join thousands who've already reclaimed their focus with Notifiqr.</p>
        </motion.div>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} t={t} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        .testimonials-section { position: relative; }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .testimonial-card {
          height: 100%;
          cursor: default;
        }

        .testimonial-inner {
          padding: 28px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          position: relative;
          z-index: 1;
        }

        .testimonial-stars {
          display: flex;
          gap: 3px;
        }

        .testimonial-text {
          font-size: 0.9rem;
          color: rgba(255,255,255,0.65);
          line-height: 1.7;
          margin: 0;
          flex: 1;
          font-style: italic;
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 12px;
          padding-top: 12px;
          border-top: 1px solid rgba(255,255,255,0.06);
        }

        .testimonial-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          font-weight: 700;
          color: rgba(255,255,255,0.7);
          flex-shrink: 0;
          font-family: 'Space Grotesk', sans-serif;
        }

        .testimonial-name {
          font-size: 0.875rem;
          font-weight: 700;
          color: white;
          letter-spacing: -0.01em;
        }
        .testimonial-meta {
          display: flex;
          align-items: center;
          gap: 4px;
          margin-top: 2px;
          flex-wrap: wrap;
        }
        .testimonial-handle {
          font-size: 0.72rem;
          color: rgba(255,255,255,0.35);
        }
        .testimonial-dot {
          font-size: 0.72rem;
          color: rgba(255,255,255,0.2);
        }
        .testimonial-role {
          font-size: 0.72rem;
          color: rgba(255,255,255,0.3);
        }

        @media (max-width: 900px) {
          .testimonials-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 580px) {
          .testimonials-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}

export default Testimonials
