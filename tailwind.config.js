/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: {
          default: '#FCDBB5',
          100: '#FFF1E2',
          300: '#FFC37F',
          700: '#BB782A',
          800: '#4D2C06',
          900: '#40372B',
        },
        violet: '#BE94FF',
        green: '#C7FFD3',
        'green-dark': '#27412C',
        blue: '#C7DAFF',
        'blue-dark': '#5B97B0',
        red: '#FFB9A1',
        'red-dark': '#261D1A',
        'yellow-gray': {default: '#FCF9F5'},
      },
      backgroundImage: {
        'image-banner': "url('https://firebasestorage.googleapis.com/v0/b/perluchi-ecommerce-react.appspot.com/o/hamburguesa-completa.jpg?alt=media&token=8a26059a-f91c-410c-9ced-59bf0ee00cc1')",
      },
      height: {
        u518: '518px',
        120: '36rem',
        140: '40rem'
      },
      maxWidth: {
        u638: '638px',
      },
      width: {
        130: '30rem',
        134: '34rem',
      }
    },
  },
  plugins: [],
}
