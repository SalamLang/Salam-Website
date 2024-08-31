import React, { HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";

const button = cva("hover:scale-105 transition-all disabled:opacity-70", {
  variants: {
    intent: {
      orange: [
        "bg-bg-section",
        "text-white",
        "border-transparent",
        "font-Estedad-Regular",
      ],
      primary: [
        "bg-primary",
        "text-white",
        "border-transparent",
        "font-Estedad-Regular",
      ],
      crimson: [
        "bg-crimson",
        "text-white",
        "border-transparent",
        "font-Estedad-Regular",
      ],
    },
    size: {
      small: ["text-sm", "pt-1", "pb-1.5", "px-2"],
      medium: ["text-base md:text-lg", "pt-1.5", "pb-2", "px-4"],
      large: [
        "max-sm:text-sm sm:text-base md:text-xl",
        "max-sm:pt-1 sm:pt-1.5 md:pt-2",
        "max-sm:pb-1.5 sm:pb-2 md:pb-3",
        "max-sm:px-3 sm:px-5 md:px-7",
      ],
    },
    rounded: {
      small: ["rounded-sm"],
      medium: ["rounded-md"],
      large: ["rounded-lg"],
      full: ["rounded-full"],
      none: ["rounded-none"],
    },
  },
  compoundVariants: [
    { intent: "orange", size: "medium", rounded: "medium", class: "uppercase" },
  ],
  defaultVariants: {
    intent: "orange",
    size: "medium",
    rounded: "medium",
  },
});

export interface ButtonProps
  extends HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

export const Button: React.FC<ButtonProps> = ({
  className,
  intent,
  size,
  rounded,
  ...props
}) => (
  <button className={button({ intent, size, rounded, className })} {...props} />
);
