/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,jsx}', './index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Nunito Sans', 'sans-serif'],
      },
      colors: {
        'darkElements': 'hsl(209, 23%, 22%)',
        'darkBackground': 'hsl(207, 26%, 17%)',
        'lightText': 'hsl(200, 15%, 8%)',
        'lightInput': 'hsl(0, 0%, 52%)',
        'lightBackground': 'hsl(0, 0%, 98%)',
        'darkText': 'hsl(0, 0%, 100%)',
        'lightElements': 'hsl(0, 0%, 100%)',
      },
    },
  },
  plugins: [],
}
