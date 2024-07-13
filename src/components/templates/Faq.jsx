import React from 'react'
import Gif from '../atoms/Gif'
import TitleDescription from '../atoms/TitleDescription'
import AccordionContainer from '../organisms/AccordionContainer'

function Faq() {
  return (
    <div className="flex flex-col items-center justify-center gap-y-8">
        <Gif variant="GifEducation">
        </Gif>
        <TitleDescription
            title="توی این قسمت میتونی سوالات متداول رو ببینی"
            description="اولین زبان برنامه نویسی فارسی، اونم کاملا رایگان باورت میشه ؟"
        />
        <AccordionContainer />
    </div>
  )
}

export default Faq
