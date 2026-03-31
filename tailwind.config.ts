import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'warm-beige': '#FDF6E9',
        'spiritual-cream': '#FFF9F0',
        'earth-brown': '#5D4037',
        'terracotta': '#D97706',
        'terracotta-dark': '#B45309',
        'terracotta-light': '#F59E0B',
        'sacred-orange': '#EA580C',
      },
    },
  },
  plugins: [],
}

export default config
