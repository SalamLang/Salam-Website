"use client";

import React, { useContext } from "react";
import { motion } from "framer-motion";
import { DocsContext } from "@/utils/contexts/DocsProvider";

export const DocsContainer = ({ children, className, ...attr }) => {
  const { isOpenMenu } = useContext(DocsContext);
  return (
    <motion.div
      className={`text-white items-center transition-all p-4 bg-gray-100/20 min-h-[10rem] dark:bg-gray-700/20 backdrop-blur-xl rounded-3xl shadow-2xl shadow-gray-400/50 dark:shadow-gray-700/20 ${
        className || ""
      }`}
      {...attr}
    >
      {children}
    </motion.div>
  );
};
