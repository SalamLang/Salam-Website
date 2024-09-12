"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { AnimatePresence, motion } from "framer-motion";

const Avatar = ({ src, alt, width, height, className, tooltip_text }) => {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    const currentRef = ref.current;
    if (currentRef) {
      currentRef.addEventListener("mouseenter", handleMouseEnter);
      currentRef.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener("mouseenter", handleMouseEnter);
        currentRef.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <div className="relative w-16 h-16 md:w-24 md:h-24 rounded-full" ref={ref}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`object-cover ${className || ""}`}
      />
      {/* <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            className="tooltip absolute top-[90%] inset-0 text-[11px] sm:text-xs md:text-sm lg:text-base z-10 select-none min-w-max w-auto px-2 py-3 h-[30px] bg-black/50 border border-black backdrop-blur-lg text-white rounded-lg flex items-center justify-center"
          >
            {tooltip_text}
          </motion.div>
        )}
      </AnimatePresence> */}
      <div className="absolute w-full h-full inset-0 box-content flex justify-center items-center">
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              className="tooltip mt-[120%] text-[11px] sm:text-xs md:text-sm lg:text-base z-10 select-none max-w-[500px] w-auto text-nowrap px-2 py-3 h-[30px] bg-black/50 border border-black backdrop-blur-lg text-white rounded-lg flex items-center justify-center"
            >
              {tooltip_text}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Avatar;
