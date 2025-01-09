"use client";

import React, { useContext, useEffect, useState } from "react";
import { LayoutContext } from "@/utils/contexts/LayoutProvider";
import SunMoonToggle from "../templates/SunMoonToggle";

export default function ToggleMode() {
  const { setTheme, isToggle, setIsToggle } = useContext(LayoutContext);
  const handleToggle = () => {
    setIsToggle(!isToggle);
    if (isToggle) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <SunMoonToggle isToggle={isToggle} onClick={handleToggle} />
  );
}
