/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
    },
    extend: {
      colors: {
        'bg-dark':          '#0F0B0A',
        'bg-dark-elevated': '#1A1411',
        'bg-warm':          '#F2ECE4',
        'bg-warm-muted':    '#E8E0D4',
        'bg-plum':          '#8B5C7A',
        'text-ivory':       '#F2ECE4',
        'text-dark':        '#1A1411',
        'text-muted-dark':  '#A69B8E',
        'text-muted-light': '#7A6F63',
        'accent-plum':      '#8B5C7A',
        'accent-plum-light':'#A87393',
        'accent-gold':      '#C4A86B',
        'accent-blush':     '#D4A9A9',
        'border-dark':      '#2E241D',
        'border-light':     '#D4CCC2',
      },
      fontFamily: {
        display: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans:    ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        marquee:      'marquee 30s linear infinite',
        'pulse-ring': 'pulse-ring 2.2s ease-in-out infinite',
        'bounce-y':   'bounce-y 2s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to:   { transform: 'translateX(-50%)' },
        },
        'pulse-ring': {
          '0%':   { transform: 'scale(0.9)', opacity: '0.8' },
          '70%':  { transform: 'scale(1.4)', opacity: '0' },
          '100%': { transform: 'scale(1.4)', opacity: '0' },
        },
        'bounce-y': {
          '0%, 100%': { transform: 'translateY(0)',   opacity: '0.4' },
          '50%':      { transform: 'translateY(6px)', opacity: '1'   },
        },
      },
    },
  },
  plugins: [],
}
