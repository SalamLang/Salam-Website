import SupporterContent from "@/components/templates/SupporterContent";
import React from "react";

export const metadata = {
  title: "حامی های زبان سلام - برنامه نویسی سلام",
  description:
    "حمایت از سایت زبان سلام از طریق پلتفرم‌های مختلف مانند Liberapay، IssueHunt، BuyMeACoffee، Ko-fi، OpenCollective و Patreon",
  author: "تیم برنامه نویسی زبان سلام",
};

export default function page() {
  return (
    <div className="w-full h-full flex-grow flex justify-center items-start md:items-center max-md:py-20">
      <SupporterContent />
    </div>
  );
}
