"use client";

import React from "react";
import { motion } from "framer-motion";

export default function DocsMainContainer({ children }) {
  return (
    <motion.div
      layout
      transition={{ duration: 0.5 }}
      className="w-full px-5 py-5 h-full flex gap-5 flex-grow"
    >
      {children}
    </motion.div>
  );
}
