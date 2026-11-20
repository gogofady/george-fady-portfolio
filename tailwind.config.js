/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#0d0614',
        surface: '#170b24',
        'surface-elevated': '#220f35',
        burgundy: {
          50: '#fdf2f4',
          100: '#fce7eb',
          200: '#f9d0d9',
          300: '#f4a9b9',
          400: '#ec738e',
          500: '#df4267',
          600: '#cb264e',
          700: '#aa1a3c',
          800: '#8d1834',
          900: '#77182f',
          950: '#420815',
        },
        plum: {
          800: '#351144',
          900: '#230b2e',
          950: '#14051b',
        },
        royal: {
          700: '#3730a3',
          800: '#312e81',
          900: '#1e1b4b',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}