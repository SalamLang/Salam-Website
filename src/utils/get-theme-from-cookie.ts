function getThemeFromCookies() {
  const cookies = document.cookie.split("; "); // جداسازی کوکی‌ها
  const themeCookie = cookies.find((cookie) => cookie.startsWith("theme="));
  return themeCookie ? themeCookie.split("=")[1] : "light"; // مقدار تم یا پیش‌فرض "light"
}

export default getThemeFromCookies;
