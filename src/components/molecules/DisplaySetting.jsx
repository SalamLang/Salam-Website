"use client";
import React, { useContext, useEffect } from "react";
import { motion } from "framer-motion";
import SelectTheme from "./SelectTheme";
import SelectFont from "./SelectFont";
import { PlaygroundContextValue } from "@/utils/contexts/Playground";

export default function DisplaySetting() {
  const { theme } = useContext(PlaygroundContextValue);

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove("light", "dark");

    if (theme === "dark") {
      root.classList.add("dark");
    } else if (theme === "light") {
      root.classList.add("light");
    } else if (theme === "system") {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      if (prefersDark) {
        root.classList.add("dark");
      } else {
        root.classList.add("light");
      }
    }
  }, [theme]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full min-h-96 px-6 py-7 flex flex-col orange-scrollbar gap-8 justify-center items-center"
    >
      <SelectTheme />
      <SelectFont />
    </motion.div>
  );
}
