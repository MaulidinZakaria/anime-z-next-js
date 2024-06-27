/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // if using `src` directory:
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/js/**/*.js",

    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    "./app//*.{js,ts,jsx,tsx,mdx}",
    "./components//.{js,ts,jsx,tsx,mdx}",
    "./app/**/.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  darkMode: "class",
  plugins: [require("tw-elements/plugin.cjs")],
};
