"use client";
import { memo } from 'react';
import { motion } from 'framer-motion';
import type { ProjectItem } from '@/data/content';
import { Github, ExternalLink, Code2, Star } from 'lucide-react';

function ProjectCardComponent({ project, i }: { project: ProjectItem; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.05 * i, duration: 0.5 }}
      whileHover={{ y: -8, scale: 1.03 }}
      className="card p-0 flex flex-col hover:shadow-neon-lg transition-all duration-500 group relative overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-blue/50"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 via-purple-500/5 to-neon-pink/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      {/* Glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-neon-blue via-purple-500 to-neon-pink rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-700" />
      
      <div className="relative flex flex-col h-full">
        {/* Project Image/Thumbnail */}
        {project.image && (
          <div className="relative h-48 overflow-hidden border-b border-white/10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#05060A] via-[#05060A]/50 to-transparent" />
            
            {/* Floating tag indicator */}
            <div className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-sm border border-white/10">
              <Code2 size={14} className="text-neon-purple" />
              <span className="text-xs font-medium">{project.tags.length} Tech</span>
            </div>
          </div>
        )}
        
        {/* Content */}
        <div className="flex flex-col gap-4 p-6 flex-grow">
          <h3 className="font-display text-xl font-semibold tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-neon-pink transition-all duration-300">
            {project.title}
          </h3>
          
          <p className="text-sm text-white/70 leading-relaxed line-clamp-3 group-hover:text-white/80 transition-colors">
            {project.description}
          </p>
          
          {/* Tech Stack Pills */}
          <div className="flex items-center gap-2 flex-wrap mt-auto">
            {project.tags.map((t: string) => (
              <motion.span 
                key={t}
                whileHover={{ scale: 1.05 }}
                className="text-[11px] px-3 py-1.5 rounded-lg bg-gradient-to-r from-purple-500/10 to-neon-pink/10 border border-purple-500/30 text-purple-300 hover:border-purple-400/60 transition-all duration-300 font-medium"
              >
                {t}
              </motion.span>
            ))}
          </div>
          
          {/* Actions */}
          {project.github && (
            <div className="flex gap-2 pt-3 border-t border-white/5">
              <a 
                href={project.github} 
                target="_blank" 
                rel="noreferrer" 
                className="btn btn-ghost flex-1 text-sm group/btn justify-center"
              >
                <Github size={16} />
                View Code
                <ExternalLink size={14} className="opacity-0 group-hover/btn:opacity-100 transition-opacity" />
              </a>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

const ProjectCard = memo(ProjectCardComponent);
ProjectCard.displayName = 'ProjectCard';

export default ProjectCard;