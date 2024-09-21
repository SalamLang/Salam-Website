import CarecterBlue from "../../../public/svgs/caracter2.svg";
import CarecterOrange from "../../../public/svgs/caracter4.svg";
import CaracterGreen from "../../../public/svgs/carecter7.svg";
import CaracterGreentow from "../../../public/svgs/educationvectoryellow.svg";
import React from "react";

function CarecterGoToLearn() {
  return (
    <>
      <span className="absolute left-[10%] -z-10 dark:z-10 md:right-[65%] top-36 md:top-60">
        <CarecterBlue />
      </span>
      <span className="absolute right-[10%] -z-10 dark:z-10 md:right-[40%] top-72 md:top-64">
        <CarecterOrange />
      </span>
      <span className="absolute max-md:hidden -z-10 dark:z-10 md:right-[23%] top-[12rem] md:top-52">
        <CaracterGreentow />
      </span>
      <span className="absolute max-md:hidden right-[10%] -z-10 dark:z-10 md:right-[55%] top-72">
        <CaracterGreen />
      </span>
    </>
  );
}

export default CarecterGoToLearn;
