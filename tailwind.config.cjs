/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        blur: 'url(src/assets/Background.png)'
      },
      fontFamily: {
        'sans': 'Roboto sans-serif',
        'hedding': 'Baloo 2'
      },
      colors: {
        yellow: {
          300: '#F1E9C9',
          500: '#DBAC2C',
          800: '#C47F17'
        },
        purple: {
          300: '#EBE5F9',
          500: '#8047F8',
          800: '#4B2995'
        },
        base: {
          'title': '#272221',
          'subtitle': '#403937',
          'text': '#574F4D',
          'label': '#8D8686',
          'hover': '#D7D5D5',
          'button': '#E6E5E5',
          'input': '#EDEDED',
          'card': '#F3F2F2',
          'background': '#FAFAFA',
          'white': '#FFFFFF'
        }
      }
    },
  },
  plugins: [],
}
