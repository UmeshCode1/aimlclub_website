import { Github, Instagram, Linkedin } from 'lucide-react';
import { SOCIALS } from '@/data/content';

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10">
      <div className="container-max py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/70">
        <p className="text-sm">© {new Date().getFullYear()} AI & Machine Learning Club – OCT. All rights reserved.</p>
        <div className="flex items-center gap-3">
          <a className="p-2 rounded hover:bg-white/10" href={SOCIALS.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer">
            <Linkedin size={18} />
          </a>
          <a className="p-2 rounded hover:bg-white/10" href={SOCIALS.instagram} aria-label="Instagram" target="_blank" rel="noreferrer">
            <Instagram size={18} />
          </a>
          <a className="p-2 rounded hover:bg-white/10" href={SOCIALS.github} aria-label="GitHub" target="_blank" rel="noreferrer">
            <Github size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
