"use client";
import React, { createContext, useState } from "react";

export const DocsContext = createContext({
    isOpenMenu: false,
    setIsOpenMenu: null,
});

export function DocsProvider({ children }) {
  const [isOpenMenu, setIsOpenMenu] = useState(true);

  return (
    <DocsContext.Provider
      value={{
        isOpenMenu,
        setIsOpenMenu,
      }}
    >
      {children}
    </DocsContext.Provider>
  );
}
