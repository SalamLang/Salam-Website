import React from "react";
import FixedMenu from "@/components/molecules/FixedMenu";
import Footer from "@/components/templates/Footer";
import SecondHeader from "@/components/templates/SecondHeader";
import { Alert } from "@/components/common/Alert";
import { Button } from "@/components/common/Button";

export default function layout({ children }) {
  return (
    <>
      <div className="relative w-full min-h-screen flex transition-colors dark:bg-gray-900 flex-col flex-grow justify-start">
        <Alert
          intent="orange"
          size="medium"
          className="min-h-[60px] md:min-h-[65px] !bg-black !text-white lg:!min-h-[70px] flex justify-center gap-3 items-center"
        >
          امروز میتونی سلام دو رو شروع کنی
          <Button size="medium" className="!px-3 !bg-white !text-black font-Estedad-Medium !py-[2px]" rounded="full">امتحانش کن</Button>
        </Alert>

        <SecondHeader />
        <FixedMenu />
        <div className="w-full h-full flex flex-col flex-grow">{children}</div>
        <Footer />
      </div>
    </>
  );
}
