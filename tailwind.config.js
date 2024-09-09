/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        elsie: ["Elsie", "serif"],
        lexend: ["Lexend", "sans-serif"],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".no-scrollbar": {
          "scrollbar-width": "none" /* For Firefox */,
          "-ms-overflow-style": "none" /* For IE and Edge */,
        },
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none" /* For Chrome, Safari, and Opera */,
        },
      });
    },
  ],
};
