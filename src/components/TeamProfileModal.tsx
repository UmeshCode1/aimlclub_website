"use client";
import { motion } from 'framer-motion';
import { X, Linkedin, Github, Instagram, Twitter } from 'lucide-react';
import type { TeamMember } from '../data/content';

interface TeamProfileModalProps {
  member: TeamMember;
  onClose: () => void;
}

export default function TeamProfileModal({ member, onClose }: TeamProfileModalProps) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      aria-modal="true"
      role="dialog"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        onClick={e => e.stopPropagation()}
        className="relative w-full max-w-md rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 shadow-neon space-y-4"
      >
        <button
          onClick={onClose}
          aria-label="Close profile"
          className="absolute top-3 right-3 p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white"
        >
          <X size={16} />
        </button>
        <div className="flex flex-col items-center text-center gap-3">
          <div className="h-20 w-20 rounded-xl bg-gradient-to-br from-neon-blue to-neon-pink flex items-center justify-center font-display text-2xl shadow-neon-sm">
            {member.name.split(' ').map(s => s[0]).join('').slice(0,2).toUpperCase()}
          </div>
          <h2 className="text-xl font-semibold tracking-tight">{member.name}</h2>
          <div className="text-xs inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
            {member.role}
          </div>
          {member.bio && (
            <p className="text-sm leading-relaxed text-white/70 mt-2">{member.bio}</p>
          )}
          <div className="flex gap-3 mt-2">
            {member.linkedin && <a href={member.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer" className="p-2 rounded-md bg-white/5 hover:bg-white/10 text-white/70 hover:text-white"><Linkedin size={18} /></a>}
            {member.github && <a href={member.github} aria-label="GitHub" target="_blank" rel="noreferrer" className="p-2 rounded-md bg-white/5 hover:bg-white/10 text-white/70 hover:text-white"><Github size={18} /></a>}
            {member.instagram && <a href={member.instagram} aria-label="Instagram" target="_blank" rel="noreferrer" className="p-2 rounded-md bg-white/5 hover:bg-white/10 text-white/70 hover:text-white"><Instagram size={18} /></a>}
            {member.x && <a href={member.x} aria-label="X" target="_blank" rel="noreferrer" className="p-2 rounded-md bg-white/5 hover:bg-white/10 text-white/70 hover:text-white"><Twitter size={18} /></a>}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}