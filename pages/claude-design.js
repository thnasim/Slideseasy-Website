import ToolPage from '../../components/ToolPage';

const tool = {
  name: 'Claude Design',
  icon: '🤖',
  subtitle: 'Next-Generation AI Presentation Design with the Claude Design System',
  description: 'We build structured prompt libraries and branded design system guidelines for Claude\'s artifact canvas — enabling your team to generate professional, on-brand presentations through AI with consistent results.',
  videoEmbed: '',
  features: [
    { icon: '🤖', title: 'Prompt Library', desc: 'We create a custom prompt library tailored to your brand, content types, and presentation goals for reliable AI output.' },
    { icon: '🎨', title: 'Design System Specs', desc: 'We document your brand design system in Claude-readable format so AI outputs always match your visual identity.' },
    { icon: '⚡', title: 'Rapid Iteration', desc: 'Claude\'s artifact canvas allows lightning-fast iteration — refine slides in seconds with follow-up prompts.' },
    { icon: '📹', title: 'Tutorial Video', desc: 'We deliver a tutorial on how to use your prompt library to generate, refine, and export branded presentations.' },
  ],
  faqs: [
    { q: 'What is the Claude Design system?', a: 'Claude is an AI assistant by Anthropic capable of generating visual layouts, HTML slides, and design artifacts through its canvas feature.' },
    { q: 'Do I need a Claude subscription?', a: 'A Claude Pro account gives access to the artifact canvas and extended context window needed for presentation generation.' },
    { q: 'How do I export presentations created with Claude?', a: 'Claude-generated slides can be exported as HTML files or copied into design tools. We guide you through the best export workflow for your use case.' },
    { q: 'Is Claude-generated design suitable for professional presentations?', a: 'With our structured prompt library and design specs, Claude can generate professional-grade slide content. We help you set the right guardrails.' },
    { q: 'Can I use this alongside another tool like PowerPoint or Canva?', a: 'Yes — many clients use Claude for rapid drafting and then refine in PowerPoint, Canva, or Figma. We can bridge both workflows.' },
  ],
};

export default function ClaudeDesign() {
  return <ToolPage tool={tool} />;
}
