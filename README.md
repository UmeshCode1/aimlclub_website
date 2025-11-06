# AI & Machine Learning Club – OCT

🌐 **Live Site:** [https://umeshcode1.github.io/aimlclub_website/](https://umeshcode1.github.io/aimlclub_website/)

Futuristic, responsive website for the AI & Machine Learning Club at Oriental College of Technology. Showcases vision, team, events, projects, gallery, and contact.

## ✨ Features
- Modern Next.js 15 + App Router + TypeScript
- Tailwind CSS dark neon tech theme
- Framer Motion animations & preloader
- Responsive sections: Hero, About, Team, Events, Projects, Gallery, Contact
- Static export ready (GitHub Pages) and works on Vercel
- Automated deployment via GitHub Actions

## 🛠 Tech Stack
| Layer | Choice |
|-------|--------|
| Framework | Next.js + React |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Icons | lucide-react |
| Deployment | GitHub Actions + Pages |

## 📂 Structure
```
src/
  app/
    layout.tsx
    page.tsx
    globals.css
  components/
  data/
public/
```

## 🚀 Getting Started
```powershell
# Install dependencies
npm install

# Run dev server
npm run dev

# Build & static export (outputs to ./out)
npm run build

# Preview static export
npm run preview
```

Open http://localhost:3000 during `npm run dev`.

## 🌐 Deployment
### Vercel
1. Import repo into Vercel
2. Framework: Next.js (no extra config) – remove `output: 'export'` in `next.config.mjs` if using SSR features later.

### GitHub Pages
1. Keep `output: 'export'` in `next.config.mjs` (already set)
2. Run `npm run build`
3. Publish the `out/` directory (GitHub Actions or manual)
4. If using a subpath, set `assetPrefix` and `basePath` in `next.config.mjs`

## 🔧 Customization
- Replace placeholder images in `public/assets` (add directory) with real photos.
- Update JOIN link in `src/data/content.ts` (`JOIN_LINK.href`).
- Add real social links in `SOCIALS` object.
- Extend `EVENTS` and `PROJECTS` arrays with real content.
- Integrate a form service (Formspree, Resend, etc.) for contact form.

## 🧪 Future Enhancements
- Add dynamic events/projects from a headless CMS.
- Implement authentication for member portal.
- Add blog section for research updates.
- Accessibility audit & light theme toggle.

## 📄 License
MIT © 2025 AI & Machine Learning Club – OCT

## 🤝 Contributing
PRs welcome! Open an issue to discuss major changes.

## 📬 Contact
Email: aimlclub.oct@gmail.com

---
Replace placeholder links and images before production. Enjoy building! 🚀
