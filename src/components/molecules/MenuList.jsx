import Link from 'next/link'
import Logo from"../../../public/Logo.svg"
function MenuList() {
  return (
    <ul className="hidden md:flex items-center justify-center gap-x-12">
        <li className="text-xl text-bg-button-orange ">
            <Link href="/" className={"font-Estedad-ExtraBold"}>سـلام</Link>
        </li>
        <li className="text-lg">
            <Link href="/">یادگیری</Link>
        </li>
        <li className="text-lg">
            <Link href="/">دانلود</Link>
        </li>
        <div className={"bg-white -translate-y-1/3 md:w-[110px] lg:w-[130px] xl:w-[150px] 2xl:w-[170px] p-5 rounded-3xl shadow-my"}>
            <Logo />
        </div>
        <li className="text-lg">
            <Link href="/">انجمن</Link>
        </li>
        <li className="text-lg">
            <Link href="/">آزمایش آنلاین</Link>
        </li>
        <li className="text-lg">
            <Link href="/">مثال</Link>
        </li>
    </ul>
  )
}

export default MenuList
