import ToolPage from '../components/ToolPage';

const tool = {
  name: 'Figma',
  icon: '/images/icons/figma.png',
  subtitle: 'Design-System-Powered Presentation Templates in Figma',
  description: 'We build Figma presentation templates with component libraries, auto-layout slides, and a structured design system — so your team can create professional decks that scale.',
  videoEmbed: '',
  steps: [
    { img: '/images/how/figma-1.jpg', title: 'We set up your design tokens', desc: 'We implement your brand as Figma design tokens — colors, typography, and spacing — creating a consistent foundation for every slide component.' },
    { img: '/images/how/figma-2.jpg', title: 'We build your component library', desc: 'Every slide element — cards, charts, text blocks, icon sets — is built as a reusable Figma component with auto-layout for effortless editing.' },
    { img: '/images/how/figma-3.jpg', title: 'We deliver and walk you through it', desc: 'We share the finished Figma file and record a tutorial covering how to use components, swap content, and export your slides for presentation.' },
  ],
  faqs: [
    { q: 'Do I need a paid Figma account?', a: 'Figma Starter (free) supports basic use. Figma Professional is recommended for team libraries and component sharing.' },
    { q: 'Can my non-designer team use Figma templates?', a: 'Yes, though some basic Figma familiarity helps. We design the templates to be as simple as possible for content editing.' },
    { q: 'Can I export Figma slides to PowerPoint or PDF?', a: 'Yes. Figma supports exporting slides as PDF or images, which can be imported into PowerPoint or Google Slides.' },
    { q: 'Do you support Figma Variables for theming?', a: 'Yes — we can implement Figma Variables for brands that need light/dark mode or multiple color theme variants.' },
    { q: 'Can you build presentation templates inside an existing Figma design system?', a: 'Absolutely. Contact us and share your Figma file — we will integrate the slide templates into your existing system.' },
  ],
};

export default function Figma() { return <ToolPage tool={tool} />; }
