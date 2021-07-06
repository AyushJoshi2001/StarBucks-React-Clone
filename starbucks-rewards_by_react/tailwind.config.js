const colors = require("tailwindcss/colors");

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
        primary: {
          100: "#f1f8f6",
          200: "#d4e9e2",
          300: "#008248",
          400: "#1e3932",
        },
        secondary: "#f3f1e7",
        gray: colors.gray,
        white: colors.white,
        black: colors.black,
        yellow: colors.yellow,
    },

    screens: {
      "sm": "413px",
      "md": "845px",
      "lg": "880px",
      "xl": "1130px",
    },

    extend: {backgroundImage: theme => ({
      "mobile-background": "url('./img/hero-mobile.webp')",
      "desktop-background": "url('./img/star-background.webp')",
      }),

      padding: {
        '400/3':'133.33%',
        '4/7':'56.25%',
      },

      maxWidth: {
        '1440': '1440px',
        '1220': '1220px',
        '260': '260px',
      },

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
