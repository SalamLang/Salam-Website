"use client";
import { PlaygroundContextValue } from "@/utils/contexts/Playground";
import { convertEnglishNumbersToPersian } from "@/utils/helper/handlers";
import React, { useContext, useEffect, useRef, useState } from "react";

export default function BoxEditor() {
  const editableDivRef = useRef(null);
  const { fontName: fontClass } = useContext(PlaygroundContextValue);
  const [contentLength, setContentLength] = useState(1);

  const fontName = `${fontClass} transition-colors dark:text-white`;

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
        fontName.split(" ").forEach((cls) => div.classList.add(cls)); // Add each class separately
      });
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Tab") {
      event.preventDefault();

      const selection = window.getSelection();
      const range = selection.getRangeAt(0);
      const tabNode = document.createTextNode("\u00a0\u00a0\u00a0\u00a0"); // Four non-breaking spaces for tab

      range.insertNode(tabNode);

      // Move the caret after the inserted tab
      range.setStartAfter(tabNode);
      range.setEndAfter(tabNode);
      selection.removeAllRanges();
      selection.addRange(range);
    }
  };

  useEffect(() => {
    editableDivRef?.current?.focus();
  }, []);

  return (
    <div className="w-full h-full flex-grow self-stretch overflow-auto orange-scrollbar flex justify-center items-start max-md:bg-cream-light max-md:dark:bg-gray-600/10 max-md:dark:backdrop-blur-lg rounded-2xl">
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
        onKeyDown={handleKeyDown}
        autoFocus={true}
      ></div>
    </div>
  );
}
