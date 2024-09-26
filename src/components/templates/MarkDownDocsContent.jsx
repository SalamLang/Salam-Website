"use client";

import Markdown from "markdown-to-jsx";
import React from "react";

export default function MarkDownDocsContent({ mark_down }) {
  return <Markdown>{mark_down}</Markdown>;
}
