"use client";

import React from "react";
import SupportBox from "../molecules/SupportBox";
import TitleDescription from "../atoms/TitleDescription";
import toast from "react-hot-toast";

export default function SupporterContent() {
  const handleGoToSupport = (e) => {
    e.preventDefault();
    const elementId = e.currentTarget.id;
    switch (elementId) {
      case "liberapay":
        window.open("https://liberapay.com/one/");
        break;
      case "issuehunt":
        window.open("https://issuehunt.io/r/One-Language/");
        break;

      case "buymeacoffee":
        window.open("https://www.buymeacoffee.com/onelang/");
        break;

      case "kofi":
        window.open("https://ko-fi.com/onelang/");
        break;

      case "opencollective":
        window.open("https://opencollective.com/onelang/");
        break;

      case "patreon":
        window.open("https://patreon.com/onelanguage/");
        break;

      default:
        toast.error("ایدی نامعتبر است");
        break;
    }
  };

  return (
    <div className="relative max-w-7xl w-full h-full min-h-[20rem] overflow-hidden">
      <div className="relative inset-0 w-full h-full flex max-md:flex-col px-4 justify-between items-center max-md:gap-8 gap-5">
        <div className="w-full h-full flex max-md:flex-col-reverse justify-start items-center max-md:gap-10 gap-5">
          <div className="w-auto h-full flex flex-col justify-between gap-8 items-center">
            <SupportBox
              intent="liberapay"
              className="cursor-pointer select-none"
              id="liberapay"
              onClick={handleGoToSupport}
            />
            <SupportBox
              intent="issuehunt"
              className="cursor-pointer select-none"
              id="issuehunt"
              onClick={handleGoToSupport}
            />
            <SupportBox
              intent="buymeacoffee"
              className="cursor-pointer select-none"
              id="buymeacoffee"
              onClick={handleGoToSupport}
            />
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
            <SupportBox
              intent="kofi"
              className="cursor-pointer select-none"
              id="kofi"
              onClick={handleGoToSupport}
            />
            <SupportBox
              intent="opencollective"
              titleclass="!text-base"
              className="cursor-pointer select-none"
              id="opencollective"
              onClick={handleGoToSupport}
            />
            <SupportBox
              intent="patreon"
              className="cursor-pointer select-none"
              id="patreon"
              onClick={handleGoToSupport}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
