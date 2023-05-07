import './global.css';
import { PropsWithChildren } from 'react';
import { Inter } from 'next/font/google';

const interVariable = Inter({ subsets: ['latin'] });

import Navigation from '@/components/Nav';
import Footer from '@/components/Footer';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className={interVariable.className}>
      <body>
        <Navigation />
        <main className="flex justify-center flex-col max-w-screen-md mx-auto px-6 pb-20 md:px-6">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
