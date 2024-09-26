import getReadmeContent from "@/utils/constants/getReadmeContent";
import TitleDescription from "../atoms/TitleDescription";
import React from "react";
import Markdown from "markdown-to-jsx";
import MarkDownDocsContent from "./MarkDownDocsContent";

async function DocsContent() {
  const markdownContent = await getReadmeContent();

  return (
    <div className="flex flex-col gap-16 items-center p-24 w-full">
      <div className="mark-down">
        <MarkDownDocsContent mark_down={markdownContent} />
      </div>
    </div>
  );
}

export default DocsContent;
