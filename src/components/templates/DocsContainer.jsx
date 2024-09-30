
import React from "react";

export const DocsContainer = ({ children , className }) => {
  return (
    <div className={`text-white items-center w-full p-4 bg-gray-100/20 flex-grow dark:bg-gray-700/20 backdrop-blur-xl rounded-3xl shadow-2xl shadow-gray-400/50 dark:shadow-gray-700/20 ${className || ""}`}
    >
      {children}
    </div>
  );
};
