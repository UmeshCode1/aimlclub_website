"use client";
import { motion } from 'framer-motion';
import type { TeamMember } from '../data/content';
import Image from 'next/image';
import { Linkedin, Github, Instagram, Twitter } from 'lucide-react';

export default function TeamCard({ member, i, onOpen }: { member: TeamMember; i: number; onOpen?: (m: TeamMember) => void }) {
  const initials = member.name.split(' ').map((s: string) => s[0]).join('').slice(0,2).toUpperCase();
  
  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.05 * (i % 8), duration: 0.4 }}
      onClick={() => onOpen?.(member)}
      className="card p-6 text-left w-full hover:shadow-neon-sm transition-all duration-300 group cursor-pointer"
      aria-label={`View ${member.name}'s profile`}
    >
      <div className="flex flex-col items-center text-center gap-4">
        {/* Avatar */}
        <div className="relative">
          {member.image ? (
            <div className="h-20 w-20 rounded-full overflow-hidden ring-2 ring-white/10 group-hover:ring-neon-blue/50 transition-all duration-300">
              <Image 
                src={member.image} 
                alt={member.name} 
                width={80} 
                height={80} 
                className="h-full w-full object-cover" 
                loading="lazy" 
                sizes="80px" 
              />
            </div>
          ) : (
            <div className="h-20 w-20 rounded-full bg-gradient-to-br from-neon-blue via-neon-purple to-neon-pink flex items-center justify-center font-display text-2xl ring-2 ring-white/10 group-hover:ring-neon-blue/50 transition-all duration-300">
              {initials}
            </div>
          )}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-neon-blue to-neon-pink blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
        </div>

        {/* Name and Role */}
        <div className="space-y-2">
          <h3 className="font-semibold text-lg text-white group-hover:text-neon-blue transition-colors">
            {member.name}
          </h3>
          <span className="inline-block text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70">
            {member.role}
          </span>
        </div>

        {/* Bio */}
        {member.bio && (
          <p className="text-xs text-white/75 leading-relaxed line-clamp-2 group-hover:text-white/80 transition-colors">
            {member.bio}
          </p>
        )}

        {/* Social Links */}
        {(member.linkedin || member.github || member.instagram || member.x) && (
          <div className="flex gap-2 pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {member.linkedin && (
              <a 
                href={member.linkedin} 
                onClick={(e) => e.stopPropagation()}
                className="p-2 rounded-md bg-white/5 hover:bg-neon-blue/20 text-white/75 hover:text-white transition-all"
                aria-label="LinkedIn"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={14} />
              </a>
            )}
            {member.github && (
              <a 
                href={member.github}
                onClick={(e) => e.stopPropagation()}
                className="p-2 rounded-md bg-white/5 hover:bg-neon-blue/20 text-white/75 hover:text-white transition-all"
                aria-label="GitHub"
                target="_blank"
                rel="noreferrer"
              >
                <Github size={14} />
              </a>
            )}
            {member.instagram && (
              <a 
                href={member.instagram}
                onClick={(e) => e.stopPropagation()}
                className="p-2 rounded-md bg-white/5 hover:bg-neon-blue/20 text-white/75 hover:text-white transition-all"
                aria-label="Instagram"
                target="_blank"
                rel="noreferrer"
              >
                <Instagram size={14} />
              </a>
            )}
            {member.x && (
              <a 
                href={member.x}
                onClick={(e) => e.stopPropagation()}
                className="p-2 rounded-md bg-white/5 hover:bg-neon-blue/20 text-white/75 hover:text-white transition-all"
                aria-label="X"
                target="_blank"
                rel="noreferrer"
              >
                <Twitter size={14} />
              </a>
            )}
          </div>
        )}
      </div>
    </motion.button>
  );
}
