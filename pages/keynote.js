import ToolPage from '../components/ToolPage';

const tool = {
  name: 'Keynote',
  icon: '/images/icons/keynote.png',
  subtitle: 'Premium Apple Keynote Templates Crafted for Elegance',
  description: 'We design Keynote master slides with pixel-perfect layouts, elegant animations, and branded themes optimized for Mac and iPad — presentations that match Apple quality.',
  videoEmbed: '',
  steps: [
    { img: '/images/how/keynote-1.jpg', title: 'We build your Keynote master', desc: 'We configure every aspect of your Keynote master — slide backgrounds, font styles, color themes, and logo placement — so your brand appears automatically on every slide.' },
    { img: '/images/how/keynote-2.jpg', title: 'We design and animate your layouts', desc: 'We create elegant slide layouts and set up tasteful, professional animations and transitions that enhance your storytelling without distracting from the content.' },
    { img: '/images/how/keynote-3.jpg', title: 'We deliver and walk you through it', desc: 'You receive the finished Keynote file and a tutorial video covering how to use each layout, present with the remote, and export to PDF or PowerPoint.' },
  ],
  faqs: [
    { q: 'Do I need a Mac to use Keynote templates?', a: 'Keynote is free on Mac, iPhone, and iPad. It is also accessible via iCloud.com on any browser.' },
    { q: 'Can I share my Keynote template with Windows users?', a: 'Keynote can export to PowerPoint (.pptx) format, though some animations may not transfer perfectly.' },
    { q: 'Can Keynote templates be used for live presentations with a remote?', a: 'Yes. Keynote supports Bluetooth remotes, Apple Watch, and iPhone as a remote via the Keynote app.' },
    { q: 'Do you support custom fonts in Keynote?', a: 'Yes — we use fonts installed on macOS or assist you in installing your brand fonts on your device.' },
    { q: 'Can you convert my existing Keynote deck to a master slide system?', a: 'Yes — contact us with your existing file and we will restructure it as a proper branded master slide template.' },
  ],
};

export default function Keynote() { return <ToolPage tool={tool} />; }
