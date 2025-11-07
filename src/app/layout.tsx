import './globals.css';
import type { Metadata, Viewport } from 'next';
import PageTransition from '@/components/PageTransition';
import ScrollProgress from '@/components/ScrollProgress';
import { Poppins, Space_Grotesk, Inter } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: ['300','400','500','600','700'], variable: '--font-poppins' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['400','500','600','700'], variable: '--font-space-grotesk' });
const inter = Inter({ subsets: ['latin'], weight: ['400','500','600','700'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'AI & Machine Learning Club – OCT',
  description:
    'Innovating the Future with Intelligence. Showcasing workshops, projects, hackathons, and AI research at Oriental College of Technology.',
  icons: { icon: '/favicon.svg' },
  metadataBase: new URL('https://umeshcode1.github.io/aimlclub_website'),
  openGraph: {
    type: 'website',
    title: 'AI & Machine Learning Club – OCT',
    description:
      'Innovating the Future with Intelligence. Workshops, hackathons, research and student projects at OCT.',
    url: 'https://umeshcode1.github.io/aimlclub_website',
    siteName: 'AI & ML Club – OCT',
    images: [{ url: '/og-cover.svg', width: 1200, height: 630 }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI & Machine Learning Club – OCT',
    description: 'Innovating the Future with Intelligence.',
    images: ['/og-cover.svg']
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#05060A'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-[#05060A] text-white font-sans antialiased selection:bg-neon-blue/40 selection:text-white">
        <ScrollProgress />
        <a href="#main" className="skip-link">Skip to content</a>
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
