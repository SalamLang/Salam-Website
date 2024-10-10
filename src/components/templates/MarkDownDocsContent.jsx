"use client";

import Markdown from "markdown-to-jsx";
import React from "react";

export default function MarkDownDocsContent({ mark_down }) {
  return (
    <Markdown
      options={{
        overrides: {
          h1: {
            component: ({ children, ...props }) => {
              const id = children.toString();
              return (
                <h1 {...props} id={id}>
                  {children}
                </h1>
              );
            },
          },
        },
      }}
    >
      {mark_down}
    </Markdown>
  );
}
