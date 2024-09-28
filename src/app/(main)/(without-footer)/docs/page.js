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
    <div className="w-full px-5 py-5 h-full flex gap-5 flex-grow overflow-hidden">
      <DocsSidebar />
      <DocsContent />
    </div>
  );
};

export default page;
