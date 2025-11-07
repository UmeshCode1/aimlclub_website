"use client";
import { motion } from 'framer-motion';

interface SectionHeaderProps { 
  title: string; 
  subtitle?: string; 
  center?: boolean; 
}

export default function SectionHeader({ title, subtitle, center }: SectionHeaderProps) {
  return (
    <div className={`mb-12 md:mb-16 ${center ? 'text-center mx-auto max-w-3xl' : ''}`}>      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="section-title relative inline-block"
      >
        {title}
        {/* Decorative underline */}
        <motion.span
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink rounded-full origin-left"
          style={{ width: center ? '100%' : '60%' }}
        />
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="section-sub mt-6"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
