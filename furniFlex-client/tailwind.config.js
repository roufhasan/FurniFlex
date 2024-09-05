/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-blue-1": "#0f3dde",
        "custom-gray-1": "#707070",
        "custom-gray-2": "#dedede",
        "custom-gray-3": "#f1f0f0",
        "custom-gray-4": "#c8c4c4",
        "custom-gray-5": "#81859f",
        "custom-sky-1": "#1e99f5",
      },
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
