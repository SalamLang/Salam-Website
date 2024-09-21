"use client";

import { LayoutContext } from "@/utils/contexts/LayoutProvider";
import React, { useContext, useEffect } from "react";

export default function Layout({ children }) {
  const { setHeaderType, setIsFooterHidden } = useContext(LayoutContext);
  useEffect(() => {
    setHeaderType("second-header");
    setIsFooterHidden(true);
    return () => {
      setHeaderType("default");
      setIsFooterHidden(false);
    };
  }, [setHeaderType, setIsFooterHidden]);

  return <>{children}</>;
}
