import DownloadItem from "@/components/molecules/DownloadItem";
import LoadingPage from "@/components/molecules/LoadingPage";
import { Suspense } from "react";
import React from "react";

export const metadata = {
  title: "دانلود زبان سلام - برنامه نویسی سلام",
  description:
    "این صفحه به شما امکان می‌دهد زبان برنامه‌نویسی سلام را دانلود کنید و از منابع و مستندات مرتبط با آن بهره‌مند شوید.",
  author: "تیم برنامه نویسی زبان سلام",
  robots: "noindex,nofollow",
};

function page() {
  return (
    <Suspense fallback={<LoadingPage />}>
      <div className="flex flex-col items-center justify-center overflow-hidden gap-5 my-auto pb-20">
        <DownloadItem />
      </div>
    </Suspense>
  );
}

export default page;
