"use client";

import React from "react";
import Image from "next/image";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const Avatar = ({ src, alt, width, height, className , tooltip_text }) => {
  return (
    <div className="w-16 h-16 md:w-24 md:h-24 rounded-full overflow-hidden">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`object-cover ${className || ""}`}
        data-tooltip-id="my-tooltip"
        data-tooltip-place="bottom"
        data-tooltip-content={tooltip_text || "بدون تولتیپ"}
      />
      <Tooltip id="my-tooltip" className="max-md:scale-[0.6] -my-8" />
    </div>
  );
};

export default Avatar;
