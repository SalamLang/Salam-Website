"use client";

import LogoBox from "../atoms/logoBox.jsx";
import SidebarMenu from "../templates/SidebarMenu.jsx";
import React from "react";
import { motion } from "framer-motion";

function DocsSidebar() {
  return (
    <motion.div className="text-white items-center w-full p-4 bg-gray-100/20 flex-grow dark:bg-gray-700/20 backdrop-blur-xl rounded-3xl shadow-2xl shadow-gray-400/50 dark:shadow-gray-700/20 max-w-[15rem] h-screen !sticky !top-28 py-10">
      <LogoBox />
      <SidebarMenu />
    </motion.div>
  );
}

export default DocsSidebar;
