'use client';

import { Analytics } from '@vercel/analytics/react';

import CustomSWRConfig from '../components/CustomSWRConfig';

interface Props {
  children: React.ReactNode;
}

export function Providers({ children }: Props) {
  return (
    <CustomSWRConfig>
      {children}
      <Analytics />
    </CustomSWRConfig>
  );
}
