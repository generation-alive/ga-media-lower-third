module.exports = {
  mode: 'jit',
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'ui-sans-serif', 'system-ui', 'Arial', 'sans-serif']
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
