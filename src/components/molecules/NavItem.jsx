"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useContext } from "react";
import { motion } from "framer-motion";

export default function NavItem({
  variants,
  href,
  className,
  classLink,
  isAnchor,
  children,
  ...attr
}) {
  const pathname = usePathname();
  const isActive = href === pathname;

  if (variants === "mobile")
    return (
      <>
        {isAnchor ? (
          <a
            href={href}
            className={`w-full mb-1 p-1 px-3 rounded-md text-lg transition-colors duration-200 ${
              isActive
                ? "bg-[#ff5c00]/60 shadow-2xl shadow-black/50 text-white font-AliBaba-Regular"
                : `hover:bg-black/10 dark:hover:bg-gray-600/50`
            } ${className || ""}`}
            {...attr}
          >
            <span className={`font-Estedad-Regular ${classLink || ""}`}>
              {children}
            </span>
          </a>
        ) : (
          <Link
            href={href}
            className={`w-full mb-1 p-1 px-3 rounded-md text-lg transition-colors duration-200 ${
              isActive
                ? "bg-[#ff5c00]/60 shadow-2xl shadow-black/50 text-white font-AliBaba-Regular"
                : `hover:bg-black/10 dark:hover:bg-gray-600/50`
            } ${className || ""}`}
            {...attr}
          >
            <span className={`font-Estedad-Regular ${classLink || ""}`}>
              {children}
            </span>
          </Link>
        )}
      </>
    );
  else if (variants === "second-header")
    return (
      <>
        {isAnchor ? (
          <motion.li
            className={`text-lg ${
              !isActive && "hover:!scale-110 transition-all"
            } ${className || ""}`}
            initial={{ scale: 1 }}
            animate={{ scale: isActive ? 1.2 : 1 }}
          >
            <a
              href={href}
              className={`font-Estedad-Light ${
                isActive
                  ? "!font-AliBaba-Regular font-extrabold text-bg-button-orange"
                  : "font-Estedad-Medium"
              } ${classLink || ""}`}
              {...attr}
            >
              {children}
            </a>
          </motion.li>
        ) : (
          <motion.li
            className={`text-lg ${
              !isActive && "hover:!scale-110 transition-all"
            } ${className || ""}`}
            initial={{ scale: 1 }}
            animate={{ scale: isActive ? 1.2 : 1 }}
            {...attr}
          >
            <Link
              href={href}
              className={`font-Estedad-Light ${
                isActive
                  ? "!font-AliBaba-Regular font-extrabold text-bg-button-orange"
                  : "font-Estedad-Medium"
              } ${classLink || ""}`}
            >
              {children}
            </Link>
          </motion.li>
        )}
      </>
    );
  else
    return (
      <>
        {isAnchor ? (
          <motion.li
            className={`text-base ${
              isActive
                ? "!scale-125 mx-5 !text-lg"
                : "hover:!scale-110 transition-all"
            } ${className || ""}`}
            initial={{ scale: 1 }}
            animate={{ scale: isActive ? 1.25 : 1 }}
          >
            <a
              href={href}
              className={`font-Estedad-Light ${
                isActive
                  ? "!font-AliBaba-Regular font-extrabold text-bg-button-orange"
                  : "font-Estedad-Medium"
              } ${classLink || ""}`}
              {...attr}
            >
              {children}
            </a>
          </motion.li>
        ) : (
          <motion.li
            className={`text-base ${
              isActive
                ? "!scale-125 mx-5 !text-lg"
                : "hover:!scale-110 transition-all"
            } ${className || ""}`}
            initial={{ scale: 1 }}
            animate={{ scale: isActive ? 1.25 : 1 }}
            {...attr}
          >
            <Link
              href={href}
              className={`font-Estedad-Light ${
                isActive
                  ? "!font-AliBaba-Regular font-extrabold text-bg-button-orange"
                  : "font-Estedad-Medium"
              } ${classLink || ""}`}
            >
              {children}
            </Link>
          </motion.li>
        )}
      </>
    );
}
