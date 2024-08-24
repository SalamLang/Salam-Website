import React from "react";

const TitleDescription = ({ title, description }) => {
  return (
    <div className="flex items-center justify-center flex-col gap-6 z-50">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-Estedad-SemiBold text-title text-center">
        {title}
      </h1>
      <p className="text-description text-center font-Estedad-Medium text-gray-500 text-xs">
        {description}
      </p>
    </div>
  );
};

export default TitleDescription;
