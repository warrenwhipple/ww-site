import Typography from "typography";

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.45,
  headerFontFamily: [
    "Ubuntu",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif"
  ],
  headerWeight: 700,
  bodyFontFamily: ["Merriweather", "Georgia", "serif"],
  bodyWeight: 400,
  googleFonts: [
    {
      name: "Ubuntu",
      styles: ["700"]
    },
    {
      name: "Merriweather",
      styles: ["400"]
    }
  ]
});

export default typography;
