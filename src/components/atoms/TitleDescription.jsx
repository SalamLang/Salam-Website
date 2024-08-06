
import React from 'react';

const TitleDescription = ({ title, description }) => {
    return (
        <div className="flex items-center justify-center flex-col gap-6 z-50">
            <h1 className="text-2xl lg:text-3xl font-Estedad-Medium text-title text-center">{title}</h1>
            <p className="text-description text-center font-Estedad-Light text-gray-500 text-xs lg:text-sm">{description}</p>
        </div>
    );
};

export default TitleDescription;
