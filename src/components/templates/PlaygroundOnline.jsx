"use client";

import React, { useContext } from "react";
import Editor from "../molecules/Editor";
import { PlaygroundContextValue } from "@/utils/contexts/Playground";
import ActionToType from "../molecules/ActionToType";
import KeyPressFullScreen from "../molecules/KeyPressFullScreen";

export default function PlaygroundOnline() {
  const { isHidden } = useContext(PlaygroundContextValue);
  return (
    <div className="relative w-full h-full flex-grow flex justify-center items-start max-md:pt-4 md:items-center">
      {isHidden && <KeyPressFullScreen />}
      {isHidden ? <ActionToType /> : <Editor />}
    </div>
  );
}
