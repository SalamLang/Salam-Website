import React from "react";
import Input from "../atoms/Input";

import Mobile from "../../../public/mobile.svg";
import Image from "next/image";
import Button from "../atoms/Button";

function BoxSentCode() {
  return (
    <div className="w-full flex justify-center items-center">
      <form
        action=""
        className={
          "bg-bg-box-download max-w-[500px] w-full rounded-[40px] flex items-center justify-between p-2"
        }
      >
        <div className="flex gap-2 items-center justify-center brightness-0 -translate-x-1.5">
          <Mobile />
          <div className="bg-black/20 w-[1px] h-[45px]"></div>
          <Input />
        </div>
        <Button text="ارسال کد" variant="buttonOrange" />
      </form>
    </div>
  );
}

export default BoxSentCode;
