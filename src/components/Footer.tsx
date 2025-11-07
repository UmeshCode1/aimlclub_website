"use client";
import { Github, Instagram, Linkedin } from 'lucide-react';
import { SOCIALS } from '@/data/content';
import { useState } from 'react';
import DeveloperModal from './DeveloperModal';

export default function Footer() {
  const [showDevModal, setShowDevModal] = useState(false);

  return (
    <>
      <footer className="mt-24 border-t border-white/10">
        <div className="container-max py-12">
          {/* Developer Credit - Clickable */}
          <div className="mb-8 text-center">
            <p className="text-sm text-white/50 mb-3">Developed with ❤️ by</p>
            <button
              onClick={() => setShowDevModal(true)}
              className="group inline-flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-white/5 transition-all duration-300 cursor-pointer border border-transparent hover:border-white/10"
              aria-label="View developer details"
            >
              <h3 className="text-xl font-bold bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink bg-clip-text text-transparent group-hover:scale-105 transition-transform">
                Umesh Patel
              </h3>
              <p className="text-sm text-white/60 group-hover:text-white/80 transition-colors">
                Click to view details
              </p>
            </button>
          </div>

          {/* Club Footer */}
          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/70">
            <p className="text-sm">© {new Date().getFullYear()} AI & Machine Learning Club – OCT. All rights reserved.</p>
            <div className="flex items-center gap-3">
              <a className="p-2 rounded hover:bg-white/10" href={SOCIALS.linkedin} aria-label="Club LinkedIn" target="_blank" rel="noreferrer">
                <Linkedin size={18} />
              </a>
              <a className="p-2 rounded hover:bg-white/10" href={SOCIALS.instagram} aria-label="Club Instagram" target="_blank" rel="noreferrer">
                <Instagram size={18} />
              </a>
              <a className="p-2 rounded hover:bg-white/10" href={SOCIALS.github} aria-label="Club GitHub" target="_blank" rel="noreferrer">
                <Github size={18} />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Developer Modal */}
      <DeveloperModal isOpen={showDevModal} onClose={() => setShowDevModal(false)} />
    </>
  );
}
