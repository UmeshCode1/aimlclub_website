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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur bg-black/30 border-b border-white/10' : ''}`}>
      <nav className="container-max flex items-center justify-between h-16">
        <Link href="#" className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-neon-blue to-neon-pink shadow-neon" />
          <span className="font-display text-lg md:text-xl tracking-tight">AI & ML Club – OCT</span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {navItems.map((n) => (
            <a key={n.label} href={n.href} className="text-white/80 hover:text-white transition-colors">
              {n.label}
            </a>
          ))}
          <a href={JOIN_LINK.href} className="btn btn-primary">{JOIN_LINK.label}</a>
        </div>

        <button className="md:hidden p-2 rounded-lg hover:bg-white/10" onClick={() => setOpen((o) => !o)} aria-label="Toggle Menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-black/80 backdrop-blur border-t border-white/10">
          <div className="container-max py-4 flex flex-col gap-2">
            {navItems.map((n) => (
              <a key={n.label} href={n.href} className="px-2 py-2 rounded hover:bg-white/10" onClick={() => setOpen(false)}>
                {n.label}
              </a>
            ))}
            <a href={JOIN_LINK.href} className="btn btn-primary w-fit">{JOIN_LINK.label}</a>
          </div>
        </div>
      )}
    </header>
  );
}
