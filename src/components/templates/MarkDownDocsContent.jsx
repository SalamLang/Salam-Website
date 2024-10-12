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
          h2: {
            component: ({ children, ...props }) => {
              const id = children.toString();
              return (
                <h2 {...props} id={id}>
                  {children}
                </h2>
              );
            },
          },
          h3: {
            component: ({ children, ...props }) => {
              const id = children.toString();
              return (
                <h3 {...props} id={id}>
                  {children}
                </h3>
              );
            },
          },
          h4: {
            component: ({ children, ...props }) => {
              const id = children.toString();
              return (
                <h4 {...props} id={id}>
                  {children}
                </h4>
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
