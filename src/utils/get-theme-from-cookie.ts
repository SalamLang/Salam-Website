function getThemeFromCookies() {
  const cookies = document.cookie.split("; ");
  const themeCookie = cookies.find((cookie) => cookie.startsWith("theme="));
  return themeCookie ? themeCookie.split("=")[1] : "light";
}

export default getThemeFromCookies;
