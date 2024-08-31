"use client";
import React from "react";
import { motion } from "framer-motion";
import ControlsVersion from "./ControlsVersion";

export default function MoreDetails() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full h-full p-10"
    >
      <div className="w-full h-full flex flex-col gap-10 justify-start items-center">
        <ControlsVersion />
        <div className="w-full h-auto flex flex-col gap-2">
          <h2 className="text-lg font-Estedad-Medium text-bg-main">
            برای تعویض نسخه سلام روی نسخه کلیک کنید
          </h2>
          <p className="text-[17px] font-Estedad-Medium opacity-50">
            سلام زبانی کاملا فارسی ویژه سنین ۱۰ تا ۱۵ سال ولی هیچ محدودیتی نیس
            در هرسنی شما میتوانید از این زبان استفاده کنید
          </p>
        </div>
      </div>
    </motion.div>
  );
}
