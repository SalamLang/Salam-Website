
import React from 'react';

const TitleDescriptionBox = ({ title, description }) => {
    return (
        <div className="flex items-center justify-center flex-col gap-3">
            <h1 className="text-title text-base md:text-2xl font-normal text-center">{title}</h1>
            <p className="text-description text-center text-sm md:text-base leading-[45px]">{description}</p>
        </div>
    );
};

export default TitleDescriptionBox;

