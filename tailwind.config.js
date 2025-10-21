/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'mila-bg': '#F7F8FA',
        'mila-purple': '#6C63FF',
        'mila-purple-light': '#A28BFE',
      },
      boxShadow: {
        'neumorph': '6px 6px 12px #d1d9e6, -6px -6px 12px #ffffff',
        'neumorph-inset': 'inset 4px 4px 10px #d1d9e6, inset -4px -4px 10px #ffffff',
        'neumorph-sm': '3px 3px 6px #d1d9e6, -3px -3px 6px #ffffff',
        'neumorph-glow': '0 0 20px rgba(108, 99, 255, 0.3), 6px 6px 12px #d1d9e6, -6px -6px 12px #ffffff',
      },
    },
  },
  plugins: [],
}
