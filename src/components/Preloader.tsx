"use client";
import { useEffect } from 'react';

export default function Preloader() {
  useEffect(() => {
    const timer = setTimeout(() => {
      document.body.classList.add('ready');
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="preloader" className="fixed inset-0 z-[60] grid place-items-center bg-[#05060A] transition-opacity">
      <div className="relative">
        <div className="absolute inset-0 blur-xl rounded-full bg-gradient-to-tr from-neon-blue to-neon-pink opacity-40 animate-pulse" />
        <div className="relative h-16 w-16 rounded-full border-2 border-white/20 border-t-neon-blue animate-spin" />
        <div className="mt-4 text-center text-sm text-white/70">Initializing intelligence…</div>
      </div>
    </div>
  );
}
