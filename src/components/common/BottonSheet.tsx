"use client";

import { EditorModalsContext } from "@/utils/contexts/EditorModals";
import React, { useContext, useEffect, useRef } from "react";
import { Sheet, SheetRef } from "react-modal-sheet";
import RunCode from "../molecules/RunCode";
import Iframe from "react-iframe";

export default function BottonSheet() {
  const { isOpenBottonSheet, setIsOpenBottonSheet } =
    useContext(EditorModalsContext);
  const ref = useRef<SheetRef>();
  const snapTo = (i: number) => ref.current?.snapTo(i);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpenBottonSheet(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <Sheet
      isOpen={isOpenBottonSheet}
      onClose={() => setIsOpenBottonSheet(false)}
      snapPoints={[850, 600, 350, 0]}
      initialSnap={2}
      onSnap={(snapIndex) =>
        console.log("> Current snap point index:", snapIndex)
      }
      className="max-w-[55rem] mx-auto"
    >
      <Sheet.Container className="cursor-grabbing !shadow-none !bg-cream/40 backdrop-blur-xl !rounded-3xl">
        <Sheet.Header className="relative w-full h-auto flex justify-center items-center">
          <RunCode
            className="absolute -top-11 fill-black"
            fill_background="rgb(255 204 175 / 0.4)"
            fill_icon="#0066FF"
          />
        </Sheet.Header>
        <Sheet.Content className="p-3">
          <Iframe
            url="https://www.google.com"
            title="W3Schools Free Online Web Tutorials"
            X-Frame-Options="SAMEORIGIN"
          />
        </Sheet.Content>
      </Sheet.Container>
    </Sheet>
  );
}
