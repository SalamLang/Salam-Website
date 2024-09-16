import React from "react";
import { Button } from "../common/Button";
import MoreThreeDots from "../../../public/svgs/more-three-dots.svg";

const MenuSetting = ({ page, setPage }) => {
  const ListMenuButton = [
    { id: 1, title: "ویرایش ظاهری", icon: "🎨" },
    { id: 2, title: "اطلاعات بیشتر", icon: <MoreThreeDots /> },
  ];
  return (
    <div className="w-full min-h-96 flex flex-col justify-center items-center">
      {ListMenuButton.map((item) => (
        <Button
          key={item.id}
          rounded="none"
          size="medium"
          className={`!w-full !text-black transition-colors !text-sm !font-Estedad-Medium !py-3 flex justify-center items-center gap-1 ${
            page === item.id
              ? "bg-cream-light"
              : "!bg-transparent dark:!text-white"
          }`}
          onClick={() => setPage(item.id)}
        >
          {item.title} {item.icon}
        </Button>
      ))}
    </div>
  );
};

export default MenuSetting;
