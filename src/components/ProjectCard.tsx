"use client";
import { motion } from 'framer-motion';
import type { ProjectItem } from '@/data/content';
import { Github } from 'lucide-react';

export default function ProjectCard({ project, i }: { project: ProjectItem; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.03 * i }}
      className="card p-5 flex flex-col gap-4 hover:shadow-neon-sm transition-shadow"
    >
      {project.image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={project.image} alt="Project" className="rounded-lg border border-white/10" />
      )}
      <div className="font-medium tracking-tight text-lg">{project.title}</div>
      <p className="text-sm text-white/70 leading-relaxed">{project.description}</p>
      <div className="flex items-center gap-2 flex-wrap">
  {project.tags.map((t: string) => (
          <span key={t} className="text-xs px-2 py-1 rounded bg-white/10 border border-white/10 text-white/80">{t}</span>
        ))}
      </div>
      {project.github && (
        <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-ghost w-fit text-sm mt-auto">
          <Github size={16} />
          View on GitHub
        </a>
      )}
    </motion.div>
  );
}
