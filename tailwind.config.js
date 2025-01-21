/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffb889", // Light Pink
        neutral: "#e26d5a", // Medium Pink
        secondary: "#53163f", // secondary violet
      },
      screens: {
        sm: { max: "900px" },
        md: { min: "901px", max: "1024px" },
        lg: "1025px",
      },
    },
  },
  plugins: [],
};
