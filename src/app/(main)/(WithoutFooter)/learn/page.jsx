import TitleDescription from "@/components/atoms/TitleDescription";
import React from "react";
import DoobleEmoji from "../../../../../public/svgs/dooble-emoji.svg";

export default function page() {
  return (
    <div className="w-full h-full flex-grow flex flex-col justify-center items-center gap-2 sm:gap-4 md:gap-6 lg:gap-14 xl:gap-16 overflow-hidden">
      <TitleDescription
        title="فهرست متن های زبان سلام"
        description="قسمت اسناد اولین زبان برنامه نویسی به نام سلام خوش اومدید"
        headerClass="!font-Estedad-Bold !text-lg sm:!text-xl md:!text-3xl lg:!text-4xl xl:!text-5xl"
        descClass="!text-[10px] sm:!text-xs md:!text-sm lg:!text-base"
      />
      <div className="w-auto h-auto scale-50 min-h-[100px] md:scale-75 lg:scale-90 xl:scale-100">
        <DoobleEmoji />
      </div>
    </div>
  );
}
