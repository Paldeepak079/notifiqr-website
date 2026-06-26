import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Bug, Send } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    // Simulate sending — in production, use Formspree or Netlify Forms
    await new Promise((r) => setTimeout(r, 1200))
    setSubmitted(true)
    setSubmitting(false)
  }

  return (
    <section className="contact-section section" id="contact">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">✉️ Contact</div>
          <h2>Get in touch</h2>
          <p>Have a question, bug report, or partnership inquiry? We'd love to hear from you.</p>
        </motion.div>

        <div className="contact-layout">
          {/* Left: Info */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card contact-info-card">
              <div className="contact-info-inner">
                <h3 className="contact-info-title">Let's talk</h3>
                <p className="contact-info-desc">
                  We're Deepak from Notifiqr. We read every single message and respond within 24 hours.
                </p>

                {/* Contact links */}
                <div className="contact-links">
                  <a href="mailto:notifiqr.app@gmail.com" className="contact-link">
                    <div className="contact-link-icon"><Mail size={18} /></div>
                    <div>
                      <div className="contact-link-label">Email</div>
                      <div className="contact-link-value">notifiqr.app@gmail.com</div>
                    </div>
                  </a>

                  <a
                    href="https://twitter.com/notifiqrapp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    <div className="contact-link-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </div>
                    <div>
                      <div className="contact-link-label">Twitter / X</div>
                      <div className="contact-link-value">@notifiqrapp</div>
                    </div>
                  </a>

                  <a
                    href="https://instagram.com/notifiqr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                     <div className="contact-link-icon">
                       <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                         <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                         <circle cx="12" cy="12" r="4"/>
                         <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/>
                       </svg>
                     </div>
                    <div>
                      <div className="contact-link-label">Instagram</div>
                      <div className="contact-link-value">@notifiqr</div>
                    </div>
                  </a>
                </div>

                {/* Bug report */}
                <a
                  href="mailto:notifiqr.app@gmail.com?subject=Bug Report — Notifiqr"
                  className="btn btn-ghost contact-bug-btn"
                >
                  <Bug size={16} />
                  Report a Bug
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            className="contact-form-wrap"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="glass-card contact-form-card">
              {submitted ? (
                <div className="contact-success">
                  <div className="contact-success-icon">✅</div>
                  <h3>Message sent!</h3>
                  <p>We'll get back to you within 24 hours at {formData.email}</p>
                  <button
                    onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', message: '' }) }}
                    className="btn btn-ghost"
                    style={{ marginTop: '16px' }}
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="contact-form-row">
                    <div className="contact-field">
                      <label className="contact-label" htmlFor="name">Your Name</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        className="glass-input"
                        placeholder="Deepak"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="contact-field">
                      <label className="contact-label" htmlFor="email">Email Address</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        className="glass-input"
                        placeholder="paldeepak079@gmail.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="contact-field">
                    <label className="contact-label" htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      className="glass-input contact-textarea"
                      placeholder="Tell us what's on your mind..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary contact-submit"
                    disabled={submitting}
                  >
                    {submitting ? (
                      <>Sending... <span className="contact-spinner" /></>
                    ) : (
                      <>Send Message <Send size={16} /></>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .contact-section { position: relative; }

        .contact-layout {
          display: grid;
          grid-template-columns: 380px 1fr;
          gap: 24px;
          align-items: start;
        }

        .contact-info-card, .contact-form-card {
          padding: 0;
          height: 100%;
        }

        .contact-info-inner, .contact-form {
          padding: 36px;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .contact-info-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: white;
          letter-spacing: -0.03em;
        }
        .contact-info-desc {
          font-size: 0.875rem;
          color: rgba(255,255,255,0.5);
          line-height: 1.65;
          margin: 0;
        }

        .contact-links {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .contact-link {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px 16px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 14px;
          text-decoration: none;
          transition: all 0.25s ease;
        }
        .contact-link:hover {
          background: rgba(255,255,255,0.06);
          border-color: rgba(255,255,255,0.15);
          transform: translateX(4px);
        }
        .contact-link-icon {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.7);
          flex-shrink: 0;
        }
        .contact-link-label {
          font-size: 0.7rem;
          color: rgba(255,255,255,0.35);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }
        .contact-link-value {
          font-size: 0.875rem;
          color: rgba(255,255,255,0.8);
          font-weight: 500;
          margin-top: 2px;
        }

        .contact-bug-btn {
          width: 100%;
          margin-top: 4px;
        }

        /* Form */
        .contact-form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .contact-field {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .contact-label {
          font-size: 0.8rem;
          font-weight: 600;
          color: rgba(255,255,255,0.5);
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .contact-textarea {
          resize: vertical;
          min-height: 120px;
        }

        .contact-submit {
          width: 100%;
          padding: 15px;
          font-size: 0.95rem;
          border-radius: 14px;
        }

        .contact-spinner {
          width: 16px;
          height: 16px;
          border: 2px solid rgba(0,0,0,0.2);
          border-top-color: black;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }
        @keyframes spin { to { transform: rotate(360deg); } }

        /* Success */
        .contact-success {
          padding: 60px 36px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          text-align: center;
        }
        .contact-success-icon { font-size: 3rem; }
        .contact-success h3 { color: white; font-size: 1.4rem; }
        .contact-success p { color: rgba(255,255,255,0.5); font-size: 0.9rem; }

        @media (max-width: 900px) {
          .contact-layout {
            grid-template-columns: 1fr;
          }
          .contact-form-row { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}

export default Contact
