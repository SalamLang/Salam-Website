import React from "react";

function ButtonCodeBox({ icon }) {
  return (
    <button className="w-auto p-2 md:p-4 bg-bg-button-orange rounded-xl flex items-center justify-center cursor-pointer">
      {icon}
    </button>
  );
}

export default ButtonCodeBox;
