import TitleDescription from '../atoms/TitleDescription'
import BoxDownload from '../molecules/BoxDownload'
import SliderBestComment from "@/components/organisms/SliderBestComment";

function HomeDownload() {
  return (
    <div className="w-full relative">
        <div className={"max-w-[95%] sm:container mx-auto w-full relative py-20 flex items-center justify-center flex-col gap-y-16"}>
            <TitleDescription
                title="دانلود زبان سلام"
                description= "حالا از ویندوز, لینوکس, مک گرفته تا هرچی که به ذهنت میرسه فقط کافیه اقدام کنی !"
            />
            <div className="z-50 w-auto rounded-xl p-14 bg-bg-box2 pt-20 flex items-center justify-center flex-wrap gap-5 relative">
                <div className="py-4 px-12 w-fit h-fit rounded-lg bg-bg-button-green absolute inset-0 mx-auto -top-6">
                    <p className="w-fit">دانلود نرم افزار برای ؟</p>
                </div>
                <BoxDownload variant="Mac" className="bg-bg-button-green" />
                <BoxDownload variant="Android" className="bg-bg-button-green" />
                <BoxDownload variant="Pwa" className="bg-bg-button-green" />
                <BoxDownload variant="Linux" className="bg-bg-button-green" />
                <BoxDownload variant="Windows" className="bg-bg-button-green" />
            </div>
            <div className="flex w-auto items-center justify-center flex-col gap-y-10">
                <SliderBestComment />
            </div>
        </div>
        <div className={"bg-bg-button-green absolute bottom-0 h-[690px] md:h-[590px] w-full"}></div>
    </div>
  )
}

export default HomeDownload
