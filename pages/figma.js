import ToolPage from '../../components/ToolPage';

const tool = {
  name: 'Figma',
  icon: '✏️',
  subtitle: 'Design-System-Powered Presentation Templates in Figma',
  description: 'We build Figma presentation templates with component libraries, auto-layout slides, and a structured design system — so your agency, product team, or design-savvy business can create decks that scale.',
  videoEmbed: '',
  features: [
    { icon: '🧩', title: 'Component Library', desc: 'Every slide element — cards, charts, text blocks, icons — is built as a reusable Figma component for maximum efficiency.' },
    { icon: '📐', title: 'Auto-Layout Slides', desc: 'Slides use Figma\'s auto-layout so content resizes and repositions cleanly when you update text or swap images.' },
    { icon: '🎨', title: 'Design Token Setup', desc: 'We implement your brand as Figma design tokens — colors, typography, spacing — for a consistent system.' },
    { icon: '📹', title: 'Tutorial Video', desc: 'We deliver a tutorial covering how to use components, edit content, and export slides for presentations.' },
  ],
  faqs: [
    { q: 'Do I need a paid Figma account?', a: 'A Figma Starter (free) account supports basic use. For team libraries and full component sharing, Figma Professional is recommended.' },
    { q: 'Can my non-designer team use Figma templates?', a: 'Yes. We design the templates to be simple enough for non-designers to edit content, though some Figma familiarity helps.' },
    { q: 'Can I export Figma slides to PowerPoint or PDF?', a: 'Yes. Figma supports exporting slides as PDF or individual images, which can then be imported into PowerPoint or Google Slides.' },
    { q: 'Do you support Figma Variables for theming?', a: 'Yes — we can implement Figma Variables for brands that need light/dark mode or multiple color theme variants.' },
    { q: 'Can you build presentation templates inside an existing Figma design system?', a: 'Absolutely. Contact us and share your existing Figma file — we\'ll integrate the slide templates into your system.' },
  ],
};

export default function Figma() {
  return <ToolPage tool={tool} />;
}
