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
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'background-primary': '#0b1727',  
        'background-secondary': '#fff',
        'text-primary': '#fff',
        'text-third': '#000',
        'text-secondary': '#808080',
        'highlight': '#f3c623',
      },
    },
  },
  plugins: [
    // Add any Tailwind CSS plugins here, e.g., require('@tailwindcss/forms')
  ],
};
