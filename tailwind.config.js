/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        reader: ["Reader Pro", "sans-serif"],
      },
      fontWeight: {
        normal: 400,     // Regular
        light: 300,      // Light
        thin: 200,       // Use 'thin' for extra light
      },
    },
  },
  plugins: [],
};
