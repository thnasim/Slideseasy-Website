import ToolPage from '../components/ToolPage';

const tool = {
  name: 'Gamma',
  icon: '/images/icons/gamma.png',
  subtitle: 'AI-Powered Presentation Templates Configured for Your Brand in Gamma',
  description: 'We configure your Gamma workspace with a custom branded theme and prompt templates — so every AI-generated presentation is on-brand from the first slide.',
  videoEmbed: '',
  steps: [
    { img: '/images/how/gamma-1.jpg', title: 'We configure your Gamma theme', desc: 'We set up your brand colors, fonts, and visual style directly inside your Gamma workspace theme settings — making your brand the default for every new deck.' },
    { img: '/images/how/gamma-2.jpg', title: 'We create your prompt templates', desc: 'We write structured prompt starters tailored to your brand voice and content types — so when you ask Gamma to create slides, the output already feels on-brand.' },
    { img: '/images/how/gamma-3.jpg', title: 'We hand over with a tutorial', desc: 'We record a tutorial showing how to use your custom theme and prompt library to generate, refine, and share branded Gamma presentations in minutes.' },
  ],
  faqs: [
    { q: 'What is Gamma and how is it different from PowerPoint?', a: 'Gamma is an AI presentation tool where you generate full slide decks from text prompts. It is web-based and very fast for creating first drafts.' },
    { q: 'Do I need a paid Gamma account?', a: 'Gamma has a free tier with limited AI credits. A paid plan is recommended for regular use and custom theme features.' },
    { q: 'Can I export Gamma presentations?', a: 'Yes — Gamma supports exporting to PDF and PowerPoint so you can share slides or continue editing in other tools.' },
    { q: 'Will the AI always follow my brand style in Gamma?', a: 'With a configured theme and our prompt templates, the AI follows your brand style closely. We guide you on how to prompt for best results.' },
    { q: 'Is Gamma suitable for client-facing presentations?', a: 'Yes. With a custom brand setup, Gamma can produce polished, client-ready presentations very efficiently.' },
  ],
};

export default function Gamma() { return <ToolPage tool={tool} />; }
