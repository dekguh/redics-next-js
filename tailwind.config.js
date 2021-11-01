module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '2.4/12': '20%'
      },
      height: {
        '3px': '3px',
        '55vh': '55vh',
        '65vh': '65vh',
        '70vh': '70vh'
      },
      backgroundColor: {
        'black-transparent-0.7': 'rgba(0, 0, 0, .7)'
      },
      maxWidth: {
        '3/4': '75%'
      }
    },
  },
  variants: {
    extend: {
      margin: ['last']
    },
  },
  plugins: [],
}
