/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
  ],
  theme: {
    theme: {
      extend: {
        colors: {
          dark: "#1E1E1E",
        },
      },
    },
  },
  plugins: [],
};
export default config;
