import Link from 'next/link'
import Logo from '../atoms/Logo'
import Hamberger from "@/components/atoms/Hamberger";

function MenuListMobile() {
  return (
    <ul className="absolute -right-[100%] top-0 flex items-start justify-start h-screen p-8 w-10/12 gap-y-4 bg-white shadow-lg flex-col">
        <Logo />
        <li className="w-full pb-3 border-b-2 border-border-grey border-opacity-10 text-lg mt-6">
            <Link href="/">مثال</Link>
        </li>
        <li className="w-full pb-3 border-b-2 border-border-grey border-opacity-10 text-lg">
            <Link href="/">یادگیری</Link>
        </li>
        <li className="w-full pb-3 border-b-2 border-border-grey border-opacity-10 text-lg">
            <Link href="/">دانلود</Link>
        </li>
        <li className="w-full pb-3 border-b-2 border-border-grey border-opacity-10 text-lg">
            <Link href="/">انجمن</Link>
        </li>
        <li className="w-full pb-3 border-b-2 border-border-grey border-opacity-10 text-lg">
            <Link href="/">آزمایش آنلاین</Link>
        </li>
    </ul>
  )
}

export default MenuListMobile
