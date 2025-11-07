# 🚀 Quick Reference Guide

## 📦 Installation & Setup

```bash
# Clone repository
git clone https://github.com/UmeshCode1/aimlclub_website.git
cd aimlclub_website

# Install dependencies
npm install

# Start development server
npm run dev
# Visit http://localhost:3000
```

---

## 🛠️ Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (port 3000) |
| `npm run build` | Build for production (static export) |
| `npm run start` | Start production server (requires build) |
| `npm run preview` | Preview static build locally |
| `npm run lint` | Run ESLint checks |
| `npm test` | Run Vitest test suite |
| `npm run images:optimize` | Optimize all images with Sharp |
| `npm run docs:resources` | Generate resource documentation |
| `npm run lighthouse` | Run Lighthouse performance audit |

---

## 📁 Project Structure

```
aimlclub_website/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with ThemeProvider
│   │   ├── page.tsx            # Home page with dynamic imports
│   │   └── globals.css         # Global styles & theme variables
│   ├── components/
│   │   ├── Hero.tsx            # Hero with Particles
│   │   ├── Navbar.tsx          # Nav with ThemeToggle & Scrollspy
│   │   ├── TeamSection.tsx     # Search/filter/sort team
│   │   ├── ThemeProvider.tsx   # Theme context
│   │   ├── ThemeToggle.tsx     # Theme switcher UI
│   │   ├── ParallaxSection.tsx # Parallax wrapper
│   │   ├── ScrollProgress.tsx  # Top scroll bar
│   │   ├── Particles.tsx       # Canvas animation
│   │   └── ...                 # Other components
│   ├── data/
│   │   └── content.ts          # Static data (team, events, projects)
│   └── __tests__/
│       └── *.test.tsx          # Component tests
├── public/
│   ├── images/                 # Static images
│   ├── favicon.svg             # Site icon
│   └── og-cover.svg            # Social media preview
├── tools/
│   ├── optimize-images.mjs     # Image optimization script
│   ├── generate-resources.mjs  # Resource docs generator
│   └── lighthouse-audit.mjs    # Performance audit
├── docs/
│   ├── ADVANCED_FEATURES.md    # Feature documentation
│   ├── ENHANCEMENT_SUMMARY.md  # Complete changelog
│   ├── ARCHITECTURE.md         # System design
│   └── resources/              # Auto-generated docs
├── .github/
│   └── workflows/
│       └── deploy.yml          # CI/CD pipeline
└── package.json
```

---

## 🎨 Key Components

### Navigation
```tsx
// Navbar with theme toggle and scrollspy
import Navbar from '@/components/Navbar';
<Navbar />
```

### Theme Management
```tsx
// Use theme in any component
import { useTheme } from '@/components/ThemeProvider';

function MyComponent() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  return <button onClick={() => setTheme('light')}>Light Mode</button>;
}
```

### Parallax Effects
```tsx
import ParallaxSection from '@/components/ParallaxSection';

<ParallaxSection speed={0.5}>
  <YourContent />
</ParallaxSection>
```

### Dynamic Imports
```tsx
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <Skeleton />,
  ssr: false // if client-only
});
```

---

## 🎯 Data Management

### Adding Team Members
Edit `src/data/content.ts`:

```typescript
export const TEAM: TeamMember[] = [
  {
    name: 'John Doe',
    role: 'president',
    image: '/images/team/john.jpg', // optional
    bio: 'Brief bio here...', // optional
    socials: { // optional
      linkedin: 'https://linkedin.com/in/john',
      github: 'https://github.com/john'
    }
  },
  // ...
];
```

### Adding Events
```typescript
export const EVENTS: Event[] = [
  {
    title: 'Workshop Name',
    date: '2025-01-15',
    desc: 'Description...',
    tags: ['Workshop', 'AI'],
    image: '/images/events/workshop.jpg'
  },
  // ...
];
```

### Adding Projects
```typescript
export const PROJECTS: Project[] = [
  {
    title: 'Project Name',
    desc: 'Description...',
    tech: ['Python', 'TensorFlow'],
    link: 'https://github.com/...',
    image: '/images/projects/project.jpg'
  },
  // ...
];
```

---

## 🎨 Styling

### Tailwind Classes
```tsx
// Custom utility classes available:
<div className="container-max">        {/* Responsive container */}
<div className="card">                 {/* Glass card style */}
<div className="section">              {/* Section spacing */}
<button className="btn btn-primary">   {/* Primary button */}
<button className="btn btn-ghost">     {/* Ghost button */}
<h2 className="section-title">         {/* Section heading */}
<p className="section-sub">            {/* Section subtitle */}
```

### Theme Colors
```css
/* Dark theme (default) */
--bg: #05060A
--card: #0B0E1A
--muted: #9BA3AF

/* Light theme */
--bg: #F8F9FA
--card: #FFFFFF
--muted: #6B7280

/* Brand colors (Tailwind) */
neon-blue: #00F0FF
neon-purple: #8B5CF6
neon-pink: #FF1CF7
```

---

## 🧪 Testing

### Run All Tests
```bash
npm test
```

### Run Specific Test
```bash
npx vitest run src/__tests__/TeamProfileModal.test.tsx
```

### Watch Mode
```bash
npx vitest
```

### Add New Test
```tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import MyComponent from './MyComponent';

describe('MyComponent', () => {
  it('renders correctly', () => {
    render(<MyComponent />);
    expect(screen.getByText('Hello')).toBeDefined();
  });
});
```

---

## 📊 Performance Monitoring

### Lighthouse Audit
```bash
# Build first
npm run build
npm run preview

# In another terminal:
npm run lighthouse
```

### Check Bundle Size
```bash
npm run build
# Check .next/static/chunks/ for sizes
```

### Analyze Bundle
```bash
# Add to package.json:
"analyze": "ANALYZE=true npm run build"

# Install plugin:
npm install @next/bundle-analyzer
```

---

## 🚀 Deployment

### Manual Deploy
```bash
# 1. Build
npm run build

# 2. Test locally
npm run preview

# 3. Push to GitHub
git add .
git commit -m "Your message"
git push
```

### Automatic Deploy
GitHub Actions workflow triggers on push to `main`:
1. Installs dependencies
2. Runs build
3. Deploys to `gh-pages` branch
4. Site live at: https://umeshcode1.github.io/aimlclub_website

---

## 🐛 Troubleshooting

### Build Fails
```bash
# Clear cache
rm -rf .next node_modules
npm install
npm run build
```

### TypeScript Errors
```bash
# Regenerate types
npm run build
# Check tsconfig.json strict mode
```

### Theme Not Working
```bash
# Check localStorage
localStorage.getItem('theme')

# Clear if needed
localStorage.removeItem('theme')
```

### Images Not Loading
```bash
# Verify path is correct (relative to /public)
# Example: /images/team/photo.jpg not /public/images/...

# Optimize images
npm run images:optimize
```

---

## 🔧 Configuration

### next.config.mjs
```javascript
export default {
  output: 'export',           // Static export
  trailingSlash: true,        // Trailing slashes
  images: { unoptimized: true }, // GitHub Pages
  basePath: '/aimlclub_website',
  assetPrefix: '/aimlclub_website/'
};
```

### tailwind.config.js
```javascript
theme: {
  extend: {
    colors: {
      'neon-blue': '#00F0FF',
      'neon-purple': '#8B5CF6',
      'neon-pink': '#FF1CF7'
    }
  }
}
```

---

## 📚 Documentation

- **ADVANCED_FEATURES.md** - Feature usage guide
- **ENHANCEMENT_SUMMARY.md** - Changelog & metrics
- **ARCHITECTURE.md** - System design diagrams
- **DEPLOYMENT.md** - Deployment instructions
- **UI_ENHANCEMENTS.md** - UI/UX improvements
- **resources/** - Auto-generated image/link docs

---

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open Pull Request

---

## 📝 Environment Variables

```env
# Optional: Custom Lighthouse URL
SITE_URL=https://your-site.com

# Optional: Google Drive API
NEXT_PUBLIC_DRIVE_API_KEY=your_key
NEXT_PUBLIC_DRIVE_FOLDER_ID=your_folder_id
```

---

## 🔗 Useful Links

- **Live Site**: https://umeshcode1.github.io/aimlclub_website
- **Repository**: https://github.com/UmeshCode1/aimlclub_website
- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Framer Motion**: https://www.framer.com/motion/

---

## 📞 Support

For issues or questions:
1. Check existing documentation
2. Review GitHub Issues
3. Contact club coordinators
4. Submit new issue with detailed description

---

**Last Updated**: November 7, 2025  
**Version**: 2.0.0
