import "../globals.css";
import "../../styles/font.css";
import { Toaster } from "react-hot-toast";
import FixedMenu from "@/components/molecules/FixedMenu";
import SwitchHeader from "@/components/templates/SwitchHeader";
import ShowFooter from "@/components/templates/ShowFooter";

export default function RootLayout({ children }) {
  try {
    const registerVisit = async () => {
      const response = await fetch("/https://auth.salamlang.ir/api/visit", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to register visit");
      }

      const data = await response.json();
      console.log("Visit registered:", data);
    };

    registerVisit();
  } catch (error) {
    console.error("Error registering visit:", error);
  }
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
