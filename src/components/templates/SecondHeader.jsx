"use client";

import MenuListMobile from "../molecules/MenuListMobile";
import Hamberger from "../atoms/Hamberger";
import Logo from "@/components/atoms/Logo";
import ToggleMenuProvider from "@/utils/contexts/ToggleMenu";
import SecondMenuList from "../molecules/SecondMenuList";
import { LayoutContext } from "@/utils/contexts/LayoutProvider";
import { useContext } from "react";

function SecondHeader({ className }) {
  const { isDark } = useContext(LayoutContext);
  return (
    <div
      className={`relative w-full shadow-2xl transition-colors shadow-black/[0.05] ${
        isDark && "dark:shadow-gray-600/[0.05] dark:bg-dark dark:text-white"
      } ${className}`}
    >
      <header
        className={
          "md:shadow-my3 lg:shadow-my2 bg-transparent relative w-full px-4 py-2 md:h-[80px] xl:h-[100px] flex items-center justify-center"
        }
      >
        <SecondMenuList />
        <div
          className={
            "relative md:hidden flex justify-between items-center w-full min-h-[70px]"
          }
        >
          <ToggleMenuProvider>
            <Logo />
            <MenuListMobile />
            <Hamberger />
          </ToggleMenuProvider>
        </div>
      </header>
    </div>
  );
}

export default SecondHeader;
