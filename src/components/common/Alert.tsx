import React, { HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";

const div = cva("w-full h-auto select-none", {
  variants: {
    intent: {
      orange: [
        "bg-bg-section",
        "text-white",
        "border-transparent",
        "font-Estedad-Regular",
        "transition-opacity",
      ],
    },
    size: {
      small: ["text-sm", "pt-1", "pb-1.5", "px-2"],
      medium: ["text-sm sm:text-base md:text-lg", "pt-1.5", "pb-2", "px-4"],
      large: [
        "max-sm:text-sm sm:text-base md:text-xl",
        "max-sm:pt-1 sm:pt-1.5 md:pt-2",
        "max-sm:pb-1.5 sm:pb-2 md:pb-3",
        "max-sm:px-3 sm:px-5 md:px-7",
      ],
    },
  },
  compoundVariants: [{ intent: "orange", size: "medium", class: "uppercase" }],
  defaultVariants: {
    intent: "orange",
    size: "medium",
  },
});

export interface AlertProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof div> {}

export const Alert: React.FC<AlertProps> = ({
  className,
  intent,
  size,
  ...props
}) => <div className={div({ intent, size, className })} {...props} />;
