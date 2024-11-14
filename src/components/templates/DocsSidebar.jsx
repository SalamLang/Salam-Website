"use client";

import LogoBox from "../atoms/logoBox.jsx";
import SidebarMenu from "../templates/SidebarMenu.jsx";
import React, { useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { DocsContext } from "@/utils/contexts/DocsProvider";

function DocsSidebar() {
  const { isOpenMenu } = useContext(DocsContext);

  const sidebarVariants = {
    open: { width: 400, x:0 },
    closed: { width: 0 , x:"100vw" },
  };

  return (
    <>
      <AnimatePresence>
        {isOpenMenu && (
          <motion.div
            key="sidebar"
            initial="closed"
            animate="open"
            exit="closed"
            variants={sidebarVariants}
            className="md:ml-5 max-md:fixed max-md:inset-0 z-50"
            transition={{ type: "keyframes", stiffness: 260, damping: 20 , duration: 0.3}}
            style={{ minHeight: "100vh" }}
          >
            <div
              className="text-white !flex-nowrap w-full !text-nowrap !overflow-auto transition-all orange-scrollbar items-center p-4 bg-gray-100/20 dark:bg-gray-700/20 backdrop-blur-xl md:rounded-3xl shadow-2xl shadow-gray-400/50 dark:shadow-gray-700/20 h-screen !sticky max-md:!max-w-[15rem] max-md:!fixed inset-0 !z-50 py-10"
              id="sidebar"
            >
              <LogoBox />
              <SidebarMenu />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default DocsSidebar;
