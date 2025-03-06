"use client";
import useLocalStorage from "@/hooks/useLocalStorage";
import React, { createContext, useEffect, useState } from "react";
import { getCookie, setCookie } from "@/utils/persist-storage/cookie";

export const LayoutContext = createContext({
  isToggle: false,
  setIsToggle: null,
  theme: "light",
  setTheme: null,
});

export function LayoutProvider({ children }) {
  const cookieTheme = getCookie("theme");
  const [theme, setTheme] = useLocalStorage("theme", cookieTheme || "light");
  const [isToggle, setIsToggle] = useState(false);

  // for theme site
  useEffect(() => {
    const root = window?.document?.documentElement;

    root.classList.remove("light", "dark");

    if (theme === "dark") {
      root.classList.add("dark");
      setIsToggle(true);
    } else if (theme === "light") {
      root.classList.add("light");
      setIsToggle(false);
    } else if (theme === "system") {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      if (prefersDark) {
        root.classList.add("dark");
        setIsToggle(true);
      } else {
        root.classList.add("light");
        setIsToggle(false);
      }
      setCookie("theme", theme);
    }
  }, [theme]);

  return (
    <LayoutContext.Provider
      value={{
        isToggle,
        setIsToggle,
        theme,
        setTheme,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
}
