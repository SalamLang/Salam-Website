"use client";
import React, { createContext, useState } from "react";

export const ToggleMenuContext = createContext({
  isOpen: false,
  setIsOpen: null,
});

export default function ToggleMenuProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ToggleMenuContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </ToggleMenuContext.Provider>
  );
}
