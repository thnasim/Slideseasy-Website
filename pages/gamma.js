import ToolPage from '../components/ToolPage';

const tool = {
  name: 'Gamma',
  icon: '⚡',
  subtitle: 'AI-Powered Presentation Templates Configured for Your Brand in Gamma',
  description: 'We configure your Gamma workspace with a custom branded theme, structured content guidelines, and template starting points — so every AI-generated presentation you create is on-brand from the first prompt.',
  videoEmbed: '',
  features: [
    { icon: '⚡', title: 'Custom Gamma Theme', desc: 'We configure your brand colors, fonts, and visual style directly into your Gamma workspace theme.' },
    { icon: '🤖', title: 'AI Prompt Templates', desc: 'We create structured prompt starters that help Gamma\'s AI generate slides that match your brand style and voice.' },
    { icon: '📐', title: 'Layout Guidelines', desc: 'We define content structure guidelines so AI-generated layouts stay consistent with your brand standards.' },
    { icon: '📹', title: 'Tutorial Video', desc: 'We deliver a tutorial on how to use Gamma with your custom theme to generate branded presentations quickly.' },
  ],
  faqs: [
    { q: 'What is Gamma and how is it different from PowerPoint?', a: 'Gamma is an AI-powered presentation tool where you can generate full slide decks from text prompts. It\'s web-based and very fast for creating first drafts.' },
    { q: 'Do I need a paid Gamma account?', a: 'Gamma has a free tier with limited AI credits. A paid plan is recommended for regular use and custom theme features.' },
    { q: 'Can I export Gamma presentations?', a: 'Yes — Gamma supports exporting to PDF and PowerPoint format so you can share slides or continue editing in other tools.' },
    { q: 'Will the AI always follow my brand style in Gamma?', a: 'With a configured theme and our prompt templates, the AI follows your brand style closely. We guide you on how to prompt for best results.' },
    { q: 'Is Gamma suitable for client-facing presentations?', a: 'Yes. With a custom brand setup, Gamma can produce polished, client-ready presentations very efficiently.' },
  ],
};

export default function Gamma() {
  return <ToolPage tool={tool} />;
}
