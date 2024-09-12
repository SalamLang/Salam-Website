import React from "react";
import { Button } from "../common/Button";
import SupporterIcon from "../../../public/images/supporter.png";
import Image from "next/image";

export default function WantSupporter() {
  return (
    <div className="w-full min-h-[300px] md:min-h-[500px] h-full flex flex-col gap-4 md:gap-7 justify-center items-center">
      <h1 className="w-full text-2xl md:text-4xl font-Estedad-SemiBold text-center">
        من میخوام حامی بشم چیکار کنم ؟
      </h1>
      <p className="text-xs sm:text-sm font-Estedad-Regular opacity-70 md:opacity-60 w-1/2 text-center">
        برای حامی شدم روی دکمه ی زیر بزنید و ما چندتا حامی هم داریم میتونی
        ببینید به سادگی بفرما !
      </p>
      <Button
        intent="crimson"
        link="/supporter"
        size="large"
        rounded="full"
        className="flex flex-row-reverse gap-2 justify-center items-center"
      >
        <Image src={SupporterIcon} alt="supporter" className="w-5" />
        حامی میشوم
      </Button>
    </div>
  );
}
