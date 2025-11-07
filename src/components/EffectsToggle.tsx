"use client";
import { useEffect, useState } from 'react';
import { Wind, Zap } from 'lucide-react';

/** Manual accessibility toggle for motion/effects.
 * Adds/removes .effects-reduced on <html>, layering atop prefers-reduced-motion.
 */
export default function EffectsToggle() {
  const [reduced, setReduced] = useState<boolean>(false);

  useEffect(() => {
    const stored = localStorage.getItem('effectsReduced');
    if (stored === 'true') {
      setReduced(true);
      document.documentElement.classList.add('effects-reduced');
    }
  }, []);

  useEffect(() => {
    if (reduced) {
      document.documentElement.classList.add('effects-reduced');
    } else {
      document.documentElement.classList.remove('effects-reduced');
    }
    localStorage.setItem('effectsReduced', String(reduced));
  }, [reduced]);

  return (
    <button
      onClick={() => setReduced(r => !r)}
      aria-pressed={reduced}
      className={`p-2 rounded-lg border text-sm flex items-center gap-2 transition-colors duration-300 ${reduced ? 'bg-white/10 border-white/20' : 'bg-white/5 border-white/10 hover:bg-white/10'}`}
      aria-label={reduced ? 'Enable full effects' : 'Reduce motion & effects'}
    >
      {reduced ? <Wind size={16} className="text-accent" /> : <Zap size={16} className="text-accent" />}
      <span>{reduced ? 'Reduced Effects' : 'Full Effects'}</span>
    </button>
  );
}
