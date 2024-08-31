import React from "react";
import { Button } from "../common/Button";
import ArrowLeft from "../../../public/arrowleft.svg";

export default function FirstPersianLanguage() {
  return (
    <div className="w-full h-full min-h-[300px] flex flex-col justify-center gap-6 items-center">
      <h1 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-Estedad-SemiBold">
        سلام اولین زبان برنامه نویسی فارسی
      </h1>
      <p className="text-xs font-Estedad-Medium opacity-70">
        اولین زبان برنامه نویسی فارسی، اونم کاملا رایگان باورت میشه ؟
      </p>
      <Button
        intent="orange"
        size="medium"
        rounded="full"
        className="flex gap-1 justify-center items-center"
      >
        بزن بریم
        <ArrowLeft className="scale-[0.7] relative top-0.5  " />
      </Button>
    </div>
  );
}
