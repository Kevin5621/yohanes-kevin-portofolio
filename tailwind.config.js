/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gray: {
          100: '#E6E9EF',
          200: '#D1D5DB',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
      },
      backgroundColor: {
        dark: '#252525',
      },
      transitionProperty: {
        'shadow': 'box-shadow',
      },
    },
  },
  plugins: [],
};