import "./globals.css";
import "../styles/font.css";
import ReactQueryProvider from "@/utils/react-query/ReactQueryProvider";
import React from "react";
import { Toaster } from "react-hot-toast";
import { LayoutProvider } from "@/utils/contexts/LayoutProvider";
import ProgressBar from "@/components/templates/ProgressBar";

function RootLayout({ children }) {
  // let theme = "light"; // default
  // if (typeof window === "undefined") {
  //   // read cookie from server
  //   const { cookies } = require("next/headers");
  //   theme = cookies().get("theme")?.value || "light";
  // }
  return (
    <html lang="fa" dir="rtl">
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
          <LayoutProvider>{children}</LayoutProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}

export default RootLayout;
