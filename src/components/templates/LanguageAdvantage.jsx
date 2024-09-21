import ImageBoxAdvantage from "../atoms/ImageBoxAdvantage";
import TitleDescription from "../atoms/TitleDescription";
import TitleDescriptionBox from "../atoms/TitleDescriptionBox";
import Vector from "../../../public/svgs/vector11.svg";
import React from "react";

function LanguageAdvantage() {
  return (
    <div className="relative w-full md:mt-16">
      <div className="absolute inset-0 -z-10 w-full md:-top-10 px-8">
        <Vector />
      </div>
      <div
        className={
          "max-w-[95%] sm:container mx-auto w-full h-auto flex items-center justify-center flex-col gap-y-6"
        }
      >
        <TitleDescription title="چرا زبان سلام" />
        <div className="w-full max-w-[900px] grid grid-cols-1 px-4 min-[300px]:grid-cols-2 gap-4 md:gap-10 lg:grid-cols-3">
          <div className="bg-bg-box2 dark:bg-gray-800 dark:shadow-2xl dark:shadow-gray-800/40 transition-colors px-3 pt-10 pb-7 rounded-3xl flex items-center justify-center flex-col gap-8">
            <ImageBoxAdvantage variant="Simplicity" />
            <TitleDescriptionBox
              headerClass="max-sm:!text-lbase!text-xl !font-Estedad-Medium dark:text-white"
              descClass="!leading-10  max-sm:text-xs!max-w-[170px] font-Estedad-Regular"
              title="طراحی فوق العاده"
              description="ما با کمک بهترین طراحان بهترین
                    طراحی ممکن رو به شما ارائه
                    میدهیم و لذت ببرید دوستان"
            />
          </div>
          <div className="bg-bg-box2 dark:bg-gray-800 dark:shadow-2xl dark:shadow-gray-800/40 transition-colors min-h-80 px-3 pt-10 pb-7 rounded-3xl flex items-center justify-center flex-col gap-8">
            <ImageBoxAdvantage variant="Security" />
            <TitleDescriptionBox
              headerClass="max-sm:!text-base !text-xl !font-Estedad-Medium dark:text-white"
              descClass="!leading-10 max-sm:text-xs !max-w-[170px] font-Estedad-Regular"
              title="امنیت بالا"
              description="میتونی با امنیت بالا که در نظر
                    گرفته شده بهترین و امن ترین
                    باشید و لذت ببرید دوستان عزیز."
            />
          </div>
          <div className="bg-bg-box2 dark:bg-gray-800 dark:shadow-2xl dark:shadow-gray-800/40 transition-colors min-h-80 px-3 pt-10 pb-7 rounded-3xl flex items-center justify-center flex-col gap-8">
            <ImageBoxAdvantage variant="BestDesigne" />
            <TitleDescriptionBox
              headerClass="max-sm:!text-base !text-xl !font-Estedad-Medium dark:text-white"
              descClass="!leading-10 max-sm:text-xs !max-w-[170px] font-Estedad-Regular"
              title="شخصی سازی بالا"
              description="شما میتوانید تا جایی که میخواهید
                    وبسایت خود را شخصی سازی
                    کنید و لذت ببرید دوستان عزیز."
            />
          </div>
          <div className="bg-bg-box2 dark:bg-gray-800 dark:shadow-2xl dark:shadow-gray-800/40 transition-colors min-h-80 px-3 pt-10 pb-7 rounded-3xl flex items-center justify-center flex-col gap-8">
            <ImageBoxAdvantage variant="AllPeople" />
            <TitleDescriptionBox
              headerClass="max-sm:!text-base !text-xl !font-Estedad-Medium dark:text-white"
              descClass="!leading-10 max-sm:text-xs !max-w-[170px] font-Estedad-Regular"
              title="مناسب برای همه"
              description="افردا از پایین ترین سن ها تا
                    بالاترین سن ها میتوانند با این
                    زبان کار کنند و لذت ببرند"
            />
          </div>
          <div className="bg-bg-box2 dark:bg-gray-800 dark:shadow-2xl dark:shadow-gray-800/40 transition-colors min-h-80 px-3 pt-10 pb-7 rounded-3xl flex items-center justify-center flex-col gap-8">
            <ImageBoxAdvantage variant="Rtl" />
            <TitleDescriptionBox
              headerClass="max-sm:!text-base !text-xl !font-Estedad-Medium dark:text-white"
              descClass="!leading-10 max-sm:text-xs !max-w-[170px] font-Estedad-Regular"
              title="راست چین"
              description="برعکس باقی زبان ها این زبان
                    متن های فارسی رو به صورت
                    راست چین مینویسد."
            />
          </div>
          <div className="bg-bg-box2 dark:bg-gray-800 dark:shadow-2xl dark:shadow-gray-800/40 transition-colors min-h-80 px-3 pt-10 pb-7 rounded-3xl flex items-center justify-center flex-col gap-8">
            <ImageBoxAdvantage variant="Lamp" />
            <TitleDescriptionBox
              headerClass="max-sm:!text-base !text-xl !font-Estedad-Medium dark:text-white"
              descClass="!leading-10 max-sm:text-sm !max-w-[170px] font-Estedad-Regular"
              title="سادگی"
              description="شما میتوانید به سادگی تمام این
                    زبان رو یاد گرفته و بعد در سریع
                    ترین زمان ممکن شروع به کار کنید"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LanguageAdvantage;
