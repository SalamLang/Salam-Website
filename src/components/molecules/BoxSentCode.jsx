import React from "react";
import Input from "../atoms/Input";

import Mobile from "../../../public/mobile.svg";
import { Button } from "../common/Button";

function BoxSentCode() {
  return (
    <div className="w-full flex justify-center items-center">
      <form
        action=""
        className={
          "bg-light-orange max-w-[400px] md:max-w-[500px] w-full h-full rounded-[40px] flex items-center justify-between px-2 py-1.5 md:p-2.5"
        }
      >
        <div className="flex gap-4 items-center justify-center brightness-0 -translate-x-1.5">
          <Mobile className="scale-75" />
          <div className="bg-black/20 !rounded-full w-[2px] h-[30px]"></div>
          <Input />
        </div>
        <Button
          intent="orange"
          size="medium"
          rounded="full"
          className="text-sm px-4 md:!px-7"
        >
          ارسال کد
        </Button>
      </form>
    </div>
  );
}

export default BoxSentCode;
