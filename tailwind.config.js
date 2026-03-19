/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
      colors: {
        accent: '#c8f53f',
        accent2: '#4af0b0',
        dark: {
          bg: '#09090b',
          surface: '#0f0f12',
          card: '#111116',
          border: '#1c1c24',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
        'slide-up': 'slideUp 0.9s cubic-bezier(0.16,1,0.3,1) forwards',
        'pulse-dot': 'pulseDot 2s infinite',
        'scan': 'scan 2s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(110%)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        pulseDot: {
          '0%,100%': { boxShadow: '0 0 0 0 rgba(200,245,63,0.45)' },
          '50%': { boxShadow: '0 0 0 7px rgba(200,245,63,0)' },
        },
        scan: {
          '0%,100%': { opacity: '0.3' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
