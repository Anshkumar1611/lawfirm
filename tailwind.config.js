/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1D1D1D",
        secondary: "#E3B748",
        black: "#111111",
        white: "#ffffff",
        gray: "#474747",
        whyusborder: "#ffffff1a",
      },
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      helvetica: ['Helvetica Now Display','sans-serif'],
    },
  },
  plugins: [],
};
