/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary" : "#2C3E50",
        "secondary" : "#F1C40F",
        "tertiary" : "#1ABC9C",
      }
    },
  },
  plugins: [],
}