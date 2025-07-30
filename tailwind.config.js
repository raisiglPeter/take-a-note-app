/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Base colors
        "green-light": "#d4f4dd",
        "green-dark": "#a0e6b2",
        "green-darker": "#5cbf81",
        "blue-light": "#dceeff",
        "blue-dark": "#a7d0f5",
        "blue-darker": "#498ac3",
        "red-light": "#ffd6d6",
        "red-dark": "#f5a3a3",
        "red-darker": "#d45858",
        "yellow-light": "#fff7d6",
        "yellow-dark": "#f5e8a3",
        "yellow-darker": "#c8b948",
        "bg-light": "#f9f9f9",
        "bg-mid": "#eeeeee",
        "bg-dark": "#e0e0e0",
        "text-dark": "#2b2b2b",
        "text-mid": "#707070",
        "text-light": "#ffffff",
        accent: "#bfa2db",
        "accent-hover": "#d7c6eb",

        // Theme variables using CSS variables
        "theme-bg": "var(--theme-bg)",
        "theme-text": "var(--theme-text)",
        "theme-accent": "var(--theme-accent)",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
