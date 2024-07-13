import React from 'react'
import TitleDescription from '../atoms/TitleDescription'
import BoxSentCode from '../molecules/BoxSentCode'

function BoxNumberPhone() {
  return (
    <div className="bg-bg-box-advantage w-full max-w-[1093px] rounded-3xl py-24 px-10 flex items-center justify-center flex-col gap-y-6">
        <TitleDescription
            title="شمارت  رو وارد از آپدیت های ما با خبرشی !"
            description="اینجوری میتونی در سریع ترین زمان ممکن از آپدیت ها ما با خبر شی."
        />
        <BoxSentCode />
    </div>
  )
}

export default BoxNumberPhone
