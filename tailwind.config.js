/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx,ts}"],
  theme: {
    extend: {
      fontFamily: {
        about: ["le-monde-livre", "serif"],
      },
      fontWeight: {
        custom: ["400", "700"],
      },
    },
  },
  plugins: [],
};
