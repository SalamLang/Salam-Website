import TitleDescription from '../atoms/TitleDescription'
import Button from '../atoms/Button'

import ArrowLeft from "../../../public/ArrowLeft.svg"
import CarectersHeroMain from '../molecules/CarectersHeroMain'

function HeroMain() {
  return (
    <div className="flex items-center justify-center flex-col gap-6 relative w-full">
        <TitleDescription
            title="به جمع دوس داشتنی سلام ما بپیوند"
            description="اولین زبان برنامه نویسی فارسی، اونم کاملا رایگان باورت میشه ؟"
        />
        <Button
            text="بزن بریم"
            variant="buttonOrange"
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
