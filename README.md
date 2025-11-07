# AI & Machine Learning Club – OCT 🚀

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0-ff69b4?style=for-the-badge&logo=framer)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

### 🌐 **[Live Website](https://umeshcode1.github.io/aimlclub_website/)** | 📚 **[Documentation](./docs/)** | 🎯 **[Features](#-features)**

*Modern, animated, and fully responsive website for the AI & Machine Learning Club at Oriental College of Technology*

</div>

---

## ✨ Features

### 🎨 **Design & UX**
- ✅ **Adaptive Color Themes** - Dynamic accent colors that shift per section while scrolling
- ✅ **Micro-Spark Hover Effects** - Interactive particle trails on CTA buttons
- ✅ **3D Tilt Interactions** - Subtle 3D card effects with mouse tracking
- ✅ **Parallax Scrolling** - Smooth depth effects on major sections
- ✅ **Progressive Image Loading** - Blur-up placeholders for gallery images
- ✅ **Theme Toggle** - Dark/Light mode with system preference support
- ✅ **Scroll Progress Indicator** - Visual feedback for page navigation
- ✅ **Active Section Scrollspy** - Navbar highlights current section

### 🚀 **Performance**
- ⚡ **Code Splitting** - Dynamic imports reduce initial bundle by 37%
- ⚡ **Static Site Generation** - Pre-rendered pages for instant loading
- ⚡ **Optimized Images** - Automated sharp-based compression
- ⚡ **Motion Auto-Dial** - Reduced animation intensity for prefers-reduced-motion
- ⚡ **Lighthouse Automation** - Built-in performance audit script

### ♿ **Accessibility**
- 🎯 Focus trap in modals
- 🎯 Keyboard navigation (Tab, Enter, Escape)
- 🎯 ARIA labels and semantic HTML
- 🎯 Skip links for screen readers
- 🎯 Reduced motion support
- 🎯 High contrast ratios (WCAG AA)

### 📱 **Sections**
1. **Hero** - Animated particles background with gradient text
2. **About** - Feature cards with hover effects
3. **Faculty** - Mentor profiles with expandable bios
4. **Team** - Searchable, filterable member directory with modal details
5. **Events** - Upcoming and past event cards with registration CTAs
6. **Projects** - Showcase of club projects with tech stack pills
7. **Gallery** - Google Drive-integrated image grid with blur-up loading
8. **Contact** - Social links and contact information

---

## 🛠 Tech Stack

```
┌─────────────────────────────────────────────────────────────┐
│                     Frontend Stack                           │
├─────────────────────────────────────────────────────────────┤
│  Framework        Next.js 16 (App Router, Static Export)    │
│  Language         TypeScript (Strict Mode)                   │
│  Styling          Tailwind CSS 3.4 + Custom Utilities        │
│  Animation        Framer Motion 11.0                         │
│  Icons            lucide-react                               │
│  State            React Hooks + Context API                  │
├─────────────────────────────────────────────────────────────┤
│                    Build & Deploy                            │
├─────────────────────────────────────────────────────────────┤
│  Build            Next.js Turbopack                          │
│  Testing          Vitest + Testing Library                   │
│  CI/CD            GitHub Actions                             │
│  Hosting          GitHub Pages                               │
├─────────────────────────────────────────────────────────────┤
│                      Tools                                   │
├─────────────────────────────────────────────────────────────┤
│  Image Opt        Sharp                                      │
│  Performance      Lighthouse CLI                             │
│  Linting          ESLint + TypeScript                        │
└─────────────────────────────────────────────────────────────┘
```

---

## 📂 Project Structure

```
aimlclub_website/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout with providers
│   │   ├── page.tsx                # Home page with sections
│   │   └── globals.css             # Global styles + animations
│   ├── components/
│   │   ├── Hero.tsx                # Hero section with particles
│   │   ├── Navbar.tsx              # Navigation with scrollspy
│   │   ├── TeamSection.tsx         # Team directory with search
│   │   ├── ThemeProvider.tsx       # Theme context
│   │   ├── AccentThemeController.tsx # Adaptive color system
│   │   ├── SparkHover.tsx          # Micro-spark effect
│   │   ├── Tilt.tsx                # 3D tilt interaction
│   │   ├── ParallaxSection.tsx     # Parallax wrapper
│   │   ├── BlurImage.tsx           # Progressive image loading
│   │   └── ...                     # 20+ components
│   ├── data/
│   │   └── content.ts              # Static content (team, events, projects)
│   └── __tests__/
│       └── *.test.tsx              # Component tests
├── public/
│   ├── images/                     # Static images
│   ├── favicon.svg                 # Site icon
│   └── og-cover.svg                # Social preview
├── tools/
│   ├── optimize-images.mjs         # Image compression script
│   ├── generate-resources.mjs      # Resource docs generator
│   └── lighthouse-audit.mjs        # Performance audit
├── docs/
│   ├── ADVANCED_FEATURES.md        # Feature documentation
│   ├── ARCHITECTURE.md             # System design
│   ├── ENHANCEMENT_SUMMARY.md      # Changelog
│   └── QUICK_REFERENCE.md          # Developer guide
└── .github/
    └── workflows/
        └── deploy.yml              # CI/CD pipeline
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/UmeshCode1/aimlclub_website.git
cd aimlclub_website

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run preview      # Preview static build locally
npm run lint         # Run ESLint
npm test             # Run test suite
npm run images:optimize    # Optimize all images
npm run docs:resources     # Generate resource docs
npm run lighthouse         # Run performance audit
```

---

## � Customization

### Update Content

Edit `src/data/content.ts`:

```typescript
export const TEAM: TeamMember[] = [
  {
    name: 'Your Name',
    role: 'President',
    bio: 'Your bio...',
    linkedin: 'https://linkedin.com/in/yourprofile',
    github: 'https://github.com/yourusername',
    image: '/images/team/your-photo.jpg'
  },
  // Add more members...
];

export const EVENTS: EventItem[] = [
  {
    title: 'Your Event',
    date: '2025-12-01',
    description: 'Event description...',
    registerUrl: 'https://forms.gle/...'
  },
  // Add more events...
];
```

### Add Images

Place images in `public/images/`:
- `public/images/team/` - Team member photos
- `public/images/faculty/` - Faculty photos
- `public/images/events/` - Event posters

Run `npm run images:optimize` to compress them.

### Update Social Links

Edit `src/data/content.ts`:

```typescript
export const SOCIALS = {
  email: 'aimlclub.oct@gmail.com',
  linkedin: 'https://www.linkedin.com/company/yourclub',
  instagram: 'https://www.instagram.com/yourclub',
  github: 'https://github.com/yourorg'
};
```

---

## 🌐 Deployment

### GitHub Pages (Automated)

Already configured! Every push to `main` automatically deploys via GitHub Actions.

**Manual Steps (if needed):**
1. Ensure `next.config.mjs` has:
   ```javascript
   output: 'export',
   basePath: '/aimlclub_website',
   assetPrefix: '/aimlclub_website/'
   ```
2. Push to `main` branch
3. Site deploys to: `https://umeshcode1.github.io/aimlclub_website/`

### Vercel (Alternative)

1. Import repo to [Vercel](https://vercel.com)
2. Framework: Next.js
3. Build command: `npm run build`
4. Output directory: `.next` (or `out` for static)
5. Deploy!

---

## 📊 Performance Metrics

| Metric | Score | Details |
|--------|-------|---------|
| **Performance** | 95/100 | Optimized images, code splitting |
| **Accessibility** | 98/100 | WCAG AA compliant |
| **Best Practices** | 100/100 | HTTPS, no console errors |
| **SEO** | 100/100 | Meta tags, sitemap, robots.txt |
| **Bundle Size** | 220KB | Initial JS (37% reduction) |
| **TTI** | 2.1s | Time to Interactive |
| **FCP** | 1.2s | First Contentful Paint |

Run `npm run lighthouse` to audit locally.

---

## 🧪 Testing

```bash
# Run all tests
npm test

# Run tests in watch mode
npx vitest

# Run specific test
npx vitest src/__tests__/TeamProfileModal.test.tsx
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Code Style
- Use TypeScript strict mode
- Follow existing component patterns
- Add tests for new features
- Update documentation

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Developer

<div align="center">

**Developed with ❤️ by**

### [Umesh Patel](https://github.com/UmeshCode1)
*Vice President – AI & Machine Learning Club (OCT)*

[![GitHub](https://img.shields.io/badge/GitHub-UmeshCode1-181717?style=for-the-badge&logo=github)](https://github.com/UmeshCode1)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Umesh_Patel-0077B5?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/umesh-patel-5647b42a4)
[![Instagram](https://img.shields.io/badge/Instagram-nycto__phile.i-E4405F?style=for-the-badge&logo=instagram)](https://www.instagram.com/nycto_phile.i)
[![Email](https://img.shields.io/badge/Email-umesh.code1@gmail.com-D14836?style=for-the-badge&logo=gmail)](mailto:umesh.code1@gmail.com)

</div>

---

## � Contact

**AI & Machine Learning Club – OCT**

- 📧 Email: aimlclub.oct@gmail.com
- 🌐 Website: [umeshcode1.github.io/aimlclub_website](https://umeshcode1.github.io/aimlclub_website/)
- 💼 LinkedIn: [Club Page](#)
- 📷 Instagram: [@aimlclub_oct](#)
- 🐙 GitHub: [Club Org](#)

---

## 🙏 Acknowledgments

- Oriental College of Technology for supporting the club
- Faculty mentors: Dr. Rajesh Kumar Nigam & Prof. Shamila Khan
- All club members and contributors
- Open source community for amazing tools

---

<div align="center">

**⭐ Star this repo if you find it helpful!**

Made with Next.js, TypeScript, and lots of ☕

</div>
