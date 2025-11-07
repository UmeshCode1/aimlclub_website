"use client";
import { motion } from 'framer-motion';

interface SkeletonLoaderProps {
  type?: 'team' | 'faculty' | 'gallery' | 'contact' | 'default';
}

export default function SkeletonLoader({ type = 'default' }: SkeletonLoaderProps) {
  const renderSkeleton = () => {
    switch (type) {
      case 'team':
        return (
          <div className="container-max">
            <div className="mb-8 space-y-3">
              <div className="h-8 w-48 bg-white/10 rounded-lg animate-pulse" />
              <div className="h-4 w-96 bg-white/5 rounded animate-pulse" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="bg-white/5 rounded-xl p-6 space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <div className="w-16 h-16 bg-white/10 rounded-full animate-pulse" />
                  <div className="space-y-2">
                    <div className="h-4 w-32 bg-white/10 rounded animate-pulse" />
                    <div className="h-3 w-24 bg-white/5 rounded animate-pulse" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case 'faculty':
        return (
          <div className="container-max">
            <div className="mb-8 space-y-3">
              <div className="h-8 w-48 bg-white/10 rounded-lg animate-pulse" />
              <div className="h-4 w-96 bg-white/5 rounded animate-pulse" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="bg-white/5 rounded-xl p-8 space-y-4"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="w-24 h-24 bg-white/10 rounded-full mx-auto animate-pulse" />
                  <div className="space-y-2">
                    <div className="h-5 w-40 bg-white/10 rounded mx-auto animate-pulse" />
                    <div className="h-3 w-32 bg-white/5 rounded mx-auto animate-pulse" />
                    <div className="h-3 w-48 bg-white/5 rounded mx-auto animate-pulse" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case 'gallery':
        return (
          <div className="container-max">
            <div className="mb-8 space-y-3">
              <div className="h-8 w-48 bg-white/10 rounded-lg animate-pulse" />
              <div className="h-4 w-96 bg-white/5 rounded animate-pulse" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="aspect-square bg-white/5 rounded-xl animate-pulse"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.03 }}
                />
              ))}
            </div>
          </div>
        );

      case 'contact':
        return (
          <div className="container-max">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8 space-y-3 text-center">
                <div className="h-8 w-48 bg-white/10 rounded-lg animate-pulse mx-auto" />
                <div className="h-4 w-96 bg-white/5 rounded animate-pulse mx-auto" />
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  className="space-y-6"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="space-y-2">
                      <div className="h-4 w-24 bg-white/10 rounded animate-pulse" />
                      <div className="h-12 bg-white/5 rounded-lg animate-pulse" />
                    </div>
                  ))}
                </motion.div>
                <motion.div
                  className="bg-white/5 rounded-xl p-6 space-y-4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="flex gap-3">
                      <div className="w-10 h-10 bg-white/10 rounded-lg animate-pulse" />
                      <div className="flex-1 space-y-2">
                        <div className="h-4 w-32 bg-white/10 rounded animate-pulse" />
                        <div className="h-3 w-48 bg-white/5 rounded animate-pulse" />
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="container-max">
            <motion.div
              className="h-96 bg-white/5 rounded-xl animate-pulse"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            />
          </div>
        );
    }
  };

  return (
    <div className="py-16 sm:py-20 md:py-24">
      {renderSkeleton()}
    </div>
  );
}
