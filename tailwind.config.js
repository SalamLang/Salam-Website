/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-button-orange': 'var(--bg-button-orange)',
        'bg-button-blue': 'var(--bg-button-blue)',
        'bg-button-blue-2': 'var(--bg-button-blue-2)',
        'bg-button-white': 'var(--bg-button-white)',
        'bg-button-green': 'var(--bg-button-green)',
        'bg-button-black': 'var(--bg-button-black)',
        'text-button-black': 'var(--text-button-black)',
        'text-button-white': 'var(--text-button-white)',
        'text-button-blue': 'var(--text-button-blue)',
        'title': 'var(--title)',
        'description': 'var(--description)',
      },
    },
  },
  plugins: [],
};
