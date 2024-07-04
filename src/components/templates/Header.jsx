import Logo from '../atoms/Logo'
import MenuListMobile from '../molecules/MenuListMobile'
import Hamberger from '../atoms/Hamberger'
import MenuList from '../molecules/MenuList'
import Button from '../atoms/Button'

function Header() {
  return (
    <header className="w-full px-4 py-3 flex items-center justify-between">
        <Logo />
        <MenuListMobile />
        <MenuList />
        <Hamberger />
        <Button
            className= " hidden md:flex"
            text="آنلاین کار کن"
            variant="buttonGreen"
            type="link"
            href="/"
        />
    </header>
  )
}

export default Header
