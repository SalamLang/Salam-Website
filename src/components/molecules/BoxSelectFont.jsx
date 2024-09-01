import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const BoxSelectFont = ({ isActive, nameFont, onClickSelectedFont, font }) => {
  return (
    <div className="w-auto h-auto flex flex-col justify-center items-center gap-2">
      <div
        className={`${
          !isActive && "bg-light"
        } relative max-w-[9.2rem] w-[9.2rem] max-h-[6rem] cursor-pointer select-none h-[5.5rem] rounded-lg flex justify-center items-center`}
        onClick={onClickSelectedFont}
      >
        <span className={`text-lg z-10 ${font}`}>از سلام چه خبر !</span>
        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute w-full h-full rounded-lg bg-cream-light border-2 border-orange-medium"
            ></motion.div>
          )}
        </AnimatePresence>
      </div>
      <span className="text-sm opacity-50 font-Estedad-Medium">{nameFont}</span>
    </div>
  );
};

export default BoxSelectFont;
