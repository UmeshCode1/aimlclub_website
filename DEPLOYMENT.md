# Performance & Deployment Guide

## 🚀 Quick Start

```powershell
# Development
npm run dev

# Production Build
npm run build

# Preview Static Export
npm run preview
```

## 📦 Build Output

The static site exports to `./out/` directory with:
- ✅ Optimized HTML/CSS/JS
- ✅ Pre-rendered static pages
- ✅ Unoptimized images (for static hosting)
- ✅ Client-side hydration enabled

## 🎯 Performance Optimizations Applied

### 1. **Code Splitting**
- Automatic route-based code splitting via Next.js
- Client components marked with `"use client"`
- Lazy loading of animations with Framer Motion

### 2. **Image Optimization**
- SVG placeholders used (scalable, tiny file size)
- Ready for image replacement with WebP format
- Recommendation: Use `next/image` with `loader` for production images

### 3. **CSS Optimization**
- Tailwind CSS purges unused styles in production
- Critical CSS inlined automatically
- Custom scrollbar styles minimal footprint

### 4. **Animation Performance**
- `whileInView` with `viewport: { once: true }` prevents re-animations
- GPU-accelerated transforms (translate, scale, rotate)
- `will-change` hints for smooth animations

### 5. **Bundle Size**
Current dependencies:
- `next`: ~350KB (gzipped)
- `react` + `react-dom`: ~130KB (gzipped)
- `framer-motion`: ~60KB (gzipped)
- `lucide-react`: ~15KB (gzipped, tree-shaken)
- `tailwindcss`: CSS only in production (~8-12KB gzipped)

**Total estimated bundle:** ~200-250KB gzipped (excellent for modern web)

## 📊 Lighthouse Target Scores

### Expected Performance Metrics:
- **Performance:** 95+ (static site, minimal JS)
- **Accessibility:** 90+ (semantic HTML, ARIA labels)
- **Best Practices:** 95+
- **SEO:** 90+ (with proper meta tags)

### Tips to Reach 100:
1. Add real optimized images (WebP, proper sizes)
2. Implement lazy loading for below-fold content
3. Add proper `<meta>` tags for SEO
4. Use `next/font` optimization (already implemented)
5. Add service worker for offline caching (optional)

## 🔧 GitHub Pages Setup

### Required Repository Settings:

1. **Go to Settings → Pages:**
   - Source: **GitHub Actions** (NOT "Deploy from branch")
   
2. **Workflow will auto-trigger on push to `main`**

3. **Check deployment status:**
   - Actions tab: https://github.com/UmeshCode1/aimlclub_website/actions
   - Should see green checkmarks ✅

4. **Live URL:**
   - https://umeshcode1.github.io/aimlclub_website/

### Troubleshooting:

**If 404 errors on routes:**
- Ensure `trailingSlash: true` in `next.config.mjs` ✅ (already set)
- Check `basePath` matches repo name ✅ (already set)

**If CSS not loading:**
- Verify `.nojekyll` file exists in `/public` ✅ (already added)

**If workflow fails:**
- Check Actions tab for error logs
- Verify Node.js version compatibility (using v20)
- Ensure all dependencies install cleanly

## 🛠 Local Testing of Production Build

```powershell
# Build static export
npm run build

# Serve the out/ directory
npm run preview

# Visit http://localhost:3000
```

This simulates exactly what GitHub Pages will serve.

## 📝 Content Updates

### To Add Real Content:

**1. Team Photos:**
```typescript
// In src/data/content.ts, add image field:
export const TEAM: TeamMember[] = [
  { 
    name: 'Vishal Kumar', 
    role: 'President',
    image: '/assets/team/vishal.jpg' // Add this
  },
  // ...
];
```

**2. Event Posters:**
Replace SVG placeholders in `/public/assets/` with real images.

**3. Gallery Images:**
```typescript
// In src/components/GalleryGrid.tsx
// Replace placeholders with real image paths
```

**4. Social Links:**
```typescript
// In src/data/content.ts
export const SOCIALS = {
  email: 'aimlclub.oct@gmail.com',
  linkedin: 'https://www.linkedin.com/company/your-actual-link',
  instagram: 'https://www.instagram.com/your_handle',
  github: 'https://github.com/your-org'
};
```

**5. Join Link:**
```typescript
export const JOIN_LINK = {
  label: 'Join Us',
  href: 'https://forms.google.com/your-form-link' // Update this
};
```

## 🔐 Security Best Practices

- ✅ No sensitive data in repo
- ✅ API keys should use environment variables (if needed)
- ✅ HTTPS enforced on GitHub Pages
- ✅ CORS headers automatic via GitHub Pages

## 📈 Analytics Integration (Optional)

### Google Analytics:

```typescript
// Add to src/app/layout.tsx <head>
<Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" />
<Script id="google-analytics">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

## 🚨 Important Notes

1. **Rebuild Required:** After content changes, run `npm run build` and push
2. **Cache:** GitHub Pages may cache aggressively - hard refresh (Ctrl+Shift+R)
3. **Propagation:** Changes take 1-3 minutes to appear live
4. **Custom Domain:** Can be added in repo Settings → Pages (optional)

---

**Current Status:** ✅ All systems operational

**Last Updated:** November 6, 2025
