import Link from "next/link";
import Logo from "../atoms/Logo";
import { Badge } from "../common/Badge";
import NavItem from "./NavItem";
import { getRoute } from "@/utils/constants/getRoutes";
import ToggleMode from "./ToggleMode";
import React from "react";

function SecondMenuList() {
  return (
    <div className="hidden md:flex max-w-[900px] w-full h-full justify-between items-center">
      <Logo className="max-lg:hidden" />

      <ul className="flex items-center justify-center gap-x-12">
        <NavItem
          variants={"second-header"}
          href={getRoute("home")}
          className="text-sm !font-Estedad-Medium"
        >
          سلام
        </NavItem>
        <NavItem
          variants={"second-header"}
          href={getRoute("education")}
          className="text-sm !font-Estedad-Medium"
        >
          یادگیری
        </NavItem>
        <NavItem
          variants={"second-header"}
          href={getRoute("donwload")}
          className="text-sm !font-Estedad-Medium"
        >
          دانلود
        </NavItem>
        <NavItem
          variants={"second-header"}
          href={getRoute("docs")}
          className="text-sm !font-Estedad-Medium"
        >
          مستندات
        </NavItem>
        <NavItem
          variants={"second-header"}
          isAnchor
          href={process.env.NEXT_PUBLIC_EDITOR_URL}
          className="text-sm !font-Estedad-Medium"
        >
          آزمایش آنلاین
        </NavItem>
        <NavItem variants={"second-header"} href={"#"} className="text-sm">
          مثال
        </NavItem>
      </ul>
      <div className="w-auto h-auto flex flex-row-reverse gap-5 justify-center items-center">
        <ToggleMode />
        <a href={process.env.NEXT_PUBLIC_EDITOR_URL}>
          <Badge className="!text-base !font-Estedad-SemiBold">
            آنلاین کار کن
          </Badge>
        </a>
      </div>
    </div>
  );
}

export default SecondMenuList;
