"use client";
import { useRef, useEffect, ReactNode } from 'react';

interface ParallaxSectionProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

export default function ParallaxSection({ 
  children, 
  speed = 0.5, 
  className = '' 
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
  const media = window.matchMedia('(prefers-reduced-motion: reduce)');

    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const scrolled = window.scrollY;
      const elementTop = rect.top + scrolled;
      const windowHeight = window.innerHeight;
      
      // Only apply parallax when section is in viewport
      if (rect.top < windowHeight && rect.bottom > 0) {
  const manualReduced = document.documentElement.classList.contains('effects-reduced');
  const intensity = (media.matches || manualReduced) ? 0.35 : 1; // auto-dial instead of disable
        const offset = (scrolled - elementTop + windowHeight) * speed * intensity;
        element.style.transform = `translateY(${offset}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
