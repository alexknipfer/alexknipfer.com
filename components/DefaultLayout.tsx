import { Fragment, PropsWithChildren } from 'react';
import { Inter } from '@next/font/google';

const interVariable = Inter();

import Navigation from '@/components/Nav';
import Footer from '@/components/Footer';

export default function DefaultLayout({ children }: PropsWithChildren) {
  return (
    <Fragment>
      <Navigation />
      <main
        className={`${interVariable.className} flex justify-center flex-col max-w-screen-md mx-auto px-6 pb-20 md:px-12`}
      >
        {children}
      </main>
      <Footer />
    </Fragment>
  );
}
