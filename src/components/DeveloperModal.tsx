"use client";
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Instagram, Linkedin, Mail, X } from 'lucide-react';
import { useEffect } from 'react';

interface DeveloperModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DeveloperModal({ isOpen, onClose }: DeveloperModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleEsc = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
      document.addEventListener('keydown', handleEsc);
      return () => {
        document.body.style.overflow = 'unset';
        document.removeEventListener('keydown', handleEsc);
      };
    }
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />
          
          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-md"
            >
              <div className="card p-8 relative overflow-hidden">
                {/* Animated gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 via-neon-purple/10 to-neon-pink/10 opacity-50" />
                
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink rounded-2xl blur-xl opacity-30" />
                
                {/* Close button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 rounded-lg hover:bg-white/10 transition-colors z-10"
                  aria-label="Close developer details"
                >
                  <X size={20} className="text-white/70 hover:text-white" />
                </button>

                {/* Content */}
                <div className="relative flex flex-col items-center gap-6">
                  {/* Avatar placeholder or initial */}
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-neon-blue via-neon-purple to-neon-pink p-1">
                    <div className="w-full h-full rounded-full bg-[#05060A] flex items-center justify-center">
                      <span className="text-4xl font-bold bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink bg-clip-text text-transparent">
                        UP
                      </span>
                    </div>
                  </div>

                  {/* Name */}
                  <div className="text-center">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink bg-clip-text text-transparent mb-2">
                      Umesh Patel
                    </h3>
                    <p className="text-white/70 text-sm mb-1">Vice President</p>
                    <p className="text-white/50 text-xs">AI & Machine Learning Club – OCT</p>
                  </div>

                  {/* Bio */}
                  <p className="text-white/60 text-sm text-center leading-relaxed">
                    Passionate developer and AI enthusiast dedicated to building innovative solutions 
                    and fostering a vibrant tech community at OCT.
                  </p>

                  {/* Social Links */}
                  <div className="w-full pt-4 border-t border-white/10">
                    <p className="text-white/50 text-xs uppercase tracking-wider mb-3 text-center">Connect</p>
                    <div className="grid grid-cols-2 gap-3">
                      <a
                        href="https://github.com/UmeshCode1"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-neon-blue/50 transition-all group"
                      >
                        <Github size={18} className="text-white/70 group-hover:text-neon-blue transition-colors" />
                        <span className="text-sm text-white/80">GitHub</span>
                      </a>
                      
                      <a
                        href="https://www.linkedin.com/in/umesh-patel-5647b42a4"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-neon-blue/50 transition-all group"
                      >
                        <Linkedin size={18} className="text-white/70 group-hover:text-neon-blue transition-colors" />
                        <span className="text-sm text-white/80">LinkedIn</span>
                      </a>
                      
                      <a
                        href="https://www.instagram.com/nycto_phile.i"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-neon-pink/50 transition-all group"
                      >
                        <Instagram size={18} className="text-white/70 group-hover:text-neon-pink transition-colors" />
                        <span className="text-sm text-white/80">Instagram</span>
                      </a>
                      
                      <a
                        href="mailto:umesh.code1@gmail.com"
                        className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-neon-purple/50 transition-all group"
                      >
                        <Mail size={18} className="text-white/70 group-hover:text-neon-purple transition-colors" />
                        <span className="text-sm text-white/80">Email</span>
                      </a>
                    </div>
                  </div>

                  {/* Footer badge */}
                  <div className="text-center pt-2">
                    <span className="text-xs text-white/40">
                      Website Developer • 2025
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
