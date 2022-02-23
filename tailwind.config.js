const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-gray": "#cbdff3",
      },
    },
    fontFamily: {
      body: ["Inter", ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
