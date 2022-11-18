/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainTheme: "#1f6bff",
      },
      boxShadow: {
        formInput: "0 0 0 2px #1f6bff",
        header: "0 6px 6px rgba(31, 107, 255, 0.1);"
      },
      fontFamily: {
        code: ["JetBrains Mono", "monospace"],
      }
    },
  },
  plugins: [],
}
