"use client";
import { motion } from 'framer-motion';
import EventCard from '@/components/EventCard';
import { EVENTS, type EventItem } from '@/data/content';

function sortEvents(events: EventItem[]) {
  const upcoming = events
    .filter(e => !e.past && new Date(e.date) >= new Date())
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()); // soonest first
  const past = events
    .filter(e => e.past || new Date(e.date) < new Date())
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()); // latest past first
  return { upcoming, past };
}

export default function EventsTimeline() {
  const { upcoming, past } = sortEvents(EVENTS);

  const Section = ({ label, items }: { label: string; items: EventItem[] }) => (
    <div className="relative pl-8" role="group" aria-label={label}>
      {/* vertical rail */}
      <div className="absolute left-3 top-0 bottom-0 w-px bg-gradient-to-b from-neon-blue/40 via-neon-purple/30 to-neon-pink/40" aria-hidden />
      <ul className="space-y-8" role="list">
        {items.map((e, idx) => (
          <li key={e.title + idx} className="relative" role="listitem">
            {/* timeline dot */}
            <div className="absolute -left-0.5 top-6 w-3 h-3 rounded-full bg-gradient-to-r from-neon-blue to-neon-pink ring-2 ring-white/20" aria-hidden />
            <EventCard event={e} i={idx} />
          </li>
        ))}
      </ul>
    </div>
  );

  return (
  <div className="flex flex-col gap-10" aria-label="Events timeline">
      {upcoming.length > 0 && (
        <div className="flex flex-col gap-3">
          <motion.h4 initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-sm uppercase tracking-wider text-white/60 text-center">Upcoming</motion.h4>
          <Section label="Upcoming events" items={upcoming} />
        </div>
      )}
      {past.length > 0 && (
        <div className="flex flex-col gap-3">
          <motion.h4 initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-sm uppercase tracking-wider text-white/60 text-center">Past</motion.h4>
          <Section label="Past events" items={past} />
        </div>
      )}
    </div>
  );
}
