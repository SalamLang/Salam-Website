"use client";
import React, { createContext, useState } from "react";

export const PlaygroundContextValue = createContext({
  isHidden: true,
  setIsHidden: null,
});

export function PlaygroundContext({ children }) {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <PlaygroundContextValue.Provider value={{ isHidden, setIsHidden }}>
      {children}
    </PlaygroundContextValue.Provider>
  );
}
