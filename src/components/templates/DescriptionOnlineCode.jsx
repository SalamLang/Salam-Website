import ArrowLeftBlack from "../../../public/ArrowLeftBlack.svg"
import TitleDescription from '../atoms/TitleDescription'
import Button from '../atoms/Button'

function DescriptionOnlineCode() {
  return (
    <div className="w-full bg-bg-section h-[597px] lg:h-[768px] flex items-center justify-center flex-col gap-y-4 px-4">
        <TitleDescription 
            title="میتونی به صورت آنلاین با سلام کار کنی 🚀"
            description="اولین زبان برنامه نویسی فارسی، اونم کاملا رایگان باورت میشه ؟"
        />
        <Button
            text="بزن بریم"
            variant="buttonWhite"
            type="link"
            href="/404"
            icon={<span>
                <ArrowLeftBlack />
            </span>}
        />
    </div>
  )
}

export default DescriptionOnlineCode