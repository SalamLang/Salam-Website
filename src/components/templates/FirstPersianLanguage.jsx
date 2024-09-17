import React from "react";
import { Button } from "../common/Button";
import ArrowLeft from "../../../public/svgs/arrowleft.svg";
import TitleDescription from "../atoms/TitleDescription";

export default function FirstPersianLanguage() {
  return (
    <div className="w-full h-full min-h-[300px] flex flex-col justify-center gap-6 items-center">
        <TitleDescription
            title="سلام اولین زبان برنامه نویسی فارسی"
            description="اولین زبان برنامه نویسی فارسی، اونم کاملا رایگان باورت میشه ؟"
        />
      <Button
        link="playground"
        intent="orange"
        size="medium"
        rounded="full"
        className="flex gap-1 justify-center items-center"
      >
        بزن بریم
        <ArrowLeft className="scale-[0.7] relative top-px" />
      </Button>
    </div>
  );
}
