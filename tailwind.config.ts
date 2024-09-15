import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)', ...fontFamily.sans],
        'geist-mono': 'var(--font-geist-mono)',
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      gridTemplateColumns: {
        '16': 'repeat(16, 1fr)',
        '24': 'repeat(24, 1fr)',
      },
      gridColumn: {
        'span-15': '1 / 15',
      },
    },
  },
  plugins: [],
};

export default config;
