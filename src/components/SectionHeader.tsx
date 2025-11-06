"use client";
import { motion } from 'framer-motion';
interface SectionHeaderProps { title: string; subtitle?: string; center?: boolean; }

export default function SectionHeader({ title, subtitle, center }: SectionHeaderProps) {
  return (
    <div className={`mb-10 ${center ? 'text-center mx-auto max-w-3xl' : ''}`}>      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="section-title"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="section-sub"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
