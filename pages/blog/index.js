import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';
import styles from '../../styles/Blog.module.css';

const posts = [
  { slug: 'custom-powerpoint-templates-business-growth', title: 'How Custom PowerPoint Templates Drive Business Growth', excerpt: 'Discover how a branded PowerPoint master slide system can save your team hours each week and create a consistent, professional impression with every client.', category: 'PowerPoint', date: 'March 15, 2025', readTime: '5 min read' },
  { slug: 'google-slides-team-collaboration-guide', title: 'The Complete Guide to Google Slides for Team Collaboration', excerpt: 'Learn how to set up a Google Slides theme system that keeps your entire team on-brand, no matter who creates the presentation.', category: 'Google Slides', date: 'March 10, 2025', readTime: '6 min read' },
  { slug: 'canva-brand-kit-setup-small-business', title: 'How to Set Up a Canva Brand Kit That Actually Works for Small Business', excerpt: 'A step-by-step guide to configuring your Canva workspace so every presentation, social post, and document is automatically on-brand.', category: 'Canva', date: 'March 5, 2025', readTime: '7 min read' },
  { slug: 'figma-presentation-templates-design-teams', title: 'Why Design Teams Are Switching to Figma for Presentations', excerpt: "Explore how Figma's component library and auto-layout features make it the most scalable tool for creating and maintaining presentation systems.", category: 'Figma', date: 'February 28, 2025', readTime: '8 min read' },
  { slug: 'keynote-vs-powerpoint-mac-users', title: 'Keynote vs PowerPoint: Which Should Mac Users Choose?', excerpt: 'An honest comparison of Keynote and PowerPoint for business presentations — covering design quality, collaboration, and export flexibility.', category: 'Keynote', date: 'February 22, 2025', readTime: '6 min read' },
  { slug: 'gamma-ai-presentations-future-of-slides', title: 'Gamma and the Future of AI-Generated Business Presentations', excerpt: "How Gamma's AI presentation platform is changing the way businesses create decks — and how to ensure your AI-generated slides stay on-brand.", category: 'Gamma', date: 'February 18, 2025', readTime: '5 min read' },
  { slug: 'consistent-brand-presentations-guide', title: 'The Business Case for Consistent Presentation Branding', excerpt: "Research shows that consistent branding can increase revenue by up to 33%. Here's how presentation templates contribute to that consistency.", category: 'Branding', date: 'February 12, 2025', readTime: '7 min read' },
  { slug: 'startup-pitch-deck-design-tips', title: '10 Presentation Design Principles Every Startup Founder Needs to Know', excerpt: 'From investor pitch decks to client proposals — the design principles that make startup presentations stand out and get results.', category: 'Startups', date: 'February 8, 2025', readTime: '9 min read' },
  { slug: 'real-estate-presentation-templates', title: 'How Real Estate Agents Use Presentation Templates to Close More Deals', excerpt: 'A look at how professional listing presentations and market reports can differentiate real estate agents in a competitive market.', category: 'Real Estate', date: 'February 3, 2025', readTime: '6 min read' },
  { slug: 'coaching-business-presentation-system', title: 'Build a Coaching Business Presentation System That Scales', excerpt: 'Coaches who invest in branded presentation templates deliver better client experiences and save dozens of hours creating course materials.', category: 'Coaching', date: 'January 28, 2025', readTime: '7 min read' },
  { slug: 'master-slide-vs-regular-template-difference', title: "Master Slides vs Regular Templates: What's the Difference and Why It Matters", excerpt: "Most people use regular templates without realizing master slides exist. Here's why understanding the difference can transform how your team creates presentations.", category: 'Education', date: 'January 22, 2025', readTime: '5 min read' },
  { slug: 'corporate-presentation-design-mistakes', title: '7 Corporate Presentation Design Mistakes That Hurt Your Brand', excerpt: "Even well-funded companies make these presentation design mistakes. Here's how to identify and fix them with a proper template system.", category: 'Corporate', date: 'January 16, 2025', readTime: '6 min read' },
  { slug: 'claude-ai-design-system-presentations', title: "How Claude's AI Design System Is Changing Presentation Creation", excerpt: "An in-depth look at how the Claude design system and artifact canvas can be used to generate consistent, branded presentations through AI.", category: 'Claude Design', date: 'January 10, 2025', readTime: '8 min read' },
  { slug: 'presentation-template-roi-business', title: 'Calculating the ROI of a Custom Presentation Template System', excerpt: "How to calculate the time and money saved by investing in a branded presentation template — and why $49 is one of the best business investments you can make.", category: 'Business', date: 'January 5, 2025', readTime: '6 min read' },
  { slug: 'best-presentation-tools-2025', title: 'The Best Presentation Tools for Business in 2025', excerpt: 'A comprehensive comparison of PowerPoint, Google Slides, Canva, Figma, Keynote, Gamma, and Claude Design — and how to choose the right tool for your business.', category: 'Tools', date: 'December 30, 2024', readTime: '10 min read' },
];

export default function Blog() {
  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <Layout>
      <Head>
        <title>Blog — SlidesEasy Presentation Insights</title>
        <meta name="description" content="Tips, guides, and insights on presentation design, branded templates, and how to make every business deck look professional." />
      </Head>

      <section className={styles.hero}>
        <div className={styles.container}>
          <span className={styles.label}>The SlidesEasy Blog</span>
          <h1 className={styles.title}>Presentation insights<br />for modern businesses</h1>
          <p className={styles.subtitle}>Tips, guides, and strategies to help you create presentations that actually move the needle.</p>
        </div>
      </section>

      <section className={styles.main}>
        <div className={styles.container}>
          <div className={styles.featuredWrap}>
            <Link href={`/blog/${featured.slug}`} className={styles.featured}>
              <div className={styles.featuredImage}>
                <img src={`/images/blog/${featured.slug}.jpg`} alt={featured.title} />
              </div>
              <div className={styles.featuredContent}>
                <span className={styles.postCategory}>{featured.category}</span>
                <h2 className={styles.featuredTitle}>{featured.title}</h2>
                <p className={styles.featuredExcerpt}>{featured.excerpt}</p>
                <div className={styles.postMeta}>
                  <span>{featured.date}</span>
                  <span>·</span>
                  <span>{featured.readTime}</span>
                </div>
              </div>
            </Link>
          </div>

          <div className={styles.grid}>
            {rest.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className={styles.postCard}>
                <div className={styles.postImage}>
                  <img src={`/images/blog/${post.slug}.jpg`} alt={post.title} />
                </div>
                <div className={styles.postContent}>
                  <span className={styles.postCategory}>{post.category}</span>
                  <h3 className={styles.postTitle}>{post.title}</h3>
                  <p className={styles.postExcerpt}>{post.excerpt}</p>
                  <div className={styles.postMeta}>
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
