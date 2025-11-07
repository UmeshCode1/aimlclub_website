"use client";
import { motion } from 'framer-motion';

interface SectionHeaderProps { 
  title: string; 
  subtitle?: string; 
  center?: boolean; 
}

export default function SectionHeader({ title, subtitle, center }: SectionHeaderProps) {
  return (
    <div className={`mb-16 md:mb-20 ${center ? 'text-center mx-auto max-w-4xl' : ''}`}>      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative inline-block"
      >
        <h2 className="section-title relative">
          {title}
          {/* Decorative gradient underline */}
          <motion.span
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="absolute -bottom-3 left-0 h-1 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink rounded-full origin-left shadow-neon-sm"
            style={{ width: center ? '100%' : '70%' }}
          />
        </h2>
      </motion.div>
      
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="section-sub mt-8"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
