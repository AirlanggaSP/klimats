import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          base: '#0b0f10',
        },
        surface: {
          panel: '#101415',
        },
        card: {
          base: '#181c1d',
          elevated: '#212628',
        },
        accent: {
          primary: '#10b981',
          mint: '#2dd4bf',
          cyan: '#06b6d4',
          amber: '#f59e0b',
          danger: '#ef4444',
        },
        text: {
          primary: '#ffffff',
          body: '#e2e8f0',
          secondary: '#94a3b8',
          muted: '#64748b',
          code: '#34d399',
        },
      },
      borderRadius: {
        'card': '12px',
        'inner': '8px',
        'pill': '9999px',
      },
    },
  },
  plugins: [],
};

export default config;
