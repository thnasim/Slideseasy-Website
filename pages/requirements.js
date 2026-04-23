import { useState } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import styles from '../styles/Requirements.module.css';

export default function Requirements() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, connect to your form backend here
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Layout>
        <Head>
          <title>Thank You — SlidesEasy</title>
        </Head>
        <section className={styles.thankYou}>
          <div className={styles.container}>
            <div className={styles.tyBox}>
              <div className={styles.tyIcon}>🎉</div>
              <h1 className={styles.tyTitle}>You're all set!</h1>
              <p className={styles.tySubtitle}>
                Thank you for submitting your requirements. Our team will review your details and reach out within <strong>a few hours</strong> with an update on your template progress.
              </p>
              <p className={styles.tyContact}>
                Have an urgent question? Email us at{' '}
                <a href="mailto:hello@slideseasy.com" className={styles.tyEmail}>hello@slideseasy.com</a>
              </p>
              <a href="/" className={styles.tyHome}>← Back to Home</a>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <Head>
        <title>Submit Your Requirements — SlidesEasy</title>
        <meta name="description" content="Submit your brand requirements to SlidesEasy after purchasing your custom presentation template package." />
      </Head>

      <section className={styles.hero}>
        <div className={styles.container}>
          <span className={styles.label}>Requirements Form</span>
          <h1 className={styles.title}>Thanks for your purchase!</h1>
          <p className={styles.subtitle}>
            We're excited to design your custom presentation template. Fill out the form below so we can get started on your branded slides right away.
          </p>
        </div>
      </section>

      <section className={styles.main}>
        <div className={styles.container}>
          <div className={styles.formGrid}>
            <form className={styles.form} onSubmit={handleSubmit}>

              {/* Personal Details */}
              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>
                  <span className={styles.sectionNum}>01</span>
                  Your Details
                </h2>
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label className={styles.label2}>Full Name *</label>
                    <input type="text" placeholder="Jane Smith" className={styles.input} required />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label2}>Email Address *</label>
                    <input type="email" placeholder="jane@company.com" className={styles.input} required />
                  </div>
                </div>
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label className={styles.label2}>Company / Brand Name *</label>
                    <input type="text" placeholder="Your Company" className={styles.input} required />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label2}>Preferred Tool *</label>
                    <select className={styles.input} required>
                      <option value="">Select your tool</option>
                      <option>PowerPoint</option>
                      <option>Google Slides</option>
                      <option>Canva</option>
                      <option>Figma</option>
                      <option>Keynote</option>
                      <option>Gamma</option>
                      <option>Claude Design</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Brand Information */}
              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>
                  <span className={styles.sectionNum}>02</span>
                  Brand Information
                </h2>
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label className={styles.label2}>Primary Brand Color (HEX) *</label>
                    <input type="text" placeholder="#FF4122" className={styles.input} required />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label2}>Secondary Brand Color (HEX)</label>
                    <input type="text" placeholder="#000000" className={styles.input} />
                  </div>
                </div>
                <div className={styles.field}>
                  <label className={styles.label2}>Brand Fonts</label>
                  <input type="text" placeholder="e.g. Inter for body, Montserrat Bold for headings" className={styles.input} />
                </div>
                <div className={styles.field}>
                  <label className={styles.label2}>Link to Brand Guidelines (if any)</label>
                  <input type="url" placeholder="https://drive.google.com/..." className={styles.input} />
                </div>
              </div>

              {/* Content Requirements */}
              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>
                  <span className={styles.sectionNum}>03</span>
                  Content & Layout Requirements
                </h2>
                <div className={styles.field}>
                  <label className={styles.label2}>What types of slides do you need? *</label>
                  <textarea
                    placeholder="e.g. Title slide, agenda, about us, team bios, data/charts, case studies, testimonials, thank you slide, etc."
                    className={styles.textarea}
                    rows={4}
                    required
                  />
                </div>
                <div className={styles.field}>
                  <label className={styles.label2}>What will you use these slides for? *</label>
                  <select className={styles.input} required>
                    <option value="">Select a use case</option>
                    <option>Investor / pitch deck</option>
                    <option>Sales presentations</option>
                    <option>Client reports</option>
                    <option>Internal team updates</option>
                    <option>Coaching / training</option>
                    <option>Real estate listings</option>
                    <option>Marketing / brand decks</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className={styles.field}>
                  <label className={styles.label2}>Additional Style Notes</label>
                  <textarea
                    placeholder="Any specific design preferences, things you love or hate in presentations, references you admire, etc."
                    className={styles.textarea}
                    rows={4}
                  />
                </div>
              </div>

              {/* File Uploads */}
              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>
                  <span className={styles.sectionNum}>04</span>
                  Upload Your Assets
                </h2>
                <p className={styles.uploadNote}>Upload your logo, brand guidelines, existing presentations, or reference images. Files are sent securely to our Google Drive.</p>

                <div className={styles.uploadBox}>
                  <input
                    type="file"
                    id="fileUpload"
                    multiple
                    accept=".png,.jpg,.jpeg,.pdf,.pptx,.ai,.svg,.zip"
                    className={styles.fileInput}
                  />
                  <label htmlFor="fileUpload" className={styles.uploadLabel}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="17 8 12 3 7 8" />
                      <line x1="12" y1="3" x2="12" y2="15" />
                    </svg>
                    <span className={styles.uploadText}>Click to upload files</span>
                    <span className={styles.uploadSub}>PNG, JPG, PDF, PPTX, AI, SVG, ZIP — max 50MB each</span>
                  </label>
                </div>

                <p className={styles.driveNote}>
                  Alternatively, share a Google Drive link with your assets:{' '}
                </p>
                <input type="url" placeholder="https://drive.google.com/drive/folders/..." className={styles.input} />
              </div>

              {/* Submit */}
              <div className={styles.submitWrap}>
                <button type="submit" className={styles.submitBtn}>
                  Submit Requirements
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
                <p className={styles.submitNote}>
                  Having issues? Email us directly at{' '}
                  <a href="mailto:hello@slideseasy.com" className={styles.emailLink}>hello@slideseasy.com</a>
                </p>
              </div>

            </form>

            {/* Side info */}
            <div className={styles.sidebar}>
              <div className={styles.sideCard}>
                <h3 className={styles.sideTitle}>What happens next?</h3>
                <div className={styles.steps}>
                  {[
                    { num: '1', text: 'We review your requirements within a few hours' },
                    { num: '2', text: 'Our designer starts building your custom template' },
                    { num: '3', text: 'We deliver the file + tutorial video within 24 hours' },
                    { num: '4', text: 'We revise until you\'re completely satisfied' },
                  ].map((s) => (
                    <div key={s.num} className={styles.step}>
                      <span className={styles.stepDot}>{s.num}</span>
                      <p className={styles.stepText}>{s.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.sideCard}>
                <h3 className={styles.sideTitle}>Your package includes</h3>
                <ul className={styles.includes}>
                  {['Up to 20 custom slides', 'Branded master slide / theme', 'Custom drag-and-drop layouts', 'How-to-use tutorial video', '24/7 support', 'Revisions until satisfied'].map((item) => (
                    <li key={item} className={styles.includeItem}>
                      <span className={styles.check}>✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
