import { useEffect } from "react";
import React from "react";


const EyeSvg = () => {
  useEffect(() => {
    const leftLens = document.getElementById("left-lens");
    const rightLens = document.getElementById("right-lens");

    const handleMouseMove = (event) => {
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      // Calculate new positions for the lenses
      const leftLensX = Math.min(
        Math.max((mouseX / window.innerWidth) * 9 - 1.5)
      );
      const leftLensY = Math.min(Math.max((mouseY / window.innerHeight) * 11));

      const rightLensX = Math.min(
        Math.max((mouseX / window.innerWidth) * 10 + 10)
      );
      const rightLensY = Math.min(
        Math.max((mouseY / window.innerHeight) * 9.5)
      );

      // console.log(rightLensX);
      // console.log(rightLensY);

      // Update lens positions
      leftLens.setAttribute("x", leftLensX);
      leftLens.setAttribute("y", leftLensY);

      rightLens.setAttribute("x", rightLensX);
      rightLens.setAttribute("y", rightLensY);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <svg
      width="28"
      height="20"
      viewBox="0 0 28 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="12.2988"
        width="14.9633"
        height="19.9511"
        rx="7.48165"
        fill="white"
        className="z-10"
      />
      <rect
        id="right-lens"
        className="-z-50"
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

      <rect
        id="left-lens"
        x="2"
        y="6"
        width="8"
        height="8"
        rx="4"
        fill="#030303"
      />
    </svg>
  );
};

export default EyeSvg;
