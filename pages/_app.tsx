import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';

import '@/styles/global.css';
import '@/styles/tailwind.css';
import CustomSWRConfig from '@/components/CustomSWRConfig';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
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
