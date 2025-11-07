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
      <footer className="mt-32 border-t border-white/15 bg-gradient-to-b from-black/20 via-black/40 to-black/60 relative overflow-hidden backdrop-blur-sm">
        {/* Enhanced decorative gradient orbs */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-neon-blue/10 to-neon-purple/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-tl from-neon-pink/10 to-neon-purple/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-purple/5 rounded-full blur-3xl" />
        
        <div className="container-max py-20 relative z-10">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
            {/* Club Info - Larger Column */}
            <div className="md:col-span-5 space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-2xl bg-gradient-to-tr from-neon-blue via-neon-purple to-neon-pink shadow-lg shadow-neon-blue/40 animate-float relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
                </div>
                <div>
                  <span className="font-display text-2xl tracking-tight brand-gradient font-bold block text-shimmer">
                    AI & ML Club
                  </span>
                  <span className="text-xs text-white/50 uppercase tracking-widest font-semibold">OCT Bhopal</span>
                </div>
              </div>
              <p className="text-base text-white/75 leading-relaxed max-w-md font-medium">
                Empowering students to explore Artificial Intelligence and Machine Learning through innovation, collaboration, and hands-on learning.
              </p>
              <div className="pt-4">
                <p className="text-sm text-white/60 mb-2 font-bold uppercase tracking-wider">Location</p>
                <p className="text-sm text-white/75 leading-relaxed">
                  Oriental College of Technology<br />
                  Bhopal, Madhya Pradesh
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-3 space-y-6">
              <h3 className="font-display font-bold text-xl bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">Quick Links</h3>
              <nav className="flex flex-col gap-3">
                {['About', 'Team', 'Events', 'Projects', 'Gallery', 'Contact'].map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-white/70 hover:text-white hover:translate-x-2 transition-all duration-300 inline-flex items-center gap-2 group font-medium"
                  >
                    <span className="w-0 h-px bg-gradient-to-r from-neon-blue to-neon-pink group-hover:w-5 transition-all duration-300 shadow-sm shadow-neon-blue" />
                    {link}
                  </a>
                ))}
              </nav>
            </div>

            {/* Social & Connect */}
            <div className="md:col-span-4 space-y-6">
              <h3 className="font-display font-bold text-xl bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">Connect With Us</h3>
              <div className="flex items-center gap-4">
                <a 
                  className="p-4 rounded-xl bg-gradient-to-br from-white/8 via-white/5 to-white/0 hover:from-blue-500/20 hover:to-cyan-500/10 border border-white/10 hover:border-neon-blue/50 transition-all duration-300 group hover:shadow-lg hover:shadow-neon-blue/30 hover:scale-110" 
                  href={SOCIALS.linkedin} 
                  aria-label="Club LinkedIn" 
                  target="_blank" 
                  rel="noreferrer"
                  title="LinkedIn"
                >
                  <Linkedin size={22} className="group-hover:scale-110 group-hover:text-neon-blue transition-all" />
                </a>
                <a 
                  className="p-4 rounded-xl bg-gradient-to-br from-white/8 via-white/5 to-white/0 hover:from-pink-500/20 hover:to-purple-500/10 border border-white/10 hover:border-neon-pink/50 transition-all duration-300 group hover:shadow-lg hover:shadow-neon-pink/30 hover:scale-110" 
                  href={SOCIALS.instagram} 
                  aria-label="Club Instagram" 
                  target="_blank" 
                  rel="noreferrer"
                  title="Instagram"
                >
                  <Instagram size={22} className="group-hover:scale-110 group-hover:text-neon-pink transition-all" />
                </a>
                <a 
                  className="p-4 rounded-xl bg-gradient-to-br from-white/8 via-white/5 to-white/0 hover:from-purple-500/20 hover:to-violet-500/10 border border-white/10 hover:border-neon-purple/50 transition-all duration-300 group hover:shadow-lg hover:shadow-neon-purple/30 hover:scale-110" 
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
