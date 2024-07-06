import Image from "next/image"

import BgCursor from "../../../public/BgCursor.png"
import Cursor from "../../../public/Cursor.png"


function ImageClick() {
  return (
    <div className="w-fit h-fit flex items-center justify-center relative">
        <Image
            src={BgCursor}
            alt="bgclick"
        />
        <Image
            src={Cursor}
            alt="click"
            className="absolute right-[33%] top-[30%]"
        />
    </div>
  )
}

export default ImageClick