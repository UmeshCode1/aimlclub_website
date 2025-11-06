"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import type { FacultyMember } from '../data/content';
import { Mail, Linkedin, GraduationCap } from 'lucide-react';

export default function FacultyCard({ member, index }: { member: FacultyMember; index: number }) {
  const initials = member.name.split(' ').map(s => s[0]).join('').slice(0, 2).toUpperCase();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 * index, duration: 0.5 }}
      className="relative group"
    >
      <div className="card p-8 h-full hover:shadow-neon-lg transition-all duration-500 relative overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/20 via-purple-500/10 to-neon-pink/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        {/* Spotlight effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-neon-blue via-purple-500 to-neon-pink rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-700" />
        
        <div className="relative flex flex-col items-center text-center gap-5">
          {/* Profile Image */}
          <div className="relative">
            {member.image ? (
              <div className="h-32 w-32 rounded-2xl overflow-hidden shadow-neon-md group-hover:shadow-neon-lg transition-all duration-500 ring-2 ring-white/20 group-hover:ring-neon-blue/60 group-hover:scale-105">
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  width={128} 
                  height={128} 
                  className="h-full w-full object-cover"
                  loading="lazy"
                  sizes="(max-width: 640px) 96px, 128px"
                />
              </div>
            ) : (
              <div className="h-32 w-32 rounded-2xl bg-gradient-to-br from-neon-blue via-purple-500 to-neon-pink flex items-center justify-center font-display text-3xl shadow-neon-md group-hover:shadow-neon-lg transition-all duration-500 group-hover:scale-105">
                {initials}
              </div>
            )}
            {/* Decorative ring */}
            <div className="absolute -inset-2 rounded-2xl border-2 border-neon-blue/30 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
          </div>

          {/* Info */}
          <div className="space-y-3 w-full">
            <h3 className="font-display text-2xl font-bold tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-neon-blue group-hover:to-neon-pink transition-all duration-300">
              {member.name}
            </h3>
            
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-neon-blue/20 to-purple-500/20 border border-neon-blue/30">
                <GraduationCap size={16} className="text-neon-blue" />
                <span className="text-sm font-semibold">{member.designation}</span>
              </div>
              {member.department && (
                <p className="text-xs text-white/60 mt-2">{member.department}</p>
              )}
            </div>

            {/* Bio */}
            {member.bio && (
              <p className="text-sm leading-relaxed text-white/70 max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                {member.bio}
              </p>
            )}

            {/* Qualifications */}
            {member.qualifications && member.qualifications.length > 0 && (
              <div className="flex flex-wrap gap-2 justify-center max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                {member.qualifications.map((qual, idx) => (
                  <span 
                    key={idx}
                    className="text-[10px] px-2 py-1 rounded-md bg-white/5 border border-white/10 text-white/60"
                  >
                    {qual}
                  </span>
                ))}
              </div>
            )}

            {/* Contact Links */}
            <div className="flex gap-3 justify-center pt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              {member.email && (
                <a 
                  href={`mailto:${member.email}`} 
                  aria-label="Email"
                  className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-neon-blue border border-white/10 hover:border-neon-blue/50 transition-all duration-300"
                >
                  <Mail size={18} />
                </a>
              )}
              {member.linkedin && (
                <a 
                  href={member.linkedin} 
                  aria-label="LinkedIn" 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-neon-blue border border-white/10 hover:border-neon-blue/50 transition-all duration-300"
                >
                  <Linkedin size={18} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
