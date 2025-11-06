"use client";
import { motion } from 'framer-motion';
import type { EventItem } from '@/data/content';
import { CalendarDays } from 'lucide-react';

export default function EventCard({ event, i }: { event: EventItem; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.04 * i }}
      className="card p-5 flex flex-col gap-4 hover:shadow-neon-sm transition-shadow"
    >
      <div className="flex items-start gap-3">
        <CalendarDays className="text-neon-blue" size={18} />
        <div className="text-sm text-white/60">{new Date(event.date).toDateString()}</div>
        {event.past && <span className="ml-auto text-xs px-2 py-1 rounded-full bg-white/10">Past</span>}
      </div>
      <div className="font-medium tracking-tight text-lg">{event.title}</div>
      <p className="text-sm text-white/70 leading-relaxed">{event.description}</p>
      {event.registerUrl && !event.past && (
        <a href={event.registerUrl} className="btn btn-primary w-fit text-sm mt-auto">Register</a>
      )}
    </motion.div>
  );
}
