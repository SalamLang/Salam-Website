import { Button } from "@/components/common/Button";
import { Input } from "@/components/common/Input";
import Image from "next/image";
import React from "react";

export const metadata = {
  title: "زبان برنامه نویسی سلام - برنامه نویسی برای همه",
  description:
    "این صفحه به معرفی زبان برنامه‌نویسی سلام می‌پردازد که هدف آن ساده‌سازی برنامه‌نویسی برای همه افراد است.",
  author: "تیم برنامه نویسی زبان سلام",
};

export default function page() {
  return (
    <main className="flex min-h-screen flex-col max-md:gap-y-2.5 gap-y-5 items-center justify-start px-4">
      <div className="w-full h-full p-2 flex justify-center items-center">
        <Image
          width="500"
          height="500"
          src="/images/logo-vector-custom-salam.png"
          className="max-md:w-[350px]"
          alt="logo"
        />
      </div>
      <div className="w-full max-w-[700px] h-full flex flex-col justify-center items-center p-1 gap-7">
        <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-Estedad-SemiBold">
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
        <div className="max-w-[600px] w-full h-full p-2 flex justify-center items-center flex-wrap gap-3">
          <Button
            rounded="full"
            size="small"
            className="!bg-blue-cutsom/[0.06] flex justify-center items-center flex-nowrap text-nowrap !text-blue-cutsom font-semibold"
          >
            بزن بریم
          </Button>
          <Button
            rounded="full"
            size="small"
            className="!bg-blue-cutsom/[0.06] flex justify-center items-center flex-nowrap text-nowrap !text-blue-cutsom font-semibold"
          >
            بزن بریم
          </Button>
          <Button
            rounded="full"
            size="small"
            className="!bg-blue-cutsom/[0.06] flex justify-center items-center flex-nowrap text-nowrap !text-blue-cutsom font-semibold"
          >
            بزن بریم
          </Button>
          <Button
            rounded="full"
            size="small"
            className="!bg-blue-cutsom/[0.06] flex justify-center items-center flex-nowrap text-nowrap !text-blue-cutsom font-semibold"
          >
            بزن بریم
          </Button>
          <Button
            rounded="full"
            size="small"
            className="!bg-blue-cutsom/[0.06] flex justify-center items-center flex-nowrap text-nowrap !text-blue-cutsom font-semibold"
          >
            بزن بریم
          </Button>
          <Button
            rounded="full"
            size="small"
            className="!bg-blue-cutsom/[0.06] flex justify-center items-center flex-nowrap text-nowrap !text-blue-cutsom font-semibold"
          >
            بزن بریم
          </Button>
          <Button
            rounded="full"
            size="small"
            className="!bg-blue-cutsom/[0.06] flex justify-center items-center flex-nowrap text-nowrap !text-blue-cutsom font-semibold"
          >
            بزن بریم
          </Button>
        </div>
      </div>
    </main>
  );
}
