import React from "react";
import { Button } from "../common/Button";
import SupporterIcon from "../../../public/images/supporter.png";
import Image from "next/image";
import TitleDescription from "../atoms/TitleDescription";

export default function WantSupporter() {
  return (
    <div className="max-w-[476px] w-10/12 md:w-full min-h-[300px] py-36 md:min-h-[500px] h-full flex flex-col gap-4 md:gap-7 justify-center items-center">
      <TitleDescription
        title="من میخوام حامی بشم چیکار کنم ؟"
        description="برای حامی شدن روی دکمه ی زیر بزن و ما چندتا حامی هم داریم میتونی
        ببینی به سادگی بفرما !"
      />
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
