import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, FileText } from 'lucide-react'

const Terms = () => {
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
            <div className="legal-icon"><FileText size={24} /></div>
            <div className="section-label">Legal Document</div>
            <h1>Terms of Service</h1>
            <p className="legal-date">Last updated: June 13, 2026</p>
          </div>

          <div className="glass-card legal-card">
            <div className="legal-body">
              <div className="legal-intro">
                <p>
                  By downloading, installing, or using Notifiqr ("the App"), you agree to be bound by these Terms of Service. Please read them carefully before using the App.
                </p>
              </div>

              <section className="legal-section">
                <h2>1. Acceptance of Terms</h2>
                <p>
                  These Terms of Service constitute a legally binding agreement between you ("User") and Notifiqr ("we," "us," "our"). By using the App, you confirm that you are at least 13 years of age and agree to comply with these terms.
                </p>
              </section>

              <section className="legal-section">
                <h2>2. License Grant</h2>
                <p>
                  We grant you a limited, non-exclusive, non-transferable, revocable license to use the App for your personal, non-commercial purposes. This license does not include:
                </p>
                <ul>
                  <li>Modifying, decompiling, or reverse engineering the App</li>
                  <li>Creating derivative works based on the App</li>
                  <li>Removing any proprietary notices or labels from the App</li>
                  <li>Using the App for any commercial purpose without written consent</li>
                  <li>Circumventing any technical measures that protect the App</li>
                </ul>
              </section>

              <section className="legal-section">
                <h2>3. Subscription and Billing</h2>
                <p>
                  Notifiqr offers free and premium subscription tiers. Premium subscriptions are managed through Google Play Billing. By subscribing, you agree to:
                </p>
                <ul>
                  <li>Pay the applicable fees as displayed at the time of purchase</li>
                  <li>Allow automatic renewal of your subscription unless cancelled before the renewal date</li>
                  <li>Billing and cancellation terms set forth by Google Play</li>
                </ul>
                <p>
                  <strong>Monthly Plan:</strong> ₹69/month, billed monthly, cancellable anytime.<br />
                  <strong>Yearly Plan:</strong> ₹969/year, billed annually, cancellable anytime.<br />
                  <strong>Lifetime Plan:</strong> ₹9,669, one-time payment, no recurring charges.
                </p>
                <p>
                  Prices are in Indian Rupees (INR). All purchases are final except as described in our Refund Policy.
                </p>
              </section>

              <section className="legal-section">
                <h2>4. User Responsibilities</h2>
                <p>You agree to use Notifiqr only for lawful purposes and agree not to:</p>
                <ul>
                  <li>Use the App in any way that violates applicable local, national, or international laws or regulations</li>
                  <li>Attempt to gain unauthorized access to any part of the App or its infrastructure</li>
                  <li>Use the App to transmit any harmful, offensive, or malicious content</li>
                  <li>Interfere with or disrupt the integrity or performance of the App</li>
                </ul>
              </section>

              <section className="legal-section">
                <h2>5. Intellectual Property</h2>
                <p>
                  The App, including all content, features, and functionality (including but not limited to information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof), is owned by Notifiqr and is protected by Indian and international copyright, trademark, patent, trade secret, and other intellectual property laws.
                </p>
              </section>

              <section className="legal-section">
                <h2>6. Disclaimer of Warranties</h2>
                <p>
                  THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT THE APP WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
                </p>
              </section>

              <section className="legal-section">
                <h2>7. Limitation of Liability</h2>
                <p>
                  TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, NOTIFIQR SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF DATA, LOSS OF PROFITS, OR BUSINESS INTERRUPTION, ARISING FROM YOUR USE OF THE APP.
                </p>
              </section>

              <section className="legal-section">
                <h2>8. Governing Law</h2>
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts located in India.
                </p>
              </section>

              <section className="legal-section">
                <h2>9. Changes to Terms</h2>
                <p>
                  We reserve the right to modify these Terms at any time. We will provide notice of significant changes through the App or via email. Your continued use of the App after changes constitutes acceptance of the revised Terms.
                </p>
              </section>

              <section className="legal-section">
                <h2>10. Contact</h2>
                <p>
                  For questions about these Terms, please contact us at{' '}
                  <a href="mailto:notifiqr.app@gmail.com" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'underline' }}>
                    notifiqr.app@gmail.com
                  </a>
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
  .legal-icon {
    width: 52px; height: 52px; border-radius: 14px;
    background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12);
    display: flex; align-items: center; justify-content: center; color: rgba(255,255,255,0.7);
  }
  .legal-header h1 {
    font-size: 2.4rem; font-weight: 800; letter-spacing: -0.04em;
    background: linear-gradient(135deg, white, rgba(255,255,255,0.6));
    -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
  }
  .legal-date { font-size: 0.85rem; color: rgba(255,255,255,0.3); margin: 0; }
  .legal-card { padding: 0; }
  .legal-body { padding: 40px; display: flex; flex-direction: column; gap: 36px; }
  .legal-intro p { font-size: 1rem; color: rgba(255,255,255,0.6); line-height: 1.7; margin: 0; }
  .legal-section { display: flex; flex-direction: column; gap: 14px; }
  .legal-section h2 { font-size: 1.2rem; font-weight: 700; color: white; letter-spacing: -0.02em; padding-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.07); }
  .legal-section h3 { font-size: 0.95rem; font-weight: 600; color: rgba(255,255,255,0.75); }
  .legal-section p { font-size: 0.9rem; color: rgba(255,255,255,0.5); line-height: 1.72; margin: 0; }
  .legal-section ul { padding-left: 20px; display: flex; flex-direction: column; gap: 8px; }
  .legal-section li { font-size: 0.9rem; color: rgba(255,255,255,0.5); line-height: 1.6; }
  .legal-section strong { color: rgba(255,255,255,0.75); }
`

export default Terms
