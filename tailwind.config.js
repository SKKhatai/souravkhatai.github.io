/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#eef8ff',
          100: '#d9efff',
          200: '#bce3ff',
          300: '#8ed0ff',
          400: '#59b4ff',
          500: '#3293ff',
          600: '#1a73f5',
          700: '#145be1',
          800: '#1749b6',
          900: '#19408f',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'gradient': 'gradient 8s ease infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
};
