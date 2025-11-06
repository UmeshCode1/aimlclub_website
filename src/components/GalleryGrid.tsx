"use client";
import { motion } from 'framer-motion';
import { ImageIcon } from 'lucide-react';

const galleryImages = [
  { id: 1, title: 'Workshop Session', category: 'Workshop' },
  { id: 2, title: 'Hackathon Team', category: 'Hackathon' },
  { id: 3, title: 'AI Summit 2024', category: 'Event' },
  { id: 4, title: 'Project Demo', category: 'Project' },
  { id: 5, title: 'Team Meeting', category: 'Meeting' },
  { id: 6, title: 'Guest Lecture', category: 'Workshop' },
  { id: 7, title: 'Competition Winners', category: 'Hackathon' },
  { id: 8, title: 'Research Presentation', category: 'Research' }
];

export default function GalleryGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {galleryImages.map((img, i) => (
        <motion.div
          key={img.id}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05 }}
          whileHover={{ scale: 1.05, y: -4 }}
          className="aspect-video rounded-lg bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex flex-col items-center justify-center text-white/40 hover:border-neon-blue/50 hover:text-white/70 transition-all duration-300 cursor-pointer group relative overflow-hidden"
        >
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-neon-blue/20 via-transparent to-neon-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative z-10 flex flex-col items-center gap-2">
            <ImageIcon size={32} className="group-hover:scale-110 transition-transform" />
            <div className="text-xs font-medium">{img.title}</div>
            <div className="text-[10px] px-2 py-0.5 rounded-full bg-white/10">{img.category}</div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
