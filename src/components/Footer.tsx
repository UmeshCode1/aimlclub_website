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
      <footer className="mt-32 border-t border-white/10 bg-gradient-to-b from-transparent to-black/20">
        <div className="container-max py-16">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Club Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-neon-blue to-neon-pink shadow-neon" />
                <span className="font-display text-xl tracking-tight brand-gradient">
                  AI & ML Club
                </span>
              </div>
              <p className="text-sm text-white/60 leading-relaxed">
                Empowering students to explore Artificial Intelligence and Machine Learning through innovation, collaboration, and hands-on learning.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Quick Links</h3>
              <nav className="flex flex-col gap-2">
                {['About', 'Team', 'Events', 'Projects', 'Gallery', 'Contact'].map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-white/60 hover:text-white hover:translate-x-2 transition-all duration-200 inline-block"
                  >
                    {link}
                  </a>
                ))}
              </nav>
            </div>

            {/* Social & Connect */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Connect With Us</h3>
              <div className="flex items-center gap-3">
                <a 
                  className="p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-neon-blue/50 transition-all duration-300 group" 
                  href={SOCIALS.linkedin} 
                  aria-label="Club LinkedIn" 
                  target="_blank" 
                  rel="noreferrer"
                  title="LinkedIn"
                >
                  <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  className="p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-neon-pink/50 transition-all duration-300 group" 
                  href={SOCIALS.instagram} 
                  aria-label="Club Instagram" 
                  target="_blank" 
                  rel="noreferrer"
                  title="Instagram"
                >
                  <Instagram size={20} className="group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  className="p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-neon-purple/50 transition-all duration-300 group" 
                  href={SOCIALS.github} 
                  aria-label="Club GitHub" 
                  target="_blank" 
                  rel="noreferrer"
                  title="GitHub"
                >
                  <Github size={20} className="group-hover:scale-110 transition-transform" />
                </a>
              </div>
              <p className="text-xs text-white/40 mt-4">
                Oriental College of Technology<br />
                Bhopal, Madhya Pradesh
              </p>
            </div>
          </div>

          {/* Developer Credit */}
          <div className="pt-8 border-t border-white/10">
            <div className="text-center mb-6">
              <p className="text-sm text-white/50 mb-4 flex items-center justify-center gap-2">
                Crafted with <Heart size={16} className="text-red-500 animate-pulse" fill="currentColor" /> by
              </p>
              <button
                onClick={() => setShowDevModal(true)}
                className="group inline-flex flex-col items-center gap-2 px-6 py-4 rounded-xl hover:bg-white/5 transition-all duration-300 cursor-pointer border border-transparent hover:border-white/10 hover:scale-105"
                aria-label="View developer details"
              >
                <h4 className="text-xl font-bold bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink bg-clip-text text-transparent">
                  Umesh Patel
                </h4>
                <p className="text-xs text-white/50 group-hover:text-white/70 transition-colors">
                  Vice President – AI & ML Club (OCT)
                </p>
                <span className="text-xs text-neon-blue opacity-0 group-hover:opacity-100 transition-opacity">
                  Click for details →
                </span>
              </button>
            </div>

            {/* Copyright */}
            <div className="text-center text-sm text-white/40 pt-6 border-t border-white/5">
              <p>© {currentYear} AI & Machine Learning Club – OCT. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Developer Modal */}
      <DeveloperModal isOpen={showDevModal} onClose={() => setShowDevModal(false)} />
    </>
  );
}
