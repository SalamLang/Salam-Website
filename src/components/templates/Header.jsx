import MenuListMobile from "../molecules/MenuListMobile";
import Hamberger from "../atoms/Hamberger";
import MenuList from "../molecules/MenuList";
import BgGreen from "../../../public/bg-green.svg";
import Logo from "@/components/atoms/Logo";
import ToggleMenuProvider from "@/context/ToggleMenu";

function Header() {
  return (
    <div className={"relative w-full"}>
      <div
        className={
          "hidden md:block w-full bg-bg-button-green max-h-[200px] !overflow-hidden"
        }
      >
        <BgGreen />
      </div>
      <header
        className={
          "md:shadow-my3 z-50 lg:shadow-my2 md:-translate-y-[55%] 2xl:-translate-y-[80%] bg-white relative w-full px-4 py-2 md:h-[80px] xl:h-[100px] flex items-center justify-center md:rounded-t-3xl"
        }
      >
        <MenuList />
        <div
          className={
            "relative md:hidden flex justify-between items-center w-full"
          }
        >
          <ToggleMenuProvider>
            <Logo />
            <MenuListMobile />
            <Hamberger />
          </ToggleMenuProvider>
        </div>
      </header>
    </div>
  );
}

export default Header;
