"use client";
import { motion } from 'framer-motion';
import type { TeamMember } from '@/data/content';

export default function TeamCard({ member, i }: { member: TeamMember; i: number }) {
  const initials = member.name.split(' ').map((s: string) => s[0]).join('').slice(0,2).toUpperCase();
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.02 * i }}
      className="card p-5 hover:shadow-neon transition-shadow group"
    >
      <div className="flex items-center gap-4">
        <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-neon-blue to-neon-pink flex items-center justify-center font-display text-lg shadow-neon-sm">
          {initials}
        </div>
        <div>
          <div className="font-medium tracking-tight">{member.name}</div>
          <div className="text-sm text-white/60">{member.role}</div>
        </div>
      </div>
    </motion.div>
  );
}
