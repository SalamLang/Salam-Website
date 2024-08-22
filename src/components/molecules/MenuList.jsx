import Link from "next/link";
import Logo from "../../../public/Logo.svg";
import NavItem from "./NavItem";
import { getRoute } from "@/utils/constants/getRoutes";
function MenuList() {
  return (
    <ul className="hidden md:flex items-center justify-center gap-x-12 z-50">
      <NavItem href={getRoute("home")}>سلام</NavItem>
      <NavItem href={getRoute("education")}>یادگیری</NavItem>
      <NavItem href={getRoute("donwload")}>دانلود</NavItem>

      <div
        className={
          "bg-white -translate-y-1/3 md:w-[100px] lg:w-[120px] xl:w-[140px] 2xl:w-[160px] p-5 rounded-3xl shadow-my"
        }
      >
        <Logo />
      </div>
      <NavItem href={"#"}>انجمن</NavItem>
      <NavItem href={getRoute("playground")} className={"relative !z-50"}>
        آزمایش آنلاین
      </NavItem>
      <NavItem href={"#"}>مثال</NavItem>
    </ul>
  );
}

export default MenuList;
