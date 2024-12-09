import setThemeCookie from "./set-theme-cookie";

function toggleTheme() {
    const currentTheme = document.documentElement.classList.contains("dark")
      ? "light"
      : "dark";
    setThemeCookie(currentTheme);
  }

export default toggleTheme;
  