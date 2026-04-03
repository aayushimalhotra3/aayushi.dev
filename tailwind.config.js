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
        bg: {
          primary: 'var(--bg-primary)',
          secondary: 'var(--bg-secondary)',
          card: 'var(--bg-card)',
          'card-hover': 'var(--bg-card-hover)',
        },
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          tertiary: 'var(--text-tertiary)',
        },
        accent: {
          plum: 'var(--accent-plum)',
          'plum-light': 'var(--accent-plum-light)',
          blush: 'var(--accent-blush)',
        },
        border: {
          subtle: 'var(--border-subtle)',
          medium: 'var(--border-medium)',
        },
        charcoal:    '#0e0d0c',
        mauve:       '#c9a0a0',
        'mauve-dim': '#9a7a7a',
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        sans: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
        ibm: ['var(--font-ibm-mono)', 'monospace'],
      },
      fontSize: {
        masthead: [
          'clamp(4.5rem, 13vw, 12rem)',
          { lineHeight: '0.9', letterSpacing: '-0.02em', fontWeight: '900' },
        ],
        hero: [
          'clamp(3.8rem, 9vw, 6rem)',
          { lineHeight: '0.9', letterSpacing: '-0.06em', fontWeight: '600' },
        ],
        'display-lg': [
          'clamp(2.2rem, 4.5vw, 3.35rem)',
          { lineHeight: '0.98', letterSpacing: '-0.04em', fontWeight: '600' },
        ],
        'display-md': [
          'clamp(1.65rem, 3.5vw, 2.5rem)',
          { lineHeight: '1.02', letterSpacing: '-0.03em', fontWeight: '600' },
        ],
      },
      boxShadow: {
        card: '0 1px 0 rgba(245, 241, 234, 0.04), 0 22px 70px rgba(0, 0, 0, 0.55)',
        hover: '0 1px 0 rgba(245, 241, 234, 0.06), 0 28px 85px rgba(0, 0, 0, 0.62)',
        plum: '0 1px 0 rgba(245, 241, 234, 0.04), 0 0 0 1px rgba(110, 59, 91, 0.18), 0 22px 70px rgba(0, 0, 0, 0.55)',
        button: '0 1px 0 rgba(245, 241, 234, 0.08), 0 18px 60px rgba(0, 0, 0, 0.55)',
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        'scroll-dot': 'scroll-dot 2s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 2.2s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        'scroll-dot': {
          '0%, 100%': { transform: 'translateY(0)', opacity: '0.35' },
          '50%': { transform: 'translateY(8px)', opacity: '1' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.9)', opacity: '0.8' },
          '70%': { transform: 'scale(1.15)', opacity: '0' },
          '100%': { transform: 'scale(1.15)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
