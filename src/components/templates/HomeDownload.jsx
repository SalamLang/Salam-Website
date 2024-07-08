import TitleDescription from '../atoms/TitleDescription'
import BoxDownload from '../molecules/BoxDownload'

function HomeDownload() {
  return (
    <div className="flex items-center justify-center flex-col gap-y-20 px-4">
    <TitleDescription 
        title="دانلود زبان سلام"
        description= "حالا از ویندوز, لینوکس, مک گرفته تا هرچی که به ذهنت میرسه فقط کافیه اقدام کنی !" 
    />
    <div className="w-full max-w-[847px] rounded-lg pt-14 bg-bg-box-advantage p-8 md:p-10 md:pt-20 flex items-center justify-evenly flex-wrap gap-8 relative">
        <div className="py-4 px-12 w-fit h-fit rounded-lg bg-bg-box-download absolute inset-0 mx-auto -top-6">
            <p className="w-fit">دانلود نرم افزار برای ؟</p>
        </div>
        <BoxDownload variant="Mac" className="bg-bg-box-download" />
        <BoxDownload variant="Android" className="bg-bg-box-download" />
        <BoxDownload variant="Pwa" className="bg-bg-box-download" />
        <BoxDownload variant="Linux" className="bg-bg-box-download" />
        <BoxDownload variant="Windows" className="bg-bg-box-download" />
    </div>
</div>
  )
}

export default HomeDownload