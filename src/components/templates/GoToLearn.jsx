import React from "react";
import TitleDescription from "../atoms/TitleDescription";

import ArrowLeft from "../../../public/svgs/arrowleft.svg";
import CarecterGoToLearn from "../molecules/CarecterGoToLearn";
import { Button } from "../common/Button";

function GoToLearn() {
  return (
    <div className="flex items-center justify-center flex-col gap-6 relative w-full mb-96">
      <TitleDescription
        title="به جمع دوس داشتنی سلام ما بپیوند"
        description="اولین زبان برنامه نویسی فارسی، اونم کاملا رایگان باورت میشه ؟"
      />
      <Button
        intent="primary"
        rounded="full"
        className="flex justify-center items-center gap-1"
        link="/playground"
      >
        بزن بریم
        <ArrowLeft className="relative top-0.5 scale-75" />
      </Button>
      <CarecterGoToLearn />
    </div>
  );
}

export default GoToLearn;
