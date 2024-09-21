"use client";

import Image from "next/image";
import React from "react";

const InteractiveImage = ({
  src,
  alt,
  id,
  referrerPolicy = "no-referrer",
  onClick,
  style,
  ...attr
}) => {
  return (
    <Image
      referrerPolicy={referrerPolicy}
      id={id}
      style={style}
      onClick={onClick}
      alt={alt}
      src={src}
      {...attr}
    />
  );
};

export default InteractiveImage;
