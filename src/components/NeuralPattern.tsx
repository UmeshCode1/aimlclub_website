"use client";
import { motion } from 'framer-motion';
import { useMemo } from 'react';

interface NeuralPatternProps {
  density?: number;
  className?: string;
}

export default function NeuralPattern({ density = 6, className = '' }: NeuralPatternProps) {
  const nodes = useMemo(() => {
    const n = [];
    for (let i = 0; i < density; i++) {
      n.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 2,
        duration: 3 + Math.random() * 2
      });
    }
    return n;
  }, [density]);

  const connections = useMemo(() => {
    const c = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[j].x - nodes[i].x;
        const dy = nodes[j].y - nodes[i].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 35) {
          c.push({ from: i, to: j, opacity: (35 - dist) / 35 });
        }
      }
    }
    return c;
  }, [nodes]);

  return (
    <svg
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="neural-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(0,240,255,0.4)" />
          <stop offset="50%" stopColor="rgba(139,92,246,0.4)" />
          <stop offset="100%" stopColor="rgba(255,28,247,0.4)" />
        </linearGradient>
      </defs>
      
      {/* Connections */}
      <g className="opacity-30">
        {connections.map((conn, idx) => (
          <motion.line
            key={`conn-${idx}`}
            x1={`${nodes[conn.from].x}%`}
            y1={`${nodes[conn.from].y}%`}
            x2={`${nodes[conn.to].x}%`}
            y2={`${nodes[conn.to].y}%`}
            stroke="url(#neural-gradient)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: 1, 
              opacity: conn.opacity * 0.6,
            }}
            transition={{ 
              duration: 2,
              delay: 0.5 + idx * 0.05,
              repeat: Infinity,
              repeatType: 'reverse',
              repeatDelay: 1
            }}
          />
        ))}
      </g>

      {/* Nodes */}
      {nodes.map((node, idx) => (
        <motion.circle
          key={`node-${idx}`}
          cx={`${node.x}%`}
          cy={`${node.y}%`}
          r="3"
          fill="url(#neural-gradient)"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.6, 0.9, 0.6]
          }}
          transition={{
            duration: node.duration,
            delay: node.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </svg>
  );
}
