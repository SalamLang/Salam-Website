"use client";

import { EditorModalsContext } from "@/utils/contexts/EditorModals";
import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { Sheet, SheetRef } from "react-modal-sheet";
import RunCode from "../molecules/RunCode";
import Iframe from "react-iframe";

export default function BottonSheet() {
  const { isOpenBottonSheet , initialSnap , setInitialSnap } = useContext(EditorModalsContext);


  const ref = useRef<SheetRef>();
  const snapTo = useCallback((i: number) => ref.current?.snapTo(i), [ref]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        console.log("pressed");
        setInitialSnap(3);
        snapTo(initialSnap); // Apply the initialSnap value
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [initialSnap, snapTo,setInitialSnap]);

  useEffect(() => {
    if (ref.current) {
      snapTo(initialSnap); // Apply the initialSnap value
    }
  }, [initialSnap, snapTo]);

  return (
    <Sheet
      isOpen={isOpenBottonSheet}
      onClose={() => {}} // Prevent closing
      snapPoints={[850, 600, 350, 0]} // Adjust snap points to avoid closing
      initialSnap={initialSnap}
      onSnap={(snapIndex) => {
        console.log("> Current snap point index:", snapIndex);
      }}
      className="max-w-[55rem] mx-auto"
    >
      <Sheet.Container className="cursor-grabbing !shadow-none !bg-cream/40 backdrop-blur-xl !rounded-t-3xl">
        <Sheet.Header className="relative w-full h-auto flex justify-center items-center">
          <RunCode
            className="absolute -top-11 fill-black"
            fill_background="rgb(255 204 175 / 0.4)"
            fill_icon="#0066FF"
          />
        </Sheet.Header>
        <Sheet.Content className="p-3">
          <Iframe
            className="w-full h-full"
            url="https://www.google.com"
            title="W3Schools Free Online Web Tutorials"
            X-Frame-Options="SAMEORIGIN"
          />
        </Sheet.Content>
      </Sheet.Container>
    </Sheet>
  );
}
