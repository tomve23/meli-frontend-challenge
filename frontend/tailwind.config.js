/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,css}'],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        primary: '#fee600',
        secondary: {
          DEFAULT: '#3483fa',
          hover: '#2968c8',
        },
        placeholder: '#999999',
        background: {
          DEFAULT: '#eeeeee',
          hover: '#dddddd',
        },
        foreground: '#666666',
        border: 'hsl(0 0% 89.8%)',
        input: 'hsl(0 0% 89.8%)',
        ring: 'hsl(0 0% 3.9%)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
