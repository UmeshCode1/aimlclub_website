"use client";
import { useEffect, useRef } from 'react';

// Defines accent palettes that will rotate per section.
const ACCENTS = [
  { a1: '#00F0FF', a2: '#8B5CF6', a3: '#FF1CF7' }, // neon core
  { a1: '#06B6D4', a2: '#6366F1', a3: '#8B5CF6' }, // cyan-indigo
  { a1: '#10B981', a2: '#06B6D4', a3: '#3B82F6' }, // emerald-cyan-blue
  { a1: '#F59E0B', a2: '#EF4444', a3: '#F472B6' }, // warm sunset
];

/**
 * Observes sections and updates CSS accent variables (--accent-1..3) based on the most visible section.
 * Attach once near root (e.g., inside layout or page) and ensure sections have data-accent-index attribute.
 */
export default function AccentThemeController() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('[data-accent-index]')) as HTMLElement[];
    if (!sections.length) return;

    const mediaReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const root = document.documentElement;
    let currentIdx = -1;

    const io = new IntersectionObserver((entries) => {
      const visible = entries.filter(e => e.isIntersecting)
        .sort((a,b) => b.intersectionRatio - a.intersectionRatio);
      if (!visible.length) return;
      const top = visible[0].target as HTMLElement;
      const idxAttr = top.getAttribute('data-accent-index');
      if (!idxAttr) return;
      const idx = parseInt(idxAttr, 10) % ACCENTS.length;
      if (idx === currentIdx) return;
      currentIdx = idx;
      const palette = ACCENTS[idx];
      // Smooth transition, less flashy if reduced motion
      const duration = mediaReduced ? 0 : 400;
      root.style.setProperty('--accent-1', palette.a1);
      root.style.setProperty('--accent-2', palette.a2);
      root.style.setProperty('--accent-3', palette.a3);
      if (!mediaReduced) {
        root.animate([
          { filter: 'brightness(0.9)' },
          { filter: 'brightness(1)' }
        ], { duration, easing: 'ease-out' });
      }
    }, { threshold: [0,0.25,0.5,0.75,1], rootMargin: '-35% 0px -50% 0px' });

    sections.forEach(s => io.observe(s));
    return () => io.disconnect();
  }, []);

  return <div ref={ref} aria-hidden />;
}
