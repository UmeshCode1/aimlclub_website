"use client";
import { motion } from 'framer-motion';
import type { ProjectItem } from '@/data/content';
import { Github, ExternalLink } from 'lucide-react';

export default function ProjectCard({ project, i }: { project: ProjectItem; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.03 * i }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="card p-6 flex flex-col gap-4 hover:shadow-neon transition-all duration-300 group relative overflow-hidden"
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/5 via-transparent to-neon-pink/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative flex flex-col gap-4">
        {project.image && (
          <div className="relative rounded-lg overflow-hidden border border-white/10 group-hover:border-neon-blue/50 transition-colors">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={project.image} alt={project.title} className="w-full h-auto group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        )}
        
        <div className="font-semibold tracking-tight text-xl group-hover:text-neon-purple transition-colors">{project.title}</div>
        <p className="text-sm text-white/70 leading-relaxed">{project.description}</p>
        
        <div className="flex items-center gap-2 flex-wrap">
          {project.tags.map((t: string) => (
            <span key={t} className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/10 text-white/80 hover:border-neon-purple/50 transition-colors">
              {t}
            </span>
          ))}
        </div>
        
        {project.github && (
          <a 
            href={project.github} 
            target="_blank" 
            rel="noreferrer" 
            className="btn btn-ghost w-fit text-sm mt-auto group/btn"
          >
            <Github size={16} />
            View on GitHub
            <ExternalLink size={14} className="opacity-0 group-hover/btn:opacity-100 transition-opacity" />
          </a>
        )}
      </div>
    </motion.div>
  );
}