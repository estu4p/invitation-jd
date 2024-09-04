/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        background: "#0C0114",
        navBackground: "#25013b",
        secBackground: "#140128",
        triBackground: "#12021e",
        fourBachground: "#320050",
        unggu: "#3f0279",
        iconColor: "#919ef8",
        hitam: "#0f0f0f",
        secondary: "#e3fe24",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [],
};
