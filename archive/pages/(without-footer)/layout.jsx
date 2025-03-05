import React from "react";
import FixedMenu from "@/components/molecules/FixedMenu";
import SecondHeader from "@/components/templates/SecondHeader";

export default function layout({ children }) {
  return (
    <>
      <div className="relative w-full min-h-screen flex transition-colors dark:bg-gray-900 flex-col flex-grow justify-start">
        <SecondHeader />
        <FixedMenu />
        <div className="w-full h-full flex flex-col flex-grow">{children}</div>
      </div>
    </>
  );
}
