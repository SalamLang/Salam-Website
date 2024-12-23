import React from "react";
import Image from "next/image";
import { Button } from "../common/Button";

export default function ExamplePostItem() {
  return (
    <div className="sm:max-w-[300px] w-full h-full min-h-[300px] flex flex-col justify-center items-center gap-3 overflow-hidden">
      <Image src="/images/bg-post.png" alt="bg post" width="300" className="max-sm:!w-full" height="300" />
      <div className="w-full flex flex-row-reverse justify-between items-center gap-2">
        <div className="w-auto h-auto flex flex-row-reverse justify-center items-center gap-1.5">
          <Image
            src="/images/icon-man-post.png"
            alt="icon man"
            width={30}
            height={30}
          />
          <h3 className="text-xs transition-colors dark:text-white/80 text-center font-Estedad-SemiBold">
            علی محمدیه
          </h3>
        </div>
        <Button
          rounded="full"
          size="small"
          className="!bg-blue-cutsom/[0.06] !text-xs !py-1.5 !px-3 flex justify-center items-center flex-nowrap text-nowrap !text-blue-cutsom font-semibold"
        >
          تیم
        </Button>

        <div className="w-auto flex flex-row-reverse justify-center items-center gap-1.5">
          <p className="text-xs text-center font-Estedad-Medium text-blue-cutsom flex justify-center items-center gap-0.5">
            <span className="font-Estedad-Medium">۲.۱</span>هزار
          </p>
          <Image src="/svgs/heart.svg" alt="heart" width={20} height={20} />
        </div>

        <div className="w-auto flex flex-row-reverse justify-center items-center gap-1.5">
          <p className="text-xs text-center font-Estedad-Medium text-blue-cutsom flex justify-center items-center gap-0.5">
            <span className="font-Estedad-Medium">۲۸</span>هزار
          </p>
          <Image src="/svgs/eyse-blue.svg" alt="heart" width={20} height={20} />
        </div>
      </div>
      <div className="w-full flex justify-between items-center gap-3">
        <div className="w-full max-w-[45%] flex flex-col justify-center items-start gap-2">
          <h2 className="font-Estedad-SemiBold dark:text-white/80 transition-colors">ساخت سایت گوگل</h2>
          <p className="text-[11px] text-black/40 dark:text-white/50 transition-colors">مراحل اجرایی و توسعه</p>
        </div>
        <div className="w-full max-w-[55%]  flex flex-wrap justify-end items-end gap-2">
          <Button
            rounded="full"
            size="small"
            className="!bg-orange-custom/[0.06] !text-xs !py-1.5 !px-3 flex justify-center items-center flex-nowrap text-nowrap !text-orange-custom font-semibold"
          >
            وبسایت
          </Button>
          <Button
            rounded="full"
            size="small"
            className="!bg-pink-custom/[0.06] !text-xs !py-1.5 !px-3 flex justify-center items-center flex-nowrap text-nowrap !text-pink-custom font-semibold"
          >
            استیکی
          </Button>
          <Button
            rounded="full"
            size="small"
            className="!bg-green-custom/[0.06] !text-xs !py-1.5 !px-3 flex justify-center items-center flex-nowrap text-nowrap !text-green-custom font-semibold"
          >
            طراحی محصول
          </Button>
        </div>
      </div>
    </div>
  );
}
