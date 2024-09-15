"use client";
import React, { createContext, useState } from "react";

export const LayoutContext = createContext({
  headerType: "default",
  setHeaderType: null,
  isFooterHidden: false,
  setIsFooterHidden: null,
});

export function LayoutProvider({ children }) {
  const [headerType, setHeaderType] = useState<"default" | "second-header">(
    "default"
  );
  const [isFooterHidden, setIsFooterHidden] = useState(false);

  return (
    <LayoutContext.Provider
      value={{ headerType, setHeaderType, isFooterHidden, setIsFooterHidden }}
    >
      {children}
    </LayoutContext.Provider>
  );
}
