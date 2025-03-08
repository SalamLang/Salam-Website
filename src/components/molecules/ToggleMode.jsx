"use client";

import React, { useContext, useEffect, useState } from "react";
import { LayoutContext } from "@/utils/contexts/LayoutProvider";
import SunMoonToggle from "../templates/SunMoonToggle";
import useCookie from "@/hooks/useCookie";

export default function ToggleMode() {
  const { setTheme, isToggle, setIsToggle } = useContext(LayoutContext);

  const { handleSetCookie } = useCookie("theme");

  const handleToggle = () => {
    setIsToggle(!isToggle);
    if (isToggle) {
      setTheme("light");
      handleSetCookie("light");
    } else {
      setTheme("dark");
      handleSetCookie("dark");
    }
  };

  return <SunMoonToggle isToggle={isToggle} onClick={handleToggle} />;
}
