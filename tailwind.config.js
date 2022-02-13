const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      body: ['Inter', ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
};
