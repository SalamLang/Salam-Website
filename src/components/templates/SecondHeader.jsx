import MenuListMobile from "../molecules/MenuListMobile";
import Hamberger from "../atoms/Hamberger";
import Logo from "@/components/atoms/Logo";
import ToggleMenuProvider from "@/context/ToggleMenu";
import SecondMenuList from "../molecules/SecondMenuList";

function SecondHeader() {
  return (
    <div className={"relative w-full"}>
      <header
        className={
          "md:shadow-my3 lg:shadow-my2 bg-transparent relative w-full px-4 py-2 md:h-[80px] xl:h-[100px] flex items-center justify-center"
        }
      >
        <SecondMenuList />
        <div
          className={
            "relative md:hidden flex justify-between items-center w-full min-h-[70px]"
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

export default SecondHeader;
