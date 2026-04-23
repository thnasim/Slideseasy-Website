import Head from 'next/head';
import Layout from '../components/Layout';
import styles from '../styles/Legal.module.css';

export default function Privacy() {
  return (
    <Layout>
      <Head>
        <title>Privacy Policy — SlidesEasy</title>
      </Head>
      <section className={styles.hero}>
        <div className={styles.container}>
          <span className={styles.label}>Legal</span>
          <h1 className={styles.title}>Privacy Policy</h1>
          <p className={styles.updated}>Last updated: March 1, 2025</p>
        </div>
      </section>
      <section className={styles.content}>
        <div className={styles.container}>
          <div className={styles.prose}>
            <h2>1. Information We Collect</h2>
            <p>We collect information you provide directly to us, including your name, email address, company name, brand assets, and any other information you submit through our requirements form or contact form.</p>

            <h2>2. How We Use Your Information</h2>
            <p>We use the information you provide to deliver your custom presentation template, communicate with you about your project, and send occasional service-related emails. We do not sell your personal information to third parties.</p>

            <h2>3. Payment Information</h2>
            <p>Payment processing is handled by LemonSqueezy. We do not store your credit card information. Please refer to LemonSqueezy's privacy policy for details on how payment information is processed.</p>

            <h2>4. Brand Assets</h2>
            <p>Files and brand assets you share with us are used solely for creating your template. We store them securely in Google Drive and delete them upon your request after project completion.</p>

            <h2>5. Email Newsletter</h2>
            <p>If you subscribe to our newsletter, we use Kit (formerly ConvertKit) to manage email communications. You can unsubscribe at any time using the link in any email we send.</p>

            <h2>6. Cookies</h2>
            <p>Our website uses cookies to improve user experience and analyze traffic. You can control cookies through your browser settings. We use analytics to understand how visitors use our site, but we do not sell this data.</p>

            <h2>7. Data Retention</h2>
            <p>We retain your project information for up to 12 months after project completion in case you need revisions or have questions. After that period, data is deleted unless you request otherwise.</p>

            <h2>8. Your Rights</h2>
            <p>You have the right to request access to, correction of, or deletion of your personal data. To exercise these rights, contact us at <a href="mailto:hello@slideseasy.com">hello@slideseasy.com</a>.</p>

            <h2>9. Security</h2>
            <p>We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the internet is 100% secure.</p>

            <h2>10. Contact</h2>
            <p>If you have any questions about this privacy policy, please contact us at <a href="mailto:hello@slideseasy.com">hello@slideseasy.com</a>.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
