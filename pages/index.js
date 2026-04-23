import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

const tools = [
  { name: 'PowerPoint', href: '/powerpoint', icon: '📊', color: '#D65A31' },
  { name: 'Google Slides', href: '/google-slides', icon: '📈', color: '#34A853' },
  { name: 'Canva', href: '/canva', icon: '🎨', color: '#7D2AE8' },
  { name: 'Figma', href: '/figma', icon: '✏️', color: '#F24E1E' },
  { name: 'Keynote', href: '/keynote', icon: '🍎', color: '#0071E3' },
  { name: 'Gamma', href: '/gamma', icon: '⚡', color: '#8B5CF6' },
  { name: 'Claude Design', href: '/claude-design', icon: '🤖', color: '#D97706' },
];

const toolDetails = [
  {
    name: 'PowerPoint',
    subtitle: 'The industry-standard for corporate presentations',
    description: 'We craft custom PowerPoint master slides with branded themes, custom layouts, and reusable components so every slide you create looks polished and on-brand.',
    href: '/powerpoint',
  },
  {
    name: 'Google Slides',
    subtitle: 'Collaborative cloud-based presentations',
    description: 'We design Google Slides themes with custom master layouts, placeholder structures, and brand-consistent styling — ready to share and collaborate instantly.',
    href: '/google-slides',
  },
  {
    name: 'Canva',
    subtitle: 'Beautiful drag-and-drop presentations',
    description: 'Our Canva Brand Kit setup includes custom fonts, color palettes, and branded templates that your team can use without needing a designer.',
    href: '/canva',
  },
  {
    name: 'Figma',
    subtitle: 'Design-system-powered slide decks',
    description: 'We build Figma presentation templates with component libraries, auto-layout slides, and a consistent design system for professional decks.',
    href: '/figma',
  },
  {
    name: 'Keynote',
    subtitle: 'Premium Apple-native presentations',
    description: 'We design Keynote master slides with elegant animations, custom themes, and pixel-perfect layouts optimized for Mac and iPad users.',
    href: '/keynote',
  },
  {
    name: 'Gamma',
    subtitle: 'AI-powered modern presentations',
    description: 'We configure custom Gamma workspaces with branded themes and structure guidelines so your AI-generated slides always match your brand.',
    href: '/gamma',
  },
  {
    name: 'Claude Design',
    subtitle: 'Next-gen AI design system templates',
    description: 'We create structured prompt libraries and design system templates for Claude\'s artifact canvas, enabling AI-assisted branded presentation creation.',
    href: '/claude-design',
  },
];

const faqs = [
  { q: 'How does the $49 package work?', a: 'You purchase the package, fill out our requirements form, share your brand assets, and we deliver a custom presentation template with up to 20 slides within 24 hours.' },
  { q: 'What if I need more than 20 slides?', a: 'Contact us at hello@slideseasy.com. We offer custom quotes for larger projects, multi-deck packages, and converting existing presentations to master slides.' },
  { q: 'Do I need design skills to use the templates?', a: 'Not at all. Every template we deliver includes drag-and-drop layouts, pre-set styles, and a how-to-use tutorial video so anyone on your team can create great slides.' },
  { q: 'What format do I receive the template in?', a: 'We deliver in whichever tool you choose: .pptx for PowerPoint, Google Slides link, Canva template, Figma file, Keynote file, or Gamma/Claude workspace setup.' },
  { q: 'Can I request revisions?', a: 'Yes. We design until it fits your brand style. If you\'re not happy with the initial delivery, we revise until you\'re satisfied.' },
  { q: 'How do I share my brand assets?', a: 'After purchase, you\'ll be directed to our requirements form where you can upload your logo, brand guidelines, color codes, fonts, and content examples.' },
];

const testimonials = [
  { name: 'Sarah Mitchell', role: 'Startup Founder', company: 'TechLaunch', text: 'We were struggling with inconsistent slides across our team. SlidesEasy delivered a stunning PowerPoint master that made us look like a Series B company on our seed round pitch.', rating: 5 },
  { name: 'David Chen', role: 'Executive Coach', company: 'Peak Coaching', text: 'The Google Slides template they built for my coaching business is incredible. Every client presentation now looks professional and consistent. Worth every penny.', rating: 5 },
  { name: 'Amelia Torres', role: 'Real Estate Agent', company: 'Prime Properties', text: 'My property listing presentations went from amateur to luxury. The Canva template is so easy to use — I just drop in the photos and the design does the rest.', rating: 5 },
  { name: 'Marcus Reid', role: 'Marketing Director', company: 'BrandForce', text: 'We needed a Figma presentation system for our agency. SlidesEasy delivered a component library that our whole team now uses. The ROI was immediate.', rating: 5 },
];

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>SlidesEasy — Custom Presentation Templates for Business</title>
        <meta name="description" content="Custom branded presentation templates for startups, coaching businesses, real estate, and corporate teams. PowerPoint, Google Slides, Canva, Figma, Keynote, Gamma & Claude Design." />
      </Head>

      {/* ===== HERO ===== */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <span className={styles.heroBadge}>
              <span className={styles.heroBadgeDot} />
              Custom templates · 24hr delivery · $49
            </span>
            <h1 className={styles.heroTitle}>
              Branded Presentation Templates That Create <span className={styles.heroAccent}>Impact</span> with Ease
            </h1>
            <p className={styles.heroSubtitle}>
              We create custom master slides that save your time, reduce effort, and ensure consistency across every presentation your team makes.
            </p>
            <div className={styles.heroCta}>
              <Link href="#pricing" className={styles.heroBtn}>
                Join Now — $49
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
              <button className={styles.heroWatch}>
                <span className={styles.heroPlayBtn}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </span>
                Watch Demo
              </button>
            </div>
            <p className={styles.heroNote}>300+ businesses trust SlidesEasy · No subscription required</p>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.heroImageFrame}>
              <div className={styles.heroImagePlaceholder}>
                <div className={styles.slideMock}>
                  <div className={styles.slideMockBar}>
                    <span /><span /><span />
                  </div>
                  <div className={styles.slideMockContent}>
                    <div className={styles.slideMockLine} style={{ width: '60%', height: '16px', marginBottom: '12px', background: '#FF4122' }} />
                    <div className={styles.slideMockLine} style={{ width: '90%', height: '10px', marginBottom: '8px' }} />
                    <div className={styles.slideMockLine} style={{ width: '75%', height: '10px', marginBottom: '24px' }} />
                    <div className={styles.slideMockGrid}>
                      <div className={styles.slideMockCard} />
                      <div className={styles.slideMockCard} />
                      <div className={styles.slideMockCard} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== IMAGE CAROUSEL ===== */}
      <section className={styles.carousel}>
        <div className={styles.carouselTrack}>
          {[...Array(14)].map((_, i) => (
            <div key={i} className={styles.carouselItem}>
              <img src={`/images/slide-${(i % 7) + 1}.jpg`} alt={`Template ${(i % 7) + 1}`} />
            </div>
          ))}
        </div>
      </section>

      {/* ===== CLIENT LOGOS ===== */}
      <section className={`${styles.section} ${styles.logos}`}>
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

      {/* ===== WHAT YOU WILL GET ===== */}
      <section id="features" className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <span className={styles.label}>What You'll Get</span>
            <h2 className={styles.h2}>Everything your brand needs<br />in one presentation system</h2>
          </div>
          <div className={styles.featuresGrid}>
            {[
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M19.5 12c0 .6-.1 1.2-.2 1.8l2.1 1.6-2 3.5-2.5-.8c-1 .7-2 1.2-3.2 1.5l-.4 2.6h-4l-.4-2.6c-1.1-.3-2.2-.8-3.2-1.5l-2.5.8-2-3.5 2.1-1.6c-.1-.6-.2-1.2-.2-1.8s.1-1.2.2-1.8L1.3 8.6l2-3.5 2.5.8c1-.7 2-1.2 3.2-1.5l.4-2.6h4l.4 2.6c1.1.3 2.2.8 3.2 1.5l2.5-.8 2 3.5-2.1 1.6c.1.6.2 1.2.2 1.8z" />
                  </svg>
                ),
                title: 'Branded Design',
                desc: 'We design the theme based on your brand typography, colors, and style — ensuring every slide reflects who you are.',
              },
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="3" width="7" height="7" rx="1" />
                    <rect x="14" y="3" width="7" height="7" rx="1" />
                    <rect x="3" y="14" width="7" height="7" rx="1" />
                    <rect x="14" y="14" width="7" height="7" rx="1" />
                  </svg>
                ),
                title: 'Custom Layouts',
                desc: 'We design each layout specifically for the content types you use most — no more forcing your content into generic templates.',
              },
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="3" width="18" height="14" rx="2" />
                    <path d="M3 9h18" />
                    <path d="M9 21l3-4 3 4" />
                  </svg>
                ),
                title: 'Proper Structure',
                desc: 'All elements are built in the master slide or theme builder — making every component drag-and-drop ready for your team.',
              },
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="9" />
                    <polyline points="12 7 12 12 15 15" />
                  </svg>
                ),
                title: 'Fast Turnaround',
                desc: 'Our expert team designs and delivers your template file plus a tutorial video explaining how to use it — all within 24 hours.',
              },
            ].map((f) => (
              <div key={f.title} className={styles.featureCard}>
                <div className={styles.featureIcon}>{f.icon}</div>
                <h3 className={styles.featureTitle}>{f.title}</h3>
                <p className={styles.featureDesc}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TOOLBOX ===== */}
      <section className={`${styles.section} ${styles.toolboxSection}`}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <span className={styles.label}>Supported Tools</span>
            <h2 className={styles.h2}>We design on your<br />preferred platform</h2>
          </div>
          <div className={styles.toolboxGrid}>
            {tools.map((tool) => (
              <Link key={tool.name} href={tool.href} className={styles.toolCard}>
                <span className={styles.toolIcon}>{tool.icon}</span>
                <span className={styles.toolName}>{tool.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TOOL SHOWCASE ===== */}
      <section className={`${styles.section} ${styles.toolShowcase}`}>
        <div className={styles.container}>
          <div className={styles.showcaseLayout}>
            <div className={styles.showcaseTitles}>
              <span className={styles.label}>Per Tool</span>
              <h2 className={styles.h2} style={{ marginBottom: '40px' }}>Built for every<br />platform</h2>
              {toolDetails.map((tool, i) => (
                <div key={tool.name} className={styles.showcaseItem}>
                  <h3 className={styles.showcaseTitle}>{tool.name}</h3>
                  <p className={styles.showcaseSubtitle}>{tool.subtitle}</p>
                  <p className={styles.showcaseDesc}>{tool.description}</p>
                  <Link href={tool.href} className={styles.showcaseLink}>
                    Learn more →
                  </Link>
                </div>
              ))}
            </div>
            <div className={styles.showcaseImage}>
              <div className={styles.showcaseImageBox}>
                <img src="/images/tool-preview.jpg" alt="Tool preview" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== HOW WE DESIGN ===== */}
      <section className={`${styles.section} ${styles.howSection}`}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <span className={styles.label}>How It Works</span>
            <h2 className={styles.h2}>Three steps to your<br />perfect template</h2>
          </div>
          <div className={styles.stepsGrid}>
            {[
              { num: '01', title: 'Subscribe to Our Package', desc: 'Get started with our simple $49 package for up to 20 custom slides with 24-hour delivery.' },
              { num: '02', title: 'Share Your Brand & Requirements', desc: 'Tell us your brand colors, fonts, logo, and the content layouts you need most.' },
              { num: '03', title: 'Get Your Template', desc: 'We design until it fits your brand style perfectly — and deliver with a tutorial video.' },
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

      {/* ===== TESTIMONIALS ===== */}
      <section className={`${styles.section} ${styles.testimonialsSection}`}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <span className={styles.label}>Testimonials</span>
            <h2 className={styles.h2}>What our clients say</h2>
          </div>
          <div className={styles.testimonialsGrid}>
            {testimonials.map((t) => (
              <div key={t.name} className={styles.testimonialCard}>
                <div className={styles.stars}>
                  {[...Array(t.rating)].map((_, i) => (
                    <span key={i} className={styles.star}>★</span>
                  ))}
                </div>
                <p className={styles.testimonialText}>"{t.text}"</p>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.authorAvatar}>{t.name[0]}</div>
                  <div>
                    <p className={styles.authorName}>{t.name}</p>
                    <p className={styles.authorRole}>{t.role}, {t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRICING ===== */}
      <section id="pricing" className={`${styles.section} ${styles.pricingSection}`}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <span className={styles.label}>Pricing</span>
            <h2 className={styles.h2}>Simple, transparent pricing</h2>
          </div>
          <div className={styles.pricingGrid}>
            <div className={styles.pricingCard}>
              <div className={styles.pricingBadge}>Most Popular</div>
              <div className={styles.pricingPrice}>
                <span className={styles.pricingCurrency}>$</span>
                <span className={styles.pricingAmount}>49</span>
              </div>
              <p className={styles.pricingName}>Custom Template</p>
              <p className={styles.pricingDesc}>Up to 20 custom slides delivered within 24 hours</p>
              <ul className={styles.pricingFeatures}>
                {['Custom Branding (colors, fonts, logo)', 'Easy-to-use drag-and-drop layouts', 'How-to-use tutorial video', '24/7 support', 'Unlimited revisions until satisfied'].map((f) => (
                  <li key={f} className={styles.pricingFeature}>
                    <span className={styles.checkIcon}>✓</span> {f}
                  </li>
                ))}
              </ul>
              <Link href="/requirements" className={styles.pricingCta}>
                Get Started — $49
              </Link>
            </div>

            <div className={styles.pricingCard}>
              <div className={styles.pricingPrice} style={{ color: 'rgba(255,255,255,0.5)' }}>
                <span className={styles.pricingCurrency}>Custom</span>
              </div>
              <p className={styles.pricingName}>Enterprise / More Slides</p>
              <p className={styles.pricingDesc}>Need more than 20 slides, or converting existing presentations to master slides?</p>
              <ul className={styles.pricingFeatures}>
                {['20+ slide projects', 'Convert existing decks to master slides', 'Multi-tool template systems', 'Team onboarding & training', 'Priority turnaround'].map((f) => (
                  <li key={f} className={styles.pricingFeature}>
                    <span className={styles.checkIcon}>✓</span> {f}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className={styles.pricingCtaAlt}>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className={`${styles.section} ${styles.faqSection}`}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <span className={styles.label}>FAQ</span>
            <h2 className={styles.h2}>Common questions</h2>
          </div>
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

      {/* ===== FINAL CTA ===== */}
      <section className={styles.finalCta}>
        <div className={styles.container}>
          <div className={styles.finalCtaBox}>
            <span className={styles.label}>Ready to Start?</span>
            <h2 className={styles.finalCtaTitle}>Make every presentation<br />look professionally designed</h2>
            <p className={styles.finalCtaSubtitle}>Join 300+ businesses that trust SlidesEasy for consistent, branded presentations.</p>
            <Link href="/requirements" className={styles.finalCtaBtn}>
              Join Now — $49
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
