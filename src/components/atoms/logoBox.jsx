import Link from "next/link";
import LogoSvg from "../../../public/svgs/logoOrange.svg";
import React from 'react'

function LogoBox() {
    const name="ali"
  return (
    <div className="flex items-center justify-center">
      <div className="w-[120px]">
        <Link href={"/"}>
        <LogoSvg/>
        </Link>
      </div>
    </div>
  )
}

export default LogoBox