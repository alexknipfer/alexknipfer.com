import { appConfig } from './appConfig';

export function pageview(url: string) {
  window.gtag('config', appConfig.google.analytics, { page_path: url });
}
