module.exports = {
  content: [
    "./public/**/*.{html,js}",
    "./public/index.html"
  ],
  theme: {
    fontFamily: {
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    // require('@tailwindcss/forms')
  ],
}
