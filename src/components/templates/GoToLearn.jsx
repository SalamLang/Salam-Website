import React from 'react'
import TitleDescription from '../atoms/TitleDescription'
import Button from '../atoms/Button'

import ArrowLeft from "../../../public/ArrowLeft.svg"
import CarecterGoToLearn from '../molecules/CarecterGoToLearn'

function GoToLearn() {
  return (
    <div className="flex items-center justify-center flex-col gap-6 relative w-full mb-96">
        <TitleDescription 
            title="به جمع دوس داشتنی سلام ما بپیوند"
            description="اولین زبان برنامه نویسی فارسی، اونم کاملا رایگان باورت میشه ؟"
        />
        <Button
            text="بزن بریم"
            variant="buttonBlue"
            type="link"
            href="/404"
            icon={<span>
                <ArrowLeft />
            </span>}
        />
        <CarecterGoToLearn />
    </div>
  )
}

export default GoToLearn