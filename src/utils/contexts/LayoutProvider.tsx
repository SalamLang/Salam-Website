"use client";
import React, { createContext, useEffect, useState } from "react";

export const LayoutContext = createContext({
  headerType: "default",
  setHeaderType: null,
  isFooterHidden: false,
  setIsFooterHidden: null,
  isDark: false,
  setIsDark: null,
});

export function LayoutProvider({ children }) {
  const [headerType, setHeaderType] = useState<"default" | "second-header">(
    "default"
  );
  const [isFooterHidden, setIsFooterHidden] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    const savedState = localStorage.getItem("isDarkHeader");
    return savedState ? JSON.parse(savedState) : false;
  });

  useEffect(() => {
    localStorage.setItem("isDarkHeader", JSON.stringify(isDark));
  }, [isDark]);

  return (
    <LayoutContext.Provider
      value={{
        headerType,
        setHeaderType,
        isFooterHidden,
        setIsFooterHidden,
        isDark,
        setIsDark,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
}
