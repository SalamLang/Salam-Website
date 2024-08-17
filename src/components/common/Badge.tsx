import { cva, VariantProps } from "class-variance-authority";
import React, { FC, HTMLAttributes } from "react";

const span = cva("span", {
  variants: {
    intent: {
      primary: ["bg-light-primary", "text-primary"],
      success: ["bg-light-success", "text-success"],
      warning: ["bg-light-warning", "text-warning"],
      danger: ["bg-light-danger", "text-danger"],
    },
    size: {
      medium: [
        "py-1 sm:py-2",
        "px-2 sm:px-4",
        "font-Estedad-Medium",
        "text-[10px] sm:text-xs",
      ],
    },
    rounded: {
      full: ["rounded-full"],
    },
  },
  compoundVariants: [{ intent: "primary", size: "medium", rounded: "full" }],
  defaultVariants: { intent: "primary", size: "medium", rounded: "full" },
});

interface SpanProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof span> {}

export const Badge: FC<SpanProps> = ({
  className,
  intent,
  size,
  rounded,
  ...props
}) => (
  <span className={span({ intent, size, rounded, className })} {...props} />
);
