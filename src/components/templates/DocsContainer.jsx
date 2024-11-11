"use client";

import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { DocsContext } from "@/utils/contexts/DocsProvider";

export const DocsContainer = ({ children, className, ...attr }) => {
  const { isOpenMenu } = useContext(DocsContext);

  const [isResizeHandle, setIsResizeHandle] = useState(false);
  const [clientWidthSidebar, setClientWidthSidebar] = useState(0);
  const [clientWidthDocs, setClientWidthDocs] = useState(0);

  useEffect(() => {
    const widthSideBar = document.getElementById("sidebar").clientWidth;
    const widthDoc = document.getElementById("main-doc").clientWidth;
    setClientWidthSidebar(widthSideBar);
    setClientWidthDocs(widthDoc);
  }, [isOpenMenu]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsResizeHandle(true);
      else setIsResizeHandle(false);
    };

    handleResize();

    window.addEventListener("resize", handleResize); // Use window instead of document

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <motion.div
      initial={{ x: 0 }}
      animate={
        isResizeHandle
          ? {
              x: isOpenMenu ? 0 : clientWidthSidebar,
            }
          : { x: 0 }
      }
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`text-white !min-h-max items-center transition-all duration-100 p-4 bg-gray-100/20 dark:bg-gray-700/20 backdrop-blur-xl rounded-3xl shadow-2xl shadow-gray-400/50 dark:shadow-gray-700/20 ${
        className || ""
      }`}
      {...attr}
      id="main-doc"
    >
      {children}
    </motion.div>
  );
};
