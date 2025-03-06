"use client";

export function getCookie(name) {
  if (typeof document === "undefined") return null; 
  const cookies = document.cookie.split("; ");
  const cookie = cookies.find(row => row.startsWith(name + "="));
  return cookie ? decodeURIComponent(cookie.split("=")[1]) : null;
}

export function setCookie(name, value, days = 365) {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires.toUTCString()}; path=/`;
}
