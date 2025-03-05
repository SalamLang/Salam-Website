"use client";

import Logo from "../atoms/Logo";
import { AnimatePresence, motion } from "framer-motion";
import { useContext, useEffect } from "react";
import { ToggleMenuContext } from "@/utils/contexts/ToggleMenu";
import CloseIcon from "../../../public/svgs/close.svg";
import CloseIconDark from "../../../public/svgs/close-dark.svg";
import { useScrollBlock } from "@/hooks/useScrollBlock ";
import NavItem from "./NavItem";
import { getRoute } from "@/utils/constants/getRoutes";
import ToggleMode from "./ToggleMode";
import React from "react";

function MenuListMobile() {
  const { isOpen, setIsOpen } = useContext(ToggleMenuContext);
  const [blockScroll, allowScroll] = useScrollBlock();

  const handleClose = () => {
    allowScroll();
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      blockScroll();
    } else {
      allowScroll();
    }
  }, [isOpen, blockScroll, allowScroll]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsOpen(false);
        allowScroll();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setIsOpen, allowScroll]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed w-full min-h-screen h-full inset-0 bg-black/40 z-50 backdrop-blur-sm"
          onClick={handleClose}
        >
          <motion.ul
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            exit={{ x: "100vw" }}
            transition={{ type: "linear" }}
            className={`absolute flex items-start justify-start h-screen p-8 w-7/12 gap-y-4 bg-white transition-colors dark:bg-gray-900
             shadow-lg flex-col`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full h-auto flex justify-between items-center">
              <Logo />
              <div className="w-auto h-auto flex justify-center items-center gap-4">
                <ToggleMode />
                <button onClick={handleClose}>
                  <>
                    <CloseIcon
                      className={`w-6 h-6 rounded-lg dark:hidden block transition-colors duration-150 opacity-50 scale-125 hover:bg-gray-600`}
                    />
                    <CloseIconDark className="w-6 h-6 rounded-lg hidden dark:block transition-colors duration-150 opacity-70 scale-125 hover:bg-gray-600" />
                  </>
                </button>
              </div>
            </div>
            <NavItem
              href={getRoute("home")}
              variants="mobile"
              className="mt-5"
              onClick={handleClose}
            >
              سلام
            </NavItem>
            <NavItem
              href={getRoute("education")}
              variants="mobile"
              onClick={handleClose}
            >
              یادگیری
            </NavItem>
            <NavItem
              href={getRoute("donwload")}
              variants="mobile"
              onClick={handleClose}
            >
              دانلود
            </NavItem>
            <NavItem href={"#"} variants="mobile">
              انجمن
            </NavItem>
            <NavItem
              isAnchor
              href={process.env.NEXT_PUBLIC_EDITOR_URL}
              variants="mobile"
              onClick={handleClose}
            >
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
