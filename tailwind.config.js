/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        "w-120": "500px",
      },
      height: {
        "h-120": "300px",
      },
    },
  },
  plugins: [],
};
