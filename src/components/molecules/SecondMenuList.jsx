import Link from "next/link";
import Logo from "../atoms/Logo";
import { Badge } from "../common/Badge";
import NavItem from "./NavItem";
import { getRoute } from "@/utils/constants/getRoutes";
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
          href={"#"}
          className="text-sm !font-Estedad-Medium"
        >
          انجمن
        </NavItem>
        <NavItem
          variants={"second-header"}
          href={getRoute("playground")}
          className="text-sm !font-Estedad-Medium"
        >
          {" "}
          آزمایش آنلاین
        </NavItem>
        <NavItem variants={"second-header"} href={"#"} className="text-sm">
          مثال
        </NavItem>
      </ul>
      <Link href={getRoute("playground")}>
        <Badge className="!text-base !font-Estedad-SemiBold">
          آنلاین کار کن
        </Badge>
      </Link>
    </div>
  );
}

export default SecondMenuList;
