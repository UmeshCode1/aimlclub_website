"use client";
import { motion } from 'framer-motion';
import type { TeamMember } from '@/data/content';
import { User } from 'lucide-react';

export default function TeamCard({ member, i }: { member: TeamMember; i: number }) {
  const initials = member.name.split(' ').map((s: string) => s[0]).join('').slice(0,2).toUpperCase();
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.02 * i }}
      whileHover={{ y: -4, scale: 1.02 }}
      className="card p-6 hover:shadow-neon transition-all duration-300 group relative overflow-hidden"
    >
      {/* Gradient hover effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 via-transparent to-neon-pink/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative flex flex-col items-center text-center gap-3">
        <div className="h-16 w-16 rounded-xl bg-gradient-to-br from-neon-blue to-neon-pink flex items-center justify-center font-display text-xl shadow-neon-sm group-hover:shadow-neon transition-shadow duration-300 relative">
          {initials}
          <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-neon-blue to-neon-pink blur opacity-0 group-hover:opacity-50 transition-opacity" />
        </div>
        <div>
          <div className="font-semibold tracking-tight text-lg group-hover:text-neon-blue transition-colors">{member.name}</div>
          <div className="text-sm text-white/60 mt-1">{member.role}</div>
        </div>
      </div>
    </motion.div>
  );
}
