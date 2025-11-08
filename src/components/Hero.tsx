"use client";
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import dynamic from 'next/dynamic';
import SparkHover from '@/components/SparkHover';
import { JOIN_LINK } from '@/data/content';
import { useEffect, useMemo, useState } from 'react';

export default function Hero() {
  const Particles = dynamic(() => import('./Particles'), { ssr: false });
  const prefersReducedMotion = useReducedMotion();

  // Rotating/typed keyword logic
  const keywords = useMemo(() => [
    'Intelligence',
    'Machine Learning',
    'Deep Learning',
    'Data Science'
  ], []);
  const [kwIndex, setKwIndex] = useState(0);
  const [display, setDisplay] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) {
      const id = setInterval(() => setKwIndex(i => (i + 1) % keywords.length), 2200);
      return () => clearInterval(id);
    }

    const full = keywords[kwIndex];
    const delta = deleting ? 40 : 80;
    const doneTyping = !deleting && display === full;
    const doneDeleting = deleting && display === '';

    const timeout = setTimeout(() => {
      if (doneTyping) {
        setDeleting(true);
        return;
      }
      if (doneDeleting) {
        setDeleting(false);
        setKwIndex(i => (i + 1) % keywords.length);
        return;
      }
      const nextStr = deleting ? full.slice(0, display.length - 1) : full.slice(0, display.length + 1);
      setDisplay(nextStr);
    }, doneTyping ? 900 : delta);

    return () => clearTimeout(timeout);
  }, [display, deleting, kwIndex, keywords, prefersReducedMotion]);

  // Keep display synced when reduced-motion toggles
  useEffect(() => {
    if (prefersReducedMotion) setDisplay(keywords[kwIndex]);
  }, [prefersReducedMotion, kwIndex, keywords]);

  return (
    <section data-accent-index="0" className="relative pt-28 md:pt-36 pb-16 overflow-hidden min-h-[90vh] flex items-center">
      {/* Animated grid + particles background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[720px] w-[720px] rounded-full bg-gradient-to-b from-neon-blue/30 to-transparent blur-3xl animate-pulse-slow" />
        <div className="absolute top-40 -left-20 h-72 w-72 rounded-full bg-neon-pink/20 blur-3xl animate-pulse-slow" />
        <div className="absolute top-20 -right-10 h-80 w-80 rounded-full bg-neon-purple/20 blur-3xl animate-float" />
        <Particles density={0.00009} />
      </div>

      <div className="container-max text-center">
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-white/75 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-6 shadow-neon-sm"
        >
          <Sparkles size={14} className="text-neon-blue" />
          AI & Machine Learning Club – OCT
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight"
        >
          <span className="bg-gradient-to-r from-white via-white to-white/90 bg-clip-text text-transparent">Innovating the Future with</span>{' '}
          <span className="relative inline-block mt-1">
            <span className="absolute inset-0 blur-2xl opacity-60 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink rounded-md" aria-hidden />
            <span className="bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink bg-clip-text text-transparent font-extrabold">
              {prefersReducedMotion ? keywords[kwIndex] : display}
            </span>
            {!prefersReducedMotion && (
              <span aria-hidden className="ml-0.5 inline-block h-[1.1em] w-[2px] align-[-0.18em] bg-white/80 animate-pulse" />
            )}
          </span>
          <span className="text-white/80">.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-8 text-lg text-white/75 max-w-2xl mx-auto leading-relaxed"
        >
          Workshops, projects, hackathons, and research—building the next generation of AI innovators at Oriental College of Technology.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <SparkHover>
            <a href={JOIN_LINK.href} className="btn btn-primary group">
              {JOIN_LINK.label}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </SparkHover>
          <a href="#about" className="btn btn-ghost">Learn More</a>
        </motion.div>

        {/* Stats cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-16 mx-auto max-w-5xl"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { k: 'Workshops', v: 'Hands-on', icon: '🎓' },
              { k: 'Projects', v: 'Open-source', icon: '💡' },
              { k: 'Hackathons', v: 'Competitive', icon: '🏆' },
              { k: 'Research', v: 'Impactful', icon: '🔬' }
            ].map((i, idx) => (
              <motion.div
                key={i.k}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + idx * 0.1 }}
                className="card p-6 md:p-7 hover:shadow-neon hover:scale-[1.03] transition-all duration-300 group cursor-pointer relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform relative z-10">{i.icon}</div>
                <div className="text-sm text-white/75 uppercase tracking-wider">{i.k}</div>
                <div className="mt-1 font-semibold text-white/90">{i.v}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
