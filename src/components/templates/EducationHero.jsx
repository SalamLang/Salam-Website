"use client";

import Gif from "@/components/atoms/Gif";
import CarectersDownload from "@/components/molecules/CarectersDownload";

import ArrowBottom from "../../../public/svgs/arrowbottom.svg";
import TitleDescription from "@/components/atoms/TitleDescription";
import React from "react";
import { Button } from "../common/Button";

function EducationHero() {
  const handleScrollToSection = () => {
    const section = document.getElementById("download-section");
    if (section) {
      const offsetTop =
        section.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };
  return (
    <div className="container flex flex-col items-center justify-center gap-5 w-full">
      <div className="w-auto relative flex items-center justify-center">
        <Gif variant="GifEducation" />
        <CarectersDownload />
      </div>
      <TitleDescription
        title="سلام چجوری کار میکنه ؟"
        description="اولین زبان برنامه نویسی فارسی، اونم کاملا رایگان باورت میشه ؟"
      />
      <Button
        intent="primary"
        rounded="full"
        className="flex justify-center items-center gap-1 !bg-white !text-text-button-orange2"
        onClick={handleScrollToSection}
      >
        برو بریم
        <ArrowBottom className="relative top-0.5 scale-90" />
      </Button>
    </div>
  );
}

export default EducationHero;
