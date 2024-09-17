"use client";
import useLocalStorage from "@/hooks/useLocalStorage";
import React, { createContext, useEffect, useState } from "react";

export const PlaygroundContextValue = createContext({
  isHidden: true,
  setIsHidden: null,
  fontName: "font-Estedad-Medium",
  setFontName: null,
});

export function PlaygroundContext({ children }) {
  const [isHidden, setIsHidden] = useState(true);
  const [fontName,setFontName]=useLocalStorage("fontName","font-Estedad-Medium")

  return (
    <PlaygroundContextValue.Provider
      value={{ isHidden, setIsHidden, fontName, setFontName }}
    >
      {children}
    </PlaygroundContextValue.Provider>
  );
}
