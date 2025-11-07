"use client";
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import dynamic from 'next/dynamic';
import SparkHover from '@/components/SparkHover';
import { JOIN_LINK } from '@/data/content';

export default function Hero() {
  const Particles = dynamic(() => import('./Particles'), { ssr: false });

  return (
    <section data-accent-index="0" className="relative pt-32 md:pt-40 pb-20 md:pb-24 overflow-hidden min-h-[95vh] flex items-center">
      {/* Animated grid + particles background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        {/* Enhanced animated grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00F0FF08_1px,transparent_1px),linear-gradient(to_bottom,#00F0FF08_1px,transparent_1px)] bg-[size:80px_80px] opacity-40 animate-grid" />
        
        {/* Multiple layered gradient orbs */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[1000px] w-[1000px] rounded-full bg-gradient-to-b from-neon-blue/35 via-neon-purple/20 to-transparent blur-3xl animate-pulse-slow" />
        <div className="absolute top-40 -left-20 h-96 w-96 rounded-full bg-neon-pink/25 blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-20 -right-10 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-neon-purple/25 to-neon-pink/15 blur-3xl animate-float" />
        <div className="absolute bottom-20 left-1/3 h-80 w-80 rounded-full bg-neon-blue/20 blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        
        {/* Radial gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/40" />
        
        <Particles density={0.00009} />
      </div>

      <div className="container-max text-center w-full relative z-10">
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-white/70 bg-gradient-to-r from-white/10 via-white/5 to-white/10 border border-white/20 px-5 py-2.5 rounded-full mb-8 shadow-lg shadow-neon-blue/20 backdrop-blur-md hover:shadow-neon transition-all duration-300 hover:scale-105 cursor-default"
        >
          <Sparkles size={14} className="text-neon-blue animate-pulse" />
          AI & Machine Learning Club – OCT
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.1] tracking-tight mb-6"
        >
          <span className="bg-gradient-to-r from-white via-white to-white/90 bg-clip-text text-transparent">
            Innovating the Future with{' '}
          </span>
          <span className="text-shimmer font-extrabold block mt-3 relative">
            <span className="absolute inset-0 blur-2xl opacity-50 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink bg-clip-text text-transparent">
              Intelligence
            </span>
            <span className="relative">Intelligence</span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-10 text-base md:text-lg lg:text-xl text-white/75 max-w-3xl mx-auto leading-relaxed px-4 font-medium"
        >
          Workshops, projects, hackathons, and research—building the next generation of AI innovators at{' '}
          <span className="text-white/90 font-semibold">Oriental College of Technology</span>.
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
          className="mt-24 mx-auto max-w-5xl px-4"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
            {[
              { k: 'Workshops', v: 'Hands-on', icon: '🎓', color: 'from-blue-500/20 to-cyan-500/20' },
              { k: 'Projects', v: 'Open-source', icon: '💡', color: 'from-purple-500/20 to-pink-500/20' },
              { k: 'Hackathons', v: 'Competitive', icon: '🏆', color: 'from-yellow-500/20 to-orange-500/20' },
              { k: 'Research', v: 'Impactful', icon: '🔬', color: 'from-green-500/20 to-emerald-500/20' }
            ].map((i, idx) => (
              <motion.div
                key={i.k}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + idx * 0.1 }}
                className={`card p-6 md:p-8 hover:shadow-neon hover:scale-105 transition-all duration-500 group cursor-pointer relative overflow-hidden`}
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${i.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className="text-4xl md:text-5xl mb-4 group-hover:scale-125 transition-transform duration-500 inline-block">{i.icon}</div>
                  <div className="text-xs md:text-sm text-white/60 uppercase tracking-wider font-bold mb-1">{i.k}</div>
                  <div className="mt-2 font-bold text-white/90 text-sm md:text-base group-hover:text-white transition-colors">{i.v}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
