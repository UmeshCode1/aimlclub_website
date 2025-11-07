"use client";
import { useState } from 'react';

interface BlurImageProps {
  src: string;
  placeholder?: string;
  alt: string;
  className?: string;
}

export default function BlurImage({ src, placeholder, alt, className = '' }: BlurImageProps) {
  const [loaded, setLoaded] = useState(false);
  const showPlaceholder = !!placeholder && !loaded;

  return (
    <div className={`absolute inset-0 w-full h-full ${className}`}>
      {placeholder && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={placeholder}
          alt=""
          aria-hidden
          className={`absolute inset-0 w-full h-full object-cover scale-105 blur-lg transition-opacity duration-500 ${showPlaceholder ? 'opacity-100' : 'opacity-0'}`}
          loading="lazy"
          decoding="async"
        />
      )}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover object-center"
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}
