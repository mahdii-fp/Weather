/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        myfont: ["myfont", "sans-serif"],
        myfont1: ["myfont1", "sans-serif"],
        myfont2: ["myfont2", "sans-serif"],
      },
    },
  },
  plugins: [],
};