import TitleDescription from '../atoms/TitleDescription'
import Button from '../atoms/Button'

import ArrowLeft from "../../../public/ArrowLeft.svg"
import Vactor1 from "../../../public/Vector 11.svg"
import Vactor2 from "../../../public/Vector 16.svg"
import CarectersHeroMain from '../molecules/CarectersHeroMain'

function HeroMain() {
  return (
    <div className="max-w-[95%] sm:container flex items-center justify-start flex-col gap-6 relative w-full py-5 lg:py-8 h-[500px]">
        <div className={"w-full absolute -z-20"}>
            <Vactor1/>
        </div>
        <div className={"hidden md:block absolute w-1/3 -top-36 right-1/2"}>
            <Vactor2/>
        </div>
        <div className={"hidden md:block absolute w-2/5 top-20 left-1/2 -translate-x-1/2 rotate-[195deg]"}>
            <Vactor2/>
        </div>
        <TitleDescription
            title="به جمع دوس داشتنی سلام ما بپیوند"
            description="اولین زبان برنامه نویسی فارسی، اونم کاملا رایگان باورت میشه ؟"
        />
        <Button
            text="بزن بریم"
            variant="buttonOrange2"
            type="link"
            href="/404"
            icon={<span>
                <ArrowLeft />
            </span>}
        />
        <CarectersHeroMain />
    </div>
  )
}

export default HeroMain
