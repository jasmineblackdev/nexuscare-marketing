import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        display: ['Sora', 'system-ui', 'sans-serif'],
      },
      colors: {
        navy: {
          DEFAULT: '#0E2443',
          light:   '#1F3451',
          lighter: '#2A4A6B',
        },
        teal: {
          DEFAULT: '#0C9789',
          light:   '#C8EEE9',
          dark:    '#097A6E',
        },
        warm:  '#FAF8F4',
        slate: '#617289',
        amber: '#F5920A',
      },
    },
  },
  plugins: [],
} satisfies Config
