"use client";
import { motion } from 'framer-motion';
import { X, Linkedin, Github, Instagram, Twitter } from 'lucide-react';
import type { TeamMember } from '../data/content';
import Image from 'next/image';

interface TeamProfileModalProps {
  member: TeamMember;
  onClose: () => void;
}

import { useEffect, useRef } from 'react';

export default function TeamProfileModal({ member, onClose }: TeamProfileModalProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  // Focus trap: gather focusable elements and cycle Tab/Shift+Tab
  useEffect(() => {
    const prevActive = document.activeElement as HTMLElement | null;
    const node = containerRef.current;
    if (closeBtnRef.current) closeBtnRef.current.focus();

    function keyHandler(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key === 'Tab' && node) {
        const selectors = 'button,[href],input,select,textarea,[tabindex]:not([tabindex="-1"])';
        const focusables = Array.from(node.querySelectorAll<HTMLElement>(selectors)).filter(el => !el.hasAttribute('disabled'));
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        } else if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      }
    }
    window.addEventListener('keydown', keyHandler);
    return () => {
      window.removeEventListener('keydown', keyHandler);
      prevActive?.focus();
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      aria-modal="true"
      role="dialog"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <motion.div
        ref={containerRef}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        onClick={e => e.stopPropagation()}
        className="relative w-full max-w-md rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 shadow-neon space-y-4"
      >
        <button
          ref={closeBtnRef}
          onClick={onClose}
          aria-label="Close profile"
          className="absolute top-3 right-3 p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white focus:outline-none focus:ring-2 focus:ring-neon-blue/40"
        >
          <X size={16} />
        </button>
        <div className="flex flex-col items-center text-center gap-3">
          {member.image ? (
            <div className="h-24 w-24 rounded-xl overflow-hidden shadow-neon-sm ring-1 ring-white/10">
              <Image src={member.image} alt={member.name} width={96} height={96} className="h-full w-full object-cover" loading="lazy" />
            </div>
          ) : (
            <div className="h-24 w-24 rounded-xl bg-gradient-to-br from-neon-blue to-neon-pink flex items-center justify-center font-display text-2xl shadow-neon-sm">
              {member.name.split(' ').map(s => s[0]).join('').slice(0,2).toUpperCase()}
            </div>
          )}
          <h2 className="text-xl font-semibold tracking-tight">{member.name}</h2>
          <div className="text-xs inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
            {member.role}
          </div>
          {member.bio && (
            <p className="text-sm leading-relaxed text-white/70 mt-2">{member.bio}</p>
          )}
          <div className="flex gap-3 mt-2">
            {member.linkedin && <a href={member.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer" className="p-2 rounded-md bg-white/5 hover:bg-white/10 text-white/70 hover:text-white"><Linkedin size={18} /></a>}
            {member.github && <a href={member.github} aria-label="GitHub" target="_blank" rel="noreferrer" className="p-2 rounded-md bg-white/5 hover:bg-white/10 text-white/70 hover:text-white"><Github size={18} /></a>}
            {member.instagram && <a href={member.instagram} aria-label="Instagram" target="_blank" rel="noreferrer" className="p-2 rounded-md bg-white/5 hover:bg-white/10 text-white/70 hover:text-white"><Instagram size={18} /></a>}
            {member.x && <a href={member.x} aria-label="X" target="_blank" rel="noreferrer" className="p-2 rounded-md bg-white/5 hover:bg-white/10 text-white/70 hover:text-white"><Twitter size={18} /></a>}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}