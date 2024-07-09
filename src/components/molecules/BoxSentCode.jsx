import React from 'react'
import Input from '../atoms/Input'

// import Mobile from "../../../public/mobile.svg"
import Image from 'next/image'
import Button from '../atoms/Button'

function BoxSentCode() {
  return (
    <div className="bg-bg-box-download h-[74px] w-full max-w-2xl rounded-[40px] flex items-center justify-between px-4">
        <Image 
            src="../../../public/mobile.svg"
            alt="mobile"
            width={120}
            height={120}
        />
        <Input />
        <Button
            text="ارسال کد"
            variant="buttonOrange"
        />
    </div>
  )
}

export default BoxSentCode