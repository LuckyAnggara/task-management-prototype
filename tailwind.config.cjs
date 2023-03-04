/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        'custom-base-1': '#FFFFFF',
        'custom-base-2': '#F9F9F9',
        'custom-accent-green': '#2EB26D',
        'custom-accent-orange': '#E9612C',
        'custom-accent-purple': '#835CD1',
        'custom-accent-pink': '#EE5687',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-15deg)' },
          '50%': { transform: 'rotate(15deg)' },
        },
        loop: {
          '0% 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(2rem)' },
        },
      },
      animation: {
        wiggle: 'wiggle 0.8s ease-in-out infinite',
        loop: '2s ease-in-out infinite',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}
