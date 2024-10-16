"use client";

import React, { useContext, useEffect } from "react";
import { motion } from "framer-motion";
import { DocsContext } from "@/utils/contexts/DocsProvider";

export const DocsContainer = ({ children, className, ...attr }) => {
  const { isOpenMenu } = useContext(DocsContext);

  useEffect(() => {
    const docsContainer = document.getElementById("docs-container");
    if (docsContainer) {
      docsContainer.style.widows = isOpenMenu ? "15rem" : "0";
    }
  }, [isOpenMenu]);
  return (
    <motion.div
      id="docs-container"
      className={`text-white items-center transition-all p-4 bg-gray-100/20 min-w-[10rem] dark:bg-gray-700/20 backdrop-blur-xl rounded-3xl shadow-2xl shadow-gray-400/50 dark:shadow-gray-700/20 ${
        className || ""
      }`}
      {...attr}
    >
      {children}
    </motion.div>
  );
};
