import './globals.css';
import type { Metadata, Viewport } from 'next';
import PageTransition from '@/components/PageTransition';
import ScrollProgress from '@/components/ScrollProgress';
import ScrollToTop from '@/components/ScrollToTop';
import { ThemeProvider } from '@/components/ThemeProvider';
import AccentThemeController from '@/components/AccentThemeController';
import StructuredData from '@/components/StructuredData';
import { Suspense } from 'react';
import { Poppins, Space_Grotesk, Inter } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: ['300','400','500','600','700'], variable: '--font-poppins' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['400','500','600','700'], variable: '--font-space-grotesk' });
const inter = Inter({ subsets: ['latin'], weight: ['400','500','600','700'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: {
    default: 'AI & Machine Learning Club – OCT',
    template: '%s | AI & ML Club – OCT'
  },
  description:
    'Workshops, projects, hackathons, and research — building the next generation of AI innovators at Oriental College of Technology, Bhopal.',
  keywords: [
    'AI club','machine learning','OCT Bhopal','student projects','hackathons','workshops','research','data science','deep learning','education','technology club'
  ],
  icons: { icon: '/favicon.svg', apple: '/apple-touch-icon.png' },
  metadataBase: new URL('https://umeshcode1.github.io/aimlclub_website'),
  openGraph: {
    type: 'website',
    title: 'AI & Machine Learning Club – OCT',
    description:
      'Innovating the Future with Intelligence. Workshops, hackathons, research and student projects at OCT.',
    url: 'https://umeshcode1.github.io/aimlclub_website',
    siteName: 'AI & ML Club – OCT',
    images: [{ url: '/og-cover.svg', width: 1200, height: 630, alt: 'AI & ML Club – OCT' }],
    locale: 'en_US'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI & Machine Learning Club – OCT',
    description: 'Innovating the Future with Intelligence.',
    images: ['/og-cover.svg'],
    site: '@aimlclub_oct',
    creator: '@aimlclub_oct'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [{ media: '(prefers-color-scheme: dark)', color: '#05060A' }, { media: '(prefers-color-scheme: light)', color: '#F8F9FA' }]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${spaceGrotesk.variable} ${inter.variable}`}>
      <head>
        <StructuredData />
      </head>
      <body className="min-h-screen bg-[#05060A] text-white font-sans antialiased selection:bg-neon-blue/40 selection:text-white">
        <ThemeProvider>
          <ScrollProgress />
          <ScrollToTop />
          <a href="#main" className="skip-link">Skip to content</a>
          <AccentThemeController />
          <PageTransition>
            {children}
          </PageTransition>
          <Suspense fallback={null}>
            {/* Client components imported directly */}
            {/* eslint-disable-next-line @typescript-eslint/no-var-requires */}
            {typeof window !== 'undefined' && (
              <>
                {require('@/components/Analytics').default()}
                {require('@/components/WebVitals').default()}
              </>
            )}
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
