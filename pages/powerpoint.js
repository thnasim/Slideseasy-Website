import ToolPage from '../../components/ToolPage';

const tool = {
  name: 'PowerPoint',
  icon: '📊',
  subtitle: 'Custom PowerPoint Master Slide Templates Built for Your Brand',
  description: 'We design fully branded PowerPoint master slides with custom layouts, reusable components, and consistent styling — so every presentation your team creates looks polished and professional without a designer.',
  videoEmbed: '', // Replace with your YouTube embed URL
  features: [
    { icon: '🎨', title: 'Master Slide Design', desc: 'We build your brand into the PowerPoint master so layouts, fonts, and colors apply automatically to every new slide.' },
    { icon: '📐', title: 'Custom Slide Layouts', desc: 'We create layouts for title slides, content slides, data charts, team bios, and whatever content types you use most.' },
    { icon: '🔤', title: 'Brand Typography', desc: 'Your exact fonts, sizes, and hierarchy are embedded into the master so your slides never look off-brand.' },
    { icon: '📹', title: 'Tutorial Video', desc: 'We deliver a screen-recorded tutorial showing your team exactly how to use every layout in the template.' },
  ],
  faqs: [
    { q: 'Do I need PowerPoint to use the template?', a: 'Yes, you need Microsoft PowerPoint (any version from 2016 onwards). The template works on both Mac and Windows.' },
    { q: 'Can I share the PowerPoint template with my team?', a: 'Absolutely. You can share the .pptx file with as many team members as needed. It\'s yours to use and share.' },
    { q: 'Can I edit the template myself after delivery?', a: 'Yes. We deliver an editable .pptx file. We also include a how-to-use tutorial so you can update it yourself if needed.' },
    { q: 'What if I already have a PowerPoint template I want to upgrade?', a: 'Contact us — we offer a conversion service to rebuild your existing template as a proper master slide system.' },
    { q: 'Do you support custom fonts that aren\'t in PowerPoint by default?', a: 'Yes. We embed custom fonts into the template and guide you on installing them on your system.' },
  ],
};

export default function PowerPoint() {
  return <ToolPage tool={tool} />;
}
