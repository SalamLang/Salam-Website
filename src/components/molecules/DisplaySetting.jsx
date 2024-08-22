"use client";
import React, { useContext } from "react";
import { motion } from "framer-motion";
import BoxSelectFont from "./BoxSelectFont";
import { PlaygroundContextValue } from "@/utils/contexts/Playground";

export default function DisplaySetting() {
  const { fontName, setFontName } = useContext(PlaygroundContextValue);

  const fonts = [
    { id: 1, name: "استعداد", classFont: "font-Estedad-Medium" },
    { id: 2, name: "علی بابا", classFont: "font-AliBaba-Regular" },
    { id: 3, name: "گرافیک", classFont: "font-Graphik-Regular" },
    { id: 4, name: "ایران سنس", classFont: "font-IranSans-Regular" },
    { id: 5, name: "پیدا", classFont: "font-Peyda-Regular" },
    { id: 6, name: "یکان بخ", classFont: "font-YekanBakh-Regular" },
  ];

  const handleSelectFont = (font) => {
    switch (font) {
      case "font-Estedad-Medium":
        setFontName("font-Estedad-Medium");
        break;
      case "font-AliBaba-Regular":
        setFontName("font-AliBaba-Regular");
        break;
      case "font-Graphik-Regular":
        setFontName("font-Graphik-Regular");
        break;
      case "font-IranSans-Regular":
        setFontName("font-IranSans-Regular");
        break;
      case "font-Peyda-Regular":
        setFontName("font-Peyda-Regular");
        break;
      case "font-YekanBakh-Regular":
        setFontName("font-YekanBakh-Regular");
        break;
      default:
        setFontName("font-Estedad-Medium");
        break;
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full h-full px-6 py-7 flex flex-col justify-center items-center"
    >
      <div className="w-full h-full flex flex-col justify-center items-center gap-6">
        <div className="w-full h-auto flex flex-col justify-start items-start gap-1">
          <h1 className="text-lg font-Estedad-Medium">
            فونت های در نظر گرفته شده
          </h1>
          <p className="text-sm font-Estedad-Regular opacity-65">
            حالت مورد نظرتون را انتخاب نمایید
          </p>
        </div>
        <div className="w-full h-full">
          <div className="w-full h-auto flex flex-wrap justify-start gap-6">
            {fonts.map((font) => {
              return (
                <BoxSelectFont
                  key={font.id}
                  nameFont={font.name}
                  isActive={fontName === font.classFont}
                  onClickSelectedFont={() => handleSelectFont(font.classFont)}
                  font={font.classFont}
                />
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
