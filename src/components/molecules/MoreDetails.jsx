"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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

const ControlsVersion = () => {
  const [isOpenVersion, setIsOpenVersion] = useState(false);
  return (
    <div className="w-full h-auto flex justify-between items-center">
      <div className="min-w-[100px] min-h-[100px] flex justify-center items-center bg-bg-main rounded-2xl">
        <Logo className="scale-110" />
      </div>
      <div className="w-full h-full flex flex-col gap-3 justify-center items-center">
        <h1 className="text-xl font-Estedad-Medium">زبان برنامه نویسی سلام</h1>
        <div className="flex justify-start items-center gap-5">
          <Badge
            intent="primary"
            size="medium"
            className={`!py-1.5 relative !px-3 cursor-pointer transition-colors duration-300 select-none ${
              isOpenVersion && "!bg-primary !text-white"
            }`}
            onClick={() => setIsOpenVersion(!isOpenVersion)}
          >
            <span className="font-Estedad-Medium">تعویض نسخه</span>
            <AnimatePresence>
              {isOpenVersion && (
                <motion.ul
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 10 }}
                  exit={{ opacity: 0, y: 40 }}
                  className="absolute w-full h-full inset-x-0 bg-light-primary !text-primary rounded-lg"
                  onClick={(e) => e.stopPropagation()}
                >
                  <li className="w-full h-full flex justify-center items-center">
                    نسخه ۰.۱
                  </li>
                </motion.ul>
              )}
            </AnimatePresence>
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
  );
};
