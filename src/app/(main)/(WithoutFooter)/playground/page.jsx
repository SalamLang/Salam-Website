// page.jsx
import PlaygroundOnline from "@/components/templates/PlaygroundOnline";
import { PlaygroundContext } from "@/utils/contexts/Playground";
import React from "react";

export const metadata = {
  title: "آزمایش آنلاین زبان سلام - برنامه نویسی سلام",
  description:
    "این صفحه یک محیط آزمایش آنلاین برای زبان برنامه‌نویسی سلام فراهم می‌کند که به کاربران اجازه می‌دهد کدهای سلام را مستقیماً در مرورگر خود بنویسند و اجرا کنند.",
  author: "تیم برنامه نویسی زبان سلام",
};

export default function page() {
  return (
    <div className="w-full h-full flex flex-col flex-grow transition-colors dark:bg-gray-900">
      <PlaygroundContext>
        <PlaygroundOnline />
      </PlaygroundContext>
    </div>
  );
}
