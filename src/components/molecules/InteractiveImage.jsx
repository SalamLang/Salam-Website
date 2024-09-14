"use client";

import Image from "next/image";

const InteractiveImage = ({
  src,
  alt,
  id,
  referrerPolicy,
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
