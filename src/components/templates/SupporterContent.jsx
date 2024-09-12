import React from "react";
import SupportBox from "../molecules/SupportBox";

export default function SupporterContent() {
  return (
    <div className="relative max-w-7xl w-full h-full min-h-[20rem]">
      <div className="absolute inset-0 w-full h-full flex max-md:flex-col px-4 justify-between items-center gap-5">
        <div className="w-auto h-full flex flex-col justify-between gap-4 items-center">
          <SupportBox intent="liberapay" />
          <SupportBox intent="issuehunt" />
          <SupportBox intent="buymeacoffee" />
        </div>
        <div className="max-w-[50%] w-full h-full flex flex-col justify-center items-center gap-3">
          <h2 className="font-Estedad-SemiBold text-lg md:text-2xl lg:text-3xl">
            چرا ما؟
          </h2>
          <p className="text-xs sm:text-sm md:text-base">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
          </p>
        </div>
        <div className="w-auto h-full flex flex-col justify-between gap-4 items-center">
          <SupportBox intent="kofi" />
          <SupportBox intent="opencollective" />
          <SupportBox intent="patreon" />
        </div>
      </div>
    </div>
  );
}
