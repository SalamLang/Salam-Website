"use client";

import React, { useContext, useEffect, useState } from "react";
import "@theme-toggles/react/css/Classic.css";
import { Classic } from "@theme-toggles/react";
import { LayoutContext } from "@/utils/contexts/LayoutProvider";
import useLocalStorage from "@/hooks/useLocalStorage";

export default function ToggleMode() {
  const {theme, setTheme } = useContext(LayoutContext);
  const [isToggle,setIsToggle] = useState(()=>{
    if(theme === "dark" || theme === "system") return true;
    else return false
  })

  useEffect(() => {
    if (isToggle) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, [isToggle, setTheme]);
  
  return (
    <>
      <Classic duration={750} toggled={isToggle} toggle={setIsToggle} />
    </>
  );
}
