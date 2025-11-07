"use client";
import { ReactElement, cloneElement, useCallback, useRef } from 'react';

/**
 * Wrap any button/link to add lightweight micro-spark trail on hover.
 * Respects prefers-reduced-motion by reducing spawn rate and distance.
 */
interface SparkHoverProps {
  children: ReactElement<{ onMouseMove?: (e: React.MouseEvent) => void }>;
  density?: number; // 0.25 (low) .. 2 (high)
  maxDistance?: number; // override travel distance
}

export default function SparkHover({ children, density = 1, maxDistance }: SparkHoverProps) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const lastTime = useRef(0);

  const onMove = useCallback((e: React.MouseEvent) => {
    const el = wrapRef.current;
    if (!el) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const now = performance.now();
  const baseGap = reduced ? 60 : 22;
  const minGap = baseGap / Math.max(0.25, density); // higher density => smaller gap
    if (now - lastTime.current < minGap) return;
    lastTime.current = now;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const spark = document.createElement('span');
    spark.className = 'spark';
    spark.style.left = `${x - 3}px`;
    spark.style.top = `${y - 3}px`;

    // random direction
    const angle = Math.random() * Math.PI * 2;
  const baseDist = reduced ? 6 : 12;
  const varDist = reduced ? 6 : 16;
  const distRaw = baseDist + Math.random() * varDist;
  const dist = maxDistance ? Math.min(distRaw, maxDistance) : distRaw;
    spark.style.setProperty('--sx', `${Math.cos(angle) * dist}px`);
    spark.style.setProperty('--sy', `${Math.sin(angle) * dist}px`);

    el.appendChild(spark);
    spark.addEventListener('animationend', () => spark.remove());
  }, [density, maxDistance]);

  const child = cloneElement(children, {
    onMouseMove: (e: React.MouseEvent) => {
      const originalOnMouseMove = children.props?.onMouseMove;
      if (originalOnMouseMove) {
        originalOnMouseMove(e);
      }
      onMove(e);
    }
  });

  return (
    <span ref={wrapRef} className="sparkle-wrapper">
      {child}
    </span>
  );
}
