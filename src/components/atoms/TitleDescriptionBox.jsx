import React from "react";

const TitleDescriptionBox = ({
  title,
  description,
  className,
  headerClass,
  descClass,
}) => {
  return (
    <div
      className={`flex items-center justify-center flex-col gap-3 ${
        className || ""
      }`}
    >
      <h1
        className={`text-title text-base md:text-2xl font-Estedad-Light text-center ${
          headerClass || ""
        }`}
      >
        {title}
      </h1>
      <p
        className={`text-description text-center text-sm md:text-base font-Estedad-ExtraLight leading-[45px] ${descClass}`}
      >
        {description}
      </p>
    </div>
  );
};

export default TitleDescriptionBox;
