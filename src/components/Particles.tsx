"use client";
import { useEffect, useRef } from 'react';

export default function Particles({ density = 0.00012 }: { density?: number }) {
  const ref = useRef<HTMLCanvasElement | null>(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (media.matches) return; // Respect reduced motion preference

    let raf = 0;
    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    const stars: { x: number; y: number; z: number; r: number; vx: number; vy: number }[] = [];

    function resize() {
      if (!canvas) return;
      const parent = canvas.parentElement || document.body;
      const { clientWidth, clientHeight } = parent;
      canvas.width = clientWidth * DPR;
      canvas.height = clientHeight * DPR;
      canvas.style.width = clientWidth + 'px';
      canvas.style.height = clientHeight + 'px';
      stars.length = 0;
      const count = Math.max(60, Math.floor(clientWidth * clientHeight * density));
      for (let i = 0; i < count; i++) {
        const r = Math.random() * 1.2 + 0.3;
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: Math.random() * 0.5 + 0.5,
          r,
          vx: (Math.random() - 0.5) * 0.1,
          vy: (Math.random() - 0.5) * 0.1,
        });
      }
    }

    function step() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      ctx.globalAlpha = 0.8;
      for (const s of stars) {
        s.x += s.vx * s.z;
        s.y += s.vy * s.z;
  if (s.x < 0) s.x = canvas.width; else if (s.x > canvas.width) s.x = 0;
  if (s.y < 0) s.y = canvas.height; else if (s.y > canvas.height) s.y = 0;
        const grad = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.r * 6);
        grad.addColorStop(0, 'rgba(0,240,255,0.9)');
        grad.addColorStop(1, 'rgba(255,28,247,0)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r * DPR, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
      raf = requestAnimationFrame(step);
    }

    resize();
    step();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas.parentElement || document.body);
    return () => { cancelAnimationFrame(raf); ro.disconnect(); };
  }, [density]);

  return <canvas ref={ref} className="absolute inset-0 -z-10" aria-hidden />;
}
