"use client";
import { useMemo, useState } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import Tilt from '@/components/Tilt';
import ProjectCard from '@/components/ProjectCard';
import { PROJECTS, type ProjectItem } from '@/data/content';

function uniqueTags(projects: ProjectItem[]) {
  const set = new Set<string>();
  projects.forEach(p => p.tags.forEach(t => set.add(t)));
  return Array.from(set).sort((a, b) => a.localeCompare(b));
}

export default function ProjectsSection() {
  const allTags = useMemo(() => uniqueTags(PROJECTS), []);
  const [selected, setSelected] = useState<string[]>([]);

  const toggleTag = (tag: string) => {
    setSelected(curr => curr.includes(tag) ? curr.filter(t => t !== tag) : [...curr, tag]);
  };

  const clearAll = () => setSelected([]);

  const filtered = useMemo(() => {
    if (selected.length === 0) return PROJECTS;
    // AND match: project must include all selected tags
    return PROJECTS.filter(p => selected.every(t => p.tags.includes(t)));
  }, [selected]);

  return (
    <div className="flex flex-col gap-6">
      {/* Filter chips */}
      <LayoutGroup id="project-filters">
        <div className="flex flex-wrap items-center gap-2 justify-center">
          <button
            onClick={clearAll}
            className={`px-3 py-1.5 rounded-full border text-sm transition-all ${selected.length === 0 ? 'bg-gradient-to-r from-neon-blue/20 to-neon-pink/20 border-neon-purple/40 text-white' : 'bg-white/5 border-white/15 text-white/80 hover:bg-white/10'} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-blue/50`}
            aria-pressed={selected.length === 0}
          >
            All
          </button>
          {allTags.map(tag => {
            const active = selected.includes(tag);
            return (
              <motion.button
                key={tag}
                layout
                onClick={() => toggleTag(tag)}
                aria-pressed={active}
                className={`px-3 py-1.5 rounded-full border text-sm transition-all ${active ? 'bg-gradient-to-r from-purple-500/20 to-neon-pink/20 border-purple-400/50 text-purple-200' : 'bg-white/5 border-white/15 text-white/75 hover:bg-white/10'} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-purple/50`}
                whileTap={{ scale: 0.97 }}
                whileHover={{ scale: 1.05 }}
              >
                {tag}
              </motion.button>
            );
          })}
        </div>
      </LayoutGroup>

      {/* Result count */}
      <div 
        className="text-center text-xs text-white/60"
        role="status" 
        aria-live="polite"
      >
        {selected.length === 0 
          ? 'Showing all projects' 
          : `Showing ${filtered.length} project${filtered.length === 1 ? '' : 's'} filtered by: ${selected.join(', ')}`}
      </div>

      {/* Projects grid */}
      <AnimatePresence initial={false} mode="popLayout">
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" role="list" aria-label="Projects">
          {filtered.map((p, i) => (
            <motion.div
              role="listitem"
              key={p.title}
              layout
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25 }}
            >
              <Tilt>
                <ProjectCard project={p} i={i} />
              </Tilt>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
