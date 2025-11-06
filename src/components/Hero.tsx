"use client";
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { JOIN_LINK } from '@/data/content';

export default function Hero() {
  return (
    <section className="relative pt-28 md:pt-32 overflow-hidden">
      {/* Background visuals */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[720px] w-[720px] rounded-full bg-gradient-to-b from-neon-blue/30 to-transparent blur-3xl" />
        <div className="absolute top-40 -left-20 h-72 w-72 rounded-full bg-neon-pink/20 blur-3xl animate-pulse-slow" />
        <div className="absolute top-20 -right-10 h-80 w-80 rounded-full bg-neon-purple/20 blur-3xl animate-float" />
      </div>

      <div className="container-max text-center">
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block text-xs tracking-widest uppercase text-white/60 bg-white/5 border border-white/10 px-3 py-1 rounded-full mb-4"
        >
          AI & Machine Learning Club – OCT
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl leading-tight tracking-tight"
        >
          Innovating the Future with <span className="text-neon-blue">Intelligence</span>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-4 text-white/70 max-w-2xl mx-auto"
        >
          Workshops, projects, hackathons, and research—building the next generation of AI innovators at Oriental College of Technology.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-8 flex items-center justify-center gap-3"
        >
          <a href={JOIN_LINK.href} className="btn btn-primary">
            {JOIN_LINK.label}
            <ArrowRight size={18} />
          </a>
          <a href="#about" className="btn btn-ghost">Learn More</a>
        </motion.div>

        {/* Floating card mock */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-14 mx-auto max-w-4xl card p-4 sm:p-6 backdrop-blur-lg border-white/10"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {[
              { k: 'Workshops', v: 'Hands-on' },
              { k: 'Projects', v: 'Open-source' },
              { k: 'Hackathons', v: 'Competitive' },
              { k: 'Research', v: 'Impactful' }
            ].map((i) => (
              <div key={i.k} className="bg-white/[.03] rounded-lg py-4 border border-white/10">
                <div className="text-sm text-white/60">{i.k}</div>
                <div className="mt-1 font-medium">{i.v}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
