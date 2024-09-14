import { Inter } from "next/font/google";
import "../globals.css";
import "../../styles/font.css";
import Header from "@/components/templates/Header";
import Footer from "@/components/templates/Footer";
import { Toaster } from "react-hot-toast";
import FixedMenu from "@/components/molecules/FixedMenu";

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

        <div className="relative w-full min-h-screen overflow-auto flex flex-col justify-between">
          <div className="w-full h-full flex flex-col">
            <Header />
            <FixedMenu />
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
