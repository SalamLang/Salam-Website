// app/Education/page.js
import ArrowDown from "@/components/atoms/ArrowDown";
import BoxStartLanguge from "@/components/molecules/BoxStartLanguge";
import CodeExample from "@/components/templates/CodeExample";
import EducationDownload from "@/components/templates/EducationDownload";
import EducationHero from "@/components/templates/EducationHero";
import Faq from "@/components/templates/Faq";
import GoToLearn from "@/components/templates/GoToLearn";
import SectionInstall from "@/components/templates/SectionInstall";
import React from "react";

export const metadata = {
  title: "آموزش زبان سلام - برنامه نویسی زبان سلام",
  description:
    "این صفحه منابع آموزشی و مستندات مربوط به زبان برنامه‌نویسی سلام را ارائه می‌دهد تا به کاربران کمک کند مهارت‌های خود را در این زبان توسعه دهند.",
  author: "تیم برنامه نویسی زبان سلام",
};

const Education = () => {
  return (
    <div className="container flex items-center flex-col m-auto gap-y-20">
      <EducationHero />
      <ArrowDown variant="Screw" />
      <EducationDownload />
      <ArrowDown variant="Clear" />
      <Faq />
      <GoToLearn />
      <ArrowDown variant="Screw" />
      <SectionInstall />
      <CodeExample />
      <BoxStartLanguge />
    </div>
  );
};

export default Education;
