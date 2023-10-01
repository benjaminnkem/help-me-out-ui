/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blueAccent: "#120B48",
        primaryOffWhite: "#F4F6F8",
        grey: "#616163",
        primaryPurple: "#413C6D",
      },
    },
  },
  plugins: [],
};
