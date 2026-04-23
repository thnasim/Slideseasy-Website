import ToolPage from '../components/ToolPage';

const tool = {
  name: 'PowerPoint',
  icon: '/images/icons/powerpoint.png',
  subtitle: 'Custom PowerPoint Master Slide Templates Built for Your Brand',
  description: 'We design fully branded PowerPoint master slides with custom layouts, reusable components, and consistent styling — so every presentation your team creates looks polished without a designer.',
  videoEmbed: '',
  steps: [
    { img: '/images/how/ppt-1.jpg', title: 'We build your master slide', desc: 'We start by setting up your brand in the PowerPoint Slide Master — embedding your colors, fonts, logo placement, and background styles so they apply automatically to every slide.' },
    { img: '/images/how/ppt-2.jpg', title: 'We design your custom layouts', desc: 'We create individual layouts for every slide type you use: title, content, data, team bios, quotes, and more. Each is built as a named master layout for easy access.' },
    { img: '/images/how/ppt-3.jpg', title: 'We deliver and walk you through it', desc: 'You receive the finished .pptx file plus a screen-recorded tutorial showing your team exactly how to use each layout. Ready to use immediately.' },
  ],
  faqs: [
    { q: 'Do I need PowerPoint to use the template?', a: 'Yes, you need Microsoft PowerPoint (2016 or newer). The template works on both Mac and Windows.' },
    { q: 'Can I share the PowerPoint template with my team?', a: 'Absolutely. You can share the .pptx file with as many team members as needed.' },
    { q: 'Can I edit the template myself after delivery?', a: 'Yes. We deliver a fully editable .pptx file and include a tutorial so you can update it yourself if needed.' },
    { q: 'What if I already have a PowerPoint template I want to upgrade?', a: 'Contact us — we offer a conversion service to rebuild your existing template as a proper master slide system.' },
    { q: 'Do you support custom fonts that are not in PowerPoint by default?', a: 'Yes. We embed custom fonts and guide you on installing them on your system.' },
  ],
};

export default function PowerPoint() { return <ToolPage tool={tool} />; }
