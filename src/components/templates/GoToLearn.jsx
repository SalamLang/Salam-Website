import React from "react";
import TitleDescription from "../atoms/TitleDescription";

import ArrowLeft from "../../../public/svgs/arrowleft.svg";
import CarecterGoToLearn from "../molecules/CarecterGoToLearn";
import { Button } from "../common/Button";
import Anchor from "../common/anchor";

function GoToLearn() {
  return (
    <div className="flex items-center justify-center flex-col gap-6 relative w-full mb-96">
      <TitleDescription
        title="به جمع دوس داشتنی سلام ما بپیوند"
        description="اولین زبان برنامه نویسی فارسی، اونم کاملا رایگان باورت میشه ؟"
      />
      <Anchor
        intent="primary"
        rounded="full"
        className="flex justify-center items-center gap-1"
        href={process.env.NEXT_PUBLIC_EDITOR_URL}
      >
        بزن بریم
        <ArrowLeft className="relative top-0.5 scale-75" />
      </Anchor>
      <CarecterGoToLearn />
    </div>
  );
}

export default GoToLearn;
