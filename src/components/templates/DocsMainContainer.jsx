import React from "react";

export default function DocsMainContainer({ children }) {
  return (
    <div
      className="w-full px-5 py-5 h-full flex gap-5 flex-grow"
    >
      {children}
    </div>
  );
}
