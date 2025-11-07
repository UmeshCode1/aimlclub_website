"use client";
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import dynamic from 'next/dynamic';
import SparkHover from '@/components/SparkHover';
import { JOIN_LINK } from '@/data/content';

export default function Hero() {
  const Particles = dynamic(() => import('./Particles'), { ssr: false });

  return (
    <section data-accent-index="0" className="relative pt-32 md:pt-40 pb-20 md:pb-24 overflow-hidden min-h-[90vh] flex items-center">
      {/* Animated grid + particles background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:64px_64px] opacity-50" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[800px] w-[800px] rounded-full bg-gradient-to-b from-neon-blue/30 to-transparent blur-3xl animate-pulse-slow" />
        <div className="absolute top-40 -left-20 h-80 w-80 rounded-full bg-neon-pink/20 blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-20 -right-10 h-96 w-96 rounded-full bg-neon-purple/20 blur-3xl animate-float" />
        <Particles density={0.00009} />
      </div>

      <div className="container-max text-center w-full">
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-white/60 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-8 shadow-neon-sm backdrop-blur-sm"
        >
          <Sparkles size={14} className="text-neon-blue" />
          AI & Machine Learning Club – OCT
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.1] tracking-tight mb-6"
        >
          Innovating the Future with{' '}
          <span className="text-shimmer font-bold block mt-2">
            Intelligence
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-8 text-base md:text-lg lg:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed px-4"
        >
          Workshops, projects, hackathons, and research—building the next generation of AI innovators at Oriental College of Technology.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <SparkHover density={1.5}>
            <a href={JOIN_LINK.href} className="btn btn-primary group shadow-neon">
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
          className="mt-20 mx-auto max-w-5xl px-4"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
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
                className="card p-6 hover:shadow-neon hover:scale-105 transition-all duration-500 group cursor-pointer"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">{i.icon}</div>
                <div className="text-xs md:text-sm text-white/60 uppercase tracking-wider font-semibold">{i.k}</div>
                <div className="mt-2 font-semibold text-white/90 text-sm md:text-base">{i.v}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
