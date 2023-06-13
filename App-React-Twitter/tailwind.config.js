/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-select/dist/index.esm.js",
  ],
  theme: {
    extend: {
      colors: {
        azulOscuro1: "#00001A",
        azulOscuro2: "#010326",
        azulGris: "#21213B",
        gris: "#6D6C8C",
      },
      fontFamily: {
        Quicksand: ["Quicksand", "sans-serif"],
        Kanit: ["Kanit", "sans-serif"],
      },
      screens: {
        p: "250px",
        // => @media (min-width: 250px) { ... }
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }

        ur: "1920px",
        // => @media (min-width: 1920px) { ... }
      },
    },
  },
  plugins: [],
};
