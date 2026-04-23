import Head from 'next/head';
import Link from 'next/link';
import Layout from './Layout';
import styles from '../styles/ToolPage.module.css';

export default function ToolPage({ tool }) {
  const { name, icon, subtitle, description, videoEmbed, features, faqs, color = '#FF4122' } = tool;

  return (
    <Layout>
      <Head>
        <title>{name} Presentation Templates — SlidesEasy</title>
        <meta name="description" content={`Custom ${name} presentation templates for your business. ${subtitle}`} />
      </Head>

      {/* ===== HERO ===== */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <span className={styles.label}>{icon} {name} Templates</span>
            <h1 className={styles.heroTitle}>{subtitle}</h1>
            <p className={styles.heroDesc}>{description}</p>
            <div className={styles.heroCta}>
              <Link href="/requirements" className={styles.btn}>
                Get Your Template — $49
              </Link>
              <Link href="/contact" className={styles.btnAlt}>
                Custom Quote
              </Link>
            </div>
          </div>
          <div className={styles.heroImage}>
            <div className={styles.heroImageBox}>
              {/* Replace src with actual tool screenshot */}
              <img src={`/images/${name.toLowerCase().replace(' ', '-')}-preview.jpg`} alt={`${name} template preview`} />
            </div>
          </div>
        </div>
      </section>

      {/* ===== VIDEO ===== */}
      <section className={styles.videoSection}>
        <div className={styles.container}>
          <span className={styles.label}>See It In Action</span>
          <h2 className={styles.sectionTitle}>Watch how we design<br />on {name}</h2>
          <div className={styles.videoWrapper}>
            {videoEmbed ? (
              <iframe
                src={videoEmbed}
                title={`How to design on ${name}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div className={styles.videoPlaceholder}>
                <div className={styles.playBtn}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>
                <p>Video coming soon</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ===== HOW WE DESIGN ===== */}
      <section className={styles.featuresSection}>
        <div className={styles.container}>
          <span className={styles.label}>The Process</span>
          <h2 className={styles.sectionTitle}>How we design on {name}</h2>
          <div className={styles.featuresGrid}>
            {features.map((f, i) => (
              <div key={f.title} className={styles.featureCard}>
                <span className={styles.featureIcon}>{f.icon}</span>
                <h3 className={styles.featureTitle}>{f.title}</h3>
                <p className={styles.featureDesc}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CLIENT LOGOS ===== */}
      <section className={styles.logos}>
        <div className={styles.container}>
          <p className={styles.logosTitle}>Trusted by <strong>300+</strong> businesses worldwide</p>
          <div className={styles.logosGrid}>
            {[...Array(8)].map((_, i) => (
              <div key={i} className={styles.logoItem}>
                <img src={`/images/client-logo-${i + 1}.png`} alt={`Client ${i + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className={styles.howSection}>
        <div className={styles.container}>
          <span className={styles.label}>How It Works</span>
          <h2 className={styles.sectionTitle}>Three steps to your perfect {name} template</h2>
          <div className={styles.stepsGrid}>
            {[
              { num: '01', title: 'Subscribe to Our Package', desc: 'Get started with our $49 package — up to 20 custom slides delivered in 24 hours.' },
              { num: '02', title: 'Share Your Brand & Requirements', desc: `Tell us your brand colors, fonts, logo, and how you plan to use ${name}.` },
              { num: '03', title: `Get Your ${name} Template`, desc: 'We design until it fits your brand style and deliver with a video tutorial.' },
            ].map((step) => (
              <div key={step.num} className={styles.stepCard}>
                <span className={styles.stepNum}>{step.num}</span>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRICING ===== */}
      <section className={styles.pricingSection}>
        <div className={styles.container}>
          <span className={styles.label}>Pricing</span>
          <h2 className={styles.sectionTitle}>Simple pricing</h2>
          <div className={styles.pricingGrid}>
            <div className={styles.pricingCard}>
              <div className={styles.pricingBadge}>Most Popular</div>
              <div className={styles.pricingPrice}>
                <span className={styles.pricingCurrency}>$</span>
                <span className={styles.pricingAmount}>49</span>
              </div>
              <p className={styles.pricingName}>Custom {name} Template</p>
              <p className={styles.pricingDesc}>Up to 20 custom slides delivered within 24 hours</p>
              <ul className={styles.pricingFeatures}>
                {['Custom Branding (colors, fonts, logo)', 'Easy-to-use drag-and-drop layouts', 'How-to-use tutorial video', '24/7 support', 'Unlimited revisions'].map((f) => (
                  <li key={f} className={styles.pricingFeature}>
                    <span className={styles.check}>✓</span> {f}
                  </li>
                ))}
              </ul>
              <Link href="/requirements" className={styles.pricingCta}>Get Started — $49</Link>
            </div>
            <div className={styles.pricingCard}>
              <div className={styles.pricingPrice} style={{ color: 'rgba(255,255,255,0.5)' }}>
                <span className={styles.pricingCurrency}>Custom</span>
              </div>
              <p className={styles.pricingName}>Enterprise / More Slides</p>
              <p className={styles.pricingDesc}>Need more than 20 slides or special requirements?</p>
              <ul className={styles.pricingFeatures}>
                {['20+ slide projects', 'Convert existing decks', 'Multi-tool template systems', 'Team training', 'Priority delivery'].map((f) => (
                  <li key={f} className={styles.pricingFeature}>
                    <span className={styles.check}>✓</span> {f}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className={styles.pricingCtaAlt}>Contact Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className={styles.faqSection}>
        <div className={styles.container}>
          <span className={styles.label}>FAQ</span>
          <h2 className={styles.sectionTitle}>{name}-specific questions</h2>
          <div className={styles.faqList}>
            {faqs.map((faq) => (
              <details key={faq.q} className={styles.faqItem}>
                <summary className={styles.faqQ}>{faq.q}</summary>
                <p className={styles.faqA}>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaBox}>
            <span className={styles.label}>Ready?</span>
            <h2 className={styles.ctaTitle}>Start with a branded<br />{name} template today</h2>
            <Link href="/requirements" className={styles.ctaBtn}>
              Get Your Template — $49
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
