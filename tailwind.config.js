/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2c4ca2",
        },
        primarytext: {
          DEFAULT: "#182a5c",
        },
        secondary: {
          DEFAULT: "#3b82f6",
        },
        muted: {
          DEFAULT: "#9ca3af",
        },
      },
    },
  },
  plugins: [],
};
