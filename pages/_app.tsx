import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import { useRouter } from 'next/router';

import '@/styles/global.css';
import '@/styles/tailwind.css';
import CustomSWRConfig from '@/components/CustomSWRConfig';
import { pageview } from '@/lib/analytics';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      pageview(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <ThemeProvider attribute="class">
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
      </Head>
      <CustomSWRConfig>
        <Component {...pageProps} />
      </CustomSWRConfig>
    </ThemeProvider>
  );
};

export default App;
