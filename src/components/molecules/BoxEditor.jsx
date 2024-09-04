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
      const content = editableDivRef.current.innerText.trim();

      // Get all nested div elements
      const nestedDivs = editableDivRef.current.querySelectorAll("div");

      if (nestedDivs.length === 0 && content.length > 0) {
        const newDiv = document.createElement("div");
        newDiv.className = fontName;
        newDiv.style.whiteSpace = "nowrap"; // Set white-space to nowrap
        newDiv.textContent = content;

        editableDivRef.current.innerHTML = "";
        editableDivRef.current.appendChild(newDiv);
      } else {
        setContentLength(nestedDivs.length);
        nestedDivs.forEach((div) => {
          div.classList = "";
          div.style.whiteSpace = "nowrap"; // Set white-space to nowrap
          div.classList.add(fontName);
        });
      }
    }
  };

  useEffect(() => {
    if (editableDivRef.current) {
      editableDivRef.current.focus();
      if (editableDivRef.current.innerHTML.trim() === "") {
        const initialDiv = document.createElement("div");
        initialDiv.className = fontName;
        initialDiv.style.whiteSpace = "nowrap"; // Set white-space to nowrap
        initialDiv.innerHTML = "<br>";
        editableDivRef.current.appendChild(initialDiv);
      }
    }
  }, [fontName]);

  return (
    <div className="w-full max-h-[600px] h-[600px] overflow-auto orange-scrollbar flex justify-center items-start max-md:bg-cream-light rounded-2xl">
      <div className="w-auto h-auto p-5 !pt-[30px] !pl-4 gap-5 text-base !font-Estedad-Medium flex flex-col justify-center items-center">
        {contentLength === 0 && (
          <p className={`${fontName} px-1`} style={{ whiteSpace: "nowrap" }}>
            ۱
          </p>
        )}
        {Array.from({ length: contentLength }).map((_, index) => {
          return (
            <p
              key={index}
              className={fontName}
              style={{ whiteSpace: "nowrap" }}
            >
              {convertEnglishNumbersToPersian(index + 1)}
            </p>
          );
        })}
      </div>
      <div
        ref={editableDivRef}
        className={`${fontName} w-full h-full p-5 leading-[44px] pr-0 outline-none ring-0 border-0 max-w-[90%]`}
        contentEditable={true}
        onInput={handleInput}
        autoFocus={true}
        style={{ whiteSpace: "nowrap" }} // Set white-space to nowrap
      ></div>
    </div>
  );
}
