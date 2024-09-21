"use client";

import { LayoutContext } from "@/utils/contexts/LayoutProvider";
import React, { useContext, useEffect } from "react";

export default function Layout({ children }) {
  const { setHeaderType } = useContext(LayoutContext);
  useEffect(() => {
    setHeaderType("second-header");
    return () => {
      setHeaderType("default");
    };
  }, [setHeaderType]);

  return <>{children}</>;
}
