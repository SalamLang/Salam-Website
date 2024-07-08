import React from 'react'
import TitleDescription from '../atoms/TitleDescription'
import SliderBestComment from '../organisms/SliderBestComment'

function BestComment() {
  return (
    <div className="w-full bg-bg-section h-[597px] lg:h-[768px] flex items-center justify-center flex-col gap-y-10 px-4">
        <TitleDescription 
            title="پیام بهترین ها درمورد سلام"
            description="اولین زبان برنامه نویسی فارسی، اونم کاملا رایگان باورت میشه ؟"
        />
        <SliderBestComment />
    </div>
  )
}

export default BestComment