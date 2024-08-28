// page.jsx
import PlaygroundOnline from "@/components/templates/PlaygroundOnline";
import { PlaygroundContext } from "@/utils/contexts/Playground";
import React from "react";

export const metadata = {
  title: "playground",
  description: "salam language",
};

export default function Playground() {
  return (
    <div className="w-full h-full flex flex-col flex-grow">
      <PlaygroundContext>
        <PlaygroundOnline />
      </PlaygroundContext>
    </div>
  );
}
