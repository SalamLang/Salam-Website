import Button from "@/components/atoms/Button";
import Gif from "@/components/atoms/Gif";
import TitleDescription from "@/components/atoms/TitleDescription";

import ArrowLeft from "../../public/svgs/arrowleft.svg";
import CarectersNotFound from "@/components/molecules/CarectersNotFound";
import NotFoundLayout from "@/components/atoms/NotFoundLayout";
import React from "react";

export const metadata = {
  title: "یه مشکلی داریم - زبان سلام",
  description: "دوباره امتحان کنید یا به صفحه ی اصلی بروید !",
  author: "تیم برنامه نویسی زبان سلام",
};

function NotFound() {
  return (
    <NotFoundLayout>
      <div className="flex flex-col items-center overflow-hidden mb-10 justify-center gap-14">
        <div className="relative w-full sm:w-fit flex items-center justify-center">
          <Gif variant="Gif404" />
          <CarectersNotFound />
        </div>
        <TitleDescription
          title="یه مشکلی داریم"
          description="دوباره امتحان کنید یا به صفحه ی اصلی بروید !"
        />
        <Button
          text="بازگشت به خانه"
          variant="buttonOrange"
          icon={
            <span>
              <ArrowLeft />
            </span>
          }
          type="link"
          href="/"
        />
      </div>
    </NotFoundLayout>
  );
}

export default NotFound;
