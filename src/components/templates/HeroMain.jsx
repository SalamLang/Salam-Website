import TitleDescription from "../atoms/TitleDescription";

import ArrowLeft from "../../../public/svgs/arrowleft-orange.svg";
import Vactor1 from "../../../public/svgs/vector11.svg";
import Vactor2 from "../../../public/svgs/vector16.svg";
import CarectersHeroMain from "../molecules/CarectersHeroMain";
import { Button } from "../common/Button";

function HeroMain() {
  return (
    <div className="max-w-[95%] sm:container flex items-center justify-start flex-col gap-6 relative w-full py-5 lg:py-8 h-[500px] z-0">
      <div className={"w-full absolute -z-20"}>
        <Vactor1 />
      </div>
      <div
        className={
          "hidden md:block absolute w-2/5 top-20 left-1/2 -translate-x-1/2 rotate-[195deg] -z-20"
        }
      >
        <Vactor2 />
      </div>
      <TitleDescription
        title="به جمع دوس داشتنی سلام ما بپیوند"
        description="اولین زبان برنامه نویسی فارسی، اونم کاملا رایگان باورت میشه ؟"
      />
      <Button
        link="playground"
        size="large"
        rounded="full"
        className="!bg-bg-button-orange2 z-10 !text-bg-button-orange !font-Estedad-Medium flex flex-row-reverse justify-center items-center gap-2"
        style={{ zIndex: 10 }}
      >
        <ArrowLeft className="relative !top-0.5 scale-75" />
        بزن بریم
      </Button>
      {/* <Button
        text="بزن بریم"
        className="z-50"
        variant="buttonOrange2"
        type="link"
        href="/404"
        icon={
          <span>
            <ArrowLeft />
          </span>
        }
      /> */}
      <CarectersHeroMain />
    </div>
  );
}

export default HeroMain;
