"use client";

import React, { useContext } from "react";
import { PlaygroundContextValue } from "@/utils/contexts/Playground";
import SelectThemeCard from "./SelectThemeCard";

export default function SelectTheme() {
  const { theme, setTheme } = useContext(PlaygroundContextValue);

  const themes = [
    { id: 1, title: "حالت روز", theme: "light" },
    { id: 2, title: "حالت خودکار", spanText: "(سیستمی)", theme: "system" },
    { id: 3, title: "حالت شب", theme: "dark" },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-6">
      <div className="w-full h-auto flex flex-col justify-start items-start gap-1">
        <h1 className="text-lg font-Estedad-Medium">
          مود های روشن و تاریک و ...
        </h1>
        <p className="text-sm font-Estedad-Regular opacity-65">
          حالت مورد نظرتون را انتخاب نمایید
        </p>
      </div>
      <div className="w-full h-full flex justify-start gap-6 items-center">
        {themes?.map((item) => (
          <SelectThemeCard
            key={item.id}
            titleSelectTheme={item.title}
            spanText={item.spanText ? item.spanText : null}
            isActive={item.theme === theme}
            onClick={() => setTheme(item.theme)}
          />
        ))}
      </div>
    </div>
  );
}