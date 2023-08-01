/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        navImage:
          "[url('./src/assets/coding-bg.jpg')]",
      },
      colors: {
        vanilla: "#faf2a1",
      },
      fontFamily: {
        lora: ["Lora", "sans-serif"],
      },
    },
  },
  plugins: [],
};
