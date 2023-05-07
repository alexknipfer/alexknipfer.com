'use client';

import { ThemeProvider } from 'next-themes';
import { Analytics } from '@vercel/analytics/react';

import CustomSWRConfig from '../components/CustomSWRConfig';

interface Props {
  children: React.ReactNode;
}

export function Providers({ children }: Props) {
  return (
    <ThemeProvider attribute="class">
      <CustomSWRConfig>
        {children}
        <Analytics />
      </CustomSWRConfig>
    </ThemeProvider>
  );
}
