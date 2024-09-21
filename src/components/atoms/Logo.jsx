import Link from "next/link";

import Logosvg from "../../../public/svgs/logo.svg";
import React from "react";

function Logo({ className }) {
  return (
    <Link href="/" className={`w-16 h-14 ${className || ""}`}>
      <Logosvg className="w-full h-full" />
    </Link>
  );
}

export default Logo;
