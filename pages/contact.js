import Head from 'next/head';
import Layout from '../components/Layout';
import styles from '../styles/Contact.module.css';

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Contact SlidesEasy — Get in Touch</title>
        <meta name="description" content="Get in touch with SlidesEasy for custom presentation templates, enterprise quotes, or support." />
      </Head>

      <section className={styles.hero}>
        <div className={styles.container}>
          <span className={styles.label}>Contact Us</span>
          <h1 className={styles.title}>Let's talk about<br />your presentations</h1>
          <p className={styles.subtitle}>Have questions about our service, need a custom quote, or just want to say hello? We'd love to hear from you.</p>
        </div>
      </section>

      <section className={styles.main}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {/* Contact Form */}
            <div className={styles.formWrap}>
              <h2 className={styles.formTitle}>Send us a message</h2>
              <p className={styles.formDesc}>We respond to all inquiries within 24 hours.</p>

              <div className={styles.form}>
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label className={styles.fieldLabel}>First Name</label>
                    <input type="text" placeholder="John" className={styles.input} />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.fieldLabel}>Last Name</label>
                    <input type="text" placeholder="Smith" className={styles.input} />
                  </div>
                </div>

                <div className={styles.field}>
                  <label className={styles.fieldLabel}>Email Address</label>
                  <input type="email" placeholder="john@company.com" className={styles.input} />
                </div>

                <div className={styles.field}>
                  <label className={styles.fieldLabel}>Subject</label>
                  <select className={styles.input}>
                    <option value="">Select a topic</option>
                    <option>Custom template inquiry</option>
                    <option>Enterprise / more slides</option>
                    <option>Support with existing template</option>
                    <option>Partnership / collaboration</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className={styles.field}>
                  <label className={styles.fieldLabel}>Message</label>
                  <textarea
                    placeholder="Tell us about your project, your brand, and what you're looking to achieve..."
                    className={styles.textarea}
                    rows={6}
                  />
                </div>

                <button className={styles.submitBtn}>
                  Send Message
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Info Panel */}
            <div className={styles.infoPanel}>
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <h3 className={styles.infoTitle}>Email Us</h3>
                <p className={styles.infoText}>For all inquiries including support, custom quotes, and partnerships.</p>
                <a href="mailto:hello@slideseasy.com" className={styles.infoLink}>hello@slideseasy.com</a>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="9" />
                    <polyline points="12 7 12 12 15 15" />
                  </svg>
                </div>
                <h3 className={styles.infoTitle}>Response Time</h3>
                <p className={styles.infoText}>We respond to all messages within 24 hours, usually much faster during business hours.</p>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <h3 className={styles.infoTitle}>Fully Remote</h3>
                <p className={styles.infoText}>We work with clients worldwide. No location restrictions — wherever you are, we can help.</p>
              </div>

              <div className={styles.alreadyPurchased}>
                <h3 className={styles.apTitle}>Already purchased?</h3>
                <p className={styles.apText}>If you've already bought a package, please use our requirements form to submit your brand details.</p>
                <a href="/requirements" className={styles.apBtn}>Submit Requirements →</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
