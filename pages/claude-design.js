import ToolPage from '../components/ToolPage';

const tool = {
  name: 'Claude Design',
  icon: '/images/icons/claude.png',
  subtitle: 'Next-Generation AI Presentation Design with Claude',
  description: 'We build structured prompt libraries and branded design system guidelines for Claude\'s artifact canvas — so your team generates professional, on-brand presentations through AI consistently.',
  videoEmbed: '',
  steps: [
    { img: '/images/how/claude-1.jpg', title: 'We document your brand system', desc: 'We translate your brand into a Claude-readable design system document — colors, fonts, spacing, tone of voice — so every AI output starts from the right foundation.' },
    { img: '/images/how/claude-2.jpg', title: 'We build your prompt library', desc: 'We create a library of tested prompts for generating different slide types — pitch decks, reports, proposals — all tuned to your brand style and content needs.' },
    { img: '/images/how/claude-3.jpg', title: 'We walk you through the workflow', desc: 'We record a tutorial showing how to use your prompt library with Claude to generate, refine, and export branded presentations quickly and reliably.' },
  ],
  faqs: [
    { q: 'What is the Claude Design system?', a: 'Claude is an AI assistant by Anthropic capable of generating visual layouts, HTML slides, and design artifacts through its canvas feature.' },
    { q: 'Do I need a Claude subscription?', a: 'A Claude Pro account gives access to the artifact canvas and extended context window needed for presentation generation.' },
    { q: 'How do I export presentations created with Claude?', a: 'Claude-generated slides can be exported as HTML files or copied into design tools. We guide you through the best export workflow for your use case.' },
    { q: 'Is Claude-generated design suitable for professional presentations?', a: 'With our structured prompt library and design specs, Claude can generate professional-grade slide content reliably.' },
    { q: 'Can I use this alongside another tool like PowerPoint or Canva?', a: 'Yes — many clients use Claude for rapid drafting and then refine in PowerPoint or Canva. We can bridge both workflows.' },
  ],
};

export default function ClaudeDesign() { return <ToolPage tool={tool} />; }
