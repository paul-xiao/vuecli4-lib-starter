module.exports = {
  important: true,
  purge: [
    './public/**/*.html',
    './packages/**/*.{vue,js,ts,jsx,tsx}',
    './examples/**/*.{vue,js,ts,jsx,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
}
