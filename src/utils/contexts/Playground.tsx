"use client";
import React, { createContext, useEffect, useState } from "react";

export const PlaygroundContextValue = createContext({
  isHidden: true,
  setIsHidden: null,
  fontName: "font-Estedad-Medium",
  setFontName: null,
  theme: "light",
  setTheme: null,
});

export function PlaygroundContext({ children }) {
  const [isHidden, setIsHidden] = useState(true);
  const [fontName, setFontName] = useState(() => {
    const savedState = localStorage.getItem("fontName");
    return savedState ? JSON.parse(savedState) : "font-Estedad-Medium";
  });
  const [theme, setTheme] = useState<"light" | "system" | "dark">(() => {
    const savedState = localStorage.getItem("theme");
    return savedState ? JSON.parse(savedState) : "light";
  });

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
    localStorage.setItem("fontName", JSON.stringify(fontName));
  }, [theme, fontName]);

  return (
    <PlaygroundContextValue.Provider
      value={{ isHidden, setIsHidden, fontName, setFontName, theme, setTheme }}
    >
      {children}
    </PlaygroundContextValue.Provider>
  );
}
