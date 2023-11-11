/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    fontFamily: {
      sans: ["Noto Sans Tc", "ui-sans-serif", "system-ui"],
      serif: ["Noto Serif Tc", "ui-serif", "serif"]
    },
    extend: {
      colors: {
        primary: "#C87336",
        neutral: {
          "01": "#FFFBF8",
          "02": "#105EA7",
          "03": "#E4D3CC",
        },
        dark: "#454545"
      }
    },
    screens: {
      "xs": "500px",
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [],
}

