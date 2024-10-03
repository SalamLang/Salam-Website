"use client";

import LogoBox from "../atoms/logoBox.jsx";
import SidebarMenu from "../templates/SidebarMenu.jsx";
import React, { useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { DocsContext } from "@/utils/contexts/DocsProvider";

function DocsSidebar() {
  const { isOpenMenu } = useContext(DocsContext);
  return (
    <>
      <AnimatePresence>
        {isOpenMenu && (
          <motion.div
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            exit={{ x: "100vw" }}
            transition={{ type: "keyframes" }}
            className="text-white items-center w-full p-4 bg-gray-100/20 flex-grow dark:bg-gray-700/20 backdrop-blur-xl rounded-3xl shadow-2xl shadow-gray-400/50 dark:shadow-gray-700/20 max-w-[15rem] h-screen !sticky max-md:!fixed inset-0 max-md:!top-0 !z-40 !top-28 py-10"
          >
            <LogoBox />
            <SidebarMenu />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default DocsSidebar;
