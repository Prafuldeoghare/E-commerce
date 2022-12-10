/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        c1: {
          a: "#151515",
          c: "#A9A9A9",
          d: "#D1D1D1",
          e: "#EBEBEB",
          f: "#F5F5F5",
          h: "#F9F9F9",
          j: "#ffffff",
        },
        c2: {
          a: "#00aae4",
          b: "#46760A",
          c: "#92C064",
          d: "#C8DEB3",
          e: "#F4F8EC",
        },
        c3: {
          a: "#D0A866",
          b: "#B28A48",
          c: "#ECD2A6",
          d: "#FAEDD8",
          e: "#FFF9F0",
        },
        c4: {
          a: "#E6704B",
          b: "#C7522D",
          c: "#EB8D70",
          d: "#F7C6B7",
          e: "#FFF1ED",
        },
        c5: {
          a: "#37D0D6",
          b: "#19B2B8",
          c: "#7CD0D3",
          d: "#B9E6E8",
          e: "#ECF6F7",
        },
      },
      fontWeight: {
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      fontSize: {
        s1: "32px",
        s2: "26px",
        s3: "22px",
        s4: "18px",
        s5: "15px",
        s6: "12px",
        lead: "17px",
        body: "14px",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        shadow1: "0px 2px 4px 0px rgba(255,255,255,0.15)",
        shadow2: "0px 1px 2px 0px rgba(255,255,255,0.25)",
        shadowModal: "0px 2px 32px 0px rgba(255,255,255,0.15)",
      },
    },
  },
  plugins: [],
};
