"use client";
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
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
    const ids = ['about','faculty','team','events','projects','gallery','contact'];
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'backdrop-blur-md bg-black/40 border-b border-white/10 shadow-lg' 
          : 'bg-transparent'
      }`} 
      role="banner"
    >
      <nav className="container-max flex items-center justify-between h-16 md:h-18" aria-label="Primary">
        <Link 
          href="#" 
          aria-label="AI & ML Club – OCT Home" 
          className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-blue rounded-lg p-1 transition-transform hover:scale-105"
        >
          <div className="h-8 w-8 md:h-10 md:w-10 rounded-lg bg-gradient-to-tr from-neon-blue to-neon-pink shadow-neon transition-all" />
          <span className="font-display text-lg md:text-xl tracking-tight brand-gradient whitespace-nowrap">
            AI & ML Club – OCT
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-6" role="menubar">
          {navItems.map((n) => {
            const isActive = active && n.href === `#${active}`;
            return (
              <a
                key={n.label}
                href={n.href}
                role="menuitem"
                aria-current={isActive ? 'page' : undefined}
                className={`relative transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-blue rounded-md px-3 py-2 font-medium ${
                  isActive ? 'text-white' : 'text-white/70 hover:text-white'
                }`}
              >
                {n.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-gradient-to-r from-neon-blue to-neon-pink" />
                )}
              </a>
            );
          })}
          <ThemeToggle />
          <SparkHover density={1.4}>
            <a 
              href={JOIN_LINK.href} 
              className="btn btn-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-blue"
            >
              {JOIN_LINK.label}
            </a>
          </SparkHover>
        </div>

        <button 
          className="md:hidden p-2 rounded-lg hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-blue transition-colors" 
          onClick={() => setOpen((o) => !o)} 
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open} 
          aria-controls="mobile-menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu with animation */}
      {open && (
        <div 
          id="mobile-menu" 
          className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/10 animate-slideDown" 
          role="dialog" 
          aria-modal="true"
        >
          <div className="container-max py-6 flex flex-col gap-3" role="menu">
            {navItems.map((n) => {
              const isActive = active && n.href === `#${active}`;
              return (
                <a 
                  key={n.label} 
                  href={n.href} 
                  role="menuitem" 
                  aria-current={isActive ? 'page' : undefined} 
                  className={`px-4 py-3 rounded-lg font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-blue ${
                    isActive 
                      ? 'bg-white/10 text-white border-l-2 border-neon-blue' 
                      : 'hover:bg-white/5 text-white/80 hover:text-white'
                  }`} 
                  onClick={() => setOpen(false)}
                >
                  {n.label}
                </a>
              );
            })}
            <div className="px-4 pt-2">
              <ThemeToggle />
            </div>
            <SparkHover density={1.2}>
              <a 
                href={JOIN_LINK.href} 
                className="btn btn-primary w-full justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-blue mt-2"
              >
                {JOIN_LINK.label}
              </a>
            </SparkHover>
          </div>
        </div>
      )}
    </header>
  );
}
