import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import { Analytics } from '@vercel/analytics/react';

import '@/styles/global.css';
import CustomSWRConfig from '@/components/CustomSWRConfig';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider attribute="class">
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
      </Head>
      <CustomSWRConfig>
        <Component {...pageProps} />
        <Analytics />
      </CustomSWRConfig>
    </ThemeProvider>
  );
};

export default App;
