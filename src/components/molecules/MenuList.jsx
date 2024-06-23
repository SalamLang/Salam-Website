import Link from 'next/link'

function MenuList() {
  return (
    <ul className="hidden md:flex items-center justify-center gap-x-12">
        <li className="text-lg">
            <Link href="/">مثال</Link>
        </li>
        <li className="text-lg">
            <Link href="/">یادگیری</Link>
        </li>
        <li className="text-lg">
            <Link href="/">دانلود</Link>
        </li>
        <li className="text-lg">
            <Link href="/">انجمن</Link>
        </li>
        <li className="text-lg">
            <Link href="/">آزمایش آنلاین</Link>
        </li>
    </ul>
  )
}

export default MenuList