import ToolPage from '../../components/ToolPage';

const tool = {
  name: 'Google Slides',
  icon: '📈',
  subtitle: 'Branded Google Slides Themes Built for Collaboration',
  description: 'We design custom Google Slides themes with master layouts, branded placeholder structures, and consistent styling — so your team can create professional presentations in the cloud, anytime, anywhere.',
  videoEmbed: '',
  features: [
    { icon: '☁️', title: 'Cloud-Native Design', desc: 'Your template lives in Google Drive and is accessible to your whole team from any device, instantly.' },
    { icon: '🎨', title: 'Custom Theme Builder', desc: 'We configure every aspect of your Google Slides theme — backgrounds, fonts, colors, and slide masters.' },
    { icon: '🤝', title: 'Team Collaboration', desc: 'Multiple team members can work on the same deck simultaneously with real-time edits and comments.' },
    { icon: '📹', title: 'Tutorial Video', desc: 'We deliver a tutorial showing your team exactly how to use each layout and duplicate the template for new decks.' },
  ],
  faqs: [
    { q: 'How do I receive my Google Slides template?', a: 'We share it directly to your Google Drive as an editable file. You can then copy it for each new presentation.' },
    { q: 'Can my whole team use the Google Slides template?', a: 'Yes. Simply share the template file with your team members and they can make copies to use for their presentations.' },
    { q: 'Does Google Slides support custom fonts?', a: 'Google Slides supports Google Fonts natively. We select and configure the best matching Google Font alternatives to your brand fonts.' },
    { q: 'Can I use the template on mobile or iPad?', a: 'Yes. Google Slides has mobile apps for iOS and Android that support custom themes.' },
    { q: 'What if I already have a Google Slides deck I want to convert?', a: 'Contact us — we can rebuild your existing deck as a proper Google Slides theme with master slide layouts.' },
  ],
};

export default function GoogleSlides() {
  return <ToolPage tool={tool} />;
}
