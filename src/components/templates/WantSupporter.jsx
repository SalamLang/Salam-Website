import React from "react";
import { Button } from "../common/Button";
import SupporterIcon from "../../../public/images/supporter.png";
import Image from "next/image";
import TitleDescription from "../atoms/TitleDescription";

export default function WantSupporter() {
  return (
    <div className="w-full min-h-[300px] md:min-h-[500px] h-full flex flex-col gap-4 md:gap-7 justify-center items-center">
      <TitleDescription
        title="من میخوام حامی بشم چیکار کنم ؟"
        description="برای حامی شدم روی دکمه ی زیر بزنید و ما چندتا حامی هم داریم میتونی
        ببینید به سادگی بفرما !"
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
