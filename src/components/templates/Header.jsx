import MenuListMobile from '../molecules/MenuListMobile'
import Hamberger from '../atoms/Hamberger'
import MenuList from '../molecules/MenuList'

import Logo from "@/components/atoms/Logo";

function Header() {
  return (

    <header className={"w-full px-4 py-3 flex items-center justify-center"}>
        <Logo/>
        <MenuListMobile />
        <MenuList />
        <Hamberger />
    </header>
  )
}

export default Header
