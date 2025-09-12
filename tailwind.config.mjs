/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      boxShadow: {
        card1: "2px 2px #1A365D",
        card: "4px 4px #1A365D",
        hover: "10px 10px #1A365D",
        iceblue: "7px 7px #B8E6FF",
        glacial: "7px 7px #E6F8FF",
        penguin: "7px 7px #2D3748",
        icebluehover: "10px 10px #B8E6FF",
        glacialhover: "10px 10px #E6F8FF",
        penguinhover: "10px 10px #2D3748",
        frost: "7px 7px #F0F9FF",
      },
      colors: {
        iceblue: "#B8E6FF",
        glacial: "#E6F8FF", 
        penguin: "#2D3748",
        frost: "#F0F9FF",
        snow: "#FEFEFE",
        arctic: "#4A90A4",
        deepocean: "#1A365D",
        pblack: "#2D3748",
        white: {
          DEFAULT: "#FEFEFE",
        },
      },
      fontFamily: {
        mono: ["Alexandria", "monospace"],
        sans: ["Alexandria", "sans-serif"],
        kablamo: ["Kablammo", "serif"],
      },
      maxWidth: {
        "1/12": "8.333333%",
        "2/12": "16.666667%",
        "3/12": "25%",
        "4/12": "33.333333%",
        "5/12": "41.666667%",
        "6/12": "50%",
        "7/12": "58.333333%",
        "8/12": "66.666667%",
        "9/12": "75%",
        "10/12": "83.333333%",
        "10/12": "91.666667%",
        "12/12": "100%",
      },
      margin: {
        30: "7.3rem",
      },
      borderWidth: {
        1: "1px",
        3: "3px",
      },
      borderColor: {
        black: "#000",
        blackRad: "rgba(0,0,0,0.8)",
        whiteRad: "rgba(242, 242, 242, 0.8)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
