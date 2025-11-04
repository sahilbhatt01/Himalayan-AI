/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,js,jsx}", "./components/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0f172a", // deep midnight
        accent: "#60a5fa", // cool Himalayan blue
      },
    },
  },
  plugins: [],
};
