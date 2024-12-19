import Image from "next/image";
import React from "react";
import ExmapleIntroImage from "@/components/templates/exmaple-intro-image";
import ExampleTextFormSection from "@/components/templates/example-text-form-section";
import ExampleListTagsBudges from "@/components/templates/example-list-tags-budges";

export const metadata = {
  title: "زبان برنامه نویسی سلام - برنامه نویسی برای همه",
  description:
    "این صفحه به معرفی زبان برنامه‌نویسی سلام می‌پردازد که هدف آن ساده‌سازی برنامه‌نویسی برای همه افراد است.",
  author: "تیم برنامه نویسی زبان سلام",
};

export default function page() {
  return (
    <main className="flex min-h-screen flex-col max-md:gap-y-2.5 gap-y-5 items-center justify-start px-4">
      <ExmapleIntroImage />
      <div className="w-full max-w-[700px] h-full flex flex-col justify-center items-center p-1 gap-7">
        <ExampleTextFormSection />
        <ExampleListTagsBudges />
      </div>
      <div className="max-w-[1200px] w-full p-4 flex flex-wrap gap-5 justify-center items-center">
          <div className="max-w-[300px] w-full h-full min-h-[300px] flex flex-col justify-center items-center gap-4 overflow-hidden">
            <Image src="/images/ bg-post.png" width="300" height="300" />
          </div>
          <div className="w-full py-1"></div>
      </div>
    </main>
  );
}
