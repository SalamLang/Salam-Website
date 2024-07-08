import Image from 'next/image'

import BgBoxCode from "../../../public/bg-box-code.png"
import TitleDescription from '../atoms/TitleDescription'
import Button from '../atoms/Button'

function Learn() {
  return (
    <div className="w-full flex items-center justify-center flex-col gap-y-4 md:gap-y-10 px-4 h-96 md:h-[663px] relative">
        <Image
        className="w-[90%] max-w-[1105px] h-auto max-h-[663px] absolute inset-0 m-auto -z-10"
            src={BgBoxCode}
            alt="img"
        />
        <h2 className="text-2xl font-bold text-title text-center md:text-5xl">توی پنج دقیقه یادش بگیر 🚀</h2>
        <Button
            text="الان معلوم میشه"
            variant="buttonOrange"
        />
    </div>
  )
}

export default Learn