import { appConfig } from './appConfig';

export const pageview = (url: string) => {
  window.gtag('config', appConfig.google.analytics, { page_path: url });
};
