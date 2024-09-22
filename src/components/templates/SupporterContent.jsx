import React from "react";
import SupportBox from "../molecules/SupportBox";
import TitleDescription from "../atoms/TitleDescription";

export default function SupporterContent() {
  return (
    <div className="relative max-w-7xl w-full h-full min-h-[20rem] overflow-hidden">
      <div className="relative inset-0 w-full h-full flex max-md:flex-col px-4 justify-between items-center max-md:gap-8 gap-5">
        <div className="w-full h-full flex max-md:flex-col-reverse justify-start items-center max-md:gap-10 gap-5">
          <div className="w-auto h-full flex flex-col justify-between gap-8 items-center">
            <SupportBox intent="liberapay" />
            <SupportBox intent="issuehunt" />
            <SupportBox intent="buymeacoffee" />
          </div>
          <div className="w-full h-full flex justify-center items-center">
            <div className="max-w-[75%] w-full h-full flex flex-col justify-center items-center gap-3">
              <TitleDescription
                title="چرا ما؟"
                description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان"
                descClass={
                  "dark:!text-white/90 text-xs md:text-sm lg:text-base"
                }
              />
            </div>
          </div>
        </div>
        <div className="w-auto h-full flex justify-center items-center">
          <div className="w-2/4 h-full flex flex-col justify-between gap-8 items-center">
            <SupportBox intent="kofi" />
            <SupportBox intent="opencollective" titleclass="!text-base"  />
            <SupportBox intent="patreon" />
          </div>
        </div>
      </div>
    </div>
  );
}
