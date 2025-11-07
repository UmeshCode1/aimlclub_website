"use client";
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { JOIN_LINK } from '@/data/content';

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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur bg-black/30 border-b border-white/10' : ''}`} role="banner">
      <nav className="container-max flex items-center justify-between h-16" aria-label="Primary">
        <Link href="#" aria-label="AI & ML Club – OCT Home" className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-blue rounded-lg">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-neon-blue to-neon-pink shadow-neon" />
          <span className="font-display text-lg md:text-xl tracking-tight">AI & ML Club – OCT</span>
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
                className={`transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-blue rounded-md px-1 py-1 ${isActive ? 'text-white' : 'text-white/80 hover:text-white'}`}
              >
                {n.label}
                {isActive && <span className="block h-0.5 mt-1 rounded bg-gradient-to-r from-neon-blue to-neon-pink" />}
              </a>
            );
          })}
          <a href={JOIN_LINK.href} className="btn btn-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-blue">{JOIN_LINK.label}</a>
        </div>

        <button className="md:hidden p-2 rounded-lg hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-blue" onClick={() => setOpen((o) => !o)} aria-label="Toggle navigation menu" aria-expanded={open} aria-controls="mobile-menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="md:hidden bg-black/80 backdrop-blur border-t border-white/10" role="dialog" aria-modal="true">
          <div className="container-max py-4 flex flex-col gap-2" role="menu">
            {navItems.map((n) => {
              const isActive = active && n.href === `#${active}`;
              return (
                <a key={n.label} href={n.href} role="menuitem" aria-current={isActive ? 'page' : undefined} className={`px-2 py-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-blue ${isActive ? 'bg-white/10' : 'hover:bg-white/10'}`} onClick={() => setOpen(false)}>
                  {n.label}
                </a>
              );
            })}
            <a href={JOIN_LINK.href} className="btn btn-primary w-fit focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-blue">{JOIN_LINK.label}</a>
          </div>
        </div>
      )}
    </header>
  );
}
