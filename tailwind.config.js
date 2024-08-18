// tailwind.config.js
const {nextui} = require("@nextui-org/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Josefin Sans']
    },
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      light: {
        // ...
        colors: {},
      },
      dark: {
        // ...
        colors: {
          background: "#060a0c",
          text: "#e1e8ea",
          primary: "#9ccee0",
          primary2: "hsl(196, 52%, 75%, 5%)",
          secondary: "#196c8a",
          accent: "#35bff0",
        },
      },
      // ... custom themes
    },
  })],
};