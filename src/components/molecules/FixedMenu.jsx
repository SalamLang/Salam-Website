"use client";

import React, { useContext, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SecondHeader from "../templates/SecondHeader";
import { LayoutContext } from "@/utils/contexts/LayoutProvider";

export default function FixedMenu() {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const {isFixedHeaderHidden} = useContext(LayoutContext)
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

  useEffect(()=>{
    if(isFixedHeaderHidden) setIsShowMenu(false)
  },[isFixedHeaderHidden])

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
            <SecondHeader className={"bg-white/70 backdrop-blur-3xl"} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
