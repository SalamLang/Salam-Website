import React from "react";

import ArrowLeft from "../../../../public/svgs/arrowleft.svg";
import CircleDotClose from "../../../../public/svgs/svg-close-box.svg";
import { Button } from "@/components/common/Button";
import { Badge } from "@/components/common/Badge";
import Anchor from "@/components/common/anchor";

export default function GetTutorialCard() {
  return (
    <div className="relative max-w-[800px] w-5/6 lg:w-full h-5/6 md:h-5/6 top-28 bg-color-card rounded-[19px] md:p-5">
      <div className="w-full h-full p-5 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-between items-center">
        <div className="w-full h-auto flex justify-start items-center">
          <CircleDotClose className="scale-[0.8]" />
        </div>
        <div className="w-full h-full flex flex-col justify-center items-center gap-3 sm:gap-5 md:gap-8 z-10">
          <h1 className="w-full text-lg sm:text-2xl md:text-4xl font-Estedad-SemiBold text-center">
            حالا وقتشه خودت برنامه نویس بشی !
          </h1>
          <p className="text-xs sm:text-sm md:text-base font-Estedad-Regular opacity-80">
            دوره آموزشی های ما به شما کمک میکند تا بتوانید با این زبان کار کنید
          </p>
          <Anchor
            intent="orange"
            size="large"
            rounded="full"
            className="flex gap-1 justify-center items-center"
            href={process.env.NEXT_PUBLIC_EDITOR_URL}
          >
            بزن بریم
            <ArrowLeft className="scale-[0.7] relative top-0.5" />
          </Anchor>
        </div>
        <div className="w-full h-auto px-3 flex justify-between items-center">
          <Badge intent="warning">زیبا بودن</Badge>
          <Badge intent="success">کوتاه بودن</Badge>
        </div>
        <div className="absolute inset-0 w-full h-full">
          <Badge
            intent="danger"
            className="absolute bottom-16 -right-6 sm:-right-9 sm:bottom-24 md:-right-14 md:bottom-[8.2rem] lg:-right-[4.2rem]"
          >
            فارسی بودن
          </Badge>
          <Badge
            intent="primary"
            className="absolute bottom-20 -left-4 sm:-left-10 sm:bottom-24 md:-left-12 md:bottom-[8.2rem] lg:-left-[2.8rem]"
          >
            ساده بودن
          </Badge>
        </div>
      </div>
    </div>
  );
}
