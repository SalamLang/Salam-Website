"use client";

import React from "react";
import ModeLight from "../.././../public/modelight.svg";
import { AnimatePresence, motion } from "framer-motion";

export default function SelectThemeCard({ titleSelectTheme, spanText, isActive, ...attr }) {
  return (
    <div className="w-auto h-auto flex flex-col justify-center items-center gap-2">
      <div className="w-auto h-auto relative cursor-pointer" {...attr}>
        <ModeLight />
        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 w-full h-full rounded-lg bg-cream-light/10 border-2 border-orange-medium"
            ></motion.div>
          )}
        </AnimatePresence>
      </div>
      <h2 className="text-sm opacity-50 font-Estedad-Medium">
        {titleSelectTheme}
        {spanText && (
          <span className="text-xs font-Estedad-Medium mr-1">{spanText}</span>
        )}
      </h2>
    </div>
  );
}
