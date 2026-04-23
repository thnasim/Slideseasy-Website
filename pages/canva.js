import ToolPage from '../../components/ToolPage';

const tool = {
  name: 'Canva',
  icon: '🎨',
  subtitle: 'Custom Canva Brand Kits and Presentation Templates',
  description: 'We set up your Canva Brand Kit with custom fonts, colors, and logos, then design presentation templates your team can use without any design experience — beautiful, on-brand slides in minutes.',
  videoEmbed: '',
  features: [
    { icon: '🎨', title: 'Brand Kit Setup', desc: 'We configure your Canva Brand Kit with your exact colors, fonts, and logo — locking in your brand identity.' },
    { icon: '📐', title: 'Slide Templates', desc: 'We design custom slide layouts for every content type you use: title, content, stats, testimonial, and more.' },
    { icon: '🖼️', title: 'Visual Library', desc: 'We set up a consistent visual style so your presentations always feel cohesive, even without a designer.' },
    { icon: '📹', title: 'Tutorial Video', desc: 'We deliver a tutorial showing how to use the templates, update content, and maintain brand consistency.' },
  ],
  faqs: [
    { q: 'Do I need a paid Canva account?', a: 'A Canva Pro account is recommended to access Brand Kit features and the full template functionality we design.' },
    { q: 'Can my team use the Canva templates?', a: 'Yes. Canva\'s team features allow you to share templates with your whole organization from a shared workspace.' },
    { q: 'Can I edit the Canva templates myself?', a: 'Absolutely. Canva is designed for non-designers. You can swap images, edit text, and update content with no design skills.' },
    { q: 'Do you support Canva for Education or Canva for Nonprofits?', a: 'Yes, we can design templates for all Canva account types including the free tiers where Brand Kit is available.' },
    { q: 'Can you convert my existing Canva presentations to a proper template system?', a: 'Yes — contact us with your existing Canva link and we\'ll redesign it as a proper branded template system.' },
  ],
};

export default function Canva() {
  return <ToolPage tool={tool} />;
}
