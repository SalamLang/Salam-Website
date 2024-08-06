
import React from 'react';

const TitleDescriptionBox = ({ title, description }) => {
    return (
        <div className="flex items-center justify-center flex-col gap-3">
            <h1 className="text-title text-base md:text-2xl font-Estedad-Light text-center">{title}</h1>
            <p className="text-description text-center text-sm md:text-base font-Estedad-ExtraLight leading-[45px]">{description}</p>
        </div>
    );
};

export default TitleDescriptionBox;
