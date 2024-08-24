import { Inter } from "next/font/google";
import "../globals.css";
import "../../styles/font.css";
import Header from "@/components/templates/Header";
import Footer from "@/components/templates/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "salam",
  description: "salam language",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <div className="relative w-full min-h-screen overflow-auto flex flex-col justify-between">
          <div className="w-full h-full flex flex-col">
            <Header />
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
