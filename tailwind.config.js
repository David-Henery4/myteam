/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mob: "23.12em", // 370px
      xtraSmTab: "30em", // 480px
      smTab: "32.5em", // 520px
      medTab: "38.75em", // 620px
      tab: "47.5em", // 760px
      lgTab: "54.25em", // 868px
      lap: "64em", // 1024px
      lgLap: "66.87em", // 1070px
      smDesk: "72.5em", // 1160px
      medDesk: "76.87em", // 1230px
      desk: "80.31em", // 1285px
      lgDesk: "86.25em", // 1380px
      xtraLgDesk: "88.75em", // 1420px
    },
    colors: {
      primaryGreen: "#014E56",
      primaryRed: "#F67E7E",
      white: "#ffffff",
      realBlack: "#000000",
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
      mainGridTab: "40px repeat(10,1fr) 40px",
      mainGridLgTab: "80px repeat(10,1fr) 80px",
      directorsContainer: "repeat( auto-fit, minmax(280px,1fr))",
      // directorsContainerLg: "repeat( auto-fit, minmax(320px,1fr))",
    },
    gridTemplateRows: {
      directorsBox: "1fr 28px 28px",
    },
    extend: {},
  },
  plugins: [],
};
