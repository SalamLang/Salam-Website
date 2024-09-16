"use client";

import React, { useContext, useEffect } from "react";
import Editor from "../molecules/Editor";
import { PlaygroundContextValue } from "@/utils/contexts/Playground";
import ActionToType from "../molecules/ActionToType";
import KeyPressFullScreen from "../molecules/KeyPressFullScreen";
import { Alert } from "../common/Alert";
import { LayoutContext } from "@/utils/contexts/LayoutProvider";

export default function PlaygroundOnline() {
  const { isHidden } = useContext(PlaygroundContextValue);
  const { setIsDark } = useContext(LayoutContext);

  useEffect(() => {
    setIsDark(true);

    return () => {
      setIsDark(false);
    };
  }, [setIsDark]);

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
    <>
      {isHidden && (
        <Alert
          intent="orange"
          size="medium"
          className="min-h-[60px] md:min-h-[65px] lg:!min-h-[70px] flex justify-center items-center"
        >
          به دنیای سلام خوش اومدی اینجا دیگه هیچ محدودیتی نداری
        </Alert>
      )}
      <div className="relative w-full h-full overflow-hidden flex-grow flex justify-center items-start md:items-center">
        {isHidden && <KeyPressFullScreen />}
        {isHidden ? <ActionToType /> : <Editor />}
      </div>
    </>
  );
}
