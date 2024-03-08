/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5D9A9A",
        secondary: "#579393",
        background: "#F4FFFF",
        "primary-dark": "#316767",
      },
    },
  },
  plugins: [],
};
