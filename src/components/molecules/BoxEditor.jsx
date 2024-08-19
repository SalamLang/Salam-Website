"use client";
import { PlaygroundContextValue } from "@/utils/contexts/Playground";
import React, { useContext, useEffect, useRef, useState } from "react";

const convertEnglishNumbersToPersian = (input) => {
  const englishToPersianMap = {
    0: "۰",
    1: "۱",
    2: "۲",
    3: "۳",
    4: "۴",
    5: "۵",
    6: "۶",
    7: "۷",
    8: "۸",
    9: "۹",
  };

  return String(input)?.replace(
    /[0-9]/g,
    (digit) => englishToPersianMap[digit]
  );
};

export default function BoxEditor() {
  const editableDivRef = useRef(null);
  const { fontName } = useContext(PlaygroundContextValue);
  const [contentLength, setContentLength] = useState(1);

  const handleInput = () => {
    if (editableDivRef.current) {
      // Get all nested div elements
      const nestedDivs = editableDivRef.current.querySelectorAll("div");
      setContentLength(nestedDivs?.length);
      nestedDivs.forEach((div) => {
        div.classList = "";
        div.classList.add(fontName);
      });
    }
  };
  useEffect(() => {
    editableDivRef?.current?.focus();
  }, []);

  return (
    <div className="w-full max-h-[600px] h-[600px] overflow-auto flex justify-center items-start bg-cream-light rounded-2xl">
      <div className="w-auto h-auto p-5 !pt-[30px] !pl-4 gap-5 text-base !font-Estedad-Medium flex flex-col justify-center items-center">
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
        className={`${fontName} w-full h-full p-5 leading-[44px] pr-0 outline-none ring-0 border-0`}
        contentEditable={true}
        onInput={handleInput}
        autoFocus={true}
      ></div>
    </div>
  );
}
