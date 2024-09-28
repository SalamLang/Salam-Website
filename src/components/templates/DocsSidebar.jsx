import LogoBox from "../atoms/logoBox.jsx";
import SidebarMenu from "../templates/SidebarMenu.jsx";
import React from 'react'

function DocsSidebar() {
  return (
    <div className="!sticky top-0 max-lg:hidden flex flex-col h-[40rem] overflow-y-auto justify-start w-[15rem] py-10 bg-gray-100/20 dark:bg-gray-700/20 backdrop-blur-xl rounded-3xl shadow-2xl shadow-gray-400/50 dark:shadow-gray-700/20">
      <LogoBox/>
      <SidebarMenu/>
    </div>
  )
}

export default DocsSidebar