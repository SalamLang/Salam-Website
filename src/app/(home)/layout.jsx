import React from "react";
import FixedMenu from "@/components/molecules/FixedMenu";
import Footer from "@/components/templates/Footer";
import Header from "@/components/templates/Header";

export default function layout({ children }) {
  return (
    <>
      <div className="relative w-full min-h-screen flex transition-colors dark:bg-gray-900 flex-col flex-grow justify-start">
        <Header />
        <FixedMenu />
        <div className="w-full h-full flex flex-col flex-grow">{children}</div>
        <Footer />
      </div>
    </>
  );
}
