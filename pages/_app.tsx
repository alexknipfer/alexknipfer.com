import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import { useRouter } from 'next/router';
import Script from 'next/script';

import '@/styles/global.css';
import CustomSWRConfig from '@/components/CustomSWRConfig';
import { pageview } from '@/lib/analytics';
import { appConfig } from '@/lib/appConfig';

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
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
      </Head>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${appConfig.google.analytics}}`}
      />
      <Script strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${appConfig.google.analytics}');
        `}
      </Script>
      <CustomSWRConfig>
        <Component {...pageProps} />
      </CustomSWRConfig>
    </ThemeProvider>
  );
};

export default App;
