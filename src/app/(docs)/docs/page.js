import DocsSidebar from "@/components/templates/DocsSidebar";
import DocsContent from "@/components/templates/DocsContent";
import React from "react";
import ToggleDocSidebar from "@/components/templates/ToggleDocSidebar";
import { DocsProvider } from "@/utils/contexts/DocsProvider";
import DocsMainContainer from "@/components/templates/DocsMainContainer";

export const metadata = {
  title: "آموزش زبان سلام - برنامه نویسی زبان سلام",
  description:
    "این صفحه منابع آموزشی و مستندات مربوط به زبان برنامه‌نویسی سلام را ارائه می‌دهد تا به کاربران کمک کند مهارت‌های خود را در این زبان توسعه دهند.",
  author: "تیم برنامه نویسی زبان سلام",
};

const page = () => {
  return (
    <DocsProvider>
      <DocsMainContainer>
        <DocsSidebar />

        <DocsContent />

        <ToggleDocSidebar />
      </DocsMainContainer>
    </DocsProvider>
  );
};

export default page;
