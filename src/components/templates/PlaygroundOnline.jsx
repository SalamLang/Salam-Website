"use client";

import React, { useContext, useEffect } from "react";
import Editor from "../molecules/Editor";
import { PlaygroundContextValue } from "@/utils/contexts/Playground";
import ActionToType from "../molecules/ActionToType";
import { AnimatePresence, motion } from "framer-motion";
import KeyPressFullScreen from "../molecules/KeyPressFullScreen";

export default function PlaygroundOnline() {
  const { isHidden, setIsHidden } = useContext(PlaygroundContextValue);
  return (
    <div className="relative w-full h-full flex-grow flex justify-center items-start max-md:pt-4 md:items-center">
      {isHidden && <KeyPressFullScreen />}
      {isHidden ? <ActionToType /> : <Editor />}
    </div>
  );
}
