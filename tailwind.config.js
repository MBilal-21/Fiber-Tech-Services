/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'nav-color': '#0f1425',
        'custom-dark': '#1b1f2e',
        'custom-blue': '#674df3',
        'custom-green': '#30f0b6',
        'custom-lighter': '#f7f7f9',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
