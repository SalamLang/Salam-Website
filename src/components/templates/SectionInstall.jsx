import Gif from '../atoms/Gif'
import ImageClick from '../atoms/ImageClick'
import TitleDescription from '../atoms/TitleDescription'

function SectionInstall() {
  return (
    <div className="flex flex-col items-center justify-center gap-y-6">
        <Gif variant="GifEducation2">
        </Gif>
        <TitleDescription 
            title="قدم دوم حالا باید سلامو رو نصب کنی"
            description="سلام اصلا نیاز به نصب خاصی نداره فقط نیاز به یک کلیک هست"
        />
        <ImageClick />
    </div>
  )
}

export default SectionInstall