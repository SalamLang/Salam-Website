import TitleDescription from "../atoms/TitleDescription";

import ArrowLeft from "../../../public/svgs/arrowleft.svg";
import { Button } from "../common/Button";
import React from "react";
import Anchor from "../common/anchor";

function BoxStartLanguge() {
  return (
    <div className="w-full h-full min-h-[500px] flex flex-col items-center justify-center gap-y-6 relative -top-7">
      <TitleDescription
        title="حالا باید بگم به هدفت رسیدی"
        description="الان تو میتونی کارکردن با این زبان رو شروع کنی امیدوارم در این راه موفق باشی"
      />
      <Anchor
        intent="primary"
        rounded="full"
        className="flex justify-center items-center gap-1"
        link={process.env.NEXT_PUBLIC_EDITOR_URL}
      >
        بزن بریم
        <ArrowLeft className="relative top-0.5 scale-75" />
      </Anchor>
    </div>
  );
}

export default BoxStartLanguge;
