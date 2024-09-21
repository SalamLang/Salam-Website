import CarecterBlue from "../../../public/svgs/carecterblue.svg";
import Ghost from "../../../public/svgs/ghost.svg";
import CaracterGreen from "../../../public/svgs/caracter5.svg";
import React from "react";

function CarectersDownload() {
  return (
    <>
      <span className="absolute bottom-20 lg:right-[0%] md:right-[15%] right-[13%] sm:bottom-22">
        <CarecterBlue />
      </span>
      <span className="absolute right-12 sm:right-14 top-36 sm:top-40 z-20">
        <Ghost />
      </span>
      <span className="absolute left-12 top-24 -rotate-[55deg]">
        <Ghost />
      </span>
      <span className="absolute left-[-20%] max-sm:right-[50%] bottom-6">
        <CaracterGreen />
      </span>
    </>
  );
}

export default CarectersDownload;
