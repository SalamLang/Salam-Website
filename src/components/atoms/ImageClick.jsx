import Image from "next/image";

import BgCursor from "../../../public/images/bgcursor.png";
import Cursor from "../../../public/images/cursor.png";
import Link from "next/link";
import React from "react";

function ImageClick() {
  return (
    <Link
      href="/download"
      className="w-fit h-fit flex items-center justify-center relative"
    >
      <Image src={BgCursor} alt="bgclick" />
      <Image
        src={Cursor}
        alt="click"
        className="absolute right-[33%] top-[30%]"
      />
    </Link>
  );
}

export default ImageClick;
