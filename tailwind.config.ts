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
        'span-13': '13 / 13',
        'span-15': '15 / 15',
        'span-16': '16 / 16',
        'span-17': '17 / 17',
        'span-18': '18 / 18',
        'span-19': '19 / 19',
        'span-20': '20 / 20',
        'span-21': '21 / 21',
        'span-22': '22 / 22',
        'span-23': '23 / 23',
        'span-24': '24 / 24',
      },
      gridColumnStart: {
        '15': '15',
      },
      gridColumnEnd: {
        '15': '15',
      },
    },
  },
  plugins: [],
};

export default config;
