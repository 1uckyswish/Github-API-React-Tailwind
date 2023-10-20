/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#a4fcf9",

          secondary: "#b153e0",

          accent: "#343db5",

          neutral: "#223039",

          "base-100": "#434451",

          info: "#9cb3e8",

          success: "#78edc4",

          warning: "#9d5c06",

          error: "#f75f6e",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
