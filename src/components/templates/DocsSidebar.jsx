import LogoBox from "../atoms/logoBox.jsx";
import SidebarMenu from "../templates/SidebarMenu.jsx";
import React from 'react'

function DocsSidebar() {
  return (
    <div className="flex flex-col h-screen overflow-y-auto justify-start w-1/4 py-10">
      <LogoBox/>
      <SidebarMenu/>
    </div>
  )
}

export default DocsSidebar
