/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "0.5rem",
        sm: "1rem",
        lg: "2rem",
        xl: "3rem",
        "2xl": "5rem",
      },
    },
  },
  plugins: [],
}
