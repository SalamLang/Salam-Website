"use client";

import { AnimatePresence, motion } from "framer-motion";
import React from "react";

const SunMoonToggle = ({ isToggle, ...attr }) => {
  return (
    <motion.div
      className="w-auto min-w-6 min-h-6 h-auto cursor-pointer relative"
      {...attr}
    >
      <AnimatePresence>
        {isToggle && (
          <motion.svg
            className="absolute inset-0 w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            initial={{ rotate: 90, scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            exit={{ rotate: 90, scale: 0 }}
            fill="currentColor"
          >
            <g>
              <path d="M256 105.5c-83.9 0-152.2 68.3-152.2 152.2 0 83.9 68.3 152.2 152.2 152.2 83.9 0 152.2-68.3 152.2-152.2 0-84-68.3-152.2-152.2-152.2zm0 263.5c-61.4 0-111.4-50-111.4-111.4 0-61.4 50-111.4 111.4-111.4 61.4 0 111.4 50 111.4 111.4 0 61.4-50 111.4-111.4 111.4zM256 74.8c11.3 0 20.4-9.1 20.4-20.4v-23c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v23c0 11.3 9.1 20.4 20.4 20.4zM256 437.2c-11.3 0-20.4 9.1-20.4 20.4v22.9c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4v-22.9c0-11.2-9.1-20.4-20.4-20.4zM480.6 235.6h-23c-11.3 0-20.4 9.1-20.4 20.4 0 11.3 9.1 20.4 20.4 20.4h23c11.3 0 20.4-9.1 20.4-20.4 0-11.3-9.1-20.4-20.4-20.4zM54.4 235.6h-23c-11.3 0-20.4 9.1-20.4 20.4 0 11.3 9.1 20.4 20.4 20.4h22.9c11.3 0 20.4-9.1 20.4-20.4.1-11.3-9.1-20.4-20.3-20.4zM400.4 82.8L384.1 99c-8 8-8 20.9 0 28.9s20.9 8 28.9 0l16.2-16.2c8-8 8-20.9 0-28.9s-20.9-8-28.8 0zM99 384.1l-16.2 16.2c-8 8-8 20.9 0 28.9s20.9 8 28.9 0l16.2-16.2c8-8 8-20.9 0-28.9s-20.9-7.9-28.9 0zM413 384.1c-8-8-20.9-8-28.9 0s-8 20.9 0 28.9l16.2 16.2c8 8 20.9 8 28.9 0s8-20.9 0-28.9L413 384.1zM99 127.9c8 8 20.9 8 28.9 0s8-20.9 0-28.9l-16.2-16.2c-8-8-20.9-8-28.9 0s-8 20.9 0 28.9L99 127.9z"></path>
            </g>
          </motion.svg>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {!isToggle && (
          <motion.svg
            className="absolute inset-0 w-full h-full"
            initial={{ rotate: -90, scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            exit={{ rotate: -90, scale: 0 }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
          >
            <path
              stroke="#000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3.32 11.684a9 9 0 0017.357 3.348A9 9 0 018.32 6.683c0-1.18.23-2.32.644-3.353a9.003 9.003 0 00-5.645 8.354z"
            ></path>
          </motion.svg>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default SunMoonToggle;
