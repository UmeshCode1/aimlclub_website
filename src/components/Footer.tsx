import { Github, Instagram, Linkedin, Mail } from 'lucide-react';
import { SOCIALS } from '@/data/content';

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10">
      <div className="container-max py-12">
        {/* Developer Credit */}
        <div className="mb-8 text-center">
          <p className="text-sm text-white/50 mb-2">Developed with ❤️ by</p>
          <div className="inline-flex flex-col items-center gap-2">
            <h3 className="text-lg font-semibold bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink bg-clip-text text-transparent">
              Umesh Patel
            </h3>
            <p className="text-sm text-white/60">Vice President – AI & Machine Learning Club (OCT)</p>
            <div className="flex items-center gap-3 mt-2">
              <a 
                href="https://github.com/UmeshCode1" 
                target="_blank" 
                rel="noreferrer"
                className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Developer GitHub"
              >
                <Github size={18} className="text-white/70 hover:text-neon-blue transition-colors" />
              </a>
              <a 
                href="https://www.linkedin.com/in/umesh-patel-5647b42a4" 
                target="_blank" 
                rel="noreferrer"
                className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Developer LinkedIn"
              >
                <Linkedin size={18} className="text-white/70 hover:text-neon-blue transition-colors" />
              </a>
              <a 
                href="https://www.instagram.com/nycto_phile.i" 
                target="_blank" 
                rel="noreferrer"
                className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Developer Instagram"
              >
                <Instagram size={18} className="text-white/70 hover:text-neon-pink transition-colors" />
              </a>
              <a 
                href="mailto:umesh.code1@gmail.com"
                className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Developer Email"
              >
                <Mail size={18} className="text-white/70 hover:text-neon-purple transition-colors" />
              </a>
            </div>
          </div>
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
  );
}
