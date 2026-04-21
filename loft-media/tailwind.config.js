/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: '#C9A84C',
        'gold-light': '#E8C97A',
        'gold-dim': '#7A5E28',
        loft: {
          bg: '#080A0E',
          bg2: '#0D1018',
          bg3: '#111520',
          surface: '#13161F',
          surface2: '#181C28',
        },
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        dm: ['DM Sans', 'sans-serif'],
      },
      borderColor: {
        gold: 'rgba(201,168,76,0.18)',
        'gold-dim': 'rgba(201,168,76,0.08)',
      },
    },
  },
  plugins: [],
}