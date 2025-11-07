"use client";
import { ReactNode, useEffect, useRef } from 'react';

interface TiltProps {
  children: ReactNode;
  maxTilt?: number; // degrees
  scale?: number; // hover scale
  glare?: boolean;
  className?: string;
}

export default function Tilt({
  children,
  maxTilt = 8,
  scale = 1.02,
  glare = false,
  className = ''
}: TiltProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (media.matches) return;

    let raf = 0;
    let px = 0, py = 0;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const intensity = reduced ? 0.3 : 1;
      
      const rx = ((y - cy) / cy) * maxTilt * intensity;
      const ry = ((x - cx) / cx) * -maxTilt * intensity;
      px = ry; 
      py = rx;
      
      if (!raf) raf = requestAnimationFrame(apply);
    };

    const apply = () => {
      raf = 0;
      el.style.transform = `perspective(800px) rotateX(${py.toFixed(2)}deg) rotateY(${px.toFixed(2)}deg) scale(${scale})`;
    };

    const onLeave = () => {
      el.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)';
    };

    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [maxTilt, scale, glare]);

  return (
    <div ref={ref} className={`will-change-transform transition-transform duration-300 ${className}`}>
      {children}
    </div>
  );
}
