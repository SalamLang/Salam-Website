import ImageBoxAdvantage from '../atoms/ImageBoxAdvantage'
import TitleDescription from '../atoms/TitleDescription'
import TitleDescriptionBox from '../atoms/TitleDescriptionBox'

function LanguageAdvantage() {
  return (
    <div className="w-full">
        <div className={"max-w-[95%] sm:container mx-auto w-full h-auto flex items-center justify-center flex-col gap-y-6"}>
            <TitleDescription
                title="چرا زبان سلام"
            />
            <div className="w-full max-w-[900px] grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-3">
                <div className="bg-bg-box2  p-3 rounded-3xl flex items-center justify-center flex-col gap-8">
                    <ImageBoxAdvantage
                        variant="BestDesigne"
                    />
                    <TitleDescriptionBox
                        title="طراحی فوق العاده"
                        description="ما با کمک بهترین طراحان بهترین
                    طراحی ممکن رو به شما ارائه
                    میدهیم و لذت ببرید دوستا"
                    />
                </div>
                <div className="bg-bg-box2 min-h-80 p-3 rounded-3xl flex items-center justify-center flex-col gap-8">
                    <ImageBoxAdvantage
                        variant="Security"
                    />
                    <TitleDescriptionBox
                        title="امنیت بالا"
                        description="میتونی با امنیت بالا که در نظر
                    گرفته شده بهترین و امن ترین
                    باشید و لذت ببرید دوستان عزیز."
                    />
                </div>
                <div className="bg-bg-box2 min-h-80 p-3 rounded-3xl flex items-center justify-center flex-col gap-8">
                    <ImageBoxAdvantage
                        variant="Simplicity"
                    />
                    <TitleDescriptionBox
                        title="شخصی سازی بالا"
                        description="شما میتوانید تا جایی که میخواهید
                    وبسایت خود را شخصی سازی
                    کنید و لذت ببرید دوستان عزیز."
                    />
                </div>
                <div className="bg-bg-box2 min-h-80 p-3 rounded-3xl flex items-center justify-center flex-col gap-8">
                    <ImageBoxAdvantage
                        variant="AllPeople"
                    />
                    <TitleDescriptionBox
                        title="مناسب برای همه"
                        description="افردا از پایین ترین سن ها تا
                    بالاترین سن ها میتوانند با این
                    زبان کار کنند و لذت ببرند"
                    />
                </div>
                <div className="bg-bg-box2 min-h-80 p-3 rounded-3xl flex items-center justify-center flex-col gap-8">
                    <ImageBoxAdvantage
                        variant="Rtl"
                    />
                    <TitleDescriptionBox
                        title="راست چین"
                        description="برعکس باقی زبان ها این زبان
                    متن های فارسی رو به صورت
                    راست چین مینویسد."
                    />
                </div>
                <div className="bg-bg-box2 min-h-80 p-3 rounded-3xl flex items-center justify-center flex-col gap-8">
                    <ImageBoxAdvantage
                        variant="Simplicity"
                    />
                    <TitleDescriptionBox
                        title="سادگی"
                        description="شما میتوانید به سادگی تمام این
                    زبان رو یاد گرفته و بعد در سریع
                    ترین زمان ممکن شروع به کار کنید"
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default LanguageAdvantage
