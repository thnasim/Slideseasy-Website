import ToolPage from '../components/ToolPage';

const tool = {
  name: 'Canva',
  icon: '/images/icons/canva.png',
  subtitle: 'Custom Canva Brand Kits and Presentation Templates',
  description: 'We set up your Canva Brand Kit with custom fonts, colors, and logos, then design presentation templates your team can use beautifully without any design experience.',
  videoEmbed: '',
  steps: [
    { img: '/images/how/canva-1.jpg', title: 'We set up your Brand Kit', desc: 'We configure your Canva Brand Kit with your exact colors, fonts, and logo — locking in your brand identity across every template in your workspace.' },
    { img: '/images/how/canva-2.jpg', title: 'We design your slide templates', desc: 'We design custom slide layouts for every content type you use: title, content, stats, testimonial, team, and more — all saved as templates in your Canva account.' },
    { img: '/images/how/canva-3.jpg', title: 'We hand over with a tutorial', desc: 'We record a walkthrough showing your team how to find, use, and duplicate templates in Canva — so everyone is confident from day one.' },
  ],
  faqs: [
    { q: 'Do I need a paid Canva account?', a: 'A Canva Pro account is recommended to access Brand Kit features and full template functionality.' },
    { q: 'Can my team use the Canva templates?', a: 'Yes. Canva team features allow you to share templates with your whole organization from a shared workspace.' },
    { q: 'Can I edit the Canva templates myself?', a: 'Absolutely. Canva is designed for non-designers. You can swap images, edit text, and update content with no design skills.' },
    { q: 'Do you support Canva for Education or Nonprofits?', a: 'Yes, we can design templates for all Canva account types.' },
    { q: 'Can you convert my existing Canva presentations to a proper template system?', a: 'Yes — contact us with your existing Canva link and we will redesign it as a proper branded template system.' },
  ],
};

export default function Canva() { return <ToolPage tool={tool} />; }
