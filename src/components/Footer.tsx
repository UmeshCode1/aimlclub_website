"use client";
import { Github, Instagram, Linkedin, Heart } from 'lucide-react';
import { SOCIALS } from '@/data/content';
import { useState } from 'react';
import DeveloperModal from './DeveloperModal';

export default function Footer() {
  const [showDevModal, setShowDevModal] = useState(false);
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="mt-32 border-t border-white/10 bg-gradient-to-b from-transparent via-black/30 to-black/50 relative overflow-hidden">
        {/* Decorative gradient orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-pink/5 rounded-full blur-3xl" />
        
        <div className="container-max py-20 relative z-10">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
            {/* Club Info - Larger Column */}
            <div className="md:col-span-5 space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-2xl bg-gradient-to-tr from-neon-blue via-neon-purple to-neon-pink shadow-neon-strong animate-float" />
                <div>
                  <span className="font-display text-2xl tracking-tight brand-gradient font-bold block text-shimmer">
                    AI & ML Club
                  </span>
                  <span className="text-xs text-white/40 uppercase tracking-widest">OCT Bhopal</span>
                </div>
              </div>
              <p className="text-base text-white/70 leading-relaxed max-w-md">
                Empowering students to explore Artificial Intelligence and Machine Learning through innovation, collaboration, and hands-on learning.
              </p>
              <div className="pt-4">
                <p className="text-sm text-white/50 mb-2 font-semibold">Location</p>
                <p className="text-sm text-white/70">
                  Oriental College of Technology<br />
                  Bhopal, Madhya Pradesh
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-3 space-y-6">
              <h3 className="font-display font-bold text-xl bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">Quick Links</h3>
              <nav className="flex flex-col gap-3">
                {['About', 'Team', 'Events', 'Projects', 'Gallery', 'Contact'].map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-white/60 hover:text-white hover:translate-x-2 transition-all duration-300 inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-gradient-to-r from-neon-blue to-neon-pink group-hover:w-4 transition-all duration-300" />
                    {link}
                  </a>
                ))}
              </nav>
            </div>

            {/* Social & Connect */}
            <div className="md:col-span-4 space-y-6">
              <h3 className="font-display font-bold text-xl bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">Connect With Us</h3>
              <div className="flex items-center gap-4">
                <a 
                  className="p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/0 hover:from-white/10 hover:to-white/5 border border-white/10 hover:border-neon-blue/50 transition-all duration-300 group hover:shadow-neon" 
                  href={SOCIALS.linkedin} 
                  aria-label="Club LinkedIn" 
                  target="_blank" 
                  rel="noreferrer"
                  title="LinkedIn"
                >
                  <Linkedin size={22} className="group-hover:scale-110 group-hover:text-neon-blue transition-all" />
                </a>
                <a 
                  className="p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/0 hover:from-white/10 hover:to-white/5 border border-white/10 hover:border-neon-pink/50 transition-all duration-300 group hover:shadow-neon" 
                  href={SOCIALS.instagram} 
                  aria-label="Club Instagram" 
                  target="_blank" 
                  rel="noreferrer"
                  title="Instagram"
                >
                  <Instagram size={22} className="group-hover:scale-110 group-hover:text-neon-pink transition-all" />
                </a>
                <a 
                  className="p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/0 hover:from-white/10 hover:to-white/5 border border-white/10 hover:border-neon-purple/50 transition-all duration-300 group hover:shadow-neon" 
                  href={SOCIALS.github} 
                  aria-label="Club GitHub" 
                  target="_blank" 
                  rel="noreferrer"
                  title="GitHub"
                >
                  <Github size={22} className="group-hover:scale-110 group-hover:text-neon-purple transition-all" />
                </a>
              </div>
            </div>
          </div>

          {/* Developer Credit */}
          <div className="pt-12 border-t border-white/10">
            <div className="text-center mb-8">
              <p className="text-sm text-white/50 mb-6 flex items-center justify-center gap-2">
                Crafted with <Heart size={18} className="text-red-500 animate-pulse-slow" fill="currentColor" /> by
              </p>
              <button
                onClick={() => setShowDevModal(true)}
                className="group inline-flex flex-col items-center gap-3 px-8 py-5 rounded-2xl hover:bg-white/5 transition-all duration-500 cursor-pointer border border-transparent hover:border-white/20 hover:scale-105 hover:shadow-neon"
                aria-label="View developer details"
              >
                <h4 className="text-2xl font-bold bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                  Umesh Patel
                </h4>
                <p className="text-sm text-white/60 group-hover:text-white/80 transition-colors font-medium">
                  Vice President – AI & ML Club (OCT)
                </p>
                <span className="text-xs text-neon-blue opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-1">
                  Click for details →
                </span>
              </button>
            </div>

            {/* Copyright */}
            <div className="text-center text-sm text-white/40 pt-8 border-t border-white/5">
              <p className="flex items-center justify-center gap-2 flex-wrap">
                <span>© {currentYear} AI & Machine Learning Club – OCT.</span>
                <span className="hidden sm:inline">•</span>
                <span>All rights reserved.</span>
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Developer Modal */}
      <DeveloperModal isOpen={showDevModal} onClose={() => setShowDevModal(false)} />
    </>
  );
}
