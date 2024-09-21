import TitleDescription from "../atoms/TitleDescription";

import ArrowLeft from "../../../public/svgs/arrowleft.svg";
import { Button } from "../common/Button";
import React from "react";

function BoxStartLanguge() {
  return (
    <div className="w-full h-full min-h-[500px] flex flex-col items-center justify-center gap-y-6 relative -top-7">
      <TitleDescription
        title="حالا باید بگم به هدفت رسیدی"
        description="الان تو میتونی کارکردن با این زبان رو شروع کنی امیدوارم در این راه موفق باشی"
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
    </div>
  );
}

export default BoxStartLanguge;
