"use client";
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { JOIN_LINK } from '@/data/content';
import SparkHover from './SparkHover';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Team', href: '#team' },
  { label: 'Events', href: '#events' },
  { label: 'Projects', href: '#projects' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });

    // Scrollspy with IntersectionObserver
  const ids = ['about','team','events','projects','gallery','contact'];
    const els = ids.map(id => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver((entries) => {
      const visible = entries
        .filter(e => e.isIntersecting)
        .sort((a,b) => b.intersectionRatio - a.intersectionRatio);
      if (visible[0]) setActive(visible[0].target.id);
    }, { rootMargin: '-40% 0px -55% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] });
    els.forEach(el => io.observe(el));

    return () => {
      window.removeEventListener('scroll', onScroll);
      io.disconnect();
    };
  }, []);

  return (
  <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'backdrop-blur-2xl bg-gradient-to-r from-black/70 via-black/55 to-black/70 border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.35)]'
          : 'bg-transparent'
      }`}
      role="banner"
    >
      <nav className="container-max flex items-center justify-between h-16" aria-label="Primary">
        <Link href="/" aria-label="AI & ML Club – OCT Home" className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-blue rounded-lg">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-neon-blue to-neon-pink shadow-neon" />
          <span className="font-display text-lg md:text-xl tracking-tight bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink bg-clip-text text-transparent">AI & ML Club – OCT</span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-6">
            {navItems.map((n) => {
              const isActive = active && n.href === `#${active}`;
              return (
                <li key={n.label}>
                  <a
                    href={n.href}
                    aria-current={isActive ? 'page' : undefined}
                    className={`relative inline-block transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-blue rounded-md px-1 py-1 group ${
                      isActive ? 'text-white' : 'text-white/70 hover:text-white'
                    }`}
                  >
                    <span className="relative">
                      {n.label}
                      <span
                        className={`pointer-events-none absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 bg-gradient-to-r from-neon-blue to-neon-pink transition-transform duration-300 ${
                          isActive ? 'scale-x-100' : 'group-hover:scale-x-100'
                        }`}
                      />
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
          <ThemeToggle />
          <SparkHover>
            <a href={JOIN_LINK.href} className="btn btn-primary pressable focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-blue">{JOIN_LINK.label}</a>
          </SparkHover>
        </div>

        <button className="md:hidden p-2 rounded-lg hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-blue" onClick={() => setOpen((o) => !o)} aria-label="Toggle navigation menu" aria-expanded={open} aria-controls="mobile-menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="md:hidden bg-black/80 backdrop-blur border-t border-white/10"
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            <div className="container-max py-4 flex flex-col gap-2" role="menu">
              {navItems.map((n) => {
                const isActive = active && n.href === `#${active}`;
                return (
                  <a
                    key={n.label}
                    href={n.href}
                    role="menuitem"
                    aria-current={isActive ? 'page' : undefined}
                    className={`px-2 py-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-blue transition-colors ${
                      isActive ? 'bg-white/10' : 'hover:bg-white/10'
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {n.label}
                  </a>
                );
              })}
              <SparkHover>
                <a
                  href={JOIN_LINK.href}
                  className="btn btn-primary w-fit pressable focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-blue"
                >
                  {JOIN_LINK.label}
                </a>
              </SparkHover>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
