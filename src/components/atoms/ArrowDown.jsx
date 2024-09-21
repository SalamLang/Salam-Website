import Clear from "../../../public/svgs/arrow-down-clear.svg";
import Screw from "../../../public/svgs/arrow-down-screw.svg";
import React from "react";

function ArrowDown({ variant }) {
  let classes = "";
  let SvgComponent = null;

  switch (variant) {
    case "Clear":
      classes = "w-9 h-32";
      SvgComponent = Clear;
      break;
    case "Screw":
      classes = "w-[84px] h-[114px]";
      SvgComponent = Screw;
      break;
    default:
      break;
  }

  return (
    <div
      className={`w-full h-fit flex items-center justify-center relative dark:invert ${classes}`}
    >
      {SvgComponent && <SvgComponent />}
    </div>
  );
}

export default ArrowDown;
