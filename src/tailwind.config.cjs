/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        sans: ['Open Sans', 'sans-serif']
      },
      fontSize: {
        sm: ['12px', '20px'],
        base: ['15px', '23px'],
        lg: ['20px', '23px'],
        xl: ['30px', '45px'],
      },
      gridTemplateColumns: {
        'profile': 'repeat(minmax(20px, 1fr))',
      }
    },
  },
  plugins: [],
}
