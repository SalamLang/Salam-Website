function setThemeCookie(theme: "light" | "dark") {
  document.cookie = `theme=${theme}; path=/; max-age=31536000`;
  const root = document.documentElement;
  root.classList.remove("light", "dark");
  root.classList.add(theme);
}

export default setThemeCookie;
