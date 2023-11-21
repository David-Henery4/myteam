/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primaryGreen: "#014E56",
      primaryRed: "#F67E7E",
      white: "#ffffff",
      black: "#002529",
      aqua: "#C4FFFE",
      secondaryGreen: "#004047",
      secondaryLightBlue: "#79C8C7",
      secondaryDarkVeryBlue: "#2C6269",
      secondaryDarkVeryGreen: "#012F34",
    },
    fontFamily: {
      livvic: ["var(--font-livvic)", "san-serif"],
    },
    gridTemplateColumns: {
      mainGridMob: "24px repeat(10,1fr) 24px",
    },
    extend: {},
  },
  plugins: [],
};
