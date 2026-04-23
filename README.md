# SlidesEasy — Next.js Website

A modern, professional SaaS landing page for SlidesEasy built with Next.js.

## Tech Stack
- **Framework**: Next.js 14 (Pages Router)
- **Styling**: CSS Modules
- **Font**: Inter (Google Fonts)
- **Colors**: Black (#0a0a0a), Orange (#FF4122), White

---

## Project Structure

```
slideseasy/
├── components/
│   ├── Layout.js          # Wraps every page with Navbar + Footer
│   ├── Navbar.js          # Sticky navbar with dropdown + mobile menu
│   ├── Footer.js          # Footer with links, socials, newsletter
│   └── ToolPage.js        # Reusable template for all 7 tool pages
├── pages/
│   ├── _app.js
│   ├── _document.js
│   ├── index.js           # Home page (all sections)
│   ├── contact.js         # Contact page
│   ├── requirements.js    # Post-purchase requirements form
│   ├── blog/
│   │   └── index.js       # Blog listing (15 demo posts)
│   ├── terms.js           # Terms of Service
│   ├── privacy.js         # Privacy Policy
│   ├── powerpoint.js      # PowerPoint tool page
│   ├── google-slides.js   # Google Slides tool page
│   ├── canva.js           # Canva tool page
│   ├── figma.js           # Figma tool page
│   ├── keynote.js         # Keynote tool page
│   ├── gamma.js           # Gamma tool page
│   └── claude-design.js   # Claude Design tool page
├── styles/
│   ├── globals.css        # Global styles, CSS variables, animations
│   ├── Navbar.module.css
│   ├── Footer.module.css
│   ├── Home.module.css
│   ├── ToolPage.module.css
│   ├── Contact.module.css
│   ├── Requirements.module.css
│   ├── Blog.module.css
│   └── Legal.module.css
├── public/
│   └── images/
│       └── logo.png       # Your SlidesEasy logo
├── next.config.js
└── package.json
```

---

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

### 3. Build for production
```bash
npm run build
npm run start
```

---

## Customization Checklist

### Images to replace (in `/public/images/`):
- `logo.png` — Your SlidesEasy logo ✅ (already copied)
- `slide-1.jpg` through `slide-7.jpg` — Carousel template previews
- `client-logo-1.png` through `client-logo-8.png` — Client company logos
- `tool-preview.jpg` — Generic tool showcase image
- `powerpoint-preview.jpg`, `google-slides-preview.jpg`, etc. — Tool hero images
- `blog/[slug].jpg` — Blog post featured images

### Content to update:
- **Video embeds**: Search for `videoEmbed: ''` in each tool page and replace with YouTube embed URLs
- **Newsletter**: Replace the newsletter form with your Kit (ConvertKit) embed form
- **LemonSqueezy**: Update `/requirements` purchase redirect to your LemonSqueezy checkout URL
- **Contact form**: Wire the form to a backend (Formspree, Netlify Forms, or custom API)
- **Google Drive upload**: Connect the file upload in `/requirements` to Google Drive API
- **Analytics**: Add your Google Analytics or Plausible script in `_document.js`

### Social links (in `Footer.js`):
- Update the `href="#"` links to your actual Twitter, LinkedIn, Instagram, and YouTube URLs

---

## Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Deploy the `.next` folder
```

---

## Design System

| Token | Value |
|-------|-------|
| Primary color | `#0a0a0a` (black) |
| Accent color | `#FF4122` (orange) |
| Font | Inter |
| Border radius | 12px / 20px |
| Section padding | 100px top/bottom |
| Max width | 1200px |

---

## Support
For questions or issues, email: hello@slideseasy.com
