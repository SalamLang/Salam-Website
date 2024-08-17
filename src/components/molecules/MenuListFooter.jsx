import { getRoute } from "@/utils/constants/getRoutes";
import Link from "next/link";
import React from "react";

function MenuListFooter() {
  return (
    <ul className="hidden lg:flex items-center justify-center gap-8">
      <li>
        <Link
          href={getRoute("education")}
          className="text-title text-xl font-Estedad-Regular"
        >
          یادم بده
        </Link>
      </li>
      <li>
        <Link
          href={getRoute("home")}
          className="text-title text-xl font-Estedad-Regular"
        >
          خانه
        </Link>
      </li>
      <li>
        <Link
          href={getRoute("donwload")}
          className="text-title text-xl font-Estedad-Regular"
        >
          دانلود
        </Link>
      </li>
      <li>
        <Link href="#" className="text-title text-xl font-Estedad-Regular">
          نظرات
        </Link>
      </li>
    </ul>
  );
}

export default MenuListFooter;
