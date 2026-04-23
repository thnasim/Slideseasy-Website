import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

const tools = [
  { name: 'PowerPoint', href: '/powerpoint', icon: '/images/icons/powerpoint.png' },
  { name: 'Google Slides', href: '/google-slides', icon: '/images/icons/google-slides.png' },
  { name: 'Canva', href: '/canva', icon: '/images/icons/canva.png' },
  { name: 'Figma', href: '/figma', icon: '/images/icons/figma.png' },
  { name: 'Keynote', href: '/keynote', icon: '/images/icons/keynote.png' },
  { name: 'Gamma', href: '/gamma', icon: '/images/icons/gamma.png' },
  { name: 'Claude Design', href: '/claude-design', icon: '/images/icons/claude.png' },
];

const toolDetails = [
  { name: 'PowerPoint', subtitle: 'Industry-standard for corporate presentations', description: 'We craft custom PowerPoint master slides with branded themes, custom layouts, and reusable components so every slide looks polished and on-brand.', href: '/powerpoint', img: '/images/screenshots/powerpoint.jpg' },
  { name: 'Google Slides', subtitle: 'Collaborative cloud-based presentations', description: 'We design Google Slides themes with custom master layouts, placeholder structures, and brand-consistent styling — ready to share instantly.', href: '/google-slides', img: '/images/screenshots/google-slides.jpg' },
  { name: 'Canva', subtitle: 'Beautiful drag-and-drop presentations', description: 'Our Canva Brand Kit setup includes custom fonts, color palettes, and branded templates your team can use without a designer.', href: '/canva', img: '/images/screenshots/canva.jpg' },
  { name: 'Figma', subtitle: 'Design-system-powered slide decks', description: 'We build Figma presentation templates with component libraries, auto-layout slides, and a consistent design system for professional decks.', href: '/figma', img: '/images/screenshots/figma.jpg' },
  { name: 'Keynote', subtitle: 'Premium Apple-native presentations', description: 'We design Keynote master slides with elegant animations, custom themes, and pixel-perfect layouts optimized for Mac and iPad.', href: '/keynote', img: '/images/screenshots/keynote.jpg' },
  { name: 'Gamma', subtitle: 'AI-powered modern presentations', description: 'We configure custom Gamma workspaces with branded themes and structure guidelines so AI-generated slides always match your brand.', href: '/gamma', img: '/images/screenshots/gamma.jpg' },
  { name: 'Claude Design', subtitle: 'Next-gen AI design system templates', description: 'We create structured prompt libraries and design system templates for Claude\'s artifact canvas, enabling AI-assisted branded presentation creation.', href: '/claude-design', img: '/images/screenshots/claude-design.jpg' },
];

const faqs = [
  { q: 'How does the $49 package work?', a: 'You purchase the package, fill out our requirements form, share your brand assets, and we deliver a custom presentation template with up to 20 slides within 24 hours.' },
  { q: 'What if I need more than 20 slides?', a: 'Contact us at hello@slideseasy.com. We offer custom quotes for larger projects, multi-deck packages, and converting existing presentations to master slides.' },
  { q: 'Do I need design skills to use the templates?', a: 'Not at all. Every template includes drag-and-drop layouts, pre-set styles, and a how-to-use tutorial video so anyone can create great slides.' },
  { q: 'What format do I receive the template in?', a: 'We deliver in your chosen tool: .pptx for PowerPoint, Google Slides link, Canva template, Figma file, Keynote file, or Gamma/Claude workspace setup.' },
  { q: 'Can I request revisions?', a: 'Yes. We design until it fits your brand style perfectly. If you are not happy with the initial delivery, we revise until you are satisfied.' },
  { q: 'How do I share my brand assets?', a: 'After purchase, you will be directed to our requirements form where you can upload your logo, brand guidelines, color codes, fonts, and content examples.' },
];

const testimonials = [
  { name: 'Sarah Mitchell', role: 'Startup Founder', company: 'TechLaunch', text: 'We were struggling with inconsistent slides across our team. SlidesEasy delivered a stunning PowerPoint master that made us look like a Series B company on our seed round pitch.', rating: 5 },
  { name: 'David Chen', role: 'Executive Coach', company: 'Peak Coaching', text: 'The Google Slides template they built for my coaching business is incredible. Every client presentation now looks professional and consistent. Worth every penny.', rating: 5 },
  { name: 'Amelia Torres', role: 'Real Estate Agent', company: 'Prime Properties', text: 'My property listing presentations went from amateur to luxury. The Canva template is so easy to use — I just drop in the photos and the design does the rest.', rating: 5 },
  { name: 'Marcus Reid', role: 'Marketing Director', company: 'BrandForce', text: 'We needed a Figma presentation system for our agency. SlidesEasy delivered a component library that our whole team now uses. The ROI was immediate.', rating: 5 },
];

export default function Home() {
  const [activeToolIndex, setActiveToolIndex] = useState(0);
  const [openTool, setOpenTool] = useState(null);

  return (
    <Layout>
      <Head>
        <title>SlidesEasy — Custom Presentation Templates for Business</title>
        <meta name="description" content="Custom branded presentation templates for startups, coaching businesses, real estate, and corporate teams. PowerPoint, Google Slides, Canva, Figma, Keynote, Gamma and Claude Design." />
        <link rel="icon" href="/images/favicon.png" />
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
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>
            <p className={styles.heroNote}>300+ businesses trust SlidesEasy · No subscription required</p>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.heroImageBox}>
              <img src="/images/hero-preview.jpg" alt="Presentation template preview" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== IMAGE CAROUSEL ===== */}
      <section className={styles.carousel}>
        <div className={styles.carouselTrack}>
          {[...Array(14)].map((_, i) => (
            <div key={i} className={styles.carouselItem}>
              <img src={`/images/slides/slide-${(i % 7) + 1}.jpg`} alt={`Template ${(i % 7) + 1}`} />
            </div>
          ))}
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

      {/* ===== WHAT YOU WILL GET ===== */}
      <section id="features" className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <span className={styles.label}>What You Will Get</span>
            <h2 className={styles.h2}>Everything your brand needs<br />in one presentation system</h2>
          </div>
          <div className={styles.featuresGrid}>
            {[
              { icon: '/images/icons/branded.png', title: 'Branded Design', desc: 'We design the theme based on your brand typography, colors, and style — ensuring every slide reflects who you are.' },
              { icon: '/images/icons/layout.png', title: 'Custom Layouts', desc: 'We design each layout specifically for the content types you use most — no more forcing your content into generic templates.' },
              { icon: '/images/icons/structure.png', title: 'Proper Structure', desc: 'All elements are built in the master slide or theme builder — making every component drag-and-drop ready for your team.' },
              { icon: '/images/icons/fast.png', title: 'Fast Turnaround', desc: 'Our expert team designs and delivers your template file plus a tutorial video — all within 24 hours.' },
            ].map((f) => (
              <div key={f.title} className={styles.featureCard}>
                <div className={styles.featureIconWrap}>
                  <img src={f.icon} alt={f.title} className={styles.featureIcon} />
                </div>
                <h3 className={styles.featureTitle}>{f.title}</h3>
                <p className={styles.featureDesc}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW TO USE — 3 IMAGE ALTERNATING ===== */}
      <section className={styles.howToUseSection}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <span className={styles.label}>How To Use It</span>
            <h2 className={styles.h2}>Designed to be used by anyone,<br />not just designers</h2>
          </div>

          {/* Row 1: Image Left, Text Right */}
          <div className={styles.altRow}>
            <div className={styles.altImage}>
              <img src="/images/how/how-1.jpg" alt="Open your template" />
            </div>
            <div className={styles.altContent}>
              <span className={styles.altNum}>01</span>
              <h3 className={styles.altTitle}>Open your template file</h3>
              <p className={styles.altDesc}>Once delivered, open your template in your chosen tool — PowerPoint, Google Slides, Canva, Figma, or Keynote. Every element is pre-built and ready for your content.</p>
            </div>
          </div>

          {/* Row 2: Text Left, Image Right */}
          <div className={`${styles.altRow} ${styles.altRowReverse}`}>
            <div className={styles.altContent}>
              <span className={styles.altNum}>02</span>
              <h3 className={styles.altTitle}>Pick your layout and add content</h3>
              <p className={styles.altDesc}>Every layout is built as a drag-and-drop master slide. Simply pick the layout that fits your content, click to edit, and your slide is ready. No design skills needed.</p>
            </div>
            <div className={styles.altImage}>
              <img src="/images/how/how-2.jpg" alt="Pick layout and add content" />
            </div>
          </div>

          {/* Row 3: Image Left, Text Right */}
          <div className={styles.altRow}>
            <div className={styles.altImage}>
              <img src="/images/how/how-3.jpg" alt="Present with confidence" />
            </div>
            <div className={styles.altContent}>
              <span className={styles.altNum}>03</span>
              <h3 className={styles.altTitle}>Present with confidence</h3>
              <p className={styles.altDesc}>Every slide you create will look consistent, professional, and on-brand. Share directly, export to PDF, or present live — your template handles the design so you can focus on the message.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TOOLBOX ===== */}
      <section className={styles.toolboxSection}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <span className={styles.label}>Supported Tools</span>
            <h2 className={styles.h2}>We design on your<br />preferred platform</h2>
          </div>
          <div className={styles.toolboxGrid}>
            {tools.map((tool) => (
              <Link key={tool.name} href={tool.href} className={styles.toolCard}>
                <img src={tool.icon} alt={tool.name} className={styles.toolIcon} />
                <span className={styles.toolName}>{tool.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PER TOOL DROPDOWN SHOWCASE ===== */}
      <section className={styles.toolShowcase}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <span className={styles.label}>Per Tool</span>
            <h2 className={styles.h2}>Built for every platform</h2>
          </div>
          <div className={styles.showcaseLayout}>
            <div className={styles.showcaseAccordion}>
              {toolDetails.map((tool, i) => (
                <div key={tool.name} className={styles.accordionItem}>
                  <button
                    className={`${styles.accordionBtn} ${activeToolIndex === i ? styles.accordionBtnActive : ''}`}
                    onClick={() => setActiveToolIndex(i)}
                  >
                    <img src={`/images/icons/${tool.name.toLowerCase().replace(' ', '-')}.png`} alt={tool.name} className={styles.accordionIcon} />
                    <div>
                      <span className={styles.accordionTitle}>{tool.name}</span>
                      <span className={styles.accordionSub}>{tool.subtitle}</span>
                    </div>
                    <svg className={`${styles.accordionChevron} ${activeToolIndex === i ? styles.accordionChevronOpen : ''}`} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                  {activeToolIndex === i && (
                    <div className={styles.accordionBody}>
                      <p className={styles.accordionDesc}>{tool.description}</p>
                      <Link href={tool.href} className={styles.accordionLink}>
                        Learn more about {tool.name} →
                      </Link>
                      <div className={styles.accordionImageMobile}>
                        <img src={tool.img} alt={`${tool.name} template`} />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className={styles.showcaseImagePanel}>
              <div className={styles.showcaseImageBox}>
                <img src={toolDetails[activeToolIndex].img} alt={`${toolDetails[activeToolIndex].name} template screenshot`} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== HOW WE DESIGN ===== */}
      <section className={styles.howSection}>
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
      <section className={styles.testimonialsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <span className={styles.label}>Testimonials</span>
            <h2 className={styles.h2}>What our clients say</h2>
          </div>
          <div className={styles.testimonialsGrid}>
            {testimonials.map((t) => (
              <div key={t.name} className={styles.testimonialCard}>
                <div className={styles.stars}>{[...Array(t.rating)].map((_, i) => <span key={i} className={styles.star}>★</span>)}</div>
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
      <section id="pricing" className={styles.pricingSection}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <span className={styles.label}>Pricing</span>
            <h2 className={styles.h2}>Simple, transparent pricing</h2>
          </div>
          <div className={styles.pricingWrap}>
            <div className={styles.pricingCard}>
              <div className={styles.pricingBadge}>Most Popular</div>
              <div className={styles.pricingPrice}>
                <span className={styles.pricingCurrency}>$</span>
                <span className={styles.pricingAmount}>49</span>
              </div>
              <p className={styles.pricingName}>Custom Template Package</p>
              <p className={styles.pricingDesc}>Up to 20 custom slides delivered within 24 hours</p>
              <ul className={styles.pricingFeatures}>
                {['Custom Branding (colors, fonts, logo)', 'Easy-to-use drag-and-drop layouts', 'How-to-use tutorial video', '24/7 support', 'Unlimited revisions until satisfied'].map((f) => (
                  <li key={f} className={styles.pricingFeature}><span className={styles.checkIcon}>✓</span> {f}</li>
                ))}
              </ul>
              <Link href="/requirements" className={styles.pricingCta}>Get Started — $49</Link>
            </div>
            <div className={styles.pricingContact}>
              <h3 className={styles.pricingContactTitle}>Need more slides or converting existing decks?</h3>
              <p className={styles.pricingContactDesc}>We handle large projects, multi-deck systems, and converting your existing presentations into proper master slide templates.</p>
              <Link href="/contact" className={styles.pricingContactBtn}>Contact Us for a Custom Quote →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className={styles.faqSection}>
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
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
