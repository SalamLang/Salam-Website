import Image from "next/image";
import React from "react";
import { Input } from "../common/Input";
import { Button } from "../common/Button";

export default function ExampleTextFormSection() {
  return (
    <>
      <h2 className="text-base sm:text-lg dark:text-white transition-colors md:text-xl lg:text-2xl xl:text-3xl font-Estedad-SemiBold">
        اکسپلور سلام، جایی که خلاقیت انتهایی نداره
      </h2>
      <div className="w-full max-w-[350px] min-h-[45px] bg-blue-cutsom/[0.02] rounded-full flex justify-between p-[9px] gap-2.5 items-center">
        <Image
          src="/svgs/search-modern-icon.svg"
          alt="icon"
          width="25"
          height="25"
        />
        <div className="w-[2px] bg-gray-custom h-[19px]" />
        <Input
          className="w-full !bg-transparent border-none outline-none ring-0"
          placeholder="هرچی دوست داری سرچ بزن"
        />
        <Button
          rounded="full"
          size="small"
          className="!bg-blue-cutsom/[0.06] flex justify-center items-center flex-nowrap text-nowrap !text-blue-cutsom font-semibold"
        >
          بزن بریم
        </Button>
      </div>
    </>
  );
}
