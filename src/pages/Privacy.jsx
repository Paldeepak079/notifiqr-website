import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, Shield } from 'lucide-react'

const Privacy = () => {
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
            <div className="legal-icon"><Shield size={24} /></div>
            <div className="section-label">Legal Document</div>
            <h1>Privacy Policy</h1>
            <p className="legal-date">Last updated: June 13, 2026</p>
          </div>

          <div className="glass-card legal-card">
            <div className="legal-body">
              <div className="legal-intro">
                <p>
                  At Notifiqr, we prioritize your privacy above all else. This Privacy Policy explains how we handle your notification data and metadata when you use the Notifiqr app.
                </p>
              </div>

              <section className="legal-section">
                <h2>1. Core Privacy Principles</h2>

                <h3>🛡️ On-Device Local Processing (Default)</h3>
                <p>
                  All notification reading, priority classification, smart categorization, and deadline parsing are performed entirely on your device. No notifications, app names, message content, or metadata are uploaded to any external server for processing.
                </p>
                <p>
                  The on-device AI classifier runs using only your phone's processor and memory. This is the default behavior and cannot be overridden without your explicit consent.
                </p>

                <h3>☁️ Premium Cloud Sync (Opt-In Only)</h3>
                <p>
                  Users with a Premium subscription may optionally enable Cloud Synchronization. When activated, encrypted notifications are securely backed up to your personal Firebase cloud database instance to synchronize data across your personal devices only.
                </p>
                <ul>
                  <li>Cloud sync is <strong>disabled by default</strong>.</li>
                  <li>No data is synced unless you explicitly enable the sync toggle in Settings.</li>
                  <li>All synced data is encrypted in transit (TLS 1.3) and at rest (AES-256).</li>
                  <li>Your cloud data belongs only to you and is accessible only by you.</li>
                </ul>

                <h3>🚫 No Third-Party Sharing</h3>
                <p>
                  We do not sell, lease, rent, or share your notification text, app names, action records, or metadata with third-party advertising companies, data brokers, or any other entities, ever.
                </p>
              </section>

              <section className="legal-section">
                <h2>2. Data We Collect</h2>
                <p>Notifiqr may collect and store the following data:</p>

                <h3>On-Device Data (Stays on your phone)</h3>
                <ul>
                  <li>Notification content, titles, and app names (stored locally, encrypted)</li>
                  <li>Priority classifications assigned to each notification</li>
                  <li>Action items and deadlines extracted from notifications</li>
                  <li>Smart Folder assignments</li>
                  <li>Privacy Health Score history</li>
                  <li>User preferences and settings</li>
                </ul>

                <h3>Analytics Data (Anonymous)</h3>
                <p>
                  We use Firebase Analytics to collect anonymized, aggregated usage statistics such as feature usage rates and crash reports. This data cannot be linked to individual users or their notification content.
                </p>
              </section>

              <section className="legal-section">
                <h2>3. Database Encryption</h2>
                <p>
                  All on-device data is protected by multiple layers of encryption:
                </p>
                <ul>
                  <li><strong>SQLCipher</strong>: The entire local database is encrypted with a 256-bit key.</li>
                  <li><strong>AES-256-GCM field encryption</strong>: Individual sensitive fields (notification body, app name, title) are additionally encrypted at the field level.</li>
                  <li><strong>Android KeyStore</strong>: Encryption keys are stored in the hardware-backed Android KeyStore, making them inaccessible even to other apps or root access.</li>
                </ul>
              </section>

              <section className="legal-section">
                <h2>4. Data Retention and Control</h2>
                <p>
                  You retain complete control over your data at all times:
                </p>
                <ul>
                  <li>You can wipe all locally stored notification history from Settings → Data → Clear All Data.</li>
                  <li>If cloud sync is enabled, you can delete all cloud data from Settings → Cloud → Delete Cloud Data.</li>
                  <li>Uninstalling the app automatically removes all local data.</li>
                  <li>We do not retain any data after you delete the app or clear your data.</li>
                </ul>
              </section>

              <section className="legal-section">
                <h2>5. Third-Party Services</h2>
                <p>Notifiqr uses the following third-party services, each with their own privacy policies:</p>
                <ul>
                  <li><strong>Firebase Analytics</strong> (Google) — anonymous usage analytics</li>
                  <li><strong>Firebase Crashlytics</strong> (Google) — crash reporting</li>
                  <li><strong>Google Play Billing</strong> — in-app purchases and subscription management</li>
                  <li><strong>Sentry</strong> — error tracking (no notification content is included in error reports)</li>
                </ul>
              </section>

              <section className="legal-section">
                <h2>6. Children's Privacy</h2>
                <p>
                  Notifiqr is not directed at children under the age of 13. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us immediately.
                </p>
              </section>

              <section className="legal-section">
                <h2>7. Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of significant changes through the app or via email. Continued use of Notifiqr after changes constitutes acceptance of the revised policy.
                </p>
              </section>

              <section className="legal-section">
                <h2>8. Contact Us</h2>
                <p>
                  If you have any questions, concerns, or requests regarding this Privacy Policy or your data, please contact us at:
                </p>
                <p>
                  <strong>Email:</strong>{' '}
                  <a href="mailto:notifiqr.app@gmail.com" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'underline' }}>
                    notifiqr.app@gmail.com
                  </a>
                </p>
                <p>
                  We are committed to resolving any privacy concerns you may have.
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
  .legal-page {
    min-height: 100vh;
    padding: 120px 0 80px;
  }
  .legal-content {
    max-width: 760px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
  .legal-back {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 10px;
    color: rgba(255,255,255,0.5);
    font-size: 0.875rem;
    font-weight: 500;
    text-decoration: none;
    transition: all 0.2s ease;
    width: fit-content;
    backdrop-filter: blur(10px);
  }
  .legal-back:hover {
    color: white;
    border-color: rgba(255,255,255,0.2);
    background: rgba(255,255,255,0.07);
  }
  .legal-header {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .legal-icon {
    width: 52px;
    height: 52px;
    border-radius: 14px;
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.12);
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(255,255,255,0.7);
  }
  .legal-header h1 {
    font-size: 2.4rem;
    font-weight: 800;
    letter-spacing: -0.04em;
    background: linear-gradient(135deg, white, rgba(255,255,255,0.6));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .legal-date {
    font-size: 0.85rem;
    color: rgba(255,255,255,0.3);
    margin: 0;
  }
  .legal-card {
    padding: 0;
  }
  .legal-body {
    padding: 40px;
    display: flex;
    flex-direction: column;
    gap: 36px;
  }
  .legal-intro p {
    font-size: 1rem;
    color: rgba(255,255,255,0.6);
    line-height: 1.7;
    margin: 0;
  }
  .legal-section {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }
  .legal-section h2 {
    font-size: 1.2rem;
    font-weight: 700;
    color: white;
    letter-spacing: -0.02em;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(255,255,255,0.07);
  }
  .legal-section h3 {
    font-size: 0.95rem;
    font-weight: 600;
    color: rgba(255,255,255,0.75);
    letter-spacing: -0.01em;
  }
  .legal-section p {
    font-size: 0.9rem;
    color: rgba(255,255,255,0.5);
    line-height: 1.72;
    margin: 0;
  }
  .legal-section ul {
    padding-left: 20px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .legal-section li {
    font-size: 0.9rem;
    color: rgba(255,255,255,0.5);
    line-height: 1.6;
  }
  .legal-section strong { color: rgba(255,255,255,0.75); }
`

export default Privacy
