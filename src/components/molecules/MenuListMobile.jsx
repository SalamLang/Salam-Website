"use client";

import Link from "next/link";
import Logo from "../atoms/Logo";
import { AnimatePresence, motion } from "framer-motion";
import { useContext, useEffect } from "react";
import { ToggleMenuContext } from "@/context/ToggleMenu";
import CloseIcon from "../../../public/close.svg";
import { useScrollBlock } from "@/hooks/useScrollBlock ";
import NavItem from "./NavItem";
import { getRoute } from "@/utils/constants/getRoutes";

function MenuListMobile() {
  const { isOpen, setIsOpen } = useContext(ToggleMenuContext);
  const [blockScroll, allowScroll] = useScrollBlock();

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      blockScroll();
    } else {
      allowScroll();
    }
  }, [isOpen, blockScroll, allowScroll]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed w-full h-full inset-0 bg-black/10 z-[1000] backdrop-blur-sm"
          onClick={handleClose}
        >
          <motion.ul
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            exit={{ x: "100vw" }}
            transition={{ type: "linear" }}
            className="absolute flex items-start justify-start h-screen p-8 w-7/12 gap-y-4 bg-white shadow-lg flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full h-auto flex justify-between items-center">
              <Logo />
              <button onClick={handleClose}>
                <CloseIcon className="w-6 h-6 rounded-lg transition-colors duration-150 opacity-50 scale-125 hover:bg-gray-600" />
              </button>
            </div>
            <NavItem href={getRoute("home")} variants="mobile" className="mt-5">
              سلام
            </NavItem>
            <NavItem href={getRoute("education")} variants="mobile">
              یادگیری
            </NavItem>
            <NavItem href={getRoute("donwload")} variants="mobile">
              دانلود
            </NavItem>
            <NavItem href={"#"} variants="mobile">
              انجمن
            </NavItem>
            <NavItem href={"#"} variants="mobile">
              آزمایش آنلاین
            </NavItem>
            <NavItem href={"#"} variants="mobile">
              مثال
            </NavItem>
          </motion.ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default MenuListMobile;
