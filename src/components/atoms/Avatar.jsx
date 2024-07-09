import React from 'react';
import Image from 'next/image';

const Avatar = ({ src, alt, width, height }) => {
    return (
        <div className="w-16 h-16 md:w-24 md:h-24 rounded-full overflow-hidden">
            <Image src={src} alt={alt} width={width} height={height} className="object-cover" />
        </div>
    );
};

export default Avatar;

