"use client";
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        // Accelerate towards the end
        const increment = prev < 70 ? 15 : prev < 90 ? 8 : 5;
        return Math.min(prev + increment, 100);
      });
    }, 120);

    // Complete loading after progress reaches 100%
    const completeTimer = setTimeout(() => {
      setIsComplete(true);
      setTimeout(() => {
        document.body.classList.add('ready');
      }, 400);
    }, 1400);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(completeTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          id="preloader"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-gradient-to-br from-[#05060A] via-[#0B0E1A] to-[#05060A]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* Animated background grid */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(rgba(0, 240, 255, 0.1) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(0, 240, 255, 0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
              animation: 'gridMove 20s linear infinite'
            }} />
          </div>

          {/* Radial gradient effects */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-neon-blue/20 blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-neon-pink/20 blur-3xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.3, 0.2, 0.3],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          {/* Main loader content */}
          <div className="relative z-10 text-center">
            {/* Logo/Icon animation */}
            <motion.div
              className="mb-8 mx-auto w-24 h-24 relative"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "backOut" }}
            >
              {/* Rotating outer ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-white/10"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Animated arc */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: `conic-gradient(from 0deg, transparent 0%, var(--accent-1) ${progress}%, transparent ${progress}%)`,
                }}
              />

              {/* Inner glow circle */}
              <motion.div
                className="absolute inset-3 rounded-full bg-gradient-to-tr from-neon-blue/40 to-neon-pink/40 blur-md"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.6, 0.8, 0.6],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* AI Icon in center */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <path
                    d="M12 2L2 7L12 12L22 7L12 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-neon-blue"
                  />
                  <path
                    d="M2 17L12 22L22 17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-neon-pink"
                  />
                  <path
                    d="M2 12L12 17L22 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-neon-purple"
                  />
                </motion.svg>
              </div>
            </motion.div>

            {/* Loading text with typewriter effect */}
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink bg-clip-text text-transparent">
                AI & ML Club
              </h2>
            </motion.div>

            {/* Progress bar */}
            <motion.div
              className="w-64 mx-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="h-1 bg-white/10 rounded-full overflow-hidden mb-3">
                <motion.div
                  className="h-full bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink"
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </div>
              
              {/* Progress percentage */}
              <motion.div
                className="text-sm text-white/70 font-mono"
                key={progress}
                initial={{ opacity: 0.5 }}
                animate={{ opacity: 1 }}
              >
                {progress}% • Initializing intelligence...
              </motion.div>
            </motion.div>

            {/* Floating particles */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-neon-blue rounded-full"
                  style={{
                    left: `${20 + (i * 10)}%`,
                    top: '50%',
                  }}
                  animate={{
                    y: [-20, -60, -20],
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
