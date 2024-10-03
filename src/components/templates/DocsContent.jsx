import getReadmeContent from "@/utils/constants/getReadmeContent";
import React from "react";
import MarkDownDocsContent from "./MarkDownDocsContent";
import { DocsContainer } from "./DocsContainer";

async function DocsContent() {
  const markdownContent = await getReadmeContent();

  return (
    <DocsContainer className={"!w-[10rem]"}>
      <div className="mark-down">
        <MarkDownDocsContent mark_down={markdownContent} />
      </div>
    </DocsContainer>
  );
}

export default DocsContent;
