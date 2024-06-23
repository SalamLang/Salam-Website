
import React from 'react';

const TitleDescription = ({ title, description }) => {
    return (
        <div className="flex items-center justify-center flex-col gap-2">
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="text-lg">{description}</p>
        </div>
    );
};

export default TitleDescription;

