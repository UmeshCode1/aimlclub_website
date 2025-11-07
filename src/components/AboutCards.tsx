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
            transition={{ delay: idx * 0.15 }}
            whileHover={{ y: -4, scale: 1.02 }}
            className="card p-6 flex flex-col gap-4 hover:shadow-neon transition-all duration-300 group relative overflow-hidden"
          >
            {/* Gradient background on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 via-transparent to-neon-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative">
              <div className={`h-12 w-12 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center shadow-neon-sm group-hover:shadow-neon transition-shadow mb-3`}>
                <Icon size={24} className="text-white" />
              </div>
              <div className="text-sm uppercase tracking-wider text-white/65 font-semibold mb-2">{item.t}</div>
              <div className="text-white/80 leading-relaxed">{item.d}</div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
