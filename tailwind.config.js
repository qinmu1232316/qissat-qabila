/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        sand: {
          50: '#FFF8F0', 100: '#FFEED5', 200: '#FDDBA8',
          300: '#F5C678', 400: '#E8AD4A', 500: '#D4942E', 600: '#B07820',
        },
        desert: {
          50: '#FDF6EE', 100: '#F5E6D0', 200: '#E8CDA0',
          300: '#D4A870', 400: '#C08A50', 500: '#A06E38',
          600: '#7A5239', 700: '#5C3D2B', 800: '#3E2A1D', 900: '#221510',
        },
      },
      fontFamily: {
        arabic: ["'Amiri'", "'Traditional Arabic'", "'Noto Naskh Arabic'", "serif"],
      },
    },
  },
};
