/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        "Estedad-Thin": "EstedadThin",
        "Estedad-ExtraLight": "ExtraLight",
        "Estedad-Light": "Light",
        "Estedad-Regular": "Regular",
        "Estedad-Medium": "Medium",
        "Estedad-SemiBold": "SemiBold",
        "Estedad-Bold": "Bold",
        "Estedad-ExtraBold": "ExtraBold",
        "Estedad-Black": "Black",
        "IranSans-Regular": "IranSansRegular",
        "YekanBakh-Regular": "YekanBakhRegular",
        "AliBaba-Regular": "AliBabaRegular",
        "Peyda-Regular": "PeydaRegular",
        "Graphik-Regular": "GraphikRegular",
      },
      colors: {
        "bg-main": "#ff5c00",
        "bg-box": "var(--bg-box)",
        "bg-box2": "var(--bg-box2)",
        "bg-button-orange": "var(--bg-button-orange)",
        "bg-button-blue": "var(--bg-button-blue)",
        "bg-button-blue-2": "var(--bg-button-blue-2)",
        "bg-button-white": "var(--bg-button-white)",
        "bg-button-green": "var(--bg-button-green)",
        "bg-gray": "var(--bg-gray)",
        "bg-gray-hover": "(--bg-gray-hover)",
        "bg-button-black": "var(--bg-button-black)",
        "bg-button-orange2": "var(--bg-button-orange2)",
        "text-button-orange2": "var(--text-button-orange2)",
        "text-button-black": "var(--text-button-black)",
        "text-button-white": "var(--text-button-white)",
        "text-button-blue": "var(--text-button-blue)",
        "text-orange": "var(--text-orange)",
        title: "var(--title)",
        description: "var(--description)",
        "border-grey": "var(--border-grey)",
        "border-grey2": "var(--border-grey2)",
        "bg-circel-blue": "var(--bg-circel-blue)",
        "bg-circel-green": "var(--bg-circel-green)",
        "bg-circel-orange": "var(--bg-circel-orange)",
        "bg-box-advantage": "var(--bg-box-advantage)",
        "bg-box-download": "var(--bg-box-download)",
        "bg-section": "var(--bg-section)",
        "bg-section2": "var(--bg-section2)",
        "bg-section-purple": "var(--bg-section-purple)",
        "bg-box-purple": "var(--bg-box-purple)",
        "bg-slider": "var(--bg-slider)",
        "color-card": "#F3F4ED",
        "light-primary": "rgba(217, 230, 255, 0.8)",
        primary: "rgba(39, 110, 246, 1)",
        "light-success": "rgba(0, 255, 194, 0.2)",
        success: "rgba(8, 119, 92, 1)",
        "light-warning": "rgba(248, 182, 14, 0.2)",
        warning: "rgba(144, 95, 0, 1)",
        "light-danger": "rgba(255, 215, 216, 0.8)",
        danger: "rgba(126, 0, 0, 1)",
        crimson: "rgba(205, 51, 69, 1)",
        "light-orange": "rgba(255, 245, 226, 1)",
        "cream-light": "rgba(255, 242, 235, 1)",
        "orange-medium": "rgba(255, 171, 0, 1)",
        light: "rgba(238, 244, 255, 1)",
        cream: "#FFCCAF",
        "dark-green": "var(--dark-green)",
        "footer-green": "rgba(142, 214, 89, 1)",
        dark: "rgba(24, 25, 31, 1)",
        "blue-box": "#276EF6",
        "green-box": "#8CFD33",
        "blue-cutsom": "#1E58F7",
        "gray-custom" : "rgba(192, 203, 236, 1)",
        "orange-custom" : "#FF5C00",
        "purple-custom":"#5B1EF7",
        "green-custom":"#98BB48",
        "pink-custom":"#E939D9",
      },
      boxShadow: {
        my: "0px 0px 20px 8px #0000000d",
        my2: "0px -44px 30px 18px #00000018",
        my3: "0px -35px 20px 13px #00000018",
      },
      backgroundImage: {
        vector: "url('/images/bg-vector.png')",
      },
    },
  },
  plugins: [],
};
