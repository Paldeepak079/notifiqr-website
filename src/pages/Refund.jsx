import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, RefreshCw } from 'lucide-react'

const Refund = () => {
  return (
    <main className="legal-page">
      <div className="container">
        <motion.div
          className="legal-content"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/" className="legal-back">
            <ArrowLeft size={16} />
            Back to Home
          </Link>

          <div className="legal-header">
            <div className="legal-icon"><RefreshCw size={24} /></div>
            <div className="section-label">Legal Document</div>
            <h1>Refund Policy</h1>
            <p className="legal-date">Last updated: June 13, 2026</p>
          </div>

          <div className="glass-card legal-card">
            <div className="legal-body">
              <div className="legal-intro">
                <p>
                  We want you to be completely satisfied with Notifiqr. If you're not happy with your purchase, we're here to help. This Refund Policy outlines when and how you can request a refund.
                </p>
              </div>

              <section className="legal-section">
                <h2>1. Free Trial</h2>
                <p>
                  All new Notifiqr Premium subscriptions include a <strong>7-day free trial</strong>. You will not be charged during the trial period. You can cancel at any time during the trial without being charged.
                </p>
                <p>
                  If you forget to cancel before your trial ends, you will be charged for the applicable subscription period. In such cases, you may still request a refund per the terms below.
                </p>
              </section>

              <section className="legal-section">
                <h2>2. Monthly Subscriptions</h2>
                <p>
                  For Monthly subscriptions (₹69/month):
                </p>
                <ul>
                  <li>You can cancel your subscription at any time through Google Play.</li>
                  <li>Cancellation takes effect at the end of your current billing period.</li>
                  <li>Refunds for monthly subscriptions are available within <strong>7 days</strong> of the initial purchase or renewal charge.</li>
                  <li>To request a refund, contact us at notifiqr.app@gmail.com with your order ID.</li>
                </ul>
              </section>

              <section className="legal-section">
                <h2>3. Yearly Subscriptions</h2>
                <p>
                  For Yearly subscriptions (₹969/year):
                </p>
                <ul>
                  <li>Full refund available within <strong>7 days</strong> of the initial yearly charge.</li>
                  <li>Prorated refunds may be considered for annual subscriptions cancelled after 7 days but within 30 days, at our discretion.</li>
                  <li>No refunds for yearly subscriptions cancelled after 30 days.</li>
                  <li>You retain access to Premium features until the end of the paid period.</li>
                </ul>
              </section>

              <section className="legal-section">
                <h2>4. Lifetime Plans</h2>
                <p>
                  For the Lifetime plan (₹9,669 one-time):
                </p>
                <ul>
                  <li>Refund available within <strong>14 days</strong> of purchase if you are not satisfied.</li>
                  <li>Please contact us and describe why the app did not meet your expectations — we want to improve!</li>
                  <li>No refunds after 14 days for Lifetime purchases.</li>
                </ul>
              </section>

              <section className="legal-section">
                <h2>5. Google Play Refunds</h2>
                <p>
                  As Notifiqr is distributed through the Google Play Store, you may also request refunds directly through Google Play within Google's standard refund window (48 hours for most in-app purchases).
                </p>
                <p>
                  Visit <a href="https://support.google.com/googleplay/answer/2479637" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'underline' }}>Google Play's refund policy</a> for more details on their process.
                </p>
              </section>

              <section className="legal-section">
                <h2>6. Exceptions</h2>
                <p>Refunds may not be granted in the following circumstances:</p>
                <ul>
                  <li>The refund request is made after the applicable time window</li>
                  <li>You have violated our Terms of Service</li>
                  <li>The issue is related to your device compatibility or internet connection</li>
                  <li>You have already received a refund for the same subscription period</li>
                </ul>
              </section>

              <section className="legal-section">
                <h2>7. How to Request a Refund</h2>
                <p>To request a refund, please contact us with the following information:</p>
                <ul>
                  <li>Your full name and email address used for purchase</li>
                  <li>Your Google Play order ID (found in your purchase confirmation email)</li>
                  <li>The subscription plan you purchased</li>
                  <li>Date of purchase</li>
                  <li>Brief reason for requesting a refund</li>
                </ul>
                <p>
                  Email:{' '}
                  <a href="mailto:notifiqr.app@gmail.com?subject=Refund Request — Notifiqr" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'underline' }}>
                    notifiqr.app@gmail.com
                  </a>
                </p>
                <p>
                  We aim to process all refund requests within <strong>3-5 business days</strong>.
                </p>
              </section>

              <section className="legal-section">
                <h2>8. Contact Us</h2>
                <p>
                  For any questions about our refund policy, please reach out to us at{' '}
                  <a href="mailto:notifiqr.app@gmail.com" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'underline' }}>
                    notifiqr.app@gmail.com
                  </a>{' '}
                  and we'll be happy to help.
                </p>
              </section>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{legalStyles}</style>
    </main>
  )
}

const legalStyles = `
  .legal-page { min-height: 100vh; padding: 120px 0 80px; }
  .legal-content { max-width: 760px; margin: 0 auto; display: flex; flex-direction: column; gap: 32px; }
  .legal-back {
    display: inline-flex; align-items: center; gap: 8px; padding: 8px 16px;
    background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.1);
    border-radius: 10px; color: rgba(255,255,255,0.5); font-size: 0.875rem;
    font-weight: 500; text-decoration: none; transition: all 0.2s ease;
    width: fit-content; backdrop-filter: blur(10px);
  }
  .legal-back:hover { color: white; border-color: rgba(255,255,255,0.2); background: rgba(255,255,255,0.07); }
  .legal-header { display: flex; flex-direction: column; gap: 12px; }
  .legal-icon { width: 52px; height: 52px; border-radius: 14px; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12); display: flex; align-items: center; justify-content: center; color: rgba(255,255,255,0.7); }
  .legal-header h1 { font-size: 2.4rem; font-weight: 800; letter-spacing: -0.04em; background: linear-gradient(135deg, white, rgba(255,255,255,0.6)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
  .legal-date { font-size: 0.85rem; color: rgba(255,255,255,0.3); margin: 0; }
  .legal-card { padding: 0; }
  .legal-body { padding: 40px; display: flex; flex-direction: column; gap: 36px; }
  .legal-intro p { font-size: 1rem; color: rgba(255,255,255,0.6); line-height: 1.7; margin: 0; }
  .legal-section { display: flex; flex-direction: column; gap: 14px; }
  .legal-section h2 { font-size: 1.2rem; font-weight: 700; color: white; letter-spacing: -0.02em; padding-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.07); }
  .legal-section p { font-size: 0.9rem; color: rgba(255,255,255,0.5); line-height: 1.72; margin: 0; }
  .legal-section ul { padding-left: 20px; display: flex; flex-direction: column; gap: 8px; }
  .legal-section li { font-size: 0.9rem; color: rgba(255,255,255,0.5); line-height: 1.6; }
  .legal-section strong { color: rgba(255,255,255,0.75); }
`

export default Refund
