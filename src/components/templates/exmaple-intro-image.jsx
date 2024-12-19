import Image from "next/image";
import React from "react";

export default function ExmapleIntroImage() {
  return (
    <div className="w-full h-full p-2 flex justify-center items-center">
      <Image
        width="500"
        height="500"
        src="/images/logo-vector-custom-salam.png"
        className="max-md:w-[350px]"
        alt="logo"
      />
    </div>
  );
}
