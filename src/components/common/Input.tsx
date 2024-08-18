import React, { HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";

const input = cva("input", {
  variants: {
    intent: {
      trasparent: ["bg-transparent", "!outline-none", "border-none", "ring-0"],
    },
  },
});

export interface InputProps
  extends HTMLAttributes<HTMLInputElement>,
    VariantProps<typeof input> {}

export const Input: React.FC<InputProps> = ({ className, ...props }) => (
  <input className={input({ className })} {...props} />
);
