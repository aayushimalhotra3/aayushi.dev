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
      'lg': '1280px',  // Increased from 1024px
      'xl': '1680px',  // Increased from 1280px
    },
    extend: {
      colors: {
        // New dark mode palette
        'bg-dark': '#111111',
        'bg-section': '#1F1F1F',
        'bg-card': '#262626',
        'text-light': '#F5F5F5',
        'text-muted': '#BBBBBB',
        'accent-pink': '#FF69B4 ',
        'accent-blue': '#A7C7E7',
        'accent-green': '#C2E7D8',
        'accent-yellow': '#FFD700',
        'accent-orange': '#FF8C00',
        'accent-lilac': '#9966CC',
        'light-lilac': '#B19CD9',
        'accent-teal': '#00FFC6',
        'border-dark': '#333333',
        // Keep some light mode colors
        'soft-pink': '#fc8eac',
        'butter-yellow': '#FFF8B0',
        'light-orange': '#FFD8A8',
        'charcoal': '#333333',
        'offwhite': '#FAFAFA',
        'dark-charcoal': '#1F1F1F',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}