/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // ── BASE THEME ──
        bg: '#06060f',
        bg2: '#0a0a18',
        bg3: '#0f1024',

        surface: 'rgba(255,255,255,0.03)',
        surface2: 'rgba(255,255,255,0.06)',

        text: '#f0f0ff',
        muted: 'rgba(180,180,230,0.7)',
        dim: 'rgba(160,160,220,0.6)',

        // ── PRIMARY ACCENTS (PURPLE / BLUE SYSTEM) ──
        primary: '#7c58ff',
        primaryLight: '#a884ff',
        primaryDim: 'rgba(124,88,255,0.2)',

        blue: '#3882ff',
        blueLight: '#60a5fa',
        blueDim: 'rgba(56,130,255,0.2)',

        // ── GRADIENT SUPPORT COLORS ──
        gradientStart: '#7c58ff',
        gradientMid: '#60a5fa',
        gradientEnd: '#a884ff',
      },

      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        dm: ['DM Sans', 'sans-serif'],
      },

      borderColor: {
        default: 'rgba(255,255,255,0.1)',
        soft: 'rgba(255,255,255,0.05)',

        primary: 'rgba(124,88,255,0.35)',
        blue: 'rgba(56,130,255,0.35)',

        glow: 'rgba(124,88,255,0.2)',
      },

      boxShadow: {
        glowPurple: '0 20px 60px rgba(124,88,255,0.2)',
        glowBlue: '0 20px 60px rgba(56,130,255,0.2)',
      },
    },
  },
  plugins: [],
}