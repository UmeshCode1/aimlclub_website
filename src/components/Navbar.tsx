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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'backdrop-blur-xl bg-black/60 border-b border-white/10 shadow-2xl shadow-neon-blue/5' 
          : 'bg-transparent'
      }`} 
      role="banner"
    >
      <nav className="container-max flex items-center justify-between h-20 md:h-24" aria-label="Primary">
        <Link 
          href="#" 
          aria-label="AI & ML Club – OCT Home" 
          className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-blue rounded-xl p-2 transition-all duration-300 hover:scale-105 group"
        >
          <div className="h-10 w-10 md:h-12 md:w-12 rounded-xl bg-gradient-to-tr from-neon-blue via-neon-purple to-neon-pink shadow-neon group-hover:shadow-neon-strong transition-all duration-300 group-hover:rotate-6" />
          <span className="font-display text-xl md:text-2xl tracking-tight brand-gradient whitespace-nowrap font-bold">
            AI & ML Club
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8" role="menubar">
          {navItems.map((n) => {
            const isActive = active && n.href === `#${active}`;
            return (
              <a
                key={n.label}
                href={n.href}
                role="menuitem"
                aria-current={isActive ? 'page' : undefined}
                className={`relative transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-blue rounded-lg px-4 py-2 font-semibold group ${
                  isActive ? 'text-white' : 'text-white/60 hover:text-white'
                }`}
              >
                {n.label}
                {isActive ? (
                  <span className="absolute bottom-0 left-0 right-0 h-1 rounded-full bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink shadow-neon-sm" />
                ) : (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 rounded-full bg-gradient-to-r from-neon-blue to-neon-pink group-hover:w-full transition-all duration-300" />
                )}
              </a>
            );
          })}
          <ThemeToggle />
          <SparkHover density={1.4}>
            <a 
              href={JOIN_LINK.href} 
              className="btn btn-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-blue shadow-neon hover:shadow-neon-strong"
            >
              {JOIN_LINK.label}
            </a>
          </SparkHover>
        </div>

        <button 
          className="md:hidden p-3 rounded-xl hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-blue transition-all duration-300 border border-white/10 hover:border-white/20" 
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
          className="md:hidden bg-black/98 backdrop-blur-xl border-t border-white/10 animate-slideDown shadow-2xl" 
          role="dialog" 
          aria-modal="true"
        >
          <div className="container-max py-8 flex flex-col gap-4" role="menu">
            {navItems.map((n) => {
              const isActive = active && n.href === `#${active}`;
              return (
                <a 
                  key={n.label} 
                  href={n.href} 
                  role="menuitem" 
                  aria-current={isActive ? 'page' : undefined} 
                  className={`px-5 py-4 rounded-xl font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-blue flex items-center justify-between group ${
                    isActive 
                      ? 'bg-gradient-to-r from-white/10 to-white/5 text-white border-l-4 border-neon-blue shadow-neon-sm' 
                      : 'hover:bg-white/5 text-white/70 hover:text-white border-l-4 border-transparent hover:border-white/20'
                  }`} 
                  onClick={() => setOpen(false)}
                >
                  <span>{n.label}</span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-neon-blue to-neon-pink animate-pulse" />
                  )}
                </a>
              );
            })}
            <div className="px-5 pt-4 pb-2 border-t border-white/10 mt-2">
              <ThemeToggle />
            </div>
            <SparkHover density={1.2}>
              <a 
                href={JOIN_LINK.href} 
                className="btn btn-primary w-full justify-center text-base py-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-blue shadow-neon hover:shadow-neon-strong"
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
