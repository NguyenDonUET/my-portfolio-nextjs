import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mobileL: "425px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        backgroundDarkMode: "#141a1a",
        backgroundColor: "#f9f9f9",
        darkBlue: "#147efb",
        lightBlue: "#2c73d2",
        darkGreen: "#079992",
        lighGreen: "#5bd0c8",
        black: "#2d2e32",
        primaryDarkMode: "#087ebf",
        purple: "rgb(133, 76, 230)",
        cardBackground: "rgb(23, 23, 33)",
        tagBackground: "rgba(133, 76, 230, 0.082)",
        overlayBackground: "rgba(0,0,0,0.7)",
        btnBackground: "rgb(28, 30, 39)",
      },
      fontFamily: {
        titleFont: "Permanent Marker, cursive",
      },
      boxShadow: {
        headerShadow: "0 0 10px rgba(0, 0, 0, 0.09)",
        neonColor: "0px 5px 10px 0px rgba(0,255,255,0.7)",
        avatarNeon: "0px 10px 20px 2px rgba(0,255,255,0.7)",
        cardNeon: "rgba(23, 92, 230, 0.15) 0px 4px 24px",
        cardShadow: "rgba(0, 0, 0, 0.4) 0px 0px 12px 4px",
      },
    },
  },
  darkMode: ["class"],
  plugins: [],
}
export default config
