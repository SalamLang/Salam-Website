import "../styles/font.css";
import "./globals.css";
import ReactQueryProvider from "@/utils/react-query/ReactQueryProvider";
import React from "react";
import { Toaster } from "react-hot-toast";
import { LayoutProvider } from "@/utils/contexts/LayoutProvider";
import ProgressBar from "@/components/templates/ProgressBar";
import { getCookie } from "./actions";

export const metadata = {
  title: "زبان برنامه‌نویسی سلام",
  description:
    "این صفحه به معرفی زبان برنامه‌نویسی سلام می‌پردازد که هدف آن ساده‌سازی برنامه‌نویسی برای همه افراد است.",
  openGraph: {
    title: "زبان برنامه‌نویسی سلام - برنامه نویسی برای همه",
    description:
      "این صفحه به معرفی زبان برنامه‌نویسی سلام می‌پردازد که هدف آن ساده‌سازی برنامه‌نویسی برای همه افراد است.",
    images: [
      {
        url: "https://salamlang.ir/screenshot-desktop.png", // image link
        width: 1200,
        height: 630,
      },
    ],
    url: "https://salamlang.ir",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "زبان برنامه‌نویسی سلام - برنامه نویسی برای همه",
    description:
      "این صفحه به معرفی زبان برنامه‌نویسی سلام می‌پردازد که هدف آن ساده‌سازی برنامه‌نویسی برای همه افراد است.",
    images: ["https://salamlang.ir/screenshot-desktop.png"], // image link
  },
};

async function RootLayout({ children }) {
  const theme = (await getCookie("theme")) || "light";
  return (
    <html lang="fa" dir="rtl" className={theme}>
      <body className="orange-scrollbar">
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
        <ProgressBar />
        <ReactQueryProvider>
          <LayoutProvider cookieTheme={theme}>{children}</LayoutProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}

export default RootLayout;
