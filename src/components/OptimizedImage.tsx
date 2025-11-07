"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ImageOff } from 'lucide-react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
  priority?: boolean;
}

export default function OptimizedImage({ 
  src, 
  alt, 
  className = '', 
  aspectRatio = '16/9',
  priority = false 
}: OptimizedImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div 
        className={`flex items-center justify-center bg-white/5 border border-white/10 rounded-lg ${className}`}
        style={{ aspectRatio }}
      >
        <div className="text-center p-4">
          <ImageOff size={32} className="text-white/30 mx-auto mb-2" />
          <p className="text-xs text-white/40">Failed to load image</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ aspectRatio }}>
      {/* Loading skeleton */}
      {!loaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5 animate-pulse" />
      )}

      {/* Actual image */}
      <motion.img
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover"
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        initial={{ opacity: 0, scale: 1.1 }}
        animate={loaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />
    </div>
  );
}
