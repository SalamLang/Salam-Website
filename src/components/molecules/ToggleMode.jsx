"use client";

import React, { useContext, useEffect, useState } from "react";
import { LayoutContext } from "@/utils/contexts/LayoutProvider";
import SunMoonToggle from "../templates/SunMoonToggle";
import useCookie from "@/hooks/useCookie";

export default function ToggleMode() {
  const { setTheme, isToggle, setIsToggle } = useContext(LayoutContext);

  const { handleSetCookie } = useCookie("theme");

  const handleToggle = () => {
    const maxAgeCookie = 365 * 24 * 60 * 60;

    setIsToggle(!isToggle);
    if (isToggle) {
      setTheme("light");
      handleSetCookie("light", { maxAge: maxAgeCookie });
    } else {
      setTheme("dark");
      handleSetCookie("dark", { maxAge: maxAgeCookie });
    }
  };

  return <SunMoonToggle isToggle={isToggle} onClick={handleToggle} />;
}
