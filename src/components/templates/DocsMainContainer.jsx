import React from "react";

export default function DocsMainContainer({ children }) {
  return (
    <div
      className="px-5 py-5 h-full flex"
    >
      {children}
    </div>
  );
}
