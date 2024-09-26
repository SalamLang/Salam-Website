import React from 'react'

function SidebarMenu() {
  return (
    <div className="">
      <ul className="flex flex-col gap-5 text-gray-500 text-sm pt-8">
        <li>
            زبان برنامه نویسی سلام
            <ul className="pr-5 pt-5 flex flex-col gap-5 text-[13px]">
              <li>مقدمه</li>
              <li>هدف</li>
              <li>چشم انداز</li>
              <li>بیانیه ماموریت</li>
            </ul>
        </li>
        <li>
          برنامه‌نویسی
        </li>
        <li>
          طراحی رابط کاربری
        </li>
      </ul>
    </div>
  )
}

export default SidebarMenu
