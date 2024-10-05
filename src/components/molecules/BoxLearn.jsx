"use client";

import React from "react";
import { Button } from "../common/Button";
import { useRouter } from "next/navigation";

export const BoxLearn = ({ type_color }) => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push("/docs");
  };
  if (type_color === "green")
    return (
      <div className="relative w-full min-h-[250px] bg-green-box/10 dark:text-white rounded-3xl p-7 py-5 flex flex-col justify-between items-center h-full">
        <h1 className="w-full text-2xl font-Estedad-Medium p-2">
          لیست دستور ها
        </h1>
        <div className="w-full h-full flex-grow p-2 px-4 flex flex-col justify-between items-center">
          <p className="w-full flex justify-between items-center">
            <span className="opacity-20 w-full text-right">صفحه</span>
            <span className="opacity-10 w-full text-right">محتوا</span>
            <span className="opacity-5 w-2/3 text-right">فضا</span>
          </p>
          <p className="w-full flex justify-between items-center">
            <span className="opacity-20 w-full text-right">خانه</span>
            <span className="opacity-10 w-full text-right">اطلاعات روزانه</span>
            <span className="opacity-5 w-2/3 text-right">فاصله راست</span>
          </p>
          <p className="w-full flex justify-between items-center">
            <span className="opacity-20 w-full text-right">منو های کلیدی</span>
            <span className="opacity-10 w-full text-right">محتوا</span>
            <span className="opacity-5 w-2/3 text-right">فضا</span>
          </p>
          <p className="w-full flex justify-between items-center">
            <span className="opacity-20 w-full text-right">پاراگراف</span>
            <span className="opacity-10 w-full text-right">بیزینس</span>
            <span className="opacity-5 w-2/3 text-right">فضا</span>
          </p>
        </div>
        <Button
          size="large"
          rounded="full"
          className="absolute bottom-6 left-6 !bg-[#D1FF6E66] !text-[#456500]"
          onClick={handleNavigate}
        >
          نمایش بیشتر
        </Button>
      </div>
    );
  if (type_color === "blue")
    return (
      <div className="relative w-full min-h-[250px] bg-blue-box/10 dark:text-white rounded-3xl p-7 py-5 flex flex-col justify-between items-center h-full">
        <h1 className="w-full text-2xl font-Estedad-Medium p-2">
          لیست دستور ها
        </h1>
        <div className="w-full h-full flex-grow p-2 px-4 flex flex-col justify-between items-center">
          <p className="w-full flex justify-between items-center">
            <span className="opacity-20 w-full text-right">صفحه</span>
            <span className="opacity-10 w-full text-right">محتوا</span>
            <span className="opacity-5 w-2/3 text-right">فضا</span>
          </p>
          <p className="w-full flex justify-between items-center">
            <span className="opacity-20 w-full text-right">خانه</span>
            <span className="opacity-10 w-full text-right">اطلاعات روزانه</span>
            <span className="opacity-5 w-2/3 text-right">فاصله راست</span>
          </p>
          <p className="w-full flex justify-between items-center">
            <span className="opacity-20 w-full text-right">منو های کلیدی</span>
            <span className="opacity-10 w-full text-right">محتوا</span>
            <span className="opacity-5 w-2/3 text-right">فضا</span>
          </p>
          <p className="w-full flex justify-between items-center">
            <span className="opacity-20 w-full text-right">پاراگراف</span>
            <span className="opacity-10 w-full text-right">بیزینس</span>
            <span className="opacity-5 w-2/3 text-right">فضا</span>
          </p>
        </div>
        <Button
          size="large"
          rounded="full"
          className="absolute bottom-6 left-6 backdrop-blur-3xl !bg-blue-box/20 !text-blue-box"
          onClick={handleNavigate}
        >
          نمایش بیشتر
        </Button>
      </div>
    );
  return <></>;
};
