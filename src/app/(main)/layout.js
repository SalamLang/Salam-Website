import "../globals.css";
import "../../styles/font.css";
import { Toaster } from "react-hot-toast";
import FixedMenu from "@/components/molecules/FixedMenu";
import SwitchHeader from "@/components/templates/SwitchHeader";
import ShowFooter from "@/components/templates/ShowFooter";

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
        <div className="relative w-full min-h-screen overflow-auto flex flex-col flex-grow justify-start">
          <SwitchHeader />
          <FixedMenu />
          <div className="w-full h-full flex flex-col flex-grow">
            {children}
          </div>
          <ShowFooter />
        </div>
      </body>
    </html>
  );
}
