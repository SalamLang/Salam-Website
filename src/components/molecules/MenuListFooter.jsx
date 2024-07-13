import Link from 'next/link'
import React from 'react'

function MenuListFooter() {
  return (
    <ul className="hidden lg:flex items-center justify-center gap-8">
        <li>
            <Link href="/" className="text-title text-xl">یادم بده</Link>
        </li>
        <li>
            <Link href="/" className="text-title text-xl">خانه</Link>
        </li>
        <li>
            <Link href="/" className="text-title text-xl">دانلود</Link>
        </li>
        <li>
            <Link href="/" className="text-title text-xl">نظرات</Link>
        </li>
    </ul>
  )
}

export default MenuListFooter
