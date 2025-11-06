import './globals.css';
import type { Metadata } from 'next';
import { Poppins, Space_Grotesk, Inter } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: ['300','400','500','600','700'], variable: '--font-poppins' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['400','500','600','700'], variable: '--font-space-grotesk' });
const inter = Inter({ subsets: ['latin'], weight: ['400','500','600','700'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'AI & Machine Learning Club – OCT',
  description: 'Innovating the Future with Intelligence. Showcasing workshops, projects, hackathons, and AI research at Oriental College of Technology.',
  icons: { icon: '/favicon.svg' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${spaceGrotesk.variable} ${inter.variable}`}>      
      <body className="min-h-screen bg-[#05060A] text-white font-sans antialiased selection:bg-neon-blue/40 selection:text-white">
        {children}
      </body>
    </html>
  );
}
