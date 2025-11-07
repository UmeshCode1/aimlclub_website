"use client";
import { motion } from 'framer-motion';
import { Target, Rocket, Trophy } from 'lucide-react';

const items = [
  {
    t: 'Vision',
    d: 'Cultivate a community of innovators leveraging AI ethically for societal advancement.',
    icon: Target,
    color: 'from-neon-blue to-blue-600'
  },
  {
    t: 'Mission',
    d: 'Provide practical learning, mentorship, and resources to accelerate AI skill development.',
    icon: Rocket,
    color: 'from-neon-purple to-purple-600'
  },
  {
    t: 'Objectives',
    d: 'Host events, build projects, publish research, and connect with industry partners.',
    icon: Trophy,
    color: 'from-neon-pink to-pink-600'
  }
];

export default function AboutCards() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {items.map((item, idx) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={item.t}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.15, duration: 0.6 }}
            whileHover={{ y: -8, scale: 1.03 }}
            className="card p-6 flex flex-col gap-4 hover:shadow-neon-lg transition-all duration-500 group relative overflow-hidden"
          >
            {/* Animated gradient background on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 via-neon-purple/5 to-neon-pink/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-700" />
            
            <div className="relative z-10">
              <div className={`h-14 w-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-neon-sm group-hover:shadow-neon-strong group-hover:scale-110 transition-all duration-300 mb-4`}>
                <Icon size={28} className="text-white group-hover:rotate-6 transition-transform duration-300" />
              </div>
              <div className="text-sm uppercase tracking-widest text-white/50 font-bold mb-3 group-hover:text-white/70 transition-colors">{item.t}</div>
              <div className="text-white/80 leading-relaxed group-hover:text-white/90 transition-colors">{item.d}</div>
            </div>
            
            {/* Decorative corner accent */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/5 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>
        );
      })}
    </div>
  );
}
