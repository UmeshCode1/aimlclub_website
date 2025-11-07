"use client";
import { Github, Instagram, Linkedin } from 'lucide-react';
import { SOCIALS } from '@/data/content';
import { useState } from 'react';
import DeveloperModal from './DeveloperModal';
import NewsletterSignup from './NewsletterSignup';
import { motion } from 'framer-motion';

export default function Footer() {
  const [showDevModal, setShowDevModal] = useState(false);

  return (
    <>
      <footer className="mt-24 border-t border-white/10 relative overflow-hidden">
        {/* Ambient gradient orbs */}
        <motion.div
          aria-hidden
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.25, scale: 1 }}
          transition={{ duration: 1.8, ease: 'easeOut' }}
          className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 rounded-full bg-gradient-to-br from-neon-blue/40 via-neon-purple/30 to-neon-pink/40 blur-3xl" />
        <motion.div
          aria-hidden
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.18, scale: 1 }}
          transition={{ duration: 2.2, ease: 'easeOut', delay: 0.2 }}
          className="pointer-events-none absolute top-10 right-[-5rem] w-64 h-64 rounded-full bg-gradient-to-tr from-neon-pink/40 via-neon-purple/30 to-neon-blue/40 blur-[90px]" />
        <div className="container-max py-12 relative">
          
          {/* Newsletter Signup */}
          <div className="mb-12 max-w-md mx-auto">
            <NewsletterSignup />
          </div>

          {/* Developer Credit - Clickable */}
          <div className="mb-8 text-center">
            <p className="text-sm text-white/65 mb-3">Developed with ❤️ by</p>
            <button
              onClick={() => setShowDevModal(true)}
              className="group inline-flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-white/5 transition-all duration-300 cursor-pointer border border-transparent hover:border-white/10"
              aria-label="View developer details"
            >
              <h3 className="text-xl font-bold bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink bg-clip-text text-transparent group-hover:scale-105 transition-transform">
                Umesh Patel
              </h3>
              <p className="text-sm text-white/75 group-hover:text-white/80 transition-colors">
                Click to view details
              </p>
            </button>
          </div>

          {/* Club Footer */}
          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/70">
            <p className="text-sm">© {new Date().getFullYear()} AI & Machine Learning Club – OCT. All rights reserved.</p>
            <div className="flex items-center gap-3">
              {[
                { href: SOCIALS.linkedin, label: 'LinkedIn', icon: <Linkedin size={18} /> },
                { href: SOCIALS.instagram, label: 'Instagram', icon: <Instagram size={18} /> },
                { href: SOCIALS.github, label: 'GitHub', icon: <Github size={18} /> }
              ].map((s) => (
                <a
                  key={s.label}
                  className="group relative p-2 rounded-md ring-1 ring-white/10 hover:ring-white/30 focus-visible:ring-neon-purple/60 focus:outline-none transition-all duration-300 overflow-hidden"
                  href={s.href}
                  aria-label={`Club ${s.label}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span aria-hidden className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-neon-blue/25 via-neon-purple/25 to-neon-pink/25 blur-sm transition-opacity" />
                  <span className="relative flex items-center justify-center text-white/70 group-hover:text-white group-focus-visible:text-white transition-colors group-hover:scale-110 group-focus-visible:scale-110">
                    {s.icon}
                  </span>
                  <span className="sr-only">{s.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Developer Modal */}
      <DeveloperModal isOpen={showDevModal} onClose={() => setShowDevModal(false)} />
    </>
  );
}
