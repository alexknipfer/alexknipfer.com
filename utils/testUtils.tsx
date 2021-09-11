import React from 'react';
import { render, RenderOptions } from '@testing-library/react';

import CustomSWRConfig from '@/components/CustomSWRConfig';

const Wrapper: React.FC = ({ children }) => {
  return (
    <CustomSWRConfig
      swrConfig={{ dedupingInterval: 0, provider: () => new Map() }}
    >
      {children}
    </CustomSWRConfig>
  );
};

const customerRender = (ui: React.ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: Wrapper, ...options });

export * from '@testing-library/react';

export { customerRender as render };
