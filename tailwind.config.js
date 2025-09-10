import withMT from "@material-tailwind/react/utils/withMT";
/** @type {import('tailwindcss').Config} */
export default withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        logoColor1: "#0a5778",
        logoColor2: "#0298d8",
        linkColor1: "#181d38",
        linkColor2: "#0298d8",
      },
      fontFamily: {
        heebo: ["Heebo", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
      },
    },
  },
  plugins: [],
});
