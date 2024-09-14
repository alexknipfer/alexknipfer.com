import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
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
    },
  },
  plugins: [],
};
export default config;
