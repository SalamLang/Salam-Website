import Marquee from "@/components/organisms/Marquee";
import React from "react";
import CodeExample from "@/components/templates/CodeExample";
import DescriptionOnlineCode from "@/components/templates/DescriptionOnlineCode";
import HeroMain from "@/components/templates/HeroMain";
import HomeDownload from "@/components/templates/HomeDownload";
import LanguageAdvantage from "@/components/templates/LanguageAdvantage";
import NumberBox from "@/components/templates/NumberBox";
import SliderTemplate from "@/components/templates/SliderTemplate";
import Users from "@/components/templates/Users";
import GetTutorial from "@/components/templates/GetTutorial";
import WantSupporter from "@/components/templates/WantSupporter";
import FirstPersianLanguage from "@/components/templates/FirstPersianLanguage";

export const metadata = {
  title: "زبان برنامه نویسی سلام - برنامه نویسی برای همه",
  description:
    "این صفحه به معرفی زبان برنامه‌نویسی سلام می‌پردازد که هدف آن ساده‌سازی برنامه‌نویسی برای همه افراد است.",
  author: "تیم برنامه نویسی زبان سلام",
};

export default function page() {
  return (
    <main className="flex min-h-screen flex-col max-md:gap-y-10 gap-y-20 items-center justify-start">
      <HeroMain />
      <CodeExample />
      <FirstPersianLanguage />
      <DescriptionOnlineCode />
      <LanguageAdvantage />
      <HomeDownload isBlackIcon={true} />
      {/*<Learn />*/}
      <SliderTemplate />
      {/*<AccordionContainer />*/}
      <Marquee />
      <Users />
      <NumberBox />
      <GetTutorial />
      <WantSupporter />
    </main>
  );
}
