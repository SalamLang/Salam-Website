"use client";

import { useContext } from "react";
import { ToggleMenuContext } from "@/utils/contexts/ToggleMenu";
import HambergerIcon from "../../../public/svgs/hambeger.svg";
import React from "react";

function Hamberger() {
  const { isOpen, setIsOpen } = useContext(ToggleMenuContext);

  const clickHanler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <HambergerIcon
      onClick={clickHanler}
      className="cursor-pointer md:hidden w-15 h-15 scale-90"
    />
  );
}

export default Hamberger;
