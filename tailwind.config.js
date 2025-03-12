/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF0000",
      },
      fontFamily: {
        sans: ["Space Grotesk", "sans-serif"],
        stencil: ["Big Shoulders Stencil", "sans-serif"],
        bigShoulders: ["Big Shoulders", "sans-serif"],
      },
    },
  },
  plugins: [],
};
