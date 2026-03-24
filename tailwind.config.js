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
        surface: {
          DEFAULT: '#09090b',
          raised: '#0f0f12',
          card: '#111115',
          hover: '#1a1a1f',
        },
        cream: {
          DEFAULT: '#e8e0d4',
          muted: '#9a948a',
          dim: '#5c5850',
        },
        accent: {
          DEFAULT: '#c9a87c',
          hover: '#d4b88e',
          subtle: 'rgba(201,168,124,0.12)',
          glow: 'rgba(201,168,124,0.06)',
        },
        border: {
          DEFAULT: '#1e1e23',
          hover: '#2a2a30',
        },
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['clamp(3rem, 7vw, 5.5rem)', { lineHeight: '1.0', letterSpacing: '-0.03em', fontWeight: '700' }],
        'display-lg': ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1.05', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-md': ['clamp(1.5rem, 3vw, 2.25rem)', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '600' }],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
