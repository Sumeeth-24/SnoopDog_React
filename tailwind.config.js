/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlack: "#18051B",
      },
      width: {
        w360: "400px",
      },
      height: {
        h510: "510px",
      },
    },
  },
  plugins: [],
};
