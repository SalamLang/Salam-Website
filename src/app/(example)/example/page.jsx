import Image from "next/image";
import React from "react";
import ExmapleIntroImage from "@/components/templates/exmaple-intro-image";
import ExampleTextFormSection from "@/components/templates/example-text-form-section";
import ExampleListTagsBudges from "@/components/templates/example-list-tags-budges";
import ExamplePostItem from "@/components/templates/example-post-item";
import { Button } from "@/components/common/Button";

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
      <div className="max-w-[1200px] w-full p-4 flex flex-wrap gap-8 justify-center items-center">
        <ExamplePostItem />
        <ExamplePostItem />
        <ExamplePostItem />
        <ExamplePostItem />
        <ExamplePostItem />
        <ExamplePostItem />
      </div>
      <div className="w-full h-full flex justify-center items-center mb-10">
        <Button
          rounded="full"
          size="medium"
          className="!bg-blue-cutsom/[0.06] text-nowrap !text-blue-cutsom font-semibold"
        >
          نمایش بیشتر
        </Button>
      </div>
    </main>
  );
}
