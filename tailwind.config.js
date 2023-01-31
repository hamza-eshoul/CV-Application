/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ["Quicksand"],
        roboto: ["Roboto"],
      },
      colors: {
        myGray: "#eee",
      },
    },
  },
  plugins: [],
};
