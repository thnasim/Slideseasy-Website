import Head from 'next/head';
import Layout from '../components/Layout';
import styles from '../styles/Legal.module.css';

export default function Terms() {
  return (
    <Layout>
      <Head>
        <title>Terms of Service — SlidesEasy</title>
      </Head>
      <section className={styles.hero}>
        <div className={styles.container}>
          <span className={styles.label}>Legal</span>
          <h1 className={styles.title}>Terms of Service</h1>
          <p className={styles.updated}>Last updated: March 1, 2025</p>
        </div>
      </section>
      <section className={styles.content}>
        <div className={styles.container}>
          <div className={styles.prose}>
            <h2>1. Acceptance of Terms</h2>
            <p>By purchasing a package from SlidesEasy ("we," "us," or "our"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our service.</p>

            <h2>2. Services</h2>
            <p>SlidesEasy provides custom presentation template design services. Our standard package includes custom design of up to 20 slides within 24 hours of receiving complete brand requirements. Delivery timelines are estimates and may vary based on project complexity and requirement completeness.</p>

            <h2>3. Payment</h2>
            <p>All purchases are processed through LemonSqueezy, our payment processor. Prices are listed in USD. Payment is required in full before work begins. We do not offer payment plans on the standard package.</p>

            <h2>4. Revisions</h2>
            <p>We offer revisions on all deliverables until you are satisfied with the result. Revisions must be requested within 30 days of initial delivery. Requests beyond 30 days may incur additional fees.</p>

            <h2>5. Intellectual Property</h2>
            <p>Upon full payment, you receive full commercial license to use the delivered templates for your business. We retain the right to showcase the work in our portfolio unless you request otherwise. We do not claim ownership of your brand assets.</p>

            <h2>6. Refunds</h2>
            <p>If we are unable to deliver a template that meets your requirements after reasonable revisions, we will offer a full refund. We do not offer refunds after a template has been accepted and approved.</p>

            <h2>7. Limitation of Liability</h2>
            <p>SlidesEasy's liability is limited to the amount paid for the specific service in question. We are not liable for indirect, incidental, or consequential damages arising from the use of our templates.</p>

            <h2>8. Changes to Terms</h2>
            <p>We reserve the right to update these terms at any time. Continued use of our service after changes constitutes acceptance of the new terms.</p>

            <h2>9. Contact</h2>
            <p>For any questions about these terms, contact us at <a href="mailto:hello@slideseasy.com">hello@slideseasy.com</a>.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
