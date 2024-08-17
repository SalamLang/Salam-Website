import React from "react";
import GetTutorialCard from "../home/get-tutorial/GetTutorialCard";

export default function GetTutorial() {
  return (
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[600px] bg-bg-section flex justify-center items-center bg-vector md:bg-center 2xl:bg-contain bg-cover bg-clip-content bg-origin-content bg-no-repeat">
      <GetTutorialCard />
    </div>
  );
}
