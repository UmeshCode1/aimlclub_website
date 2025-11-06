"use client";
import { motion } from 'framer-motion';
import type { EventItem } from '@/data/content';
import { CalendarDays, ArrowRight } from 'lucide-react';

export default function EventCard({ event, i }: { event: EventItem; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.04 * i }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="card p-6 flex flex-col gap-4 hover:shadow-neon transition-all duration-300 group relative overflow-hidden"
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 via-transparent to-neon-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative flex flex-col gap-4">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2 text-neon-blue">
            <CalendarDays size={18} />
            <div className="text-sm text-white/70">{new Date(event.date).toDateString()}</div>
          </div>
          {event.past && (
            <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/60 border border-white/10">Past</span>
          )}
        </div>
        
        <div className="font-semibold tracking-tight text-xl group-hover:text-neon-blue transition-colors">{event.title}</div>
        <p className="text-sm text-white/70 leading-relaxed flex-grow">{event.description}</p>
        
        {event.registerUrl && !event.past && (
          <a href={event.registerUrl} className="btn btn-primary w-fit text-sm mt-auto group/btn">
            Register
            <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
          </a>
        )}
      </div>
    </motion.div>
  );
}
