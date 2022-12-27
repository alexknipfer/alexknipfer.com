import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';

interface Props {
  title?: string;
  url?: string;
  description?: string;
}

export default function Meta(customMeta: Props) {
  const router = useRouter();

  const meta = {
    title: 'Alex Knipfer - Full Stack Developer from Cincinnati.',
    description: 'Full stack developer, chess player, and disc golfer.',
    image: 'https://alexknipfer.com/static/images/banner.jpg',
    type: 'website',
    ...customMeta,
  };

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta name="og:title" content={meta.title} />
      <meta
        property="og:url"
        content={`https://alexknipfer.com${router.asPath}`}
      />
      <link rel="canonical" href={`https://alexknipfer.com${router.asPath}`} />
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content="Alex Knipfer" />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:image" content={meta.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@knipferalex" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />
    </Head>
  );
}
