/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-900": "#2a4144",
        "gray-500": "#86a2a5",
        "green-600": "#0c7d69",
        "green-200": "#e0f1e8",
        "red-error": "#d73c3c",
      },
      fontFamily: {
        Karla: ["Karla", "sans-serif"],
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("@tailwindcss/forms")],
};
