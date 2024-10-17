import React from "react";
import { LoaderIcon } from "react-hot-toast";
import Logo from "../atoms/Logo";

export default function LoadingPage() {
  return (
    <div className="absolute w-full h-full bg-white dark:bg-gray-900 backdrop-blur-xl inset-0 z-[101] flex flex-col gap-3 justify-center items-center overflow-hidden">
      <div className="w-full h-auto p-2 flex flex-col justify-center items-center gap-2">
        <Logo />
        <h1 className="text-base md:text-lg font-Estedad-Bold text-bg-main">
          زبان برنامه نویسی سلام
        </h1>
      </div>
      <LoaderIcon className="!w-7 !h-7 max-md:!w-5 max-md:!h-5" />
    </div>
  );
}
