"use client";
import { PlaygroundContextValue } from "@/utils/contexts/Playground";
import { convertEnglishNumbersToPersian } from "@/utils/helper/handler";
import React, { useContext, useEffect, useRef, useState } from "react";

export default function BoxEditor() {
  const editableDivRef = useRef(null);
  const { fontName } = useContext(PlaygroundContextValue);
  const [contentLength, setContentLength] = useState(1);

  const handleInput = async () => {
    if (editableDivRef.current) {
      // Get all nested div elements
      const nestedDivs = editableDivRef.current.querySelectorAll("div");
      if (nestedDivs.length === 0 || contentLength === 0) {
        const newDiv = document.createElement("div");
        newDiv.id = "firstDiv";
        newDiv.className = fontName;
        newDiv.style.whiteSpace = "nowrap"; // Set white-space to nowrap
        newDiv.innerHTML = "<br>";

        editableDivRef.current.appendChild(newDiv);
      }

      setContentLength(nestedDivs?.length);
      nestedDivs.forEach((div) => {
        div.classList = "";
        div.style.whiteSpace = "nowrap"; // Set white-space to nowrap
        div.classList.add(fontName);
      });
    }
  };
  useEffect(() => {
    editableDivRef?.current?.focus();
  }, []);

  return (
    <div className="w-full h-full flex-grow self-stretch overflow-auto orange-scrollbar flex justify-center items-start max-md:bg-cream-light rounded-2xl">
      <div className="w-auto h-auto p-5 !pt-[30px] !pl-4 gap-5 text-base !font-Estedad-Medium flex flex-col justify-center items-center">
        {contentLength === 0 && <p className={fontName}>۱</p>}
        {Array.from({ length: contentLength }).map((_, index) => {
          return (
            <p key={index} className={fontName}>
              {convertEnglishNumbersToPersian(index + 1)}
            </p>
          );
        })}
      </div>
      <div
        ref={editableDivRef}
        className={`${fontName} w-full h-full p-5 leading-[44px] pr-0 outline-none ring-0 border-0 max-w-[95%]`}
        contentEditable={true}
        onInput={handleInput}
        autoFocus={true}
      ></div>
    </div>
  );
}
