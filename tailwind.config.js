/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0F1923',
        surface: '#1A2332',
        border: '#2A3444',
        gold: '#C8A96A',
        goldLight: '#E8C98A',
        white: '#FFFFFF',
        muted: '#8A9BB0',
        hot: '#E85D26',
        warm: '#F5A623',
        cold: '#4A90E2',
        success: '#22C55E',
      },
      fontFamily: {
        heading: ['Syne', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      fontSize: {
        hero: ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.03em' }],
        h1: ['3rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        h2: ['2rem', { lineHeight: '1.2', letterSpacing: '-0.015em' }],
        h3: ['1.375rem', { lineHeight: '1.3' }],
        body: ['1rem', { lineHeight: '1.7' }],
        small: ['0.875rem', { lineHeight: '1.6' }],
      },
    },
  },
  plugins: [],
};
