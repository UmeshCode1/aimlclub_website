import './globals.css';
import type { Metadata, Viewport } from 'next';
import PageTransition from '@/components/PageTransition';
import ScrollProgress from '@/components/ScrollProgress';
import { ThemeProvider } from '@/components/ThemeProvider';
import AccentThemeController from '@/components/AccentThemeController';
import StructuredData from '@/components/StructuredData';
import { Poppins, Space_Grotesk, Inter } from 'next/font/google';

const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['300','400','500','600','700'], 
  variable: '--font-poppins',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial']
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'], 
  weight: ['400','500','600','700'], 
  variable: '--font-space-grotesk',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial']
});

const inter = Inter({ 
  subsets: ['latin'], 
  weight: ['400','500','600','700'], 
  variable: '--font-inter',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial']
});

export const metadata: Metadata = {
  title: {
    default: 'AI & ML Club – OCT | Empowering Future Innovators',
    template: '%s | AI & ML Club – OCT',
  },
  description:
    'Join OCT Bhopal\'s premier AI & Machine Learning community. Workshops, hackathons, research projects, and industry partnerships. Building the next generation of AI innovators through hands-on learning and innovation.',
  keywords: [
    'AI club',
    'machine learning',
    'OCT Bhopal',
    'artificial intelligence',
    'student community',
    'tech workshops',
    'hackathons',
    'research projects',
    'data science',
    'deep learning',
    'Oriental College of Technology',
    'AI education',
    'ML projects',
  ],
  authors: [{ name: 'AI & ML Club – OCT', url: 'https://umeshcode1.github.io/aimlclub_website' }],
  creator: 'AI & ML Club – OCT',
  publisher: 'Oriental College of Technology',
  icons: { icon: '/favicon.svg', apple: '/apple-touch-icon.png' },
  metadataBase: new URL('https://umeshcode1.github.io/aimlclub_website'),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'AI & ML Club – OCT | Empowering Future Innovators',
    description:
      'Join OCT Bhopal\'s premier AI & Machine Learning community. Workshops, hackathons, research, and industry partnerships.',
    url: 'https://umeshcode1.github.io/aimlclub_website',
    siteName: 'AI & ML Club – OCT',
    images: [{ 
      url: '/og-cover.svg', 
      width: 1200, 
      height: 630,
      alt: 'AI & ML Club – OCT | Empowering Future Innovators'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aimlclub_oct',
    creator: '@aimlclub_oct',
    title: 'AI & ML Club – OCT | Empowering Future Innovators',
    description: 'Join OCT Bhopal\'s premier AI & Machine Learning community. Workshops, hackathons, research.',
    images: ['/og-cover.svg']
  },
  category: 'education',
  alternates: {
    canonical: 'https://umeshcode1.github.io/aimlclub_website',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#05060A' },
  ],
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
          <a href="#main" className="skip-link" aria-label="Skip to main content">
            Skip to content
          </a>
          <AccentThemeController />
          <PageTransition>
            {children}
          </PageTransition>
        </ThemeProvider>
      </body>
    </html>
  );
}
