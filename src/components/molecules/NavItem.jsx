"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function NavItem({
  variants,
  href,
  className,
  classLink,
  children,
}) {
  const pathname = usePathname();

  const isActive = href === pathname;

  if (variants === "mobile")
    return (
      <Link
        href={href}
        className={`w-full mb-1 p-1 px-3 border-b-2 rounded-md border-border-grey border-opacity-10 text-lg transition-colors duration-200 ${
          isActive
            ? "bg-[#ff5c00]/60 shadow-2xl shadow-black/50 text-white"
            : "hover:bg-black/10"
        } ${className || ""}`}
      >
        <span className={`font-Estedad-Regular ${classLink || ""}`}>
          {children}
        </span>
      </Link>
    );
  else
    return (
      <li className={`text-lg ${className || ""}`}>
        <Link
          href={href}
          className={`font-Estedad-Light ${
            isActive
              ? "!font-Estedad-ExtraBold text-bg-button-orange"
              : "font-Estedad-Light"
          } ${classLink || ""}`}
        >
          {children}
        </Link>
      </li>
    );
}
