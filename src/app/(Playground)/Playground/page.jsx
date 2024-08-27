// page.jsx
import { Alert } from "@/components/common/Alert";
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
      <Alert
        intent="orange"
        size="medium"
        className="min-h-[60px] md:min-h-[65px] lg:!min-h-[70px] flex justify-center items-center"
      >
        به دنیای سلام خوش اومدی اینجا دیگه هیچ محدودیتی نداری
      </Alert>
      <PlaygroundContext>
        <PlaygroundOnline />
      </PlaygroundContext>
    </div>
  );
}
