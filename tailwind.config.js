const colors = {
  "brand": "#409cff",
  "white": "#fff",
  "greyple": "#99aab5",
  "focus-border": "#00b0f4",
  "status-green": "#43b581",
  "status-red": "#ec5b62",
  "text-link": "#00b0f4",
  "dark-not-black": "#2c2f33",
  "not-quite-black": "#23272a",
  "black": "#000",
  "glass": "rgba(255, 255, 255, 0.08)",
}

module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors,
      backgroundColor: colors,
      borderColor: colors,
    },
  },
  variants: {
    extend: {
      backgroundColor: ['disabled'],
      brightness: ['disabled','hover'],
      cursor: ['disabled'],
      filter: ['hover'],
      margin: ['first'],
      opacity: ['disabled'],
    },
  },
  plugins: [],
}
