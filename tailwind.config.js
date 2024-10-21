/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        sm: "600px",
        xl: "1100px",
        "2xl": "1440px",
      },
      fontFamily: {
        gilroy: ["Gilroy", "sans-serif"],
        SFPRO: ["SFPRO", "sans-serif"], // Add Gilroy font here
      },
      spacing: {
        "3/4": "75%", // Custom class for 75%
        "1/4": "25%", // Custom class for 25%
      },
      colors: {
        primaryColors: {
          primary_light: "#002A48",
          primaryDark: "#003459",
        },
        secondaryColors: {
          default: "#FCEED5",
          moonYellow: "#f7dba7",
        },
        neutralColors: {
          100: "#00171F",
          80: "#242B33",
          60: "#667479",
          40: "#99A2A5",
          20: "#CCD1D2",
          10: "#EBEEEF",
          0: "#FDFDFD",
        },
        state_colors: {
          blueSea: "#00A7E7",
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".global-container": {
          width: "100%",
          margin: "0 auto",
          paddingLeft: "14px",
          paddingRight: "14px",
          "@screen xs": {
            paddingLeft: "25px",
            paddingRight: "25px",
          },
          "@screen sm": {
            paddingLeft: "35px",
            paddingRight: "35px",
          },
          "@screen md": {
            paddingLeft: "40px",
            paddingRight: "40px",
          },
          "@screen xl": {
            paddingLeft: "5%",
            paddingRight: "5%",
          },
          "@screen 2xl": {
            maxWidth: "calc(1440px - 130px - 130px)",
            paddingLeft: "0",
            paddingRight: "0",
          },
        },
      };

      addUtilities(newUtilities);
    },
  ],
};
