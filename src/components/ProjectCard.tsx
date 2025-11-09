"use client";
import { memo } from 'react';
import { motion } from 'framer-motion';
import type { ProjectItem } from '@/data/content';
import { Github, ExternalLink, Code2, Star } from 'lucide-react';

function ProjectCardComponent({ project, i }: { project: ProjectItem; i: number }) {
  const difficultyColors = {
    Beginner: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40',
    Intermediate: 'bg-amber-500/20 text-amber-400 border-amber-500/40',
    Advanced: 'bg-rose-500/20 text-rose-400 border-rose-500/40'
  };

  const categoryIcons = {
    Vision: '👁️',
    NLP: '💬',
    ML: '🤖',
    DL: '🧠',
    RL: '🎮'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.05 * i, duration: 0.5 }}
      whileHover={{ y: -8, scale: 1.03 }}
      className="card p-0 flex flex-col card-interactive group"
    >
      {/* overlay/glow handled by .card-interactive */}
      
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
            
            {/* ML Category & Difficulty badges */}
            <div className="absolute top-3 right-3 flex flex-col gap-2">
              {project.category && (
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-sm border border-neon-purple/30">
                  <span className="text-sm">{categoryIcons[project.category]}</span>
                  <span className="text-xs font-medium text-neon-purple">{project.category}</span>
                </div>
              )}
              {project.difficulty && (
                <div className={`px-3 py-1.5 rounded-full border text-xs font-medium backdrop-blur-sm ${difficultyColors[project.difficulty]}`}>
                  {project.difficulty}
                </div>
              )}
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