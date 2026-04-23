import ToolPage from '../../components/ToolPage';

const tool = {
  name: 'Keynote',
  icon: '🍎',
  subtitle: 'Premium Apple Keynote Templates Crafted for Elegance',
  description: 'We design Keynote master slides with pixel-perfect layouts, elegant animations, and branded themes optimized for Mac and iPad — giving you presentations that match Apple\'s own design quality.',
  videoEmbed: '',
  features: [
    { icon: '🍎', title: 'Master Slide System', desc: 'We build your brand into the Keynote master so every slide you create automatically inherits your fonts, colors, and style.' },
    { icon: '✨', title: 'Custom Animations', desc: 'We set up elegant, tasteful animations and transitions that enhance your storytelling without distracting from content.' },
    { icon: '📱', title: 'iPad & Mac Optimized', desc: 'Your template is optimized for both Mac and iPad workflows, including Apple Pencil annotation support.' },
    { icon: '📹', title: 'Tutorial Video', desc: 'We deliver a tutorial showing how to use slide masters, edit layouts, and present professionally using Keynote.' },
  ],
  faqs: [
    { q: 'Do I need a Mac to use Keynote templates?', a: 'Keynote is available free on Mac, iPhone, and iPad. It\'s also accessible via iCloud.com on any browser.' },
    { q: 'Can I share my Keynote template with team members on Windows?', a: 'Keynote can export to PowerPoint (.pptx) format. However, some animations and custom fonts may not transfer perfectly.' },
    { q: 'Can Keynote templates be used for live presentations with a remote?', a: 'Yes. Keynote supports Bluetooth remotes, Apple Watch as a clicker, and iPhone as a remote with the Keynote app.' },
    { q: 'Do you support custom fonts in Keynote?', a: 'Yes — we use fonts that are already installed on macOS or assist you in installing your brand fonts on your device.' },
    { q: 'Can you convert my existing Keynote deck to a master slide system?', a: 'Yes — contact us with your existing file and we\'ll restructure it as a proper branded master slide template.' },
  ],
};

export default function Keynote() {
  return <ToolPage tool={tool} />;
}
