import React from "react";

export const DocsContainer = ({ children, className, ...attr }) => {
  return (
    <div
      className={`text-white !min-h-max items-center transition-all duration-100 p-4 bg-gray-100/20 dark:bg-gray-700/20 backdrop-blur-xl rounded-3xl shadow-2xl shadow-gray-400/50 dark:shadow-gray-700/20 ${
        className || ""
      }`}
      {...attr}
      id="main-doc"
    >
      {children}
    </div>
  );
};
