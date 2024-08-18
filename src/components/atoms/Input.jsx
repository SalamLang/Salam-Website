import React from "react";

function Input() {
  return (
    <input
      className="text-black !text-base md:text-lg font-Estedad-Medium h-10 max-sm:w-full max-w-[150px] sm:max-w-[200px] md:max-w-[260px] placeholder:text-black bg-transparent border-none outline-none"
      type="text"
      placeholder="مثال: ۰۹۹۱۳۹۱۵۲۵۴"
      maxLength={11}
    />
  );
}

export default Input;
