"use client";
import React, { ReactNode } from "react";
import { Button, ButtonProps } from "./Button";

interface AnchorType extends ButtonProps {
  href: string;
  children: ReactNode;
}

export default function Anchor({ href, children, ...props }: AnchorType) {
  return (
    <Button
      onClick={() => {
        window.location.href = href;
      }}
      {...props}
    >
      {children}
    </Button>
  );
}
