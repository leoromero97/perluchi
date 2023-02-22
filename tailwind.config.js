/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: {
          light: '#FCDBB5',
          mid: '#FFE9A1',
          dark: '#E8CB92',
        },
        'yellow-black': '#40372B',
        violet: '#BE94FF',
        green: '#C7FFD3',
        blue: '#94A4FF',
        red: '#FFB9A1',
        'yellow-gray': {default: '#FCF9F5'},
      },
      backgroundImage: {
        'image-banner': "url('../src/assets/img-plato-banner.png')",
      },
      height: {
        u518: '518px',
      },
    },
  },
  plugins: [],
}
