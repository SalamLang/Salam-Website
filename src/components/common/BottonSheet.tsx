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
  const { isOpenBottonSheet, initialSnap, setInitialSnap } =
    useContext(EditorModalsContext);
  const ref = useRef<SheetRef>();
  const [dynamicSnapPoints, setDynamicSnapPoints] = useState([
    window.innerHeight / 2,
    0,
  ]); // Default snap points
  const snapTo = useCallback((i: number) => ref.current?.snapTo(i), [ref]);

  // Function to determine snap points dynamically
  const determineSnapPoints = () => {
    const height = window.innerHeight;

    if (height < 300) {
      setDynamicSnapPoints([200, 0]); // Set snap points for very small screens
    } else if (height < 600) {
      setDynamicSnapPoints([height * 0.8, 0]); // For medium screens
    } else {
      setDynamicSnapPoints([height * 0.5, 0]); // For larger screens
    }
  };

  // Listen for window resize to adjust snap points dynamically
  useEffect(() => {
    determineSnapPoints(); // Determine snap points on initial load
    window.addEventListener("resize", determineSnapPoints); // Update snap points on window resize

    return () => {
      window.removeEventListener("resize", determineSnapPoints);
    };
  }, []);

  // Listen for the Escape key to set snap to point 1
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        console.log("pressed");
        setInitialSnap(1); // Set to the first snap point
        snapTo(1); // Apply snap point 1 (half of the height)
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [snapTo, setInitialSnap]);

  // Apply the initial snap value when the component is mounted
  useEffect(() => {
    if (ref.current) {
      snapTo(initialSnap); // Apply initial snap
    }
  }, [initialSnap, snapTo]);

  return (
    <Sheet
      isOpen={isOpenBottonSheet}
      onClose={() => {}} // Prevent closing
      snapPoints={dynamicSnapPoints} // Use dynamic snap points
      initialSnap={initialSnap}
      onSnap={(snapIndex) => {
        console.log("> Current snap point index:", snapIndex);
        setInitialSnap(snapIndex); // Keep track of the current snap index
      }}
      className="max-w-[55rem] mx-auto"
      style={{ zIndex: 10 }}
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
