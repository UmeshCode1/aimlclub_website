"use client";
import { memo } from 'react';
import { motion } from 'framer-motion';
import type { EventItem } from '@/data/content';
import { CalendarDays, ArrowRight, Clock, MapPin } from 'lucide-react';
import SparkHover from './SparkHover';

function EventCardComponent({ event, i }: { event: EventItem; i: number }) {
  const eventDate = new Date(event.date);
  const isUpcoming = !event.past && eventDate > new Date();
  const isPast = event.past || eventDate < new Date();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.05 * i, duration: 0.5 }}
      whileHover={{ y: -8, scale: 1.03 }}
      className="card p-6 flex flex-col gap-4 card-interactive"
    >
      {/* overlay/glow handled by .card-interactive */}
      
      <div className="relative flex flex-col gap-4 h-full">
        {/* Header with status badge */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className={`p-2 rounded-lg ${isUpcoming ? 'bg-neon-blue/20 text-neon-blue' : 'bg-white/5 text-white/65'} group-hover:scale-110 transition-transform duration-300`}>
              <CalendarDays size={20} />
            </div>
            <div>
              <time dateTime={eventDate.toISOString()}>
                <div className="text-xs text-white/65 uppercase tracking-wider">
                  {eventDate.toLocaleString('default', { month: 'short' })}
                </div>
                <div className="text-lg font-bold">
                  {eventDate.getDate()}
                </div>
              </time>
            </div>
          </div>
          
          {isUpcoming && (
            <motion.span 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-xs px-3 py-1.5 rounded-full bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 text-emerald-400 border border-emerald-500/30 font-medium shadow-lg shadow-emerald-500/10"
            >
              Upcoming
            </motion.span>
          )}
          {isPast && (
            <span className="text-xs px-3 py-1.5 rounded-full bg-white/5 text-white/55 border border-white/10">
              Past Event
            </span>
          )}
        </div>
        
        {/* Title */}
        <h3 className="font-display text-xl font-semibold tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-neon-blue group-hover:to-neon-pink transition-all duration-300">
          {event.title}
        </h3>
        
        {/* Description */}
        <p className="text-sm text-white/70 leading-relaxed flex-grow line-clamp-3 group-hover:text-white/80 transition-colors">
          {event.description}
        </p>
        
        {/* Footer */}
        <div className="flex items-center justify-between pt-2 border-t border-white/5">
          {event.registerUrl && isUpcoming ? (
            <SparkHover>
              <a 
                href={event.registerUrl} 
                className="btn btn-primary w-full text-sm group/btn justify-center"
              >
                Register Now
                <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </SparkHover>
          ) : (
            <div className="text-xs text-white/55 flex items-center gap-2">
              <Clock size={14} />
              <time dateTime={eventDate.toISOString()}>
                {eventDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </time>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

const EventCard = memo(EventCardComponent);
EventCard.displayName = 'EventCard';

export default EventCard;
