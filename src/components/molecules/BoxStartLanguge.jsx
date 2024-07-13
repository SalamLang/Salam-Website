import TitleDescription from '../atoms/TitleDescription'

import ArrowLeftBlack from "../../../public/ArrowLeftBlack.svg"
import Button from '../atoms/Button'

function BoxStartLanguge() {
  return (
    <div className="flex flex-col items-center justify-center gap-y-6 mt-10">
        <TitleDescription
            title="حالا باید بگم به هدفت رسیدی"
            description="الان تو میتونی کارکردن با این زبان رو شروع کنی امیدوارم در این راه موفق باشی"
        />
        <Button
            text="بزن بریم"
            variant="buttonWhite"
            type="link"
            href="/"
            icon={<span>
                <ArrowLeftBlack />
            </span>}
        />
    </div>
  )
}

export default BoxStartLanguge
