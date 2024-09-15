"use client";

import { LayoutContext } from "@/utils/contexts/LayoutProvider";
import React, { useContext } from "react";
import Footer from "./Footer";

export default function ShowFooter() {
  const { isFooterHidden } = useContext(LayoutContext);
  if (isFooterHidden) return <></>;
  else {
    return <Footer />;
  }
}
