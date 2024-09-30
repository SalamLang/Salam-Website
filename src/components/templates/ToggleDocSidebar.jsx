"use client";
import React from "react";
import Hamberger from "../../../public/svgs/hambeger.svg";
import { motion } from "framer-motion";

export default function ToggleDocSidebar() {
  return (
    <motion.div whileHover={{y:-5,}} className="fixed w-14 h-14 z-50 bottom-5 right-7 cursor-pointer bg-bg-main/25 border-2 border-bg-main rounded-full flex justify-center items-center">
        <Hamberger className="scale-50" />
    </motion.div>
  );
}
