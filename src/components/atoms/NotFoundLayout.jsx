import React from "react";
import SecondHeader from "../templates/SecondHeader";
import { Alert } from "../common/Alert";
import Footer from "../templates/Footer";

export default function NotFoundLayout({ children }) {
  return (
    <div className="relative w-full min-h-screen overflow-auto flex flex-col justify-start dark:bg-gray-900">
      <SecondHeader />
      <Alert
        intent="orange"
        size="medium"
        classNamf="min-h-[60px] md:min-h-[65px] lg:!min-h-[70px] flex justify-center items-center"
      >
        به دنیای سلام خوش اومدی اینجا دیگه هیچ محدودیتی نداری
      </Alert>
      <div className="w-full h-full flex flex-col flex-grow">{children}</div>
      <Footer />
    </div>
  );
}
