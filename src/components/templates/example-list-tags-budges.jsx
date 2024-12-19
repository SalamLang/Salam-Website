import React from "react";
import { Button } from "../common/Button";

export default function ExampleListTagsBudges() {
  return (
    <div className="max-w-[600px] w-full h-full p-2 flex justify-center items-center flex-wrap gap-3">
      <Button
        rounded="full"
        size="small"
        className="!bg-blue-cutsom/[0.06] !py-1.5 !px-3 flex justify-center items-center flex-nowrap text-nowrap !text-blue-cutsom font-semibold"
      >
        لندینگ
      </Button>
      <Button
        rounded="full"
        size="small"
        className="!bg-orange-custom/[0.06] !py-1.5 !px-3 flex justify-center items-center flex-nowrap text-nowrap !text-orange-custom font-semibold"
      >
        وبسایت
      </Button>
      <Button
        rounded="full"
        size="small"
        className="!bg-purple-custom/[0.06] !py-1.5 !px-3 flex justify-center items-center flex-nowrap text-nowrap !text-purple-custom font-semibold"
      >
        اپلیکیشن
      </Button>
      <Button
        rounded="full"
        size="small"
        className="!bg-green-custom/[0.06] !py-1.5 !px-3 flex justify-center items-center flex-nowrap text-nowrap !text-green-custom font-semibold"
      >
        طراحی محصول
      </Button>
      <Button
        rounded="full"
        size="small"
        className="!bg-pink-custom/[0.06] !py-1.5 !px-3 flex justify-center items-center flex-nowrap text-nowrap !text-pink-custom font-semibold"
      >
        استیکی
      </Button>
    </div>
  );
}
