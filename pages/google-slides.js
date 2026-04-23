import ToolPage from '../components/ToolPage';

const tool = {
  name: 'Google Slides',
  icon: '/images/icons/google-slides.png',
  subtitle: 'Branded Google Slides Themes Built for Collaboration',
  description: 'We design custom Google Slides themes with master layouts, branded placeholder structures, and consistent styling — ready to share and collaborate in the cloud, anytime.',
  videoEmbed: '',
  steps: [
    { img: '/images/how/gs-1.jpg', title: 'We configure your theme', desc: 'We build your brand into the Google Slides Theme Editor — setting your colors, fonts, logo, and slide backgrounds as the default for your entire workspace.' },
    { img: '/images/how/gs-2.jpg', title: 'We build your slide layouts', desc: 'We create named layouts for every slide type — title, content, agenda, data slides, and more — all accessible from the layout picker in one click.' },
    { img: '/images/how/gs-3.jpg', title: 'We share and walk you through it', desc: 'We share the finished template to your Google Drive and record a tutorial showing your team how to copy and use it for every new presentation.' },
  ],
  faqs: [
    { q: 'How do I receive my Google Slides template?', a: 'We share it directly to your Google Drive as an editable file. You can then copy it for each new presentation.' },
    { q: 'Can my whole team use the Google Slides template?', a: 'Yes. Share the template file with your team members and they can make copies to use for their presentations.' },
    { q: 'Does Google Slides support custom fonts?', a: 'Google Slides supports Google Fonts natively. We select the best matching Google Font alternatives to your brand fonts.' },
    { q: 'Can I use the template on mobile or iPad?', a: 'Yes. Google Slides has mobile apps for iOS and Android that support custom themes.' },
    { q: 'What if I already have a Google Slides deck I want to convert?', a: 'Contact us — we can rebuild your existing deck as a proper Google Slides theme with master slide layouts.' },
  ],
};

export default function GoogleSlides() { return <ToolPage tool={tool} />; }
