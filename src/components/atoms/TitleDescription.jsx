import React from "react";

const TitleDescription = ({
  title,
  description,
  headerClass,
  descClass,
  className,
}) => {
  return (
    <div
      className={`flex items-center justify-center flex-col gap-6 z-50 ${
        className || ""
      }`}
    >
      <h1
        className={`text-xl md:text-2xl lg:text-3xl font-Estedad-SemiBold text-title dark:!text-white transition-colors text-center ${
          headerClass || ""
        }`}
      >
        {title}
      </h1>
      <p
        className={`text-description text-center font-Estedad-Medium text-gray-500 dark:!text-gray-300/70 transition-colors text-xs ${
          descClass || ""
        }`}
      >
        {description}
      </p>
    </div>
  );
};

export default TitleDescription;
