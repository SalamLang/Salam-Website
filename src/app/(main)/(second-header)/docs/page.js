// app/Education/page.js
import DocsSidebar from "@/components/templates/DocsSidebar";
import DocsContent from "@/components/templates/DocsContent";
import React from "react";

export const metadata = {
  title: "آموزش زبان سلام - برنامه نویسی زبان سلام",
  description:
    "این صفحه منابع آموزشی و مستندات مربوط به زبان برنامه‌نویسی سلام را ارائه می‌دهد تا به کاربران کمک کند مهارت‌های خود را در این زبان توسعه دهند.",
  author: "تیم برنامه نویسی زبان سلام",
};

const page = () => {
  return (
    <div className="max-w-[97%] flex mx-auto">
        <DocsSidebar />
        <DocsContent />
    </div>
  );
};

export default page;
