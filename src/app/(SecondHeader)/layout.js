// layout.js
import { Inter } from "next/font/google";
import "../globals.css";
import "../../styles/font.css";
import SecondHeader from "@/components/templates/SecondHeader";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/templates/Footer";
import { Alert } from "@/components/common/Alert";
import FixedMenu from "@/components/molecules/FixedMenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "salam",
  description: "salam language",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <Toaster
          reverseOrder={false}
          toastOptions={{
            // Define default options
            className: "",
            duration: 2000,
            style: {
              background: "#363636",
              color: "#fff",
            },
          }}
        />

        <div className="relative w-full min-h-screen overflow-auto flex flex-col justify-start">
          <SecondHeader />
          <FixedMenu />
          <Alert
            intent="orange"
            size="medium"
            className="min-h-[60px] md:min-h-[65px] lg:!min-h-[70px] flex justify-center items-center"
          >
            به دنیای سلام خوش اومدی اینجا دیگه هیچ محدودیتی نداری
          </Alert>
          <div className="w-full h-full flex flex-col flex-grow">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
