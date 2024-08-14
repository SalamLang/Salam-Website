import MenuListMobile from '../molecules/MenuListMobile'
import Hamberger from '../atoms/Hamberger'
import MenuList from '../molecules/MenuList'
import BgGreen from"../../../public/bg-green.svg"
import Logo from "@/components/atoms/Logo";

function Header() {
  return (

      <div className={"relative w-full"}>
          <div className={"hidden md:block w-full bg-bg-button-green"}>
              <BgGreen/>
          </div>
          <header className={"md:shadow-my3 lg:shadow-my2 md:-translate-y-[45%] 2xl:-translate-y-[50%] bg-white relative w-full px-4 py-2 md:h-[80px] xl:h-[100px] flex items-center justify-center md:rounded-t-3xl"}>
              <MenuListMobile />
              <MenuList />
              <div className={"md:hidden flex justify-between items-center w-full"}>
                  <Logo/>
                  <Hamberger />
              </div>
          </header>
      </div>
  )
}

export default Header
