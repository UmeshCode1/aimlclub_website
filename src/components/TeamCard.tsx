"use client";
import { motion } from 'framer-motion';
import type { TeamMember } from '../data/content';
import Image from 'next/image';
import { Linkedin, Github, Instagram, Twitter } from 'lucide-react';

export default function TeamCard({ member, i, onOpen }: { member: TeamMember; i: number; onOpen?: (m: TeamMember) => void }) {
  const initials = member.name.split(' ').map((s: string) => s[0]).join('').slice(0,2).toUpperCase();
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.02 * i }}
      whileHover={{ y: -4, scale: 1.02 }}
      className="card p-6 hover:shadow-neon transition-all duration-300 group relative overflow-hidden focus-within:shadow-neon outline-none"
      role="button"
      tabIndex={0}
      aria-label={`View profile: ${member.name}`}
      onClick={() => onOpen?.(member)}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onOpen?.(member); } }}
    >
      {/* Gradient hover effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 via-transparent to-neon-pink/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative flex flex-col items-center text-center gap-3">
        {member.image ? (
          <div className="h-16 w-16 rounded-xl overflow-hidden shadow-neon-sm group-hover:shadow-neon transition-shadow duration-300 relative ring-1 ring-white/10">
            <Image src={member.image} alt={member.name} width={64} height={64} className="h-full w-full object-cover" loading="lazy" sizes="64px" />
          </div>
        ) : (
          <div className="h-16 w-16 rounded-xl bg-gradient-to-br from-neon-blue to-neon-pink flex items-center justify-center font-display text-xl shadow-neon-sm group-hover:shadow-neon transition-shadow duration-300 relative">
            {initials}
            <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-neon-blue to-neon-pink blur opacity-0 group-hover:opacity-50 transition-opacity" />
          </div>
        )}
        <div className="text-center">
          <div className="font-semibold tracking-tight text-lg group-hover:text-neon-blue transition-colors">{member.name}</div>
          <div className="text-xs inline-flex items-center gap-2 mt-1 px-2 py-1 rounded-full bg-white/5 border border-white/10">
            {member.role}
          </div>
        </div>
        {/* Bio reveal */}
        {member.bio && (
          <div className="text-[11px] leading-relaxed text-white/60 mt-3 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
            {member.bio}
          </div>
        )}

        {/* Social icons row */}
        <div className="flex gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
          {member.linkedin && <a href={member.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer" className="p-1.5 rounded-md bg-white/5 hover:bg-white/10 text-white/70 hover:text-white"><Linkedin size={16} /></a>}
          {member.github && <a href={member.github} aria-label="GitHub" target="_blank" rel="noreferrer" className="p-1.5 rounded-md bg-white/5 hover:bg-white/10 text-white/70 hover:text-white"><Github size={16} /></a>}
          {member.instagram && <a href={member.instagram} aria-label="Instagram" target="_blank" rel="noreferrer" className="p-1.5 rounded-md bg-white/5 hover:bg-white/10 text-white/70 hover:text-white"><Instagram size={16} /></a>}
          {member.x && <a href={member.x} aria-label="X" target="_blank" rel="noreferrer" className="p-1.5 rounded-md bg-white/5 hover:bg-white/10 text-white/70 hover:text-white"><Twitter size={16} /></a>}
        </div>
      </div>
    </motion.div>
  );
}
