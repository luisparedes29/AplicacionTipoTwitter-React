/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
        './node_modules/react-tailwindcss-select/dist/index.esm.js',
    ],
    theme: {
        extend: {
            colors: {
                azulOscuro1: "#00001A",
                azulOscuro2: "#010326",
                azulGris: "#21213B",
              },
              fontFamily: {
                Quicksand: ["Quicksand", "sans-serif"],
                Kanit: ["Kanit", "sans-serif"],
                }
        },
    },
    plugins: [],
};
