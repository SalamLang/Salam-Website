"use client";
import { createContext, useState } from "react";

export const ToggleMenuContext = createContext({
  isOpen: false,
  setIsOpen: () => {},
});

export default function ToggleMenuProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ToggleMenuContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </ToggleMenuContext.Provider>
  );
}
