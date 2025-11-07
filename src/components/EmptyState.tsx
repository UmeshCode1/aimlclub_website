"use client";
import { motion } from 'framer-motion';
import { Search, Inbox, AlertCircle } from 'lucide-react';

interface EmptyStateProps {
  type?: 'no-results' | 'no-data' | 'error';
  title: string;
  description?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
}

export default function EmptyState({ 
  type = 'no-data', 
  title, 
  description,
  action 
}: EmptyStateProps) {
  const icons = {
    'no-results': Search,
    'no-data': Inbox,
    'error': AlertCircle
  };

  const Icon = icons[type];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center py-16 px-4 text-center"
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring" }}
        className="mb-6 p-6 rounded-full bg-white/5 border border-white/10"
      >
        <Icon size={48} className="text-white/40" />
      </motion.div>

      <h3 className="text-2xl font-bold mb-3 text-white/80">
        {title}
      </h3>

      {description && (
        <p className="text-white/60 max-w-md mb-6">
          {description}
        </p>
      )}

      {action && (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={action.onClick}
          className="btn btn-primary"
        >
          {action.label}
        </motion.button>
      )}
    </motion.div>
  );
}
