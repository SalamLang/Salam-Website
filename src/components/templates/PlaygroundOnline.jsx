"use client";

import React, { useContext } from "react";
import Editor from "../molecules/Editor";
import { PlaygroundContextValue } from "@/utils/contexts/Playground";
import ActionToType from "../molecules/ActionToType";
import KeyPressFullScreen from "../molecules/KeyPressFullScreen";
import { Alert } from "../common/Alert";

export default function PlaygroundOnline() {
  const { isHidden } = useContext(PlaygroundContextValue);
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
