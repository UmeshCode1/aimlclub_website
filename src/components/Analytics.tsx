"use client";
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Lightweight client-side analytics placeholder
export default function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    // Replace with your analytics provider call
    // Example: window.gtag?.('config', GA_ID, { page_path: pathname })
    if (process.env.NODE_ENV !== 'production') {
      console.info('[Analytics] pageview', pathname);
    }
  }, [pathname]);

  return null;
}
