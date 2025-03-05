import Link from "next/link";
import Logo from "../../../public/svgs/logo.svg";
import NavItem from "./NavItem";
import { getRoute } from "@/utils/constants/getRoutes";
import React from "react";

function MenuList() {
  return (
    <ul className="relative hidden md:flex items-center justify-center gap-x-12">
      {/* <div
        className={
          "hidden md:block absolute inset-0 w-2/3 h-full overflow-hidden min-h-[50vh] top-12 right-[44%]"
        }
        style={{ zIndex: -1 }}
      >
        <Vactor2 />
      </div> */}

      <NavItem href={getRoute("home")}>سلام</NavItem>
      <NavItem href={getRoute("education")}>یادگیری</NavItem>
      <NavItem href={getRoute("donwload")}>دانلود</NavItem>

      <Link
        href={"/"}
        className={
          "bg-white -translate-y-1/3 md:w-[100px] lg:w-[120px] xl:w-[140px] 2xl:w-[160px] p-5 rounded-3xl shadow-my"
        }
      >
        <Logo />
      </Link>
      <NavItem href={"#"}>انجمن</NavItem>
      <NavItem isAnchor href={process.env.NEXT_PUBLIC_EDITOR_URL}>آزمایش آنلاین</NavItem>
      <NavItem href={"#"}>مثال</NavItem>
    </ul>
  );
}

export default MenuList;
