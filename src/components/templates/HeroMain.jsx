import TitleDescription from '../atoms/TitleDescription'
import Button from '../atoms/Button'

import ArrowLeft from "../../../public/ArrowLeft.svg"
import CarectersHeroMain from '../molecules/CarectersHeroMain'

function HeroMain() {
  return (
    <div className="flex items-center justify-start flex-col gap-6 relative w-full py-5 lg:py-8 h-[80vh]">
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
            </span>}x
        />
        <CarectersHeroMain />
    </div>
  )
}

export default HeroMain
