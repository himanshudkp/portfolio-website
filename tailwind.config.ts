/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: "class", // 👈 Important
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;
