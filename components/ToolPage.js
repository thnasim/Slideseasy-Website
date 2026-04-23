import Head from 'next/head';
import Link from 'next/link';
import Layout from './Layout';
import styles from '../styles/ToolPage.module.css';

export default function ToolPage({ tool }) {
  const { name, icon, subtitle, description, videoEmbed, steps, faqs } = tool;

  const benefits = [
    { icon: '/images/icons/share.png', title: 'Easy to Share', desc: 'Share your template with your entire team in seconds. One file, everyone aligned.' },
    { icon: '/images/icons/use.png', title: 'Easy to Use', desc: 'No design skills required. Every layout is drag-and-drop ready from day one.' },
    { icon: '/images/icons/consistent.png', title: 'Be Consistent', desc: 'Every slide your team creates looks on-brand, every single time.' },
    { icon: '/images/icons/time.png', title: 'Save Time', desc: 'Stop rebuilding slides from scratch. Your template handles the design work for you.' },
  ];

  return (
    <Layout>
      <Head>
        <title>{name} Presentation Templates — SlidesEasy</title>
        <meta name="description" content={`Custom ${name} presentation templates for your business. ${subtitle}`} />
        <link rel="icon" href="/images/favicon.png" />
      </Head>

      {/* ===== HERO ===== */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <div className={styles.heroIconWrap}>
              <img src={icon} alt={name} className={styles.heroIcon} />
            </div>
            <span className={styles.label}>{name} Templates</span>
            <h1 className={styles.heroTitle}>{subtitle}</h1>
            <p className={styles.heroDesc}>{description}</p>
            <div className={styles.heroCta}>
              <Link href="/requirements" className={styles.btn}>Get Your Template — $49</Link>
              <Link href="/contact" className={styles.btnAlt}>Custom Quote</Link>
            </div>
          </div>
          <div className={styles.heroImage}>
            <div className={styles.heroImageBox}>
              <img src={`/images/screenshots/${name.toLowerCase().replace(' ', '-')}.jpg`} alt={`${name} template preview`} />
            </div>
          </div>
        </div>
      </section>

      {/* ===== VIDEO ===== */}
      <section className={styles.videoSection}>
        <div className={styles.container}>
          <span className={styles.label}>See It In Action</span>
          <h2 className={styles.sectionTitle}>Watch how we design on {name}</h2>
          <div className={styles.videoWrapper}>
            {videoEmbed ? (
              <iframe src={videoEmbed} title={`How to design on ${name}`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            ) : (
              <div className={styles.videoPlaceholder}>
                <div className={styles.playBtn}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3" /></svg>
                </div>
                <p>Video coming soon — add your YouTube embed URL</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ===== HOW WE DESIGN — ALTERNATING IMAGE + TEXT ===== */}
      <section className={styles.designSection}>
        <div className={styles.container}>
          <span className={styles.label}>How We Design It</span>
          <h2 className={styles.sectionTitle}>How we design on {name}</h2>
          <div className={styles.designSteps}>
            {steps.map((step, i) => (
              <div key={step.title} className={`${styles.designRow} ${i % 2 !== 0 ? styles.designRowReverse : ''}`}>
                <div className={styles.designImage}>
                  <img src={step.img} alt={step.title} />
                </div>
                <div className={styles.designContent}>
                  <span className={styles.designNum}>0{i + 1}</span>
                  <h3 className={styles.designTitle}>{step.title}</h3>
                  <p className={styles.designDesc}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BENEFIT BOXES ===== */}
      <section className={styles.benefitsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <span className={styles.label}>Why It Matters</span>
            <h2 className={styles.sectionTitle}>What a proper {name} template<br />does for your business</h2>
          </div>
          <div className={styles.benefitsGrid}>
            {benefits.map((b) => (
              <div key={b.title} className={styles.benefitCard}>
                <div className={styles.benefitIconWrap}>
                  <img src={b.icon} alt={b.title} className={styles.benefitIcon} />
                </div>
                <h3 className={styles.benefitTitle}>{b.title}</h3>
                <p className={styles.benefitDesc}>{b.desc}</p>
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
                <img src={`/images/clients/client-${i + 1}.png`} alt={`Client ${i + 1}`} />
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
              { num: '02', title: 'Share Your Requirements', desc: `Tell us your brand colors, fonts, logo, and how you use ${name} day-to-day.` },
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
          <div className={styles.pricingWrap}>
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
                  <li key={f} className={styles.pricingFeature}><span className={styles.check}>✓</span> {f}</li>
                ))}
              </ul>
              <Link href="/requirements" className={styles.pricingCta}>Get Started — $49</Link>
            </div>
            <div className={styles.pricingContact}>
              <h3 className={styles.pricingContactTitle}>Need more slides or converting existing decks?</h3>
              <p className={styles.pricingContactDesc}>We handle large projects, multi-deck systems, and converting existing presentations into proper master slide templates.</p>
              <Link href="/contact" className={styles.pricingContactBtn}>Contact Us for a Custom Quote →</Link>
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
            <Link href="/requirements" className={styles.ctaBtn}>Get Your Template — $49</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
