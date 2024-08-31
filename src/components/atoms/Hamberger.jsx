"use client";

import Image from "next/image";

import HambergerImage from "../../../public/hamberger.png";
import { useState } from "react";
import { useContext } from "react";
import { ToggleMenuContext } from "@/context/ToggleMenu";

function Hamberger() {
  const { isOpen, setIsOpen } = useContext(ToggleMenuContext);

  const clickHanler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Image
      onClick={clickHanler}
      className="cursor-pointer md:hidden w-9 h-9"
      src={HambergerImage}
      alt="HambergerToggleButton"
    />
  );
}

export default Hamberger;
