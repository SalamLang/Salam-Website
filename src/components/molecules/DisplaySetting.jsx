import React, { useContext, useEffect } from "react";
import { motion } from "framer-motion";
import SelectTheme from "./SelectTheme";
import SelectFont from "./SelectFont";
import { PlaygroundContextValue } from "@/utils/contexts/Playground";

export default function DisplaySetting() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full min-h-96 px-6 py-7 flex flex-col orange-scrollbar gap-8 justify-center items-center"
    >
      <SelectTheme />
      <SelectFont />
    </motion.div>
  );
}
