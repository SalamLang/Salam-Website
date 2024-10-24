import TitleDescription from "@/components/atoms/TitleDescription";
import React from "react";
import DoobleEmoji from "../../../../public/svgs/dooble-emoji.svg";
import { BoxLearn } from "@/components/molecules/BoxLearn";

export const metadata = {
  title: "اسناد زبان سلام - برنامه نویسی سلام",
  description:
    "به قسمت اسناد اولین زبان برنامه نویسی به نام سلام خوش آمدید. در اینجا می‌توانید فهرست متن‌های زبان سلام را مشاهده کنید",
  author: "تیم برنامه نویسی زبان سلام",
};

export default function page() {
  return (
    <div className="w-full h-full flex-grow flex p-10 flex-col justify-center items-center gap-2 sm:gap-4 md:gap-6 lg:gap-14 xl:gap-16 overflow-hidden">
      <TitleDescription
        title="فهرست متن های زبان سلام"
        description="قسمت اسناد اولین زبان برنامه نویسی به نام سلام خوش اومدید"
        headerClass="!font-Estedad-Bold !text-lg sm:!text-xl md:!text-3xl lg:!text-4xl xl:!text-5xl"
        descClass="!text-[10px] sm:!text-xs md:!text-sm lg:!text-base"
      />
      <div className="w-auto h-auto scale-50 min-h-[100px] md:scale-75 lg:scale-90 xl:scale-100">
        <DoobleEmoji />
      </div>
      <div className="w-full h-full max-w-[900px] flex max-md:flex-col justify-center items-center gap-4">
        <BoxLearn type_color="blue" />
        <BoxLearn type_color="green" />
      </div>
    </div>
  );
}
