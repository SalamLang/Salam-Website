"use client";
import React from "react";
import { motion } from "framer-motion";
import Logo from "../../../public/Logowhite.svg";
import { Badge } from "../common/Badge";
import { Button } from "../common/Button";

export default function MoreDetails() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full h-full p-10"
    >
      <div className="w-full h-full flex flex-col gap-10 justify-start items-center">
        <div className="w-full h-auto flex flex-row-reverse justify-between items-center">
          <div className="min-w-[150px] min-h-[150px] flex justify-center items-center bg-bg-main rounded-2xl">
            <Logo className="scale-[1.75]" />
          </div>
          <div className="w-full h-full flex flex-col gap-3 justify-center items-center">
            <h1 className="text-xl font-Estedad-Medium">
              زبان برنامه نویسی سلام
            </h1>
            <div className="flex justify-start items-center gap-5">
              <Badge intent="primary" size="medium" className="!py-1.5 !px-3">
                تعویض نسخه
              </Badge>
              <p className="text-lg opacity-70">نسخه ۰.۱</p>
            </div>
          </div>
          <Button
            intent="primary"
            size="medium"
            rounded="full"
            className="text-nowrap"
          >
            شروع کردن
          </Button>
        </div>
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
