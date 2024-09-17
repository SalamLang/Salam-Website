"use client";
import React, { createContext, useEffect, useState } from "react";

export const PlaygroundContextValue = createContext({
  isHidden: true,
  setIsHidden: null,
  fontName: "font-Estedad-Medium",
  setFontName: null,
});

export function PlaygroundContext({ children }) {
  const [isHidden, setIsHidden] = useState(true);
  const [fontName, setFontName] = useState(() => {
    const savedState = localStorage.getItem("fontName");
    return savedState ? JSON.parse(savedState) : "font-Estedad-Medium";
  });

  return (
    <PlaygroundContextValue.Provider
      value={{ isHidden, setIsHidden, fontName, setFontName }}
    >
      {children}
    </PlaygroundContextValue.Provider>
  );
}
