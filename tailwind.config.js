/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./pages/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "Color-Green": "#004037",
        "Color-Light-Green": "#11FF84",
        "Color-Cyan": "#B7EDED",
        "Color-Gray": "#FAF3E8",
        "Color-Yellow": "#C4FF45",
      },
      screens: {
        ph: { max: "767px" },
        // => @media (min-width: 475px) { ... }

        tab: { max: "991px" },
        // => @media (min-width: 768px) { ... }

        laptop: { max: "1199px" },
        // => @media (min-width: 992px) { ... }

        desktop: "1200px",
        // => @media (min-width: 1200px) { ... }
      },
    },
  },
  plugins: [],
}
