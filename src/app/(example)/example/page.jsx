import Image from "next/image";
import React from "react";

export const metadata = {
  title: "زبان برنامه نویسی سلام - برنامه نویسی برای همه",
  description:
    "این صفحه به معرفی زبان برنامه‌نویسی سلام می‌پردازد که هدف آن ساده‌سازی برنامه‌نویسی برای همه افراد است.",
  author: "تیم برنامه نویسی زبان سلام",
};

export default function page() {
  return (
    <main className="flex min-h-screen flex-col max-md:gap-y-10 gap-y-20 items-center justify-start">
        <div className="w-full h-full p-2 flex justify-center items-center">
          <Image width="600" height="600" src="/images/logo-vector-custom-salam.png" alt="logo" />
        </div>
    </main>
  );
}
