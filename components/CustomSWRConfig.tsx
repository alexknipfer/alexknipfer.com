import { PropsWithChildren } from 'react';
import { SWRConfig, Cache } from 'swr';
import { Fetcher, PublicConfiguration } from 'swr/_internal';

type Provider = { provider?: (cache: Readonly<Cache<any>>) => Cache<any> };

interface Props {
  swrConfig?: Partial<PublicConfiguration<any, any, Fetcher<any>>> & Provider;
}

async function customFetcher(url: string) {
  const res = await fetch(url);

  if (!res.ok) {
    const json = (await res.json()) as { message: string };
    throw new Error(json.message);
  }

  return res.json();
}

export default function CustomSWRConfig({
  children,
  swrConfig,
}: PropsWithChildren<Props>) {
  return (
    <SWRConfig value={{ fetcher: customFetcher, ...swrConfig }}>
      {children}
    </SWRConfig>
  );
}
