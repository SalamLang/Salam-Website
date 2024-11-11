"use client";

import LogoBox from "../atoms/logoBox.jsx";
import SidebarMenu from "../templates/SidebarMenu.jsx";
import React, { useContext, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { DocsContext } from "@/utils/contexts/DocsProvider";

function DocsSidebar() {
  const { isOpenMenu } = useContext(DocsContext);
  // const [isSpaceTop, setIsSpaceTop] = useState(false);
  // const [fixedMenuHeight, setFixedMenuHeight] = useState(0);

  // useEffect(() => {
  //   const fixedMenu = document.getElementById("second-header");

  //   const handleScroll = () => {
  //     if (fixedMenu) {
  //       setFixedMenuHeight(fixedMenu.clientHeight);
  //     }

  //     if (window.scrollY > 150) {
  //       setIsSpaceTop(true);
  //     } else {
  //       setIsSpaceTop(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <>
      <AnimatePresence>
          <motion.div
            initial={{ x: "100vw" }}
            animate={{
              x: isOpenMenu ? 0 : "100vw",
            }}
            exit={{ x: "100vw" }}
            transition={{ type: "keyframes", duration: 0.3 }}
            className="text-white min-w-[15rem] !overflow-auto transition-all orange-scrollbar items-center w-full p-4 bg-gray-100/20 flex-grow dark:bg-gray-700/20 backdrop-blur-xl rounded-3xl shadow-2xl shadow-gray-400/50 dark:shadow-gray-700/20 max-w-[15rem] h-screen !sticky max-md:!fixed inset-0 !z-50 py-10"
            id="sidebar"
          >
            <LogoBox />
            <SidebarMenu />
          </motion.div>
      </AnimatePresence>
    </>
  );
}

export default DocsSidebar;
