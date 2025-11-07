"use client";
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function GlobalLoadingIndicator() {
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Listen for route changes and dynamic imports
    let progressTimer: NodeJS.Timeout;
    
    const handleStart = () => {
      setIsLoading(true);
      setProgress(0);
      
      // Simulate progress
      progressTimer = setInterval(() => {
        setProgress(prev => {
          if (prev >= 90) return prev;
          return prev + Math.random() * 10;
        });
      }, 200);
    };

    const handleComplete = () => {
      setProgress(100);
      setTimeout(() => {
        setIsLoading(false);
        setProgress(0);
      }, 300);
      clearInterval(progressTimer);
    };

    // Detect navigation (for SPAs)
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'navigation') {
          handleStart();
        }
      }
    });

    try {
      observer.observe({ entryTypes: ['navigation'] });
    } catch (e) {
      // PerformanceObserver not supported
    }

    // Cleanup
    return () => {
      clearInterval(progressTimer);
      observer.disconnect();
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed top-0 left-0 right-0 z-[70] h-1 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink"
          initial={{ scaleX: 0, transformOrigin: "left" }}
          animate={{ scaleX: progress / 100 }}
          exit={{ scaleX: 1, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      )}
    </AnimatePresence>
  );
}
