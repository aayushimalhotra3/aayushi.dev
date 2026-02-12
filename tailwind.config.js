/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {
      colors: {
        // Refined dark palette
        'bg-dark': '#0a0a0a',
        'bg-section': '#111111',
        'bg-card': '#1a1a1a',
        'bg-card-hover': '#222222',
        'text-light': '#f0f0f0',
        'text-muted': '#a0a0a0',
        'text-dim': '#666666',
        'border-dark': '#2a2a2a',
        'border-hover': '#3a3a3a',
        // Signature accent - pink (personality)
        'accent-pink': '#e8729a',
        'accent-pink-hover': '#d4608a',
        'accent-pink-subtle': '#e8729a',
        // Secondary accent - warm
        'accent-warm': '#e4a853',
        // Tertiary - cool
        'accent-cool': '#7eb8c9',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(16px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
