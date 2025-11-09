"use client";
import { motion } from 'framer-motion';

interface DataFlowProps {
  direction?: 'horizontal' | 'vertical';
  className?: string;
}

export default function DataFlow({ direction = 'horizontal', className = '' }: DataFlowProps) {
  const particles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    delay: i * 0.4,
    duration: 3 + Math.random() * 2,
    offset: Math.random() * 100
  }));

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className={`absolute ${
            direction === 'horizontal' 
              ? 'h-[2px] w-12 bg-gradient-to-r' 
              : 'w-[2px] h-12 bg-gradient-to-b'
          } from-transparent via-neon-blue to-transparent opacity-40`}
          style={{
            [direction === 'horizontal' ? 'top' : 'left']: `${p.offset}%`,
            [direction === 'horizontal' ? 'left' : 'top']: '-48px'
          }}
          animate={{
            [direction === 'horizontal' ? 'left' : 'top']: ['0%', '100%'],
            opacity: [0, 0.6, 0]
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
      ))}
    </div>
  );
}
