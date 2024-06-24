
import React from 'react';

const TitleDescription = ({ title, description }) => {
    return (
        <div className="flex items-center justify-center flex-col gap-3">
            <h1 className="text-2xl font-bold text-title">{title}</h1>
            <p className="text-description text-sm">{description}</p>
        </div>
    );
};

export default TitleDescription;

