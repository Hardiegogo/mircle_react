/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#446DF6",
        secondary: "#9B7EDE",
        bgColor: "#F1E3D3",
        black: "#0A0A0A",
        lightOrange:"#F2D0A9",
      },
      gridTemplateRows: {
        rowsLayout: "minmax(0,min-content) minmax(0,1fr)",
        rowsLgLayout:"minmax(0,min-content) minmax(0,1fr) minmax(0,1fr)"
      },
      gridTemplateColumns:{
        colsLayout:"25% 50% 25%",
        colslgLayout:"100%",
        colsMaxLayout:"30% 70%",
      },
      boxShadow: {
        neu: "5px 5px 0px 0px rgba(10,10,10,1);",
      },
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
    },
    screens: {
      xl: { max: "1024px" },
      lg: { max: "768px" },
      md: { max: "640px" },       
      sm: { max: "480px" },

    },
  },
  plugins: [],
};
