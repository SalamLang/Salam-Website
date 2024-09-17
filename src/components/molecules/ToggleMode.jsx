"use client";

import React, { useContext, useEffect, useState } from "react";
import "@theme-toggles/react/css/Classic.css";
import { Classic } from "@theme-toggles/react";
import { LayoutContext } from "@/utils/contexts/LayoutProvider";

export default function ToggleMode() {
  const { setTheme } = useContext(LayoutContext);
  const [isDark, setIsDark] = useState(() => {
    const savedState = localStorage.getItem("isDark");
    return savedState ? JSON.parse(savedState) : false;
  });

  useEffect(() => {
    localStorage.setItem("isDark", JSON.stringify(isDark));
  }, [isDark]);

  useEffect(() => {
    if (!isDark) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, [isDark, setTheme]);

  return (
    <>
      <Classic duration={750} toggled={isDark} toggle={setIsDark} />
    </>
  );
}
