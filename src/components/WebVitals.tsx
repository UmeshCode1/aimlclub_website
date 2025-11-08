"use client";
import { useEffect } from 'react';
import type { Metric } from 'web-vitals';

function logMetric(metric: Metric) {
  if (process.env.NODE_ENV !== 'production') {
    console.info(`[WebVitals] ${metric.name}:`, metric.value);
  }
}

export default function WebVitals() {
  useEffect(() => {
    import('web-vitals').then(({ onCLS, onLCP, onINP, onFCP, onTTFB }) => {
      onCLS(logMetric);
      onLCP(logMetric);
      onFCP(logMetric);
      onTTFB(logMetric as any);
      // INP replacing FID long-term
      onINP?.(logMetric as any);
    });
  }, []);
  return null;
}
