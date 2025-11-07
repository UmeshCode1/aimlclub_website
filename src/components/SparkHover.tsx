"use client";
import { ReactElement, cloneElement, useCallback, useRef } from 'react';

/**
 * Wrap any button/link to add lightweight micro-spark trail on hover.
 * Respects prefers-reduced-motion by reducing spawn rate and distance.
 */
export default function SparkHover({ children }: { children: ReactElement<any> }) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const lastTime = useRef(0);

  const onMove = useCallback((e: React.MouseEvent) => {
    const el = wrapRef.current;
    if (!el) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const now = performance.now();
    const minGap = reduced ? 60 : 22; // ms between spawns
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
    const dist = (reduced ? 6 : 12) + Math.random() * (reduced ? 6 : 16);
    spark.style.setProperty('--sx', `${Math.cos(angle) * dist}px`);
    spark.style.setProperty('--sy', `${Math.sin(angle) * dist}px`);

    el.appendChild(spark);
    spark.addEventListener('animationend', () => spark.remove());
  }, []);

  const child = cloneElement(children as any, {
    onMouseMove: (e: React.MouseEvent) => {
      // call original if present
      // @ts-ignore
      children.props?.onMouseMove?.(e);
      onMove(e);
    }
  } as any);

  return (
    <span ref={wrapRef} className="sparkle-wrapper">
      {child}
    </span>
  );
}
