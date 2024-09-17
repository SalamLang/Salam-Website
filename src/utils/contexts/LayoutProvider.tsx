"use client";
import useLocalStorage from "@/hooks/useLocalStorage";
import React, { createContext, useEffect, useState } from "react";

export const LayoutContext = createContext({
  headerType: "default",
  setHeaderType: null,
  isFooterHidden: false,
  setIsFooterHidden: null,
  theme: "light",
  setTheme: null,
});

export function LayoutProvider({ children }) {
  const [headerType, setHeaderType] = useState<"default" | "second-header">(
    "default"
  );
  const [isFooterHidden, setIsFooterHidden] = useState(false);

  const [theme,setTheme] = useLocalStorage("theme","light");


  // for theme site
  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove("light", "dark");

    if (theme === "dark") {
      root.classList.add("dark");
    } else if (theme === "light") {
      root.classList.add("light");
    } else if (theme === "system") {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      if (prefersDark) {
        root.classList.add("dark");
      } else {
        root.classList.add("light");
      }
    }
  }, [theme]);

  return (
    <LayoutContext.Provider
      value={{
        headerType,
        setHeaderType,
        isFooterHidden,
        setIsFooterHidden,
        theme,
        setTheme,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
}
