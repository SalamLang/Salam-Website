"use client";
import React, { createContext, useState } from "react";

export const PlaygroundContextValue = createContext({
  isHidden: true,
  setIsHidden: null,
  fontName: "font-Estedad-Medium",
  setFontName: null,
  theme : "light",
  setTheme : null
});

export function PlaygroundContext({ children }) {
  const [isHidden, setIsHidden] = useState(true);
  const [fontName, setFontName] = useState("font-Estedad-Medium");
  const [theme,setTheme] = useState<"light" | "system" | "dark">("light")

  return (
    <PlaygroundContextValue.Provider
      value={{ isHidden, setIsHidden, fontName, setFontName , theme , setTheme }}
    >
      {children}
    </PlaygroundContextValue.Provider>
  );
}
