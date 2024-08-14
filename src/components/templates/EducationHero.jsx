import Button from "@/components/atoms/Button"
import Gif from "@/components/atoms/Gif"
import CarectersDownload from "@/components/molecules/CarectersDownload"

import ArrowBottom from "../../../public/Arrow-Bottom.svg"
import TitleDescription from "@/components/atoms/TitleDescription"

function EducationHero() {
    return (<div className="container flex flex-col items-center justify-center gap-5 w-full">

                <div className='w-fit relative flex items-center justify-center'>
                    <Gif variant="GifEducation">
                    </Gif>
                    <CarectersDownload/>
                </div>
                <TitleDescription
                    title="سلام چجوری کار میکنه ؟"
                    description="اولین زبان برنامه نویسی فارسی، اونم کاملا رایگان باورت میشه ؟"
                />
                <Button
                    text="برو بریم"
                    variant="buttonBlue2"
                    type="link"
                    href="/"
                    icon={
                    <span>
                    <ArrowBottom/>
                    </span>
                    }
                />
        </div>)
}

export default EducationHero
