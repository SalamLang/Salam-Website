"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SecondHeader from "../templates/SecondHeader";

export default function FixedMenu() {
  const [isShowMenu, setIsShowMenu] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsShowMenu(true);
      } else {
        setIsShowMenu(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {isShowMenu && (
          <motion.div
            initial={{ y: "-10vw" }}
            animate={{ y: 0 }}
            exit={{ y: "-10vw" }}
            className="z-[100] fixed w-full h-10 inset-0"
            transition={{ type: "keyframes", duration: 0.2, delay: 0 }}
          >
            <SecondHeader className={"bg-white/50 backdrop-blur-xl"} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
