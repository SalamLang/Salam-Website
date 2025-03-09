"use client";

import ReactMarkdown from "react-markdown";
import React from "react";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

const createHeading =
  (Tag) =>
  ({ children, node, ...props }) => {
    const id = children.toString();
    return (
      <Tag {...props} id={id}>
        {children}
      </Tag>
    );
  };
export default function MarkDownDocsContent({ mark_down }) {
  return (
    <div
      className="markdown-body"
      style={{ direction: "rtl", textAlign: "right" }}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          h1: createHeading("h1"),
          h2: createHeading("h2"),
          h3: createHeading("h3"),
          h4: createHeading("h4"),
        }}
      >
        {mark_down}
      </ReactMarkdown>
    </div>
  );
}
