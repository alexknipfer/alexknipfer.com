import { useEffect, Fragment } from 'react';

import { initGA, logPageView } from '@/lib/analytics';
import Navigation from '@/components/Nav';
import Footer from '@/components/Footer';

const DefaultLayout: React.FC = ({ children }) => {
  useEffect(() => {
    if (!(window as any).GA_INITIALIZED) {
      initGA();
      (window as any).GA_INITIALIZED = true;
    }

    logPageView();
  }, []);

  return (
    <Fragment>
      <Navigation />
      <main className="flex justify-center flex-col max-w-screen-md mx-auto px-6 pb-20 md:px-12 bg-white dark:bg-gray-900">
        {children}
      </main>
      <Footer />
    </Fragment>
  );
};

export default DefaultLayout;
