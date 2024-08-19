import React, { useState, useEffect } from "react";

export default function EysePositionWithMouse() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <svg
      width="28"
      height="20"
      viewBox="0 0 28 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: "absolute",
        left: mousePosition.x,
        top: mousePosition.y,
      }}
    >
      <rect
        x="12.2988"
        width="14.9633"
        height="19.9511"
        rx="7.48165"
        fill="white"
      />
      <rect
        x="15.8633"
        y="4.98779"
        width="9.97554"
        height="9.97554"
        rx="4.98777"
        fill="#030303"
      />
      <rect
        y="0.878418"
        width="12.2986"
        height="16.691"
        rx="6.14931"
        fill="white"
      />
      <rect x="2" y="6" width="8" height="8" rx="4" fill="#030303" />
    </svg>
  );
}