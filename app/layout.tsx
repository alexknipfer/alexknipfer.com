import './global.css';
import { PropsWithChildren } from 'react';
import { Inter } from 'next/font/google';
import { Metadata } from 'next';

const interVariable = Inter({ subsets: ['latin'] });

import { Providers } from './providers';

import Navigation from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://alexknipfer.com'),
  title: {
    default: 'Alexander Knipfer',
    template: '%s | Alexander Knipfer',
  },
  description: 'Full stack developer, chess player, and disc golfer.',
  openGraph: {
    title: 'Alexander Knipfer',
    description: 'Full stack developer, chess player, and disc golfer.',
    url: 'https://alexknipfer.com',
    siteName: 'Alexander Knipfer',
    images: [
      {
        url: 'https://alexknipfer.com/static/images/banner.jpg',
        width: 1920,
        height: 1080,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
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
  twitter: {
    title: 'Alexander Knipfer',
    card: 'summary_large_image',
  },
  icons: {
    shortcut: '/favicon.ico',
  },
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html
      lang="en"
      className={`${interVariable.className} bg-white dark:bg-zinc-900`}
    >
      <Providers>
        <body>
          <Navigation />
          <main className="flex justify-center flex-col max-w-screen-md mx-auto px-6 pb-20 md:px-6">
            {children}
          </main>
          <Footer />
        </body>
      </Providers>
    </html>
  );
}
