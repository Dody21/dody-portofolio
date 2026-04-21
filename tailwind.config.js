/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // mirip font di web contoh
      },
      colors: {
        primary: "#06b6d4", // cyan
        dark: "#0a0a0a",
      },
    },
  },
  plugins: [],
};
