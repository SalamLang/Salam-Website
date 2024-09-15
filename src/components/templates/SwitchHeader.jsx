"use client";

import { LayoutContext } from "@/utils/contexts/LayoutProvider";
import React, { useContext } from "react";
import Header from "./Header";
import SecondHeader from "./SecondHeader";

export default function SwitchHeader() {
  const { headerType } = useContext(LayoutContext);
  if (headerType === "second-header") {
    return <SecondHeader />;
  } else {
    return <Header />;
  }
}
